docker-compose up -d

until $(curl --output /dev/null --silent --head --fail -X PUT http://localhost:4572/ -H "Host: polled.s3.amazon.com"); do
    printf '.'
    sleep 5
done
