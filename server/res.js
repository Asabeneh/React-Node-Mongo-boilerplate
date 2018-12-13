const http = require('http');
const fs = require('fs');
const PORT = 5000;
// GET, POST, PUT, DELETE

console.log('what is the dir here ? ', __dirname);

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
  } else if (req.url === '/about') {
    fs.readFile(__dirname + '/public/about.html', function(err, data) {
      if (err) {
        // res.writeHead(404, {'Content-Type': 'text/html'});
        res.status = 404;
        res.write('<h1>Not found</h1>');
        res.end();
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('contact page');
    res.write('contact page');
    res.write('contact page');
    res.write('contact page');
    res.end();
  } else if (req.url === '/students') {
    const student = {
      name: 'some one',
    };
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(student));
    res.end();
  } else if (req.url === '/students/add' && req.method === 'POST') {
    const student = {
      name: 'some one',
    };
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(student));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Serveer is running at http:localhost:${PORT}`);
});

//// Serve static files from the React app
//app.use (express.static (path.join (__dirname, 'client/build')));
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

