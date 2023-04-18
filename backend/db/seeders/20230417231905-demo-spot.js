'use strict';

const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Spots';
    return queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: "123 San Francisco Dr",
        city: "San Francisco",
        state: "California",
        country: "USA",
        lat: 17.9845351,
        lng: -22.7630324,
        name: "Dolores Park",
        description: "Place to relax and listen to music",
        price: 123.45,

        // "avgRating": 4.5,
        // "previewImage": "image url"
      },
     {
        ownerId: 2,
        address: "123 Disney Lane",
        city: "Hollywood",
        state: "California",
        country: "USA",
        lat: 90.8845352,
        lng: -12.3730323,
        name: "DisneyLand",
        description: "Place where dreams come true",
        price: 123,
     }
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      state: { [Op.in]:
        ['California']
      }
    }, {});
  }
};
