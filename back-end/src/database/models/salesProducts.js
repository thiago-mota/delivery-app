module.exports = (sequelize, DataTypes) => {
  const salesProdcut = sequelize.define(
  'salesProduct', {
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
    }, {
      underscored: true,
      tableName: 'salesProduct',
      timestamps: false,
    },
);
    salesProdcut.associate = (models) => {
      salesProdcut.hasOne(models.sale, {
        foreignKey: 'saleid', as: 'sale_id' });
    };
  return salesProdcut;
};