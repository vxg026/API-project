'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

      options.tableName = 'Reviews';
      return queryInterface.bulkInsert(options, [
        {
         spotId: 1,
         userId: 1,
         review: "Great place",
         stars: 4
        },
        {
          spotId: 1,
          userId: 2,
          review: "nice hosts",
          stars: 4
         },
         {
          spotId: 2,
          userId: 2,
          review: "would recommend",
          stars: 5
         },
     
      ], {});

    },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1,2,3] }
    }, {});
  }
  }
