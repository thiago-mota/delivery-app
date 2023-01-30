"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "sales_products",
      {
        sale_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          reference: {
            model: "products",
            key: "id",
          },
        },
        product_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          reference: {
            model: "sales",
            key: "id",
          },
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        underscored: true,
        tableName: "sales_products",
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("salesProducts");
  },
};
