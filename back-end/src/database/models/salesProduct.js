module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
    "SalesProduct",
    {
      saleId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
    },
    {
      underscored: true,
      tableName: "sales_products",
      timestamps: false,
    }
  );
  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: "products",
      through: SalesProduct,
      foreignKey: "saleId",
      otherKey: "productId",
    });
    models.Product.belongsToMany(models.Sale, {
      as: "sales",
      through: SalesProduct,
      foreignKey: "productId",
      otherKey: "saleId",
    });
  };
  return SalesProduct;
};
