const Router = require('express');
const router = new Router();

const itemController = require('../controllers/item.controller');


router.post('/', itemController.createItem);
router.get('/', itemController.getItems);
router.get('/:id', itemController.getItemById);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;