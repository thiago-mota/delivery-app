module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
    {
      id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: { type: DataTypes.DECIMAL(9, 2) },
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    { underscored: true, tableName: "sales", timestamps: false }
  );
  
    Sale.associate = (models) => {
      models.Sale.belongsTo(models.User,
        { foreignKey: 'userId', as: 'user' });
      models.Sale.belongsTo(models.User,
        { foreignKey: 'sellerId', as: 'seller' });
    };

  return Sale;
};