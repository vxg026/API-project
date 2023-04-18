'use strict';


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 1,
        startDate: 12/12/2023,
        endDate: 12/13/2023,
      },
      {
        spotId: 2,
        userId: 2,
        startDate: 10/16/2023,
        endDate: 10-19-2023,
      },
      {
        spotId: 2,
        userId: 3,
        startDate: 10/19/2023,
        endDate: 10/21/2023,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1,2] }
    }, {});
  }
};
