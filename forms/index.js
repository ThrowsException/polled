const AWS = require("aws-sdk");
const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/form/:customer", async (req, res) => {
  const s3 = new AWS.S3({ endpoint: "http://localhost:4572/" });
  const params = {
    Bucket: "polled",
    Prefix: `${req.params.customer}`
  };
  const result = await s3.listObjectsV2(params).promise();
  const forms = result.Contents.map(x => {
    return {
      name: x.Key.split("/")[1].split(".")[0],
      lastModified: x.LastModified
    };
  });
  res.send(forms);
});

app.get("/form/:customer/:name", async (req, res) => {
  const s3 = new AWS.S3({ endpoint: "http://localhost:4572/" });
  const { customer, name } = req.params;
  const params = {
    Bucket: "polled",
    Key: `${customer}/${name}`,
    ResponseContentEncoding: "utf8",
    ResponseContentType: "text/html"
  };

  const result = await s3.getObject(params).promise();
  const form = Buffer.from(result.Body, "base64");
  const doc = `
  <!DOCTYPE html>
  <html lang="en">

  <body>
  ${form}
  </body>
  </html>
  `;
  res.set("Content-Type", "text/html");
  res.send(doc);
});

app.post("/form", async (req, res) => {
  const s3 = new AWS.S3({ endpoint: "http://localhost:4572/" });
  const { form, name, customer } = req.body;

  const params = {
    Body: Buffer.from(form, "base64"),
    Bucket: `polled`,
    Key: `${customer}/${name}.html`,
    ContentType: "text/html"
  };

  try {
    const doc = await s3.putObject(params).promise();
    res.send(doc);
  } catch (e) {
    console.log(e);
  }
});

module.exports.handler = serverless(app);
