const Router = require('hermesjs/lib/router');
const {validateMessage} = require('../../lib/message-validator');
const router = new Router();
const publishBookTransactionHandler = require('../handlers/publish-book-transaction');
module.exports = router;

router.use('publish/book/transaction', async (message, next) => {
  try {
    await validateMessage(message.payload,'publish/book/transaction','','publish');
    await publishBookTransactionHandler.PublishBookTransactionCommand({message});
    next();
  } catch (e) {
    next(e);
  }
});
