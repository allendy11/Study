"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Comments", [
      {
        comment: "hello",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        comment: "hi",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        comment: "this is jane",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        comment: "this is mike",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        comment: "good to see you",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
