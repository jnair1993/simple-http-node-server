const fs = require('fs');
const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  const message = "Request being processed...";
  response.end(message, () => {
    console.log(message);
    fs.writeFile("./hello-world.txt", "Hello to this great world", err => {
      if (err)
        throw err;

      console.log('Success. Finished writing file!');
    });
  });
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error: ${err}`);
  }

  console.log(`server is listening on ${port}`);
});
