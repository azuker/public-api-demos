const Router = require('hermesjs/lib/router');
const {validateMessage} = require('../../lib/message-validator');
const router = new Router();
const subscribeBookInventoryHandler = require('../handlers/subscribe-book-inventory');
module.exports = router;

router.useOutbound('subscribe/book/inventory', async (message, next) => {
  try {
    await validateMessage(message.payload,'subscribe/book/inventory','','subscribe');
    await subscribeBookInventoryHandler.SubscribeBookInventoryUpdates({message});
    next();
  } catch (e) {
    next(e);
  }
});
