const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Item', {
        id: {
            type: DataTypes.BIGINT, 
            primaryKey: true,
            autoIncrement: true
        },
        category_id : {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Categories',
            key: 'id'
          }
      },
        title: {
          type: DataTypes.STRING,
          allowNull: false
        }, 
        icon: {
          type: DataTypes.STRING,
          allowNull: true
        }, 
        description: {
          type: DataTypes.TEXT,
          allowNull: true
        }, 
        picture: {
          type: DataTypes.TEXT,
          allowNull: true
        }, 
        link: {
          type: DataTypes.TEXT,
          allowNull: true
        }
        
      },{
        timestamps: false
      });
     
};