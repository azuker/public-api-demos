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
        - Start the client with the direct addresses (look in the code)
        - See that it works, the client retrieves the token and calls the services directly
    - Demo calls via NGINX
        - Start the projects: `inventory`, `orders`, `stupid-auth`
        - Execute the NGINX container (`nginx` folder)
        - Start the client with the api-gw address (look in the code)
        - See that it works, the client retrieves the token and calls the services via the api-gw
2. NGINX with token exchange flow
    - Located in `api-gw` folder
    - Create docker network: `docker network create papi_demos`
    - Start the projects: `inventory`, `orders`, `stupid-auth`
    - Execute the NGINX container with the token exchange setup (`nginx-apikey` folder)
    - Start the client with the api-gw address (look in the code)
    - See that it works, the client calls the services via the api-gw with an api key
