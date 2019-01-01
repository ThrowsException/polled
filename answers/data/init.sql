CREATE TABLE responses (
  id BIGSERIAL,
  data jsonb
);

INSERT INTO responses(data) VALUES ('{"name": { "first": "Chester", "last": "ONeill" }, "email": "chester@oneill.com"}');
