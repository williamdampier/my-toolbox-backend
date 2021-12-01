const {models} = require('../../db')


class SectionController {
    async createSection(req,res) {
        const {title} = req.body;
        try {
            const newSection = await models.Section.create({title})
            res.json(newSection.dataValues)   
        } 
        catch (e) { console.error(e);}   
    }

    async getSections(req,res) {
        const sections = await models.Section.findAll();
        res.json(sections);
    }

    async getOneSection(req,res) {
        const id = req.params.id;
        const sections = await models.Section.findByPk(id);
        res.json(sections);        
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
};
    

    async deleteSection(req,res) {
        const id = req.params.id;     
        await models.Section.destroy({
            where: {
                id: id
            }
        })
        .then(res.json(`Section with id: ${id} succesfully deleted!`))
        
    }
}

module.exports = new SectionController();
