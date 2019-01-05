# Polled.io backend

A simple bring-your-own-backend form generation tool. Outputs standard HTML that can be embedded on websites.

Form API adds html documents to a customer bucket in S3 that can be served and embedded

## Getting started

serverless framework
docker
docker-compose

# Useful

aws cli

```
npm install -g serverless
npm i
./bootstrap
npm start # runs the offline serverless app
```

## Posting a new form

```
{
  "form": "PGZvcm0+CiAgPGxhYmVsPlRlc3Q8L2xhYmVsPgogIDxpbnB1dCAvPgo8L2Zvcm0+", # base64 encoded html
  "name": "test",
  "customer": "newcustomer"
}

http POST localhost:4000/form < forms.json
```

## View forms

```
http localhost:4000/form/:customer
```

## Single form

```
#returns text/html
http localhost:4000/form/:customer/:name
```
