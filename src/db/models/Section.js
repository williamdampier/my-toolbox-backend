const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Section', {
        id: {
            type: DataTypes.BIGINT, 
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        }

      }, {
          //additional options can be defined here
          timestamps: false
      });
};