const Router = require('express');
const router = new Router();

const sectionController = require('../controllers/category.controller');


router.post('/', categoryController.createSection);
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;