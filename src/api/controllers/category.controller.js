const { json } = require('express');
const {models} = require('../../db')


class CategoryController {
    async createCategory(req,res) {
        const {title, section_id} = req.body;
        try {
            const section = await models.Section.findByPk(section_id)

            if (!section)  {res.json(`Section with id: ${section_id} does not exist`)}
            else {
                const newCategory = await models.Category.create({title: title, section_id: section_id})
                res.json(newCategory.dataValues)   
            }
        } 
        catch (err) { 
            const errObj = {};
                err.errors.map( er => {
                errObj[er.path] = er.message;
            })
            res.json(errObj);
        }   
    }

    async getCategories(req,res) {
        try {
            const categories = await models.Category.findAll();
            res.json(categories);
        }
        catch (err) { 
            const errObj = {};
                err.errors.map( er => {
                errObj[er.path] = er.message;
            })
            res.json(errObj);
        } 
        
    }

    async getCategoryById(req,res) {
        const id = req.params.id;
        const category = await models.Category.findByPk(id);
        if (category) {res.json(category);  }
        else  {res.json(`Category with id: ${id} does not exist`)}
               
    }

    async updateCategory(req,res) {
        const id = req.params.id;
        const {title} = req.body; 

        try {
            await models.Category.update({title}, {
                where: {
                    id: id
                }
            })
            res.json(`Category with id: ${id} succesfully updated!`)
           }
           catch (err) { 
            const errObj = {};
                err.errors.map( er => {
                errObj[er.path] = er.message;
            })
            res.json(errObj);
        } 
};
    

    async deleteCategory(req,res) {
        const id = req.params.id;  
        try {
            const category = await models.Category.findByPk(id);
            if (!category) {
                res.json (`Category with ${id} does not exist`)
            }
            else {
                await models.Category.destroy({
                    where: {
                        id: id
                    }})
                res.json(`User with id: ${id} succesfully deleted!`)
            }                  
        }   
        catch (err) { 
            const errObj = {};
                err.errors.map( er => {
                errObj[er.path] = er.message;
            })
            res.json(errObj);
        }   
        
    }
}

module.exports = new CategoryController();
