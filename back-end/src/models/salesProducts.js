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

  return salesProdcut;
};