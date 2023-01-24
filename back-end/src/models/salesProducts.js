module.exports = (sequelize, DataTypes) => {
  const salesProdcut = sequelize.define(
  'salesProduct', {
      saleId: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      productId: { type: DataTypes.INTEGER,
      },
      quantity: { type: DataTypes.INTEGER,
      },
    }, {
      underscored: true,
      tableName: 'salesProducts',
      timestamps: false,
    },
);
    salesProdcut.associate = (models) => {
      salesProdcut.belongsToMany(models.sale, {
        foreignKey: 'saleId', as: 'sale_id', otherKey: 'product_id' });
      salesProdcut.belongsToMany(models.sale, {
        foreignKey: 'productId', as: 'product_id', otherKey: 'sale_id'
      })
      };
  return salesProdcut;
};