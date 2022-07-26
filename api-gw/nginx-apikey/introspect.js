function resolveApiKey(r) {
  var apiKey = r.headersIn['X-API-KEY'];
  if (apiKey === null || apiKey === undefined || apiKey === '') {
    var uri = r.variables.request_uri.split('?');
    if (uri.length > 1) {
      var segs = uri[1].split('&');
      for (var i=0; i < segs.length; i++) {
        var keypair = segs[i].split('=');
        if (keypair[0] === 'apiKey') {
          apiKey = keypair[1];
          break;
        }
      }
    }
  }
  return apiKey;
}

function introspectApiKey(r) {
  var apiKey = resolveApiKey(r);

  if (apiKey === null || apiKey === undefined || apiKey === '') {
    r.return(401);
    return;
  }

  r.subrequest("/_exchange_key_to_token", "apiKeyCtx=" + apiKey,
    function (reply) {
      if (reply.status === 200) {
        var response = JSON.parse(reply.responseBody);
        var token = response.token;
        if (token !== null && token !== undefined && token !== '') {
          // Token is valid, return success code
          r.headersOut['Token-tokenContext'] = 'Bearer ' + token;
          r.status = 204;
          r.sendHeader();
          r.finish();
        } else {
          r.return(401); // Token is invalid
        }
      } else {
        r.return(401); // Unexpected response
      }
    }
  );
}

export default introspectApiKey;
