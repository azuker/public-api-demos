const app = require('./app');

const port = 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    port,
    app.get('env'),
  );
  console.log('  Press CTRL-C to stop\n');
});
