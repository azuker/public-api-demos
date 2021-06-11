docker run --rm -v %CD%:/local swaggerapi/swagger-codegen-cli generate ^
    -i /local/petstore.json ^
    -l nodejs-server ^
    -o /local/nodejs-server

docker run --rm -v %CD%:/local swaggerapi/swagger-codegen-cli generate ^
    -i /local/petstore.json ^
    -l html ^
    -o /local/html

docker run --rm -v %CD%:/local swaggerapi/swagger-codegen-cli generate ^
    -i /local/petstore.json ^
    -l dynamic-html ^
    -o /local/dynamic-html
