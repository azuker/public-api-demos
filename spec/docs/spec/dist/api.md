<!-- Generator: Widdershins v4.0.1 -->

<h1 id="swagger-petstore">Swagger Petstore v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Multi-file boilerplate for OpenAPI Specification.

Base URLs:

* <a href="http://petstore.swagger.io/v1">http://petstore.swagger.io/v1</a>

Email: <a href="mailto:support@example.com">API Support</a> Web: <a href="http://www.example.com/support">API Support</a> 
 License: MIT

<h1 id="swagger-petstore-pets">pets</h1>

## listPets

<a id="opIdlistPets"></a>

> Code samples

```shell
curl --request GET \
  --url http://petstore.swagger.io/v1/pets \
  --header 'Accept: application/json'
```

```javascript
fetch("http://petstore.swagger.io/v1/pets", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

```python
import http.client

conn = http.client.HTTPConnection("petstore.swagger.io")

headers = { 'Accept': "application/json" }

conn.request("GET", "/v1/pets", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```go
package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "http://petstore.swagger.io/v1/pets"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Accept", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```csharp
var client = new HttpClient();
var request = new HttpRequestMessage
{
    Method = HttpMethod.Get,
    RequestUri = new Uri("http://petstore.swagger.io/v1/pets"),
    Headers =
    {
        { "Accept", "application/json" },
    },
};
using (var response = await client.SendAsync(request))
{
    response.EnsureSuccessStatusCode();
    var body = await response.Content.ReadAsStringAsync();
    Console.WriteLine(body);
}
```

```java
HttpResponse<String> response = Unirest.get("http://petstore.swagger.io/v1/pets")
  .header("Accept", "application/json")
  .asString();
```

`GET /pets`

*List*

List all pets

<h3 id="listpets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "tag": "string"
}
```

<h3 id="listpets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of pets|[Pet](#schemapet)|
|default|Default|unexpected error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-next|string||A link to the next page of responses|

<aside class="success">
This operation does not require authentication
</aside>

## createPets

<a id="opIdcreatePets"></a>

> Code samples

```shell
curl --request POST \
  --url http://petstore.swagger.io/v1/pets \
  --header 'Accept: application/json'
```

```javascript
fetch("http://petstore.swagger.io/v1/pets", {
  "method": "POST",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

```python
import http.client

conn = http.client.HTTPConnection("petstore.swagger.io")

headers = { 'Accept': "application/json" }

conn.request("POST", "/v1/pets", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```go
package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "http://petstore.swagger.io/v1/pets"

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Accept", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```csharp
var client = new HttpClient();
var request = new HttpRequestMessage
{
    Method = HttpMethod.Post,
    RequestUri = new Uri("http://petstore.swagger.io/v1/pets"),
    Headers =
    {
        { "Accept", "application/json" },
    },
};
using (var response = await client.SendAsync(request))
{
    response.EnsureSuccessStatusCode();
    var body = await response.Content.ReadAsStringAsync();
    Console.WriteLine(body);
}
```

```java
HttpResponse<String> response = Unirest.post("http://petstore.swagger.io/v1/pets")
  .header("Accept", "application/json")
  .asString();
```

`POST /pets`

*Create*

Create a pet

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="createpets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Null response|None|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## showPetById

<a id="opIdshowPetById"></a>

> Code samples

```shell
curl --request GET \
  --url http://petstore.swagger.io/v1/pets/string \
  --header 'Accept: application/json'
```

```javascript
fetch("http://petstore.swagger.io/v1/pets/string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

```python
import http.client

conn = http.client.HTTPConnection("petstore.swagger.io")

headers = { 'Accept': "application/json" }

conn.request("GET", "/v1/pets/string", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```go
package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "http://petstore.swagger.io/v1/pets/string"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("Accept", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
```

```csharp
var client = new HttpClient();
var request = new HttpRequestMessage
{
    Method = HttpMethod.Get,
    RequestUri = new Uri("http://petstore.swagger.io/v1/pets/string"),
    Headers =
    {
        { "Accept", "application/json" },
    },
};
using (var response = await client.SendAsync(request))
{
    response.EnsureSuccessStatusCode();
    var body = await response.Content.ReadAsStringAsync();
    Console.WriteLine(body);
}
```

```java
HttpResponse<String> response = Unirest.get("http://petstore.swagger.io/v1/pets/string")
  .header("Accept", "application/json")
  .asString();
```

`GET /pets/{petId}`

*Detail*

Info for a specific pet

<h3 id="showpetbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|petId|path|string|true|The id of the pet to retrieve|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "tag": "string"
}
```

<h3 id="showpetbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Expected response to a valid request|[Pet](#schemapet)|
|default|Default|unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Pet">Pet</h2>
<!-- backwards compatibility -->
<a id="schemapet"></a>
<a id="schema_Pet"></a>
<a id="tocSpet"></a>
<a id="tocspet"></a>

```json
{
  "id": 0,
  "name": "string",
  "tag": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|name|string|true|none|none|
|tag|string|false|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|

