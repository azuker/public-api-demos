const fetch = require('node-fetch');

// directly:
const inventoryBaseUrl = 'http://localhost:3001';
const ordersBaseUrl = 'http://localhost:3002';

// nginx:
// const inventoryBaseUrl = 'http://localhost:3099';
// const ordersBaseUrl = 'http://localhost:3099';

function getToken(url) {
  return fetch(url, {
    method: 'post',
    body: JSON.stringify({ id: 'johndoe', email: 'john@fancybooks.com' }),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => res.json()).then(r => r.token);
}

function get(url, token) {
  return fetch(url, {
    headers: { 'Authorization': `Bearer ${token}` },
  }).then(res => res.json());
}

async function clientApiGw() {
  const token = await getToken('http://localhost:3000/auth');
  console.log('\r\nRetrieved token', token);

  const book = await get(`${inventoryBaseUrl}/v1/books/Fairy%20tales`, token);
  console.log('\r\nRetrieved book', book);

  const order = await get(`${ordersBaseUrl}/v1/orders/1`, token);
  console.log('\r\nRetrieved order', order);

  console.log('\r\nDone');
}

clientApiGw().catch(er => console.log(er));
