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

      options.tableName = 'SpotImages';
      return queryInterface.bulkInsert(options, [
        {
         spotId: 1,
         url: "urlforthefirstone",
         preview: true
        },
        {
          spotId: 1,
          url: "urlforthesecondone",
          preview: false
         },
         {
          spotId: 2,
          url: "urlforthethirdone",
          preview: true
         },
         {
          spotId: 2,
          url: "urlforthefourthone",
          preview: false
         }
      ], {});

    },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1,2] }
    }, {});
  }
  }
