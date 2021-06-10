const fetch = require('node-fetch');

const API_KEY = '63c5a5648772400fbf86cf66c770f735';

// nginx:
const inventoryBaseUrl = 'http://localhost:3098';
const ordersBaseUrl = 'http://localhost:3098';

function get(url) {
  return fetch(url, {
    headers: { 'X-API-KEY': API_KEY },
  }).then(res => res.json());
}

async function clientApiGw() {
  const book = await get(`${inventoryBaseUrl}/v1/books/Fairy%20tales`);
  console.log('\r\nRetrieved book', book);

  const order = await get(`${ordersBaseUrl}/v1/orders/1`);
  console.log('\r\nRetrieved order', order);

  console.log('\r\nDone');
}

clientApiGw().catch(er => console.log(er));
