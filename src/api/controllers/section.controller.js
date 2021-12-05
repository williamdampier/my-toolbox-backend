const { json } = require('sequelize/dist');
const {models} = require('../../db')


class SectionController {
    async createSection(req,res) {

        await models.Section.create(req.body) 
            .then(()=> res.json(newSection.dataValues))
            .catch((err) => res.json(err.errors[0].message))    
    }

    async getSections(req,res) {
            await models.Section.findAll()
            .then((sections) => res.json(sections))
            .catch((err) => res.json(err.errors[0].message))
        }

    async getSectionById(req,res) {
      
            const id = req.params.id;
            await models.Section.findByPk(id)
            .then((section) => section ? res.json(section) : res.json(`Section with id: ${id} does not exist`) )
            .catch((err) =>  res.json(err.errors[0].message));          
    }
       

    async updateSection(req,res) {
        const id = req.params.id;
        const {title} = req.body; 
    
            await models.Section.update({title}, {
                where: {
                    id: id
                }
            })
            .then(res.json(`Section with id: ${id} succesfully updated!`))
            .catch((err) =>  res.json(err.errors[0].message));           
        
    };
    

    async deleteSection(req,res) {
        const id = req.params.id;  
        
            const section = await models.Section.findByPk(id);
            if (section) {
                await models.Section.destroy({
                    where: {
                        id: id
                    }})
                    .then(() => res.json(`Section with id: ${id} succesfully deleted!`))
                    .catch((err) =>  res.json(err.errors[0].message));    
            }
            else {
                res.json (`Section with ${id} does not exist`)
                }                  
       
    }
}


module.exports = new SectionController();
