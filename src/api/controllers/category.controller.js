const { json } = require('express');
const {models} = require('../../db')



class CategoryController {
    async createCategory(req,res) {
        const {title, section_id} = req.body;

        await models.Category.create({title: title, section_id: section_id})
        .then((category) => res.json(category)) 
        .catch((err) => res.json(err.errors[0].message))      
    }

    async getCategories(req,res) {
        const section = req.query.section

        if (section) { 
                    await models.Category.findAll({
                        where: {section_id: section}
                    })
                    .then((categories)=> categories.length ? res.json(categories) : res.json("No valid items or section does not exist"))
                    .catch((err) =>  res.json(err.errors[0].message));
            }       
       else { 
            await models.Category.findAll()
            .then((categories) => res.json(categories))
            .catch((err) =>  res.json(err.errors[0].message));
        }        
    }


    async getCategoryById(req,res) {
       const id = req.params.id;
       await models.Category.findByPk(id)
       .then((category) => category ? res.json(category) : res.json(`Category with id: ${id} does not exist`))
       .catch((err) =>  res.json(err));                
    }


    async updateCategory(req,res) {
        const id = req.params.id;
        const {title} = req.body; 

        await models.Category.update({title}, {
                where: {
                    id: id
                }
            })
            .then(() => res.json(`Category with id: ${id} succesfully updated!`))
            .catch((err) => res.status(500).json(err.errors[0].message))
           
};

    async deleteCategory(req,res) {
        const id = req.params.id;  
        const category = await models.Category.findByPk(id);
        
        if (category) {
            await models.Category.destroy({
                where: {
                    id: id
                }})
            .then (() => res.json(`User with id: ${id} succesfully deleted!`))
            .catch((err) =>  res.json(err));
                
            }
            else {
                res.json (`Category with ${id} does not exist`)
            }                  
        
        
    }
}

module.exports = new CategoryController();
