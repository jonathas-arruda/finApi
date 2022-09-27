const { response } = require("express");
const express = require("express");
const { customQueryHandlerNames } = require("puppeteer");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

app.listen(3000);

const customers = [];

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;
  const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf );

  if (customerAlreadyExists) {
    return response.status(400).json({ error: "Customer Already Exists!" });
  }

  customers.push({
    cpf,
    name,
    id:uuidv4(),
    statement: [],
  });
  console.log(customers)
  return response.status(201).send();
});
