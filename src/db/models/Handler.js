const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Handler', {
         CategoryId : {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Categories',
            key: 'id'
          }
        },
        ItemId : {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Items',
            key: 'id'
          }
        }
      },{
        timestamps: false
      });
};

