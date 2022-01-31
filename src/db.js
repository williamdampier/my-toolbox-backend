require('dotenv').config()

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(`${process.env.DATABASE_URL}`, { rejectUnauthorized: false }) 


const modelDefiners = [
	require('./db/models/Section'),
	require('./db/models/Category'),
	require('./db/models/Item')
	// Add more models here...
	// require('./models/item'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}


module.exports = sequelize
