var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000

const publicPath = express.static(path.join(__dirname, './public'))

app.use('/public', publicPath)

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/public', function(request, response) {
  response.sendFile(__dirname + '/public')
});

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html')
});

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});