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
    return response.status(400).json({ error: "Customer already exists!" });
  }

  customers.push({
    id:uuidv4(),
    cpf,
    name,
    statement: [],
  });
  return response.status(201).send();
});

app.get("/statement", (request, response) => {
  const { cpf } = request.headers;

  const customer = customers.find(customer => customer.cpf === cpf)
  
  if (!customer) {
    return response.status(400).json({ error: "Customer not found" });
  }

  return response.json(customer.statement)
});