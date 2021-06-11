# Public API Conference Talk Demos

This repo contains demos for the purpose of my talk: "Will the Real Public API Please Stand Up".

## Demos

**Ports**:

- Stupid auth: `3000`
- Inventory: `3001`
- Orders: `3002`
- NGINX: `3099`
- NGINX-API-KEY: `3098`
- Books: `3010`

### API Gateway

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
    - Review actual sample of spec brokwn down in `spec/docs/spec/src/openapi.yaml`
1. Spec - Code
    - Folder: `spec/code/books`
    - Launch server
    - View `http://localhost:3010/openapi` endpoint in browser
    - View `http://localhost:3010/openapi-json` endpoint in browser
1. Spec - Client-side Library Generation
    - Launch spec code books server in `spec/code/books`
    - Generate library: `npm run gen` in `spec/lib` folder
    - Review code and usage demo is `spec/lib/ts-axios/_demo.ts`
1. Spec - Docs
    - If you can't see the node-slate source, make sure to update submodules: `git submodule update --init --recursive`
    - Generate bundle, slate markdown and postman collection: `npm run gen` in `spec/docs/spec`
    - Copy the generated files in `dist` folder to the docs by running `npm run copy` in `spec/docs/spec`
    - Launch slate docs app - `npm start` in `spec/docs/public-api-demos-node-slate`
    - You should check the `ReDoc` project too (not present in this repo)

### Versioning

**Demo List:**

1. Spec - Versioning
    - `spec/docs/spec/_published/bundle.yaml` represents the current published version
    - `spec/docs/spec/dist/bundle.yaml` represents the current developed version
    - We wish to compare both, summarize changes and validate compatibility
    - Run `npm run changes` in `spec/docs/spec`
    - Review diff-output files in `spec/docs/spec/dist`


### Async API

1. Async API
    - Sample spec in `asyncapi/asyncapi.json`
    - Generate server: `npm run gen:server`
    - Generate docs: `npm run gen:html` and `npm run gen:md`
    - Can launch HTML docs: `npm start`
    - Can compare changes with published version: `npm run changes` - not currently working, aadiff expects yaml possibly
