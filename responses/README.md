# Polled.io backend

A simple bring-your-own-backend form generation tool. Outputs standard HTML that can be embedded on websites.

Form API stores responses in a postgres database as JSON

## Getting started

serverless framework
docker
docker-compose

```
docker-compose up -d
npm install -g serverless
npm i
npm start # runs the offline serverless app
```

## Posting a new form

```
{
  "data": {"name": "tim", "email": "tim@tim.com"},
}

http POST localhost:4000/response < data.json
```

## View forms

```
http localhost:4000/response
```
