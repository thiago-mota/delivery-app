module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
  "User", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: { defaultValue: 'customer' , type: DataTypes.STRING}
    }, {
      underscored: true,
      tableName: 'users',
      timestamps: false,
    });

  return User;
}



