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
        startDate: new Date('2023-12-12'),
        endDate: new Date('2023-12-15')
      },
      {
        spotId: 2,
        userId: 2,
        startDate: new Date('2023-10-20'),
        endDate: new Date('2023-10-25')
      },
      {
        spotId: 2,
        userId: 3,
        startDate: new Date('2023-11-25'),
        endDate: new Date('2023-11-25')
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
