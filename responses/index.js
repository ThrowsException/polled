const AWS = require("aws-sdk");
const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require("pg");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const client = new Client({
  user: "postgres",
  database: "postgres"
});

app.get("/response", async (req, res) => {
  await client.connect();

  const result = await client.query("SELECT * FROM responses");

  await client.end();
  res.send(result.rows);
});

app.post("/response", async (req, res) => {
  await client.connect();

  let data = req.body.data;
  if (req.headers["content-type"] == "application/x-www-form-urlencoded") {
    data = req.body;
  }
  const text = "INSERT INTO responses(data) VALUES($1) RETURNING *";
  const values = [data];

  try {
    const result = await client.query(text, values);
    await client.end();
    res.send(result.rows);
  } catch (err) {
    console.log(err.stack);
  }
});

module.exports.handler = serverless(app);
