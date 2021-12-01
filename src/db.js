require('dotenv').config()

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(`postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DB_NAME}`) 


const modelDefiners = [
	require('./db/models/Section'),
	require('./db/models/Category'),
	require('./db/models/Item'),
	require('./db/models/Handler')
	// Add more models here...
	// require('./models/item'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}


module.exports = sequelize
