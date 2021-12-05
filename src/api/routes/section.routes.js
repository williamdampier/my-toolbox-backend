const Router = require('express');
const router = new Router();

const sectionController = require('../controllers/section.controller');


router.post('/', sectionController.createSection);
router.get('/', sectionController.getSections);
router.get('/:id', sectionController.getSectionById);
router.put('/:id', sectionController.updateSection);
router.delete('/:id', sectionController.deleteSection);

module.exports = router;