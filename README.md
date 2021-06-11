# Public API Conference Talk Demos

This repo contains demos for the purpose of my talk: "Will the Real Public API Please Stand Up".

## Demos

### API Gateway

**Ports**:

- Stupid auth: `3000`
- Inventory: `3001`
- Orders: `3002`
- NGINX: `3099`
- NGINX-API-KEY: `3098`

**Demo List:**

1. NGINX as a simple API Gateway for routing purposes
    - Located in `api-gw` folder
    - Demo direct calls
        - Start the projects: `inventory`, `orders`, `stupid-auth`
        - Start the client with the direct addresses (look in the code) - `npm start`
        - See that it works, the client retrieves the token and calls the services directly
    - Demo calls via NGINX
        - Start the projects: `inventory`, `orders`, `stupid-auth`
        - Execute the NGINX container (`nginx` folder)
        - Start the client with the api-gw address (look in the code)
        - See that it works, the client retrieves the token and calls the services via the api-gw
1. NGINX with token exchange flow
    - Located in `api-gw` folder
    - Create docker network: `docker network create papi_demos`
    - Start the projects: `inventory`, `orders`, `stupid-auth`
    - Execute the NGINX container with the token exchange setup (`nginx-apikey` folder)
    - Start the client with the api-gw address - `npm run start:apikey`
    - See that it works, the client calls the services via the api-gw with an api key

### Spec Authoring

**Demo List:**

1. Spec - Contract
    - Folder `spec/contract`
    - Run `gen.cmd` (git bash: `./gen.cmd`)
    - Generates static docs, spa docs and nodejs server
    - nodejs-server: see that it loads swagger and validates as well (`index.js`)
1. Spec - Code
    - Folder: `spec/code/books`
    - Launch server
    - View `http://localhost:3010/openapi` endpoint in browser
    - View `http://localhost:3010/openapi-json` endpoint in browser
1. Spec - Client-side Library Generation
    - Launch spec code books server in `spec/code/books`
    - Generate library: `npm run gen` in `lib` folder
    - Review code and usage demo is `lib/ts-axios/_demo.ts`
1. Spec - Docs
    - postman, code samples, widdershins

### Versioning

**Demo List:**

1. Spec - Versioning
    - swagger validate (existing spec vs new)
    - release notes + breaking changes
