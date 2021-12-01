const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Post', {
        id: {
            type: DataTypes.BIGINT, 
            primaryKey: true,
            autoIncrement: true
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        body: {
          type: DataTypes.TEXT
        }
      }, {
          //additional options can be defined here
      });
};