const {models} = require('../../db')


class CategoryController {
    async createCategory(req,res) {
        const {title, section_id} = req.body;
        try {
            const newSection = await models.Category.create({title, section_id})
            res.json(newSection.dataValues)   
        } 
        catch (e) { console.error(e);}   
    }

    async getCategories(req,res) {
        const sections = await models.Category.findAll();
        res.json(sections);
    }

    async getCategoryById(req,res) {
        const id = req.params.id;
        const sections = await models.Category.findByPk(id);
        res.json(sections);        
    }

    async updateCategory(req,res) {
        const id = req.params.id;
        const {title} = req.body;        
        await models.Category.update({title}, {
            where: {
                id: id
            }
        })
        .then(res.json(`Section with id: ${id} succesfully updated!`))
};
    

    async deleteCategory(req,res) {
        const id = req.params.id;     
        await models.Category.destroy({
            where: {
                id: id
            }
        })
        .then(res.json(`Section with id: ${id} succesfully deleted!`))
        
    }
}

module.exports = new CategoryController();
