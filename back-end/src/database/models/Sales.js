module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
  "sale", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: DataTypes.INTEGER,
      sallerId: DataTypes.INTEGER,
      total_price: DataTypes.DECIMAL,
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.INTEGER
    }, {
      underscored: true,
      tableName: 'sales',
      timestamps: false,
    });
    Sale.associate = (models) => {
      Sale.hasOne(models.sale, {
        foreignKey: 'userId', as: 'user_id' });
    }
  return Sale;
}