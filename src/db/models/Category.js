const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Category', {
        id: {
            type: DataTypes.BIGINT, 
            primaryKey: true,
            autoIncrement: true
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        }, 
        section_id : {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Sections',
            key: 'id'
          }
      }
      },{
        timestamps: false
      });
     
};

