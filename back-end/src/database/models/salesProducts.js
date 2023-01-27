module.exports = (sequelize, DataTypes) => {
  const salesProdcut = sequelize.define(
  'salesProduct', {
<<<<<<< HEAD:back-end/src/models/salesProducts.js
      saleId: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      productId: { type: DataTypes.INTEGER,
      },
      quantity: { type: DataTypes.INTEGER,
      },
=======
      saleId: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      productId: {
        type: DataTypes.INTEGER,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
>>>>>>> 0b7d5d49ea9fe2210df3a55af6e9781fac42fd42:back-end/src/database/models/salesProducts.js
    }, {
      underscored: true,
      tableName: 'salesProducts',
      timestamps: false,
    },
);
<<<<<<< HEAD:back-end/src/models/salesProducts.js

=======
    salesProdcut.associate = (models) => {
      salesProdcut.hasOne(models.sale, {
        foreignKey: 'saleid', as: 'sale_id' });
    };
>>>>>>> 0b7d5d49ea9fe2210df3a55af6e9781fac42fd42:back-end/src/database/models/salesProducts.js
  return salesProdcut;
};