const { json } = require('express');
const {models} = require('../../db')



class ItemController {
    async createItem(req,res) {
        const {category_id, title, icon, description, picture, link} = req.body;
        await models.Item.create({category_id, title, icon, description, picture, link})
        .then((item) => res.json(item))
        .catch((err) => res.json(err.errors[0].message))    
    }

    async getItems(req,res) {
        const category = req.query.category
        if (category) {             
            await models.Item.findAll({
                    where: {category_id: category}
                    })
                    .then((items)=> items.length ? res.json(items) : res.json(`No valid items or category with id ${category} does not exist`))
                    .catch((err) =>  res.json(err.errors[0].message));              
        }       

       else { 
           await models.Item.findAll()
           .then((categories) => res.json(categories))
           .catch((err) =>  res.json(err.errors[0].message));  
        }
    }

    async getItemById(req,res) {

        const id = req.params.id;
        await models.Item.findByPk(id)
        .then((item) => item ? res.json(item) : res.json(`Item with id: ${id} does not exist`))
        .catch((err) =>  res.json(err.errors[0].message));                
    }

    async updateItem(req,res) {
        const id = req.params.id;
        const {title} = req.body; 

        await models.Item.update({title}, {
            where: { id: id }
            })
            .then(()=> res.json(`Category with id: ${id} succesfully updated!`))
            .catch((err) =>  res.json(err.errors[0].message));  
           
        }     

    async deleteItem(req,res) {
        const id = req.params.id;  
        const item = await models.Item.findByPk(id)
       if (item) {
        await models.Item.destroy({
            where: {
                id: id
            }})
            .then(() => res.json(`Item with id: ${id} succesfully deleted!`))
            .catch((err) =>  res.json(err.errors[0].message)) 
       }
       else {res.json(`Item with id: ${id} does not exist!`)}
        
        }  
        
    }


module.exports = new ItemController();
