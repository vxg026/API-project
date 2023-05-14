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
        review: "This campground had amazing views and was perfect for stargazing at night. The bathrooms were clean and well-maintained.",
        stars: 5},
        {
          potId: 1,
          userId: 3,
          review: "We loved the peacefulness of this campground. It was the perfect escape from the city. The campsite was spacious and private.", stars: 4
        },
        {
          spotId: 1,
          userId: 1,
          review: "The location of this campground was perfect for exploring Yellowstone. The only downside was that the showers were cold.",
          stars: 3
        },
        {
          spotId: 1,
          userId: 2,
          review: "The staff at this campground were incredibly helpful and friendly. The amenities were clean and well-maintained. We had a great time!",
          stars: 5
        },
        {
          spotId: 2,
          userId: 3,
          review: "This campground was a bit crowded for our liking, but the location near the beach was unbeatable. The noise from nearby traffic was a bit of a downside.",
          stars: 3
        },
        {
          spotId: 2,
           userId: 1,
            review: "We loved the peace and quiet of this campground. The surrounding forests were beautiful and great for hiking. The only downside was that the wifi was spotty.",
            stars: 4
        },
        {
          spotId: 2,
          userId: 5,
          review: "This campground was perfect for our family vacation. There were plenty of activities for the kids and the nearby lake was great for swimming.",
          stars: 4
        },
        {
          spotId: 1,
          userId: 3,
          review: "The views from this campground were incredible. We loved waking up to the sunrise over the mountains. The only downside was that the nearest town was a bit far.",
          stars: 4
        },
        {
          spotId: 2,
          userId: 1,
          review: "We had a great time at this campground. The staff were friendly and accommodating. The only downside was that the nearby train tracks were a bit noisy.",
          stars: 1
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
          review: "This was the perfect spot for a weekend getaway. The campsite was clean and well-maintained. We loved exploring the nearby trails.",
          stars: 5
         },
         {
          spotId: 3,
          userId: 1,
          review: "Great place",
          stars: 4
         },
        {
         spotId: 3,
         userId: 2,
         review: "This campground had amazing views and was perfect for stargazing at night. The bathrooms were clean and well-maintained.",
         stars: 5},
         {
           potId: 5,
           userId: 3,
           review: "We loved the peacefulness of this campground. It was the perfect escape from the city. The campsite was spacious and private.", stars: 2
         },
         {
           spotId: 5,
           userId: 1,
           review: "The location of this campground was perfect for exploring Yellowstone. The only downside was that the showers were cold.",
           stars: 3
         },
         {
           spotId: 6,
           userId: 2,
           review: "The staff at this campground were incredibly helpful and friendly. The amenities were clean and well-maintained. We had a great time!",
           stars: 5
         },
         {
           spotId: 6,
           userId: 3,
           review: "This campground was a bit crowded for our liking, but the location near the beach was unbeatable. The noise from nearby traffic was a bit of a downside.",
           stars: 3
         },
         {
           spotId: 6,
            userId: 1,
             review: "We loved the peace and quiet of this campground. The surrounding forests were beautiful and great for hiking. The only downside was that the wifi was spotty.",
             stars: 4
         },
         {
           spotId: 8,
           userId: 2,
           review: "This campground was perfect for our family vacation. There were plenty of activities for the kids and the nearby lake was great for swimming.",
           stars: 4
         },
         {
           spotId: 9,
           userId: 3,
           review: "The views from this campground were incredible. We loved waking up to the sunrise over the mountains. The only downside was that the nearest town was a bit far.",
           stars: 3
         },
         {
           spotId: 10,
           userId: 1,
           review: "We had a great time at this campground. The staff were friendly and accommodating. The only downside was that the nearby train tracks were a bit noisy.",
           stars: 4
         },
         {
           spotId: 11,
           userId: 2,
           review: "nice hosts",
           stars: 2
          },
          {
           spotId: 12,
           userId: 2,
           review: "This was the perfect spot for a weekend getaway. The campsite was clean and well-maintained. We loved exploring the nearby trails.",
           stars: 5
          },
          {
            spotId: 14,
            userId: 1,
            review: "Great place",
            stars: 4
           },
          {
           spotId: 14,
           userId: 2,
           review: "This campground had amazing views and was perfect for stargazing at night. The bathrooms were clean and well-maintained.",
           stars: 5},
           {
             potId: 14,
             userId: 3,
             review: "We loved the peacefulness of this campground. It was the perfect escape from the city. The campsite was spacious and private.", stars: 4
           },
           {
             spotId: 14,
             userId: 1,
             review: "The location of this campground was perfect for exploring Yellowstone. The only downside was that the showers were cold.",
             stars: 3
           },
           {
             spotId: 15,
             userId: 2,
             review: "The staff at this campground were incredibly helpful and friendly. The amenities were clean and well-maintained. We had a great time!",
             stars: 5
           },
           {
             spotId: 15,
             userId: 3,
             review: "This campground was a bit crowded for our liking, but the location near the beach was unbeatable. The noise from nearby traffic was a bit of a downside.",
             stars: 3
           },
           {
             spotId: 16,
              userId: 1,
               review: "We loved the peace and quiet of this campground. The surrounding forests were beautiful and great for hiking. The only downside was that the wifi was spotty.",
               stars: 4
           },
           {
             spotId: 17,
             userId: 2,
             review: "This campground was perfect for our family vacation. There were plenty of activities for the kids and the nearby lake was great for swimming.",
             stars: 4
           },
           {
             spotId: 18,
             userId: 3,
             review: "The views from this campground were incredible. We loved waking up to the sunrise over the mountains. The only downside was that the nearest town was a bit far.",
             stars: 4
           },
           {
             spotId: 19,
             userId: 1,
             review: "We had a great time at this campground. The staff were friendly and accommodating. The only downside was that the nearby train tracks were a bit noisy.",
             stars: 4
           },
           {
             spotId: 19,
             userId: 2,
             review: "nice hosts",
             stars: 4
            },
            {
             spotId: 19,
             userId: 2,
             review: "This was the perfect spot for a weekend getaway. The campsite was clean and well-maintained. We loved exploring the nearby trails.",
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
      userId: { [Op.in]: [1,2,3,4,5] }
    }, {});
  }
  }
