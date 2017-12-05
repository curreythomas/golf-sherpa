require('dotenv').config()
const PouchDB = require('pouchdb')
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)

db.bulkDocs([
  {
    _id: 'faq_contact',
    question: 'How do I contact Golf Nomads?',
    answer:
      'Go to our contact page at url{"http://www.golfnomads.co/contact"} and fill out our contact form.'
  },
  {
    _id: 'faq_courses',
    question: 'Where can I see a list of all golf courses?',
    answer:
      'Navigate to the courses page through the bottom navigation and see all the courses you want!'
  },
  {
    _id: 'faq_individual_course',
    question: 'How can I see more information about a specific course?',
    answer:
      'From the courses page, you can click on a specific course and you will be brought to that individual course page and see more information.'
  },
  {
    _id: 'faq_contact_a_course',
    question: 'How can I contact a golf course?',
    answer:
      'After navigating to a specific courses information there is a button to link you to their website. Alternatively, there is a button you may click to call them directly.'
  },
  {
    _id: 'course_charleston_national',
    name: 'Charleston National Golf Club',
    address: '1360 National Drive',
    city: 'Mount Pleasant',
    state: 'South Carolina',
    zip: '29466',
    description:
      "Charleston National is a Rees Jones designed championship golf course, open to the public, year round. Rated by Golf Digest as the best non-resort golf course in the Charleston area, it truly is Charleston's hidden gem. Charleston National offers exceptional values for your golfing experience. In addition to an outstanding golf course, you will enjoy our full-size state of the art practice facility and driving range, and our recently renovated Rees Jones pub, along with a dedicated staff to assist you. Charleston National Golf Club, with all its southern charm, is dedicated to serving not only your golfing needs, but your social needs as well. The Charleston National clubhouse now offers you and your family a special place to host a small wedding, private meeting or special family event. Allow us to provide you with a memorable Low Country experience with Southern Hospitality and all its charm!",
    phoneNumber: '843-203-9994',
    website: 'http://www.charlestonnationalgolf.com/',
    date: '12/16/2017',
    time: '7:08AM',
    golfers: '4',
    holes: '18',
    rate: '67.00',
    type: 'course',
    picURL: 'http://golf.carolinas.com/wp-content/uploads/2017/09/banner_1.jpg'
  },
  {
    _id: 'course_charleston_national2',
    name: 'Charleston National Golf Club',
    address: '1360 National Drive',
    city: 'Mount Pleasant',
    state: 'South Carolina',
    zip: '29466',
    description:
      "Charleston National is a Rees Jones designed championship golf course, open to the public, year round. Rated by Golf Digest as the best non-resort golf course in the Charleston area, it truly is Charleston's hidden gem. Charleston National offers exceptional values for your golfing experience. In addition to an outstanding golf course, you will enjoy our full-size state of the art practice facility and driving range, and our recently renovated Rees Jones pub, along with a dedicated staff to assist you. Charleston National Golf Club, with all its southern charm, is dedicated to serving not only your golfing needs, but your social needs as well. The Charleston National clubhouse now offers you and your family a special place to host a small wedding, private meeting or special family event. Allow us to provide you with a memorable Low Country experience with Southern Hospitality and all its charm!",
    phoneNumber: '843-203-9994',
    website: 'http://www.charlestonnationalgolf.com/',
    date: '12/16/2017',
    time: '7:15AM',
    golfers: '4',
    holes: '18',
    rate: '67.00',
    type: 'course',
    picURL: 'http://golf.carolinas.com/wp-content/uploads/2017/09/banner_1.jpg'
  },
  {
    _id: 'course_charleston_national3',
    name: 'Charleston National Golf Club',
    address: '1360 National Drive',
    city: 'Mount Pleasant',
    state: 'South Carolina',
    zip: '29466',
    description:
      "Charleston National is a Rees Jones designed championship golf course, open to the public, year round. Rated by Golf Digest as the best non-resort golf course in the Charleston area, it truly is Charleston's hidden gem. Charleston National offers exceptional values for your golfing experience. In addition to an outstanding golf course, you will enjoy our full-size state of the art practice facility and driving range, and our recently renovated Rees Jones pub, along with a dedicated staff to assist you. Charleston National Golf Club, with all its southern charm, is dedicated to serving not only your golfing needs, but your social needs as well. The Charleston National clubhouse now offers you and your family a special place to host a small wedding, private meeting or special family event. Allow us to provide you with a memorable Low Country experience with Southern Hospitality and all its charm!",
    phoneNumber: '843-203-9994',
    website: 'http://www.charlestonnationalgolf.com/',
    date: '12/16/2017',
    time: '7:22AM',
    golfers: '4',
    holes: '18',
    rate: '67.00',
    type: 'course',
    picURL: 'http://golf.carolinas.com/wp-content/uploads/2017/09/banner_1.jpg'
  },
  {
    _id: 'course_charleston_national4',
    name: 'Charleston National Golf Club',
    address: '1360 National Drive',
    city: 'Mount Pleasant',
    state: 'South Carolina',
    zip: '29466',
    description:
      "Charleston National is a Rees Jones designed championship golf course, open to the public, year round. Rated by Golf Digest as the best non-resort golf course in the Charleston area, it truly is Charleston's hidden gem. Charleston National offers exceptional values for your golfing experience. In addition to an outstanding golf course, you will enjoy our full-size state of the art practice facility and driving range, and our recently renovated Rees Jones pub, along with a dedicated staff to assist you. Charleston National Golf Club, with all its southern charm, is dedicated to serving not only your golfing needs, but your social needs as well. The Charleston National clubhouse now offers you and your family a special place to host a small wedding, private meeting or special family event. Allow us to provide you with a memorable Low Country experience with Southern Hospitality and all its charm!",
    phoneNumber: '843-203-9994',
    website: 'http://www.charlestonnationalgolf.com/',
    date: '12/16/2017',
    time: '7:30AM',
    golfers: '4',
    holes: '18',
    rate: '67.00',
    type: 'course',
    picURL: 'http://golf.carolinas.com/wp-content/uploads/2017/09/banner_1.jpg'
  },
  {
    _id: 'course_coosaw_creek',
    name: 'Coosaw Creek Country Club',
    address: '4110 Club Course Dr',
    city: 'North Charleston',
    state: 'SC',
    zip: '29420',
    description:
      'The 18-hole, Par 71 Arthur Hills designed golf course meanders through pristine wetlands surrounded by the natural beauty of majestic oaks and towering pines. A complete golf practice facility equipped with a natural grass driving range, a chipping and a putting green is located near the club house. Golf leagues for men and women play weekly, and member tournaments are hosted throughout the year. The Clubhouse is located at the hub of the Coosaw community, featuring a well supplied golf shop, locker rooms and an impressive restaurant – the Palmetto Grill. The Grill offers a wide variety of menu options and libations in a friendly atmosphere. Whether you want to grab a bite to eat after a round of golf, have lunch with friends, or enjoy a romantic evening with someone special, the Grill is one of North Charleston’s premier establishments.',
    phoneNumber: '843-767-9000',
    website: 'http://www.coosawcreek.com',
    date: '12/16/2017',
    time: '7:05AM',
    golfers: '4',
    holes: '18',
    rate: '79.00',
    type: 'course',
    picURL: 'https://images.golftrips.com/articles/CoosawIsland.jpg'
  },
  {
    _id: 'course_coosaw_creek2',
    name: 'Coosaw Creek Country Club',
    address: '4110 Club Course Dr',
    city: 'North Charleston',
    state: 'SC',
    zip: '29420',
    description:
      'The 18-hole, Par 71 Arthur Hills designed golf course meanders through pristine wetlands surrounded by the natural beauty of majestic oaks and towering pines. A complete golf practice facility equipped with a natural grass driving range, a chipping and a putting green is located near the club house. Golf leagues for men and women play weekly, and member tournaments are hosted throughout the year. The Clubhouse is located at the hub of the Coosaw community, featuring a well supplied golf shop, locker rooms and an impressive restaurant – the Palmetto Grill. The Grill offers a wide variety of menu options and libations in a friendly atmosphere. Whether you want to grab a bite to eat after a round of golf, have lunch with friends, or enjoy a romantic evening with someone special, the Grill is one of North Charleston’s premier establishments.',
    phoneNumber: '843-767-9000',
    website: 'http://www.coosawcreek.com',
    date: '12/16/2017',
    time: '7:13AM',
    golfers: '2',
    holes: '18',
    rate: '79.00',
    type: 'course',
    picURL: 'https://images.golftrips.com/articles/CoosawIsland.jpg'
  },
  {
    _id: 'course_coosaw_creek3',
    name: 'Coosaw Creek Country Club',
    address: '4110 Club Course Dr',
    city: 'North Charleston',
    state: 'SC',
    zip: '29420',
    description:
      'The 18-hole, Par 71 Arthur Hills designed golf course meanders through pristine wetlands surrounded by the natural beauty of majestic oaks and towering pines. A complete golf practice facility equipped with a natural grass driving range, a chipping and a putting green is located near the club house. Golf leagues for men and women play weekly, and member tournaments are hosted throughout the year. The Clubhouse is located at the hub of the Coosaw community, featuring a well supplied golf shop, locker rooms and an impressive restaurant – the Palmetto Grill. The Grill offers a wide variety of menu options and libations in a friendly atmosphere. Whether you want to grab a bite to eat after a round of golf, have lunch with friends, or enjoy a romantic evening with someone special, the Grill is one of North Charleston’s premier establishments.',
    phoneNumber: '843-767-9000',
    website: 'http://www.coosawcreek.com',
    date: '12/16/2017',
    time: '7:21AM',
    golfers: '4',
    holes: '18',
    rate: '79.00',
    type: 'course',
    picURL: 'https://images.golftrips.com/articles/CoosawIsland.jpg'
  },
  {
    _id: 'course_coosaw_creek4',
    name: 'Coosaw Creek Country Club',
    address: '4110 Club Course Dr',
    city: 'North Charleston',
    state: 'SC',
    zip: '29420',
    description:
      'The 18-hole, Par 71 Arthur Hills designed golf course meanders through pristine wetlands surrounded by the natural beauty of majestic oaks and towering pines. A complete golf practice facility equipped with a natural grass driving range, a chipping and a putting green is located near the club house. Golf leagues for men and women play weekly, and member tournaments are hosted throughout the year. The Clubhouse is located at the hub of the Coosaw community, featuring a well supplied golf shop, locker rooms and an impressive restaurant – the Palmetto Grill. The Grill offers a wide variety of menu options and libations in a friendly atmosphere. Whether you want to grab a bite to eat after a round of golf, have lunch with friends, or enjoy a romantic evening with someone special, the Grill is one of North Charleston’s premier establishments.',
    phoneNumber: '843-767-9000',
    website: 'http://www.coosawcreek.com',
    date: '12/16/2017',
    time: '7:29AM',
    golfers: '2',
    holes: '18',
    rate: '79.00',
    type: 'course',
    picURL: 'https://images.golftrips.com/articles/CoosawIsland.jpg'
  },
  {
    _id: 'course_dunes_west',
    name: 'Dunes West Golf & River Club',
    address: '3535 Wando Plantation Way',
    city: 'Mount Pleasant',
    state: 'SC',
    zip: '29466',
    description:
      "Steeped in the history and beauty of the South Carolina lowcountry, Dunes West Golf & River Club is Charleston’s premier golf destination. Located in Mt. Pleasant, less than 20 minutes from historic downtown Charleston, Dunes West combines a masterful Arthur Hills designed course, a charming clubhouse overlooking Wagner Creek and some of the area’s most spectacular scenery into a truly world-class and one of a kind experience. Nationally acclaimed by Golf Magazine and Golf Digest as a 'Top 10 Resort Course', Dunes West’s championship golf course designed by Arthur Hills takes full advantage of its spectacular lowcountry setting. The par 72 course plays 6871 yards, beckoning players of all handicaps, and combines with Dunes West’s first class club facilities to provide a world-class golf experience. The opening holes have generous landing areas and beautiful green settings complete with the undulation and bunkering that are the Arthur Hills signature. The back nine features some beautiful marsh and water views culminating in the 18th hole's challenging finish on a dual green split by the marshes of Wagner Creek.",
    phoneNumber: '843-856-9000',
    website: 'http://www.duneswestgolfclub.com/',
    date: '12/16/2017',
    time: '7:03AM',
    golfers: '2',
    holes: '18',
    rate: '76.00',
    type: 'course',
    picURL:
      'http://www.charlestongolfguide.com/images/thumb.php?src=/images/courses/listings/dunes_west_1.jpg&w=550&h=393&zc=1'
  },
  {
    _id: 'course_dunes_west2',
    name: 'Dunes West Golf & River Club',
    address: '3535 Wando Plantation Way',
    city: 'Mount Pleasant',
    state: 'SC',
    zip: '29466',
    type: 'course',
    description:
      "Steeped in the history and beauty of the South Carolina lowcountry, Dunes West Golf & River Club is Charleston’s premier golf destination. Located in Mt. Pleasant, less than 20 minutes from historic downtown Charleston, Dunes West combines a masterful Arthur Hills designed course, a charming clubhouse overlooking Wagner Creek and some of the area’s most spectacular scenery into a truly world-class and one of a kind experience. Nationally acclaimed by Golf Magazine and Golf Digest as a 'Top 10 Resort Course', Dunes West’s championship golf course designed by Arthur Hills takes full advantage of its spectacular lowcountry setting. The par 72 course plays 6871 yards, beckoning players of all handicaps, and combines with Dunes West’s first class club facilities to provide a world-class golf experience. The opening holes have generous landing areas and beautiful green settings complete with the undulation and bunkering that are the Arthur Hills signature. The back nine features some beautiful marsh and water views culminating in the 18th hole's challenging finish on a dual green split by the marshes of Wagner Creek.",
    phoneNumber: '843-856-9000',
    website: 'http://www.duneswestgolfclub.com/',
    date: '12/16/2017',
    time: '7:11AM',
    golfers: '4',
    holes: '18',
    rate: '76.00',
    type: 'course',
    picURL:
      'http://www.charlestongolfguide.com/images/thumb.php?src=/images/courses/listings/dunes_west_1.jpg&w=550&h=393&zc=1'
  },
  {
    _id: 'course_dunes_west3',
    name: 'Dunes West Golf & River Club',
    address: '3535 Wando Plantation Way',
    city: 'Mount Pleasant',
    state: 'SC',
    zip: '29466',
    description:
      "Steeped in the history and beauty of the South Carolina lowcountry, Dunes West Golf & River Club is Charleston’s premier golf destination. Located in Mt. Pleasant, less than 20 minutes from historic downtown Charleston, Dunes West combines a masterful Arthur Hills designed course, a charming clubhouse overlooking Wagner Creek and some of the area’s most spectacular scenery into a truly world-class and one of a kind experience. Nationally acclaimed by Golf Magazine and Golf Digest as a 'Top 10 Resort Course', Dunes West’s championship golf course designed by Arthur Hills takes full advantage of its spectacular lowcountry setting. The par 72 course plays 6871 yards, beckoning players of all handicaps, and combines with Dunes West’s first class club facilities to provide a world-class golf experience. The opening holes have generous landing areas and beautiful green settings complete with the undulation and bunkering that are the Arthur Hills signature. The back nine features some beautiful marsh and water views culminating in the 18th hole's challenging finish on a dual green split by the marshes of Wagner Creek.",
    phoneNumber: '843-856-9000',
    website: 'http://www.duneswestgolfclub.com/',
    date: '12/16/2017',
    time: '7:19AM',
    golfers: '2',
    holes: '9',
    rate: '45.00',
    type: 'course',
    picURL:
      'http://www.charlestongolfguide.com/images/thumb.php?src=/images/courses/listings/dunes_west_1.jpg&w=550&h=393&zc=1'
  },
  {
    _id: 'course_dunes_west4',
    name: 'Dunes West Golf & River Club',
    address: '3535 Wando Plantation Way',
    city: 'Mount Pleasant',
    state: 'SC',
    zip: '29466',
    description:
      "Steeped in the history and beauty of the South Carolina lowcountry, Dunes West Golf & River Club is Charleston’s premier golf destination. Located in Mt. Pleasant, less than 20 minutes from historic downtown Charleston, Dunes West combines a masterful Arthur Hills designed course, a charming clubhouse overlooking Wagner Creek and some of the area’s most spectacular scenery into a truly world-class and one of a kind experience. Nationally acclaimed by Golf Magazine and Golf Digest as a 'Top 10 Resort Course', Dunes West’s championship golf course designed by Arthur Hills takes full advantage of its spectacular lowcountry setting. The par 72 course plays 6871 yards, beckoning players of all handicaps, and combines with Dunes West’s first class club facilities to provide a world-class golf experience. The opening holes have generous landing areas and beautiful green settings complete with the undulation and bunkering that are the Arthur Hills signature. The back nine features some beautiful marsh and water views culminating in the 18th hole's challenging finish on a dual green split by the marshes of Wagner Creek.",
    phoneNumber: '843-856-9000',
    website: 'http://www.duneswestgolfclub.com/',
    date: '12/16/2017',
    time: '7:27AM',
    golfers: '2',
    holes: '18',
    rate: '76.00',
    type: 'course',
    picURL:
      'http://www.charlestongolfguide.com/images/thumb.php?src=/images/courses/listings/dunes_west_1.jpg&w=550&h=393&zc=1'
  }
])
