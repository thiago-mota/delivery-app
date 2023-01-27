module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
  'product', {
      id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      urlImage: DataTypes.STRING,
    }, {
      underscored: true,
      tableName: 'products',
      timestamps: false,
    },
);
    Product.associate = (models) => {
      Product.hasOne(models.saleProducts, {
        foreignKey: 'id', as: 'id' });
    };
  return Product;
};