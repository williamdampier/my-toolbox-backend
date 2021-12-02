const { json } = require('sequelize/dist');
const {models} = require('../../db')


class SectionController {
    async createSection(req,res) {
        try {
            const newSection = await models.Section.create(req.body) //we only need UNIQUE "title" value
            res.json(newSection.dataValues)   
        } 
        catch (err) { 
            const errObj = {};
                err.errors.map( er => {
                errObj[er.path] = er.message;
            })
            res.json(errObj);
        }   
    }

    async getSections(req,res) {
        try {
            const sections = await models.Section.findAll();
            res.json(sections);
        }
        catch (err) { 
            const errObj = {};
                err.errors.map( er => {
                errObj[er.path] = er.message;
            })
            res.json(errObj);
        }  
        
    }

    async getOneSection(req,res) {
        try {
            const id = req.params.id;
            const section = await models.Section.findByPk(id);
            section //section exist?
                ? res.json(section) //send answer back
                : res.json(`Section with id: ${id} does not exist`)     //send back validation error message    
            
        }
        catch (err) { 
            const errObj = {};
                err.errors.map( er => {
                errObj[er.path] = er.message;
            })
            res.json(errObj);
        }
               
    }

    async updateSection(req,res) {
        const id = req.params.id;
        const {title} = req.body; 

        try {
            await models.Section.update({title}, {
                where: {
                    id: id
                }
            })
            res.json(`Section with id: ${id} succesfully updated!`)
           }
           catch (err) { 
            const errObj = {};
                err.errors.map( er => {
                errObj[er.path] = er.message;
            })
            res.json(errObj);
        } 
    };
    

    async deleteSection(req,res) {
        const id = req.params.id;  
        try {
            const section = await models.Section.findByPk(id);
            if (!section) {
                res.json (`Section with ${id} does not exist`)
            }
            else {
                await models.Section.destroy({
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

module.exports = new SectionController();
