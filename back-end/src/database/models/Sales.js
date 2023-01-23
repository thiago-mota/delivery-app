module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('sale', {
      id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      userId: DataTypes.INTEGER,
      sallerId: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL,
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.INTEGER,
    }, { underscored: true, tableName: 'sales', timestamps: false });
    Sale.associate = (models) => {
      Sale.belongsTo(models.User, {
        foreignKey: 'userId', as: 'user_id' });
      Sale.belongsTo(models.User, {
        foreignKey: 'sallerId', as: 'saller_id' });
    };
  return Sale;
};