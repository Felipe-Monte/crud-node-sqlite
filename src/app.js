const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello, world!");
});

app.post("/person", (request, response) => {
  console.log(request.body);
  response.json({
    "statusCode": 200
  });
});

app.listen(3000, () => {
  console.log(`Server is running`); 
});
