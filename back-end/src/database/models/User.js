module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
  'User', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: { defaultValue: 'customer', type: DataTypes.STRING },
    }, {
      underscored: true,
      tableName: 'users',
      timestamps: false,
    },
);
    User.associate = (models) => {
      models.User.hasMany(models.Sale,{
        foreignKey: 'userId', as: 'user'
      });
      models.User.hasMany(models.Sale, {
        foreignKey: 'sellerId', as: 'seller'
      })
    };

      return User;
}
