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
         url: "https://www.jerseysbest.com/wp-content/uploads/2019/02/LokalAframe_ExteriorJustinChiuupdate.jpg",
         preview: true
        },
        {
          spotId: 1,
          url: "https://cdn.vox-cdn.com/thumbor/HMOkbXE6uyiUYIc5CAVxG4PT8bk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19311085/d99ba571_4ea2_453d_8eb3_11459a57a038.jpg",
          preview: false
         },
         {
          spotId: 1,
          url: "urlforthethttps://i.pinimg.com/originals/2b/e4/87/2be4876ac1a3ebc8b4683bab2736dba4.jpghirdone",
          preview: false
         },
         {
          spotId: 1,
          url: "https://res.cloudinary.com/miles-extranet-dev/image/upload/v1574439050/Kentucky/account_photos/5/adf2e06892ca65fc8a71f07ccd68e27e_sliderCfallsfalls.jpg",
          preview: false
         },
         {
          spotId: 1,
          url: "https://static.wixstatic.com/media/0b4d85be01df4fe68f67503cd2fa0594.jpg/v1/fill/w_640,h_1296,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b4d85be01df4fe68f67503cd2fa0594.jpg",
          preview: false
         },
         {
          spotId: 2,
          url: "https://preview.redd.it/0cqiuyz9gv931.jpg?width=640&crop=smart&auto=webp&s=f9b0e5a67c7e36bcbc7999a5d67f0fec9c4f02ba",
          preview: true
         },
         {
           spotId: 2,
           url: "https://images.squarespace-cdn.com/content/v1/54692a3fe4b076bf5ecec508/1587647759729-QRNP55D3WE03RFAGWR7W/half-dome",
           preview: false
          },
          {
           spotId: 2,
           url: "https://wildlandtrekking.com/content/uploads/2022/05/venti-views-EOJDVJblvWw-unsplash-scaled.jpg",
           preview: false
          },
          {
           spotId: 2,
           url: "https://blog-assets.thedyrt.com/uploads/2018/02/half-dome-cables-2-1024x685.jpg",
           preview: false
          },
          {
           spotId: 2,
           url: "https://upload.travelawaits.com/ta/uploads/2023/01/firefall-yosemite-national-park-800x800.jpg",
           preview: false
          },
          {
            spotId: 3,
            url: "https://www.coloradoinfo.com/sites/default/files/styles/open_graph_image/public/masts/estes-park-town.jpg?itok=ZiIOq-Q8",
            preview: true
           },
           {
             spotId: 3,
             url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/d7/dc/9c/bigphotoforestes-park.jpg?w=700&h=500&s=1",
             preview: false
            },
            {
             spotId: 3,
             url: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Estes_park_golfcourse.jpg",
             preview: false
            },
            {
             spotId: 3,
             url: "https://media.timeout.com/images/105241323/image.jpg",
             preview: false
            },
            {
             spotId: 3,
             url: "https://s31606.pcdn.co/wp-content/uploads/2020/01/iStock-136281849-scaled-e1579302689998.jpg",
             preview: false
            },
                 {
         spotId: 4,
         url: "https://supersherpas.com/wp-content/uploads/2022/03/Screenshot-2022-03-09-210806.jpg",
         preview: true
        },
        {
          spotId: 4,
          url: "https://www.territorysupply.com/wp-content/uploads/2020/03/lockett-meadow-camping.jpg",
          preview: false
         },
         {
          spotId: 4,
          url: "https://thecollinsrealestateteam.com/wp-content/uploads/2016/02/2900179555_74540f4eff_b.jpg",
          preview: false
         },
         {
          spotId: 4,
          url: "https://www.planetware.com/photos-large/USAZ/arizona-sedona-pine-flat-campground.jpg",
          preview: false
         },
         {
          spotId: 4,
          url: "https://tmbtent.com/wp-content/uploads/2021/08/Forest-Service-Road-171-dispersed-camping.jpg",
          preview: false
         },

         {
          spotId: 5,
          url: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/5/26/0/shutterstock_camping-tent-activity-on-beach-1615352614.jpg.rend.hgtvcom.966.644.suffix/1653592300933.jpeg",
          preview: true
         },
         {
           spotId: 5,
           url: "https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-72e5e55/images/things-to-do-on-south-padre-island-isla-blanca.jpg",
           preview: false
          },
          {
           spotId: 5,
           url: "https://media-cdn.tripadvisor.com/media/photo-s/01/b0/9d/d9/south-padre-island-aerial.jpg",
           preview: false
          },
          {
           spotId: 5,
           url: "https://media.timeout.com/images/105278564/image.jpg",
           preview: false
          },
          {
           spotId: 5,
           url: "https://i0.wp.com/localprofile.com/wp-content/uploads/2021/05/shutterstock_751114876-scaled.jpg",
           preview: false
          },
          {
            spotId: 6,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa-8qtjyUFG9zLyCi5oOLuuu0n7LvdKAgnUA&usqp=CAU",
            preview: true
           },
           {
             spotId: 6,
             url: "https://vacationtelluride.com/wp-content/uploads/2021/03/cabins-telluride-colorado.jpeg",
             preview: false
            },
            {
             spotId: 6,
             url: "https://cf.bstatic.com/images/hotel/max1024x768/121/121301885.jpg",
             preview: false
            },
            {
             spotId: 6,
             url: "https://tmbtent.com/wp-content/uploads/2021/09/Breckenridge-CO.jpg",
             preview: false
            },
            {
             spotId: 6,
             url: "https://www.insiderfamilies.com/wp-content/uploads/2021/09/breckenridge-colorado-cabins-Depositphotos_36153037_xl-2015-750x350.jpg",
             preview: false
            },
            {
              spotId: 7,
              url: "https://global-uploads.webflow.com/5f691eeb591d83f2cb7696ab/5f84d2aee0d597add1b865af_Cabin.jpg",
              preview: true
             },
             {
               spotId: 7,
               url: "https://www.compass.com/m/2328d6c1eaf7f77f9effe2b4af4208f6c517f90c_img_0/origin.jpg",
               preview: false
              },
              {
               spotId: 7,
               url: "https://images.trvl-media.com/lodging/59000000/58070000/58062600/58062559/a648ae8a.jpg?impolicy=resizecrop&rw=500&ra=fit",
               preview: false
              },
              {
               spotId: 7,
               url: "https://static.move.com/blogs/2012/5/0501mill1.jpg",
               preview: false
              },
              {
               spotId: 7,
               url: "https://static.move.com/blogs/2012/5/0501mill3.jpg",
               preview: false
              },
              {
                spotId: 8,
                url: "https://res.cloudinary.com/rocimages/image/upload/s--JJhzZRZA--/t_npr_propprime_660w/images/yellowstone/100398/explorer-cabins-at-yellowstone-720x240_pan.jpg",
                preview: true
               },
               {
                 spotId: 8,
                 url: "https://cdn.audleytravel.com/5593/3995/79/542808-explorer-cabins-at-west-yellowstone-yellowstone-national-park.jpg",
                 preview: false
                },
                {
                 spotId: 8,
                 url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/bc/98/2c.jpg",
                 preview: false
                },
                {
                 spotId: 8,
                 url: "https://www.visitbigsky.com/sites/default/files/styles/scale_1440/public/2021-04/Yellowstone%202.jpg?itok=UQt8zOsF",
                 preview: false
                },
                {
                 spotId: 8,
                 url: "https://cdn.generationvoyage.fr/2020/01/visiter-yellowstone-parc-national.jpg",
                 preview: false
                },

                {
                  spotId: 9,
                  url: "https://a0.muscache.com/im/pictures/miso/Hosting-727078257106229904/original/904c389f-45c1-4b5e-8fda-e085426d7714.jpeg?im_w=720",
                  preview: true
                 },
                 {
                   spotId: 9,
                   url: "https://wanderingourworld.com/wp-content/uploads/2022/10/camping-iStock-1383464109-1024x768.jpg",
                   preview: false
                  },
                  {
                   spotId: 9,
                   url: "https://blog-assets.thedyrt.com/uploads/2018/08/hancockNH.jpg",
                   preview: false
                  },
                  {
                   spotId: 9,
                   url: "https://www.ausableriver.org/sites/default/files/images/Bluebuerry_Sunrise2.jpg",
                   preview: false
                  },
                  {
                   spotId: 9,
                   url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhm1KQzPc4ZOtR3HB8IIG-efUU2DdbgjWmO3md2eGP-jNqIMSn2f9MPsBKCWZzMPzEf90&usqp=CAU",
                   preview: false
                  },

                  {
                    spotId: 10,
                    url: "https://i0.wp.com/files.tripstodiscover.com/files/2020/09/02a6b6df-bb89-4721-ba7f-c703d94a99d4.jpg?resize=784%2C588",
                    preview: true
                   },
                   {
                     spotId: 10,
                     url: "https://fh-sites.imgix.net/sites/1836/2020/03/05180339/Cliff-Palace_Mesa-Verde-N.P-1.jpg?auto=compress%2Cformat&w=700&h=700&fit=max",
                     preview: false
                    },
                    {
                     spotId: 10,
                     url: "https://www.denverpost.com/wp-content/uploads/2022/04/TDP-L-Ancient-Mesa-Verde.jpg?w=960",
                     preview: false
                    },
                    {
                     spotId: 10,
                     url: "https://patch.com/img/cdn20/users/22965241/20211209/025800/styles/patch_image/public/794e91e5-32f5-4605-932f-0622d65c0cda___09143813457.jpg",
                     preview: false
                    },
                    {
                     spotId: 10,
                     url: "https://tmbtent.com/wp-content/uploads/2021/02/Screenshot-2021-02-21-at-2.36.23-PM.jpg",
                     preview: false
                    },
                    {
                      spotId: 11,
                      url: "https://afar.brightspotcdn.com/dims4/default/4d9b414/2147483647/strip/false/crop/1400x933+0+0/resize/1400x933!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.amazonaws.com%2Fbrightspot%2F19%2F39%2F8a23a4a7564f39e2d7bdb95f53ef%2Foriginal-1-blue-20ridge-20cabin-20rentals-lede.jpg",
                      preview: true
                     },
                     {
                       spotId: 11,
                       url: "https://www.myglobalviewpoint.com/wp-content/uploads/2022/01/BlueRidge-Featured.jpeg",
                       preview: false
                      },
                      {
                       spotId: 11,
                       url: "https://res.cloudinary.com/resortsandlodges/image/fetch/w_800,h_520,c_fill/https://media.travelnetsolutions.com/3d3e88f28f793e3858ee720bd23308b0/original.png",
                       preview: false
                      },
                      {
                       spotId: 11,
                       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYu5hJ20PvTBT0eWNkoRYiGJRUamQMifdEpmiLI8rC3NbfBi04BbbRxZABZ14XqL7pz4&usqp=CAU",
                       preview: false
                      },
                      {
                       spotId: 11,
                       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLeGphcbdforrUlEOMB04ir5nmhejpcaVCmuEv5UJguaDFq5zYt6dh-QqomVQw4YUghkA&usqp=CAU",
                       preview: false
                      },
                      {
                        spotId: 12,
                        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdInTg77-uxfNFaC7yQ_YceJcXTKvq6KaVP55JlAd7D90Lk05otunP9Mll1Y2zVz2d_o&usqp=CAU",
                        preview: true
                       },
                       {
                         spotId: 12,
                         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4ydViHZDaZexSGwjVcD8FYl2YDYKUVN03bKO8av97tLQ32HeemEfVs0NP9FA71pg8XE&usqp=CAU",
                         preview: false
                        },
                        {
                         spotId: 12,
                         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_fux1BYSA3piZ97jovfUxjE8MS7ec4v-yjL5XHgZTtpL67fq3WmmonroiDDbI72TZpo&usqp=CAU",
                         preview: false
                        },
                        {
                         spotId: 12,
                         url: "https://discoversouthcarolinaoutdoors.com/directus-master/media/00000000027.jpg",
                         preview: false
                        },
                        {
                         spotId: 12,
                         url: "https://photos.thedyrt.com/photo/625236/media/vermont-woodford-state-park_89bcbc45-d83f-4121-b557-6de900c1a301.jpg?width=1200&height=630&fit=crop&auto=webp",
                         preview: false
                        },
                        {
                          spotId: 13,
                          url: "https://newengland.com/wp-content/uploads/acadia-cabin6.jpg",
                          preview: true
                         },
                         {
                           spotId: 13,
                           url: "urlforthesehttps://a0.muscache.com/im/pictures/6b3b0f01-db0d-4de1-8251-8dbf01c44a25.jpg?im_w=720condone",
                           preview: false
                          },
                          {
                           spotId: 13,
                           url: "https://a0.muscache.com/im/pictures/5cc6eb5e-9817-47f0-9f57-d620e1fb4789.jpg?im_w=720",
                           preview: false
                          },
                          {
                           spotId: 13,
                           url: "https://images.trvl-media.com/lodging/19000000/18930000/18921700/18921623/415f60f2.jpg?impolicy=fcrop&w=1000&h=666&quality=medium",
                           preview: false
                          },
                          {
                           spotId: 13,
                           url: "https://newenglandwithlove.com/wp-content/uploads/2021/06/ea0c85a1.f10.jpg",
                           preview: false
                          },
                          {
                            spotId: 14,
                            url: "https://azcampguide.com/wp-content/uploads/2018/03/Tuweep-Campground.jpg",
                            preview: true
                           },
                           {
                             spotId: 14,
                             url: "https://azcampguide.com/wp-content/uploads/2018/02/Alamo-Canyon-Campground.jpg",
                             preview: false
                            },
                            {
                             spotId: 14,
                             url: "https://m1.cbhomes.com/p/618/9114346/d664adaDc8844CA/pds23tp.jpg",
                             preview: false
                            },
                            {
                             spotId: 14,
                             url: "https://www.uncovercolorado.com/wp-content/uploads/2020/07/gross-reservoir-tent-camping-boulder-colorado2.jpg",
                             preview: false
                            },
                            {
                             spotId: 14,
                             url: "https://hikingproject.com/assets/photos/hike/7081091_medium_1636383157.jpg?cache=1683330974",
                             preview: false
                            },
                            {
                              spotId: 15,
                              url: "https://www.redrockcanyonlv.org/wp-content/uploads/red-rock-campground-tent-at-sunset.jpg",
                              preview: true
                             },
                             {
                               spotId: 15,
                               url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgz_I3E5ID5Ljto8GdUd47Cv0Hj6znpnfNneVsMFYhWul-5SGfRY0RGz6A3n2SBNjFmGA&usqp=CAU",
                               preview: false
                              },
                              {
                               spotId: 15,
                               url: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/r/e/RedRockCanyon_Simon_4000x2200.jpeg?crop=0%2C0%2C4000%2C2200&wid=4000&hei=2200&scl=1.0",
                               preview: false
                              },
                              {
                               spotId: 15,
                               url: "https://www.travellens.co/content/images/2022/03/Red-Rock-Canyon.jpg",
                               preview: false
                              },
                              {
                               spotId: 15,
                               url: "https://www.foxintheforest.net/wp-content/uploads/2020/10/Things_to_do_Red_Rock_Canyon-8-scaled.jpg",
                               preview: false
                              },
                              {
                                spotId: 16,
                                url: "https://www.crystalcove.ca/sites/default/files/styles/image_additional_md/public/images/additional/cabin12_0.jpg?itok=sJHG4fV_",
                                preview: true
                               },
                               {
                                 spotId: 16,
                                 url: "https://www.crystalcove.ca/sites/default/files/styles/card_image_xl/public/images/listing/C7_2.jpg?h=e91a75a9&itok=nBz_WRpu",
                                 preview: false
                                },
                                {
                                 spotId: 16,
                                 url: "https://www.travelingislanders.com/wp-content/uploads/2016/05/Crystal-Cove-Beach-Resort-1920x1080.jpg",
                                 preview: false
                                },
                                {
                                 spotId: 16,
                                 url: "https://www.ocregister.com/wp-content/uploads/2021/11/OCR-L-CRYSTALCOVE-1128-02-PB-1.jpg?w=620",
                                 preview: false
                                },
                                {
                                 spotId: 16,
                                 url: "https://crystalcove.org/wp-content/uploads/2017/05/DSC_8339-copy-ZF-7474-05128-1-011-1024x683.jpg",
                                 preview: false
                                },
                                {
                                  spotId: 17,
                                  url: "https://www.washingtonislandcampground.com/wp-content/uploads/2018/03/Washington-Island-Campground_Cabin-2-1-877x800.jpg",
                                  preview: true
                                 },
                                 {
                                   spotId: 17,
                                   url: "https://images.squarespace-cdn.com/content/v1/5272a961e4b0191f8c62afc6/1387045893321-2284JRF8I3A3ESC7NKLY/P3220049.JPG?format=1000w",
                                   preview: false
                                  },
                                  {
                                   spotId: 17,
                                   url: "https://www.exploregeorgia.org/sites/default/files/legacy_images/yurt-camping-at-high-falls-state-park-1496153710.jpg",
                                   preview: false
                                  },
                                  {
                                   spotId: 17,
                                   url: "https://images.squarespace-cdn.com/content/v1/591c939c3e00be51c51d63e6/1495047635963-QRJ2ILB2NXOF0V67TWKR/savannah-river.jpg?format=2500w",
                                   preview: false
                                  },
                                  {
                                   spotId: 17,
                                   url: "https://www.atlantatrails.com/wp-content/uploads/2018/01/savannah-running-hiking-trails.jpg",
                                   preview: false
                                  },
                                  {
                                    spotId: 18,
                                    url: "https://photos.thedyrt.com/photo/111509/media/wisconsin-perrot-state-park_82bfc3950e678018dcc301bbfd27a1ac.jpg",
                                    preview: true
                                   },
                                   {
                                     spotId: 18,
                                     url: "https://vermontexplored.com/wp-content/uploads/2021/02/view-mt-philo-state-park.jpg",
                                     preview: false
                                    },
                                    {
                                     spotId: 18,
                                     url: "https://images.fineartamerica.com/images/artworkimages/medium/1/vibrant-sunset-over-lake-champlain-and-the-adirondacks-from-mount-philo-charlotte-vermont-toby-mcguire.jpg",
                                     preview: false
                                    },
                                    {
                                     spotId: 18,
                                     url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/f5/b6/2e/cumberland-bay-state.jpg?w=1200&h=-1&s=1",
                                     preview: false
                                    },
                                    {
                                     spotId: 18,
                                     url: "https://photos.thedyrt.com/photo/778980/media/mississippi-puskus-recreation-area_d8831d05-c877-411b-976b-14ac24de1e33.jpg?crop=1%3A1%2Csmart&auto=webp",
                                     preview: false
                                    },
                                    {
                                      spotId: 19,
                                      url: "https://daytrippen.com/wp-content/uploads/2014/11/campsite-new-brighton.jpg",
                                      preview: true
                                     },
                                     {
                                       spotId: 19,
                                       url: "https://www.norcalfamilyadventures.com/.a/6a014e5fe15b31970c0162fc8d6293970d-600wi",
                                       preview: false
                                      },
                                      {
                                       spotId: 19,
                                       url: "https://mediaim.expedia.com/destination/2/03213ce689de934214e6e3c7aa980cb5.jpg",
                                       preview: false
                                      },
                                      {
                                       spotId: 19,
                                       url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/a1/a9.jpg",
                                       preview: false
                                      },
                                      {
                                       spotId: 19,
                                       url: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-10/HERO%201_Oregon%20Coast-Photo%20by%20Larry%20Geddis_CROPPED_Web72DPI.jpg?h=433af1c1&itok=eOk1quMy",
                                       preview: false
                                      },
                                      {
                                        spotId: 20,
                                        url: "https://res.cloudinary.com/miles-extranet-dev/image/upload/w_800,h_480,c_fill,q_60/ArkansasSP/account_photos/34/8a86e145442e1b1c2102d43257f824ab_MRSPStormCreekCampground20211115KJ1_3115ps",
                                        preview: true
                                       },
                                       {
                                         spotId: 20,
                                         url: "https://rivertravelmagazine.com/wp-content/uploads/2021/03/Arkansas-State-Tourism-FI-1280x640.jpg",
                                         preview: false
                                        },
                                        {
                                         spotId: 20,
                                         url: "https://res.cloudinary.com/dragonspell/images/w_800,h_480,dpr_auto,fl_progressive:steep,f_auto/w_800,h_480/v1623257541/www.travelportland.com/cropped-mktg-20192106-Forest-Park-0004-scaled-1/cropped-mktg-20192106-Forest-Park-0004-scaled-1.jpg",
                                         preview: false
                                        },
                                        {
                                         spotId: 20,
                                         url: "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1200,w_1600,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/0617-forest-park-stone-house_w82t7g.jpg",
                                         preview: false
                                        },
                                        {
                                         spotId: 20,
                                         url: "https://res.cloudinary.com/dpcbzfiye/image/upload/w_1620,c_fit,dpr_auto,f_auto,q_auto,fl_progressive/v1552405486/uoxscediqzrcs1wxxydg.jpg",
                                         preview: false
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
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      preview: { [Op.in]: [true, false] }
    }, {});
  }
  }

  // down: (queryInterface, Sequelize) => {

  //   return queryInterface.bulkDelete(options, null, { truncate: true, cascade: true, restartIdentity: true });
  //  }
