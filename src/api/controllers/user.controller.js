const {models} = require('../../db')


class UserController {
    async createUser(req,res) {
        const {first_Name, last_Name} = req.body;

        
        const newPerson = await models.User.create({ firstName: first_Name, lastName: last_Name })
     
        res.json(newPerson.dataValues)      
    }

    async getUsers(req,res) {
        const users = await models.User.findAll();
        res.json(users);
    }

    async getOneUser(req,res) {
        const id = req.params.id;
        const user = await models.User.findByPk(id);
        res.json(user);        
    }

    async updateUser(req,res) {
        const id = req.params.id;
        const {first_Name, last_Name} = req.body;        
        await models.User.update({firstName: first_Name, lastName: last_Name}, {
            where: {
                id: id
            }
        })
        .then(res.json(`User with id: ${id} succesfully updated!`))
};
    

    async deleteUser(req,res) {
        const id = req.params.id;     
        await models.User.destroy({
            where: {
                id: id
            }
        })
        .then(res.json(`User with id: ${id} succesfully deleted!`))
        
    }
}

module.exports = new UserController();
