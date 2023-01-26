module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
  'Product', {
      id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(4, 2),
      urlImage: DataTypes.STRING,
    }, {
      underscored: true,
      tableName: 'products',
      timestamps: false,
    },
);
    // Product.associate = (models) => {
    //   Product.hasMany(models.saleProducts, {
    //     foreignKey: 'id', as: 'id' });
    // };
  return Product;
};