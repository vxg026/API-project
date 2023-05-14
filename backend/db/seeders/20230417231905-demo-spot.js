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
        address: "2323 Riverfront Dr",
        city: "Nashville",
        state: "Tennessee",
        country: "USA",
        lat: 36.1657,
        lng: -86.7844,
        name: "Cumberland River Campground",
        description: "Escape the stress of daily life and immerse yourself in the peaceful surroundings of Dolores Park, a serene camping spot in the heart of San Francisco. Settle in, unwind, and let the soothing sounds of nature envelop you as you kick back, relax, and enjoy your favorite tunes. Whether you're a music lover or simply seeking a tranquil retreat, Dolores Park is the perfect place to find peace and tranquility.",
        price: 123,
      },
      {
        ownerId: 1,
         address: "1234 Main St",
         city: "Yosemite Valley",
         state: "California",
         country: "USA",
         lat: 37.745747,
         lng: -119.593310,
         name: "Half Dome Campground",
         description: "Discover the awe-inspiring beauty of Yosemite National Park at the Half Dome Campground, a breathtakingly scenic spot nestled at the base of the iconic Half Dome. Immerse yourself in the tranquility of the great outdoors as you gaze in wonder at the stunning views that surround you. With easy access to some of the park's most spectacular hiking trails, you'll have plenty of opportunities to explore and discover the natural wonders that make Yosemite such a beloved destination. Whether you're an experienced hiker or a first-time camper, the Half Dome Campground is the perfect place to relax, recharge, and soak up the splendor of this truly remarkable national treasure.",
         price: 150,
      },{
        ownerId: 1,
        address: "5678 State Park Rd",
        city: "Estes Park",
        state: "Colorado",
        country: "USA",
        lat: 40.3428,
        lng: -105.6836,
        name: "Rocky Mountain Campground",
        description: "Experience the wonder of Rocky Mountain National Park in all its glory at this pristine campground, situated in the heart of one of America's most beloved natural treasures. Whether you're an avid nature enthusiast or simply looking for a serene escape from the hustle and bustle of daily life, this campground is the perfect place to immerse yourself in the great outdoors. From snow-capped peaks and lush forests to alpine meadows and crystal-clear streams, the park's stunning natural beauty is on full display at every turn. With a variety of hiking trails, scenic drives, and wildlife watching opportunities at your fingertips, you'll have no shortage of ways to explore and discover all that this remarkable destination has to offer. So pack your bags, leave your worries behind, and come discover the magic of Rocky Mountain National Park at this one-of-a-kind campground.",
        price: 140
      },
      {
        ownerId: 1,
        address: "9101 Forest Rd",
        city: "Flagstaff",
        state: "Arizona",
        country: "USA",
        lat: 35.3462,
        lng: -111.6786,
        name: "Coconino Forest Campground",
        description: "Unwind and escape to a world of tranquility at this hidden gem of a campground nestled among the majestic pines of Coconino National Forest. With its peaceful and serene setting, this campground offers a truly unique opportunity to immerse yourself in the beauty of nature. Take a leisurely stroll through the towering trees, breathe in the crisp mountain air, and listen to the gentle rustling of the leaves overhead. Whether you're seeking a relaxing getaway or an adventurous excursion, this campground has something for everyone. With a variety of hiking trails, scenic drives, and wildlife watching opportunities, you'll have plenty of ways to explore and discover all that this stunning destination has to offer. So pack your bags, leave your cares behind, and come experience the natural beauty and tranquility of Coconino National Forest at this idyllic campground.", price: 135,
      },
      {
        ownerId: 1,
        address: "1212 Beach Rd",
        city: "South Padre Island",
        state: "Texas",
        country: "USA",
        lat: 26.1237,
        lng: -97.1734,
        name: "Beachside Campground",
        description: "Experience the ultimate beachside escape at this pristine campground located along the sun-soaked shores of South Padre Island. Fall asleep to the soothing sounds of the waves lapping against the shore and wake up to the gentle rustling of the sea breeze as it dances through the swaying palms. With direct access to the beach, you can enjoy all the fun and relaxation of a classic seaside vacation right from your doorstep. Lounge on the warm sand, take a dip in the crystal-clear waters, or try your hand at a variety of water sports and activities. And when the sun goes down, the fun is just getting started. Gather around a bonfire, roast marshmallows, and marvel at the starry night sky. Whether you're looking for a romantic retreat or a fun-filled family vacation, this beachside campground offers the perfect setting for a truly unforgettable getaway.",
        price: 160
      },
      {
        ownerId: 2,
        address: "1313 Mountain Rd",
        city: "Breckenridge",
        state: "Colorado",
        country: "USA",
        lat: 39.4817,
        lng: -106.0384,
        name: "Snowy Peaks Campground",
        description: "Experience the natural beauty and serenity of the Colorado Rockies at this picturesque campground located in the heart of Breckenridge. Surrounded by towering peaks and pristine wilderness, this peaceful retreat offers a truly authentic mountain escape. Breathe in the fresh alpine air, listen to the gentle rush of the nearby stream, and marvel at the breathtaking views from every angle. With easy access to a variety of hiking trails, fishing spots, and outdoor activities, you'll have no shortage of ways to explore and immerse yourself in the natural wonder of this stunning destination. And when the day is done, retreat to the comfort of your cozy campsite, where you can relax by the fire, gaze up at the starry night sky, and revel in the simple joys of life. Whether you're seeking adventure or relaxation, this scenic campground is the perfect place to disconnect from the hustle and bustle of everyday life and reconnect with the beauty of nature.",
        price: 145
      },
      {
        ownerId: 2,
        address: "1414 Redwood Hwy",
        city: "Mill Valley",
        state: "California",
        country: "USA",
        lat: 37.9069,
        lng: -122.5440,
        name: "Redwood Grove Campground",
        description: "Immerse yourself in the enchanting beauty of the towering redwoods at this idyllic campground nestled among the ancient trees. Located in the heart of Mill Valley, California, this serene retreat offers a truly unique and magical camping experience. Spend your days exploring the verdant forest trails, discovering hidden streams and waterfalls, and marveling at the majesty of the towering redwoods. Listen to the gentle rustling of the leaves in the breeze, watch as rays of sunlight filter through the canopy overhead, and feel the peace and tranquility of nature wash over you. And when night falls, retire to the comfort of your cozy campsite, where you can relax by the campfire, roast marshmallows, and enjoy the quiet stillness of the forest. Whether you're seeking adventure or simply a quiet place to reconnect with nature, this serene campground offers the perfect setting for a truly unforgettable camping experience.",
        price: 155
      },
      {
        ownerId: 2,
        address: "1515 Yellowstone Ave",
        city: "West Yellowstone",
        state: "Montana",
        country: "USA",
        lat: 44.6636,
        lng: -111.0984,
        name: "Yellowstone Campground",
        description: "Discover the natural wonders of Yellowstone National Park from the comfort and convenience of this beautiful campground, located just minutes from the park's entrance. Surrounded by majestic mountains and pristine forests, this peaceful retreat offers the perfect base from which to explore the many attractions of this world-renowned wilderness destination. Spend your days hiking the park's scenic trails, marveling at its awe-inspiring geysers and hot springs, and watching for wildlife in their natural habitats. And when you're ready to relax, return to your comfortable and cozy campsite, where you can kick back and soak in the tranquil beauty of the surrounding wilderness. Whether you're an outdoor enthusiast, a nature lover, or simply seeking a peaceful escape from the stresses of everyday life, this campground has everything you need for an unforgettable camping experience. So come and explore the wonders of Yellowstone National Park, and make memories that will last a lifetime at this beautiful and convenient campground.",
        price: 165
      },
      {
        ownerId: 2,
        address: "1616 Lake Shore Dr",
        city: "Lake Placid",
        state: "New York",
        country: "USA",
        lat: 44.2795,
        lng: -73.9795,
        name: "Adirondack Campground",
        description: "Experience the tranquility of the Adirondack Mountains at this picturesque campground, where crystal-clear lakes and verdant forests await you. Explore the winding trails, paddle the serene waters, or simply relax amidst the soothing sounds of nature. Whether you're an outdoor enthusiast or seeking a peaceful retreat, this campground is the perfect destination for your next adventure. Enjoy the fresh mountain air and the cozy comforts of your campsite, where the crackling of the campfire and the twinkling of the stars will lull you into a peaceful slumber.",
         price: 150
      },
      {
        ownerId: 2,
        address: "1717 River Rd",
        city: "Mancos",
        state: "Colorado",
        country: "USA",
        lat: 37.3280,
        lng: -108.2933,
        name: "Mesa Verde Campground",
        description: "Immerse yourself in the rich history and natural beauty of Colorado at the Mesa Verde Campground. Situated just minutes away from the world-famous Mesa Verde National Park, this peaceful and comfortable campground is the perfect base camp for your adventures. Take a step back in time and explore the ancient ruins of the Ancestral Pueblo people, or hike through the rugged canyons and lush forests of the surrounding area. After a day of exploring, return to your campsite and relax under the starry night sky, surrounded by the peaceful sounds of nature. With modern amenities and friendly staff, the Mesa Verde Campground offers the perfect balance of comfort and adventure.",
        price: 135
      },
      {
        ownerId: 3,
        address: "1818 Oak St",
        city: "Asheville",
        state: "North Carolina",
        country: "USA",
        lat: 35.5549,
        lng: -82.5540,
        name: "Blue Ridge Parkway Campground",
        description: "Immerse yourself in the stunning natural beauty of the Blue Ridge Parkway from the comfort of this serene and welcoming campground. Nestled in the heart of the Appalachian Mountains, you'll enjoy breathtaking views of rolling hills, verdant forests, and cascading waterfalls. Take a leisurely hike on one of the many nearby trails or simply relax and soak up the tranquility of this idyllic setting. With easy access to Asheville and the charming towns of western North Carolina, this campground is the perfect base for exploring the rich history and culture of the region. Come experience the magic of the Blue Ridge Parkway for yourself at this enchanting campground.",
        price: 140
      },
      {
        ownerId: 3,
        address: "1919 Beach Blvd",
        city: "Biloxi",
        state: "Mississippi",
        country: "USA",
        lat: 30.3905,
        lng: -88.9961,
        name: "Gulf Coast Campground",
        description: "Gulf Coast Campground is the perfect getaway for those seeking some sun, sand, and relaxation. Situated on the picturesque Beach Boulevard in Biloxi, Mississippi, this campground boasts a prime location right on the coast, offering breathtaking views of the Gulf of Mexico. The campground offers a range of amenities to make your stay comfortable and enjoyable. Take a dip in the sparkling swimming pool or soak in the hot tub after a day spent exploring the area. Relax in the shade of the towering palm trees or enjoy a BBQ in one of the picnic areas. ",
        price: 150,
      },
      {
        ownerId: 3,
        address: "2020 Park Rd",
        city: "Bar Harbor",
        state: "Maine",
        country: "USA",
        lat: 44.3476,
        lng: -68.2149,
        name: "Acadia National Park Campground", description: "Located in the charming town of Bar Harbor, Maine, this cozy campground is the perfect base for exploring the stunning natural wonders of Acadia National Park. Nestled among the trees and surrounded by breathtaking mountain and ocean views, this campground offers a peaceful and serene atmosphere for visitors. Spend your days hiking the park's trails, kayaking in the ocean, or simply relaxing by the campfire and soaking in the beauty of the surrounding wilderness. With comfortable amenities and easy access to all the park has to offer, the Acadia National Park Campground is the ideal spot for your next camping adventure.",
        price: 155,
      },
      {
        ownerId: 3,
        address: "2121 Canyon Rd",
        city: "Boulder",
        state: "Colorado",
        country: "USA",
        lat: 40.0150,
        lng: -105.2644,
        name: "Boulder Canyon Campground",
        description: "Nestled in the heart of Boulder Canyon, this picturesque campground offers a tranquil and peaceful retreat from the hustle and bustle of everyday life. Surrounded by towering trees and majestic mountain peaks, Boulder Canyon Campground provides an ideal base camp for exploring all that the Rocky Mountains have to offer. Wake up to the crisp mountain air and the gentle sound of the nearby stream, as you start your day with a cup of coffee in the great outdoors. With easy access to hiking and biking trails, fishing spots, and other outdoor activities, you'll find plenty of opportunities to immerse yourself in nature and discover the beauty of this stunning wilderness area. And when the day is done, return to your cozy campsite, relax by the campfire, and gaze up at the stars above. At Boulder Canyon Campground, you'll create memories that will last a lifetime.",
        price: 145
      },
      {
        ownerId: 3,
        address: "2222 Hike Rd",
        city: "Sedona",
        state: "Arizona",
        country: "USA",
        lat: 34.8630,
        lng: -111.7694,
        name: "Red Rock Campground",
        description: "Nestled among Sedona's stunning red rock formations, the Red Rock Campground provides a truly unforgettable camping experience. Imagine waking up to the warm glow of the sun rising over the rocks and casting a golden hue on your surroundings. As you step out of your tent, you'll be greeted with panoramic views of the vibrant red cliffs, creating a breathtaking backdrop for your day's adventures. Whether you're hiking through the rugged terrain, biking along the winding trails, or simply lounging around the campground, you'll be surrounded by the beauty of nature at every turn. With so much to explore and discover in this awe-inspiring destination, the Red Rock Campground is the perfect place to rest, relax, and recharge. Come and experience the magic of Sedona's red rocks for yourself!",
        price: 160
      },
      {
        ownerId: 4,
        address: "2323 Harbor View Dr",
        city: "Newport Beach",
        state: "California",
        country: "USA",
        lat: 33.6176,
        lng: -117.9285,
        name: "Crystal Cove Campground",
        description: "Nestled among Sedona's stunning red rock formations, the Red Rock Campground provides a truly unforgettable camping experience. Imagine waking up to the warm glow of the sun rising over the rocks and casting a golden hue on your surroundings. As you step out of your tent, you'll be greeted with panoramic views of the vibrant red cliffs, creating a breathtaking backdrop for your day's adventures. Whether you're hiking through the rugged terrain, biking along the winding trails, or simply lounging around the campground, you'll be surrounded by the beauty of nature at every turn. With so much to explore and discover in this awe-inspiring destination, the Red Rock Campground is the perfect place to rest, relax, and recharge. Come and experience the magic of Sedona's red rocks for yourself!",
        price: 170
      },
      {
        ownerId: 4,
        address: "2424 Winding Rd",
        city: "Savannah",
        state: "Georgia",
        country: "USA",
        lat: 32.0575,
        lng: -81.0949,
        name: "Savannah River Campground",
        description: "Nestled among Sedona's stunning red rock formations, the Red Rock Campground provides a truly unforgettable camping experience. Imagine waking up to the warm glow of the sun rising over the rocks and casting a golden hue on your surroundings. As you step out of your tent, you'll be greeted with panoramic views of the vibrant red cliffs, creating a breathtaking backdrop for your day's adventures. Whether you're hiking through the rugged terrain, biking along the winding trails, or simply lounging around the campground, you'll be surrounded by the beauty of nature at every turn. With so much to explore and discover in this awe-inspiring destination, the Red Rock Campground is the perfect place to rest, relax, and recharge. Come and experience the magic of Sedona's red rocks for yourself!",
        price: 135
      },
      {
        ownerId: 4,
        address: "2525 Lake Shore Dr",
        city: "Burlington",
        state: "Vermont",
        country: "USA",
        lat: 44.4938,
        lng: -73.2204,
        name: "Lake Champlain Campground",
        description: "Nestled among Sedona's stunning red rock formations, the Red Rock Campground provides a truly unforgettable camping experience. Imagine waking up to the warm glow of the sun rising over the rocks and casting a golden hue on your surroundings. As you step out of your tent, you'll be greeted with panoramic views of the vibrant red cliffs, creating a breathtaking backdrop for your day's adventures. Whether you're hiking through the rugged terrain, biking along the winding trails, or simply lounging around the campground, you'll be surrounded by the beauty of nature at every turn. With so much to explore and discover in this awe-inspiring destination, the Red Rock Campground is the perfect place to rest, relax, and recharge. Come and experience the magic of Sedona's red rocks for yourself!",
        price: 145
      },
   {
      ownerId: 5,
      address: "2626 Beach Rd",
      city: "Santa Cruz",
      state: "California",
      country: "USA",
      lat: 36.9518,
      lng: -122.0271,
      name: "Seacliff State Beach Campground",
      description: "Nestled among Sedona's stunning red rock formations, the Red Rock Campground provides a truly unforgettable camping experience. Imagine waking up to the warm glow of the sun rising over the rocks and casting a golden hue on your surroundings. As you step out of your tent, you'll be greeted with panoramic views of the vibrant red cliffs, creating a breathtaking backdrop for your day's adventures. Whether you're hiking through the rugged terrain, biking along the winding trails, or simply lounging around the campground, you'll be surrounded by the beauty of nature at every turn. With so much to explore and discover in this awe-inspiring destination, the Red Rock Campground is the perfect place to rest, relax, and recharge. Come and experience the magic of Sedona's red rocks for yourself!",
      price:165
    },
     {
      ownerId: 1,
      address: "2727 Evergreen St",
      city: "Portland",
      state: "Oregon",
      country: "USA",
      lat: 45.5231,
      lng: -122.6765,
      name: "Forest Park Campground",
      description: "Nestled among Sedona's stunning red rock formations, the Red Rock Campground provides a truly unforgettable camping experience. Imagine waking up to the warm glow of the sun rising over the rocks and casting a golden hue on your surroundings. As you step out of your tent, you'll be greeted with panoramic views of the vibrant red cliffs, creating a breathtaking backdrop for your day's adventures. Whether you're hiking through the rugged terrain, biking along the winding trails, or simply lounging around the campground, you'll be surrounded by the beauty of nature at every turn. With so much to explore and discover in this awe-inspiring destination, the Red Rock Campground is the perfect place to rest, relax, and recharge. Come and experience the magic of Sedona's red rocks for yourself!",
      price: 150
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
      ownerId: { [Op.in]:
        [1,2,3,4,5]
      }
    }, {});
  }
};
