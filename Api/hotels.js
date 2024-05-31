const sourceOfHotels = [
  {
    name: "Equitana Hotel Resort",
    activities: [
      "outdoors",
      "sport",
      "horse-riding",
      "spa",
      "bowling",
      "billiard",
      "minigolf",
      "jogging track",
      "fishing",
    ],
    address: "Martinice 1, 262 72 Březnice, Czech Republic",
    country: "czech republic",
    location: {
      latitude: 49.5791,
      longitude: 13.8301,
    },
    rating: 4,
    description:
      "The most beautiful view in the world is from the back of a horse. It's true. Don't be afraid and try horse riding with us. At our riding arena, we organize competitions such as the Czech Republic Championship in show jumping, but we also offer our services to absolute beginners in horse riding. Small children, parents, or even everyone together can enjoy a ride on horseback.",
    amenities: ["Free Wi-Fi", "Parking", "Wellness and SPA", "Restaurant"],
    web: "http://www.equitana.cz",
    images: ["horse-ocean.jpg", "horse-kid.jpg", "horse-passion.jpg"],
  },
  {
    name: "Hotel Kouty",
    activities: ["Tennis", "Beach volleyball", "Paddleboard", "Yoga"],
    address: "Zblovice 63, 675 26 Zblovice, Czech Republic",
    country: "czech republic",
    location: {
      latitude: 49.106,
      longitude: 15.645,
    },
    rating: 4,
    description:
      "The hotel is situated in a 10 hectare forest area with its own 2.5 hectare pond, in a picturesque valley at the foot of Melechov Hill. In the vicinity of the cottages flows a stream that feeds a trout pond with one of the cleanest waters in the Czech Republic. There are two tennis courts with artificial surface, playground, trampoline, beach volleyball court, gym, table tennis and sauna. Our little guests have at their disposal a playground and a trampoline. A few hundred meters away, there is a private fishing district in the village of Kouty – Homole Pond. You can catch trout, carp, or zander catfish. Allowances can be picked up at the hotel reception by prior arrangement.",
    amenities: ["Free Wi-Fi", "Parking", "Cedar sauna", "Restaurant"],
    web: "http://www.hotelkouty.cz",
    images: [
      "../../assets/Kouty/paddleboard.jpg",
      "../../assets/Kouty/beach-volleyball.jpg",
      "../../assets/Kouty/yoga.jpg",
    ],
  },
  {
    name: "Golf Resort Olomouc",
    activities: ["golf"],
    address: "Dolany-Véska 89, 783 16 Dolany, Czech Republic",
    country: "czech republic",
    location: {
      latitude: 49.635,
      longitude: 17.3023,
    },
    rating: 4,
    description:
      "A four-star hotel ideal for golf enthusiasts, offering rooms with a view of the championship course. The resort provides a rich breakfast buffet, free Wi-Fi, parking, and pet-friendly accommodations.",
    amenities: [
      "Free Wi-Fi",
      "Parking",
      "Pet-friendly",
      "Restaurant",
      "Training areas",
      "Club rentals",
    ],
    web: "https://www.golfolomouc.cz/en/hotel/hotel",
    images: [],
  },
  {
    name: "Caribe Bay",
    activities: ["Aquapark"],
    address:
      "Via Michelangelo Buonarroti, 15, 30016 Lido di Jesolo, Venice, Italy",
    country: "italy",
    location: {
      latitude: 45.5128,
      longitude: 12.6446,
    },
    rating: 4,
    description:
      "Caribe Bay is a Caribbean-themed water park offering a variety of attractions, including slides, pools, and live shows. It's a popular destination for family fun and water-based activities.",
    amenities: ["Themed pools", "Slides", "Shows", "Restaurants", "Free Wi-Fi"],
    web: "https://www.caribebay.it/en",
    images: [],
  },
  {
    name: "Six Senses Douro Valley",
    activities: [
      "painting",
      "water sports",
      "cooking masterclass",
      "Port wine tasting",
    ],
    address: "Quinta Vale de Abraão, Samodães, 5100-758 Lamego, Portugal",
    country: "portugal",
    location: {
      latitude: 41.161,
      longitude: -7.7851,
    },
    rating: 5,
    description:
      "This luxurious resort in the Douro Valley offers a blend of relaxation and activities, including cooking classes, wine tasting, and water sports. It is nestled in a picturesque vineyard setting.",
    amenities: ["Free Wi-Fi", "Spa", "Restaurant", "Pool", "Wine cellar"],
    web: "https://www.sixsenses.com/en/resorts/douro-valley/experiences/",
    images: [],
  },
  {
    name: "The Boulders Resort",
    activities: ["golf", "hot air balloons", "rock climbing"],
    address: "34631 N Tom Darlington Dr, Scottsdale, AZ 85262, USA",
    country: "united states",
    location: {
      latitude: 33.8466,
      longitude: -111.9277,
    },
    rating: 5,
    description:
      "Located in the Sonoran Desert, this resort offers unique outdoor adventures, including golf on its renowned courses, rock climbing, and hot air balloon rides.",
    amenities: [
      "Free Wi-Fi",
      "Spa",
      "Fitness center",
      "Restaurants",
      "Golf courses",
    ],
    web: "https://www.theboulders.com/outdoor-adventures/",
    images: [],
  },
  {
    name: "The Residences at Chevy Chase",
    activities: ["pillow fighting"],
    address: "8551 Connecticut Ave, Chevy Chase, MD 20815, USA",
    country: "united states",
    location: {
      latitude: 38.9965,
      longitude: -77.069,
    },
    rating: 0,
    description:
      "A unique residence offering an unusual activity of pillow fighting for $60, among other luxury amenities.",
    amenities: [
      "Luxury apartments",
      "Fitness center",
      "Pet-friendly",
      "Concierge services",
    ],
    web: "https://www.theresidenceschevychase.com/",
    images: [],
  },
  {
    name: "Loews Coronado Bay Resort",
    activities: ["surfing for dogs"],
    address: "4000 Coronado Bay Road, Coronado, CA 92118, USA",
    country: "united states",
    location: {
      latitude: 32.6325,
      longitude: -117.1384,
    },
    rating: 4.5,
    description:
      "Loews Coronado Bay Resort offers unique experiences including surfing lessons for dogs. Located on a private 15-acre peninsula, the resort is a tranquil waterfront oasis featuring stunning views of the Pacific Ocean and the San Diego skyline.",
    amenities: [
      "Free Wi-Fi",
      "Parking",
      "Wellness and Spa",
      "Restaurant",
      "Swimming Pool",
    ],
    web: "https://www.loewshotels.com/coronado-bay-resort",
    images: [],
  },
  {
    name: "Sonesta Select Boston Lowell Chelmsford",
    activities: ["exotic menu for animals"],
    address: "30 Industrial Ave E, Lowell, MA 01852, USA",
    country: "united states",
    location: {
      latitude: 42.6321,
      longitude: -71.3224,
    },
    rating: 4,
    description:
      "Sonesta Select Boston Lowell Chelmsford offers a unique dining experience with an exotic menu designed specifically for pets. The hotel is pet-friendly and aims to provide a comfortable and enjoyable stay for both guests and their animal companions.",
    amenities: ["Free Wi-Fi", "Parking", "Restaurant", "Fitness Center"],
    web: "https://www.sonesta.com/sonesta-select/ma/lowell/sonesta-select-boston-lowell-chelmsford",
    images: [],
  },
  {
    name: "Obriy Village",
    activities: ["traditional Ukrainian hot tubs", "horse riding"],
    address: "Opishnya, Poltava region, Ukraine",
    country: "ukraine",
    location: {
      latitude: 49.9722,
      longitude: 34.6083,
    },
    rating: 4.5,
    description:
      "Obriy Village offers unforgettable experiences in traditional Ukrainian hot tubs and horse riding through the picturesque surroundings of Opishnya. It's a place where you can truly appreciate the beauty of Ukrainian nature and hospitality.",
    amenities: ["Free Wi-Fi", "Parking", "Restaurant", "Spa"],
    web: "https://obriyvillage.com/",
    images: [],
  },
  {
    name: "Concept Stay Sirimiri",
    activities: ["horse riding", "hot tubs"],
    address: "Yaremche, Ukraine",
    country: "ukraine",
    location: {
      latitude: 48.4482,
      longitude: 24.5527,
    },
    rating: 4.5,
    description:
      "Concept Stay Sirimiri offers a unique stay with activities like horse riding and relaxing in hot tubs, set in the beautiful Carpathian Mountains. This retreat is perfect for those looking to connect with nature and unwind.",
    amenities: ["Free Wi-Fi", "Parking", "Restaurant", "Spa"],
    web: "https://en.concept-stay.com/sirimiri",
    images: [],
  },
  {
    name: "Scandi Eco Park",
    activities: [
      "pet therapy",
      "husky dogs",
      "horse riding",
      "bikejoring",
      "trekking",
    ],
    address: "Chernihiv, Ukraine",
    country: "ukraine",
    location: {
      latitude: 51.4982,
      longitude: 31.2893,
    },
    rating: 4.5,
    description:
      "Scandi Eco Park offers a variety of outdoor and therapeutic activities including pet therapy, husky dog interactions, horse riding, bikejoring, and trekking. It's an eco-friendly destination designed for nature lovers.",
    amenities: ["Free Wi-Fi", "Parking", "Restaurant", "Spa"],
    web: "https://www.facebook.com/scandi.eco.park/",
    images: [],
  },
  {
    name: "Aves Travel",
    activities: ["hot springs"],
    address: "Various locations, Ukraine",
    country: "ukraine",
    location: {
      latitude: 48.3794,
      longitude: 31.1656,
    },
    rating: 4.5,
    description:
      "Aves Travel offers curated stays at various hot spring resorts across Ukraine, providing rejuvenating experiences in natural thermal waters. These resorts are perfect for relaxation and health benefits.",
    amenities: ["Free Wi-Fi", "Parking", "Restaurant", "Spa"],
    web: "https://www.avestravel.com.ua/hotel_list/goteli-z-garjachimi-dzherelami-v-ukraini/",
    images: [],
  },
  {
    name: "The Manta Resort",
    activities: ["underwater hotel"],
    address: "Pemba Island, Tanzania",
    country: "tanzania",
    location: {
      latitude: -5.235,
      longitude: 39.7763,
    },
    rating: 5,
    description:
      "The Manta Resort offers an extraordinary experience with its underwater room, providing stunning views of the marine life in the crystal-clear waters of the Indian Ocean. It's a unique and luxurious escape on Pemba Island.",
    amenities: ["Free Wi-Fi", "Parking", "Restaurant", "Spa"],
    web: "https://themantaresort.com/",
    images: [],
  },
  {
    name: "Poseidon Undersea Resorts",
    activities: ["underwater hotel"],
    address: "Fiji Island",
    country: "fiji",
    location: {
      latitude: -17.7134,
      longitude: 178.065,
    },
    rating: 5,
    description:
      "Poseidon Undersea Resorts offers a unique experience of staying underwater in luxury suites, surrounded by the vibrant marine life of the Fijian islands. It's an unparalleled underwater adventure.",
    amenities: ["Free Wi-Fi", "Restaurant", "Spa", "Luxury suites"],
    web: "https://www.poseidonresorts.com/",
    images: [],
  },
  {
    name: "Icehotel",
    activities: ["ice hotel"],
    address: "Marknadsvägen 63, 981 91 Jukkasjärvi, Sweden",
    country: "sweden",
    location: {
      latitude: 67.85,
      longitude: 20.6161,
    },
    rating: 5,
    description:
      "The Icehotel in Sweden is a unique hotel built entirely out of ice and snow. Guests can stay in rooms sculpted by artists from around the world, offering an unforgettable Arctic experience.",
    amenities: ["Free Wi-Fi", "Restaurant", "Bar", "Art gallery"],
    web: "https://www.icehotel.com/",
    images: [],
  },
  {
    name: "Treehotel",
    activities: ["treehouses"],
    address: "Edeforsväg 2A, 960 24 Harads, Sweden",
    country: "sweden",
    location: {
      latitude: 65.8254,
      longitude: 20.9694,
    },
    rating: 5,
    description:
      "Treehotel in Sweden offers unique treehouse accommodations, each designed by different architects. Guests can enjoy the beautiful forest surroundings and stunning views from their treetop rooms.",
    amenities: ["Free Wi-Fi", "Restaurant", "Sauna", "Hot tubs"],
    web: "https://treehotel.se/",
    images: [],
  },
  {
    name: "Luna Salada Hotel",
    activities: ["salt hotel"],
    address: "Salar de Uyuni, Colchani, Bolivia",
    country: "bolivia",
    location: {
      latitude: -20.1338,
      longitude: -67.4891,
    },
    rating: 4.5,
    description:
      "Luna Salada Hotel is built entirely from salt blocks, offering guests a unique stay on the edge of the world's largest salt flat. The hotel provides stunning views and a truly unique experience.",
    amenities: ["Free Wi-Fi", "Restaurant", "Spa", "Hot tubs"],
    web: "https://lunasaladahotel.com.bo/",
    images: [],
  },
  {
    name: "Happy Guests Lodge",
    activities: ["fish companion for £5"],
    address: "Tarporley Road, Dutton, Warrington WA4 4EZ, England",
    country: "united kingdom",
    location: {
      latitude: 53.3,
      longitude: -2.65,
    },
    rating: 4,
    description:
      "Happy Guests Lodge offers a unique experience where guests can have a fish companion in their room for £5. It's a cozy and friendly lodge located in the picturesque Cheshire countryside.",
    amenities: ["Free Wi-Fi", "Parking", "Restaurant", "Pet-friendly"],
    web: "http://www.happyguestslodge.co.uk/",
    images: [],
  },
  {
    name: "Hotel Divorce",
    activities: ["divorce hotel"],
    address: "Zeestraat 35, 2518 AA The Hague, Netherlands",
    country: "netherlands",
    location: {
      latitude: 52.0833,
      longitude: 4.3,
    },
    rating: 4,
    description:
      "Hotel Divorce offers a unique service for couples seeking an amicable divorce. The hotel provides legal and psychological support to help couples separate smoothly.",
    amenities: ["Free Wi-Fi", "Restaurant", "Spa", "Legal services"],
    web: "https://www.carlton.nl/hotel-ambassador-den-haag",
    images: [],
  },
  {
    name: "Protea Hotel by Marriott Polokwane Ranch Resort",
    activities: ["walk with lions"],
    address:
      "25 km South of Polokwane on either the R101 or N1, Polokwane, 0700, South Africa",
    country: "south africa",
    location: {
      latitude: -23.8916,
      longitude: 29.4486,
    },
    rating: 4.5,
    description:
      "Protea Hotel by Marriott Polokwane Ranch Resort offers guests the extraordinary opportunity to walk with lions. The resort provides a blend of luxury accommodation and thrilling wildlife experiences.",
    amenities: ["Free Wi-Fi", "Restaurant", "Spa", "Swimming pool"],
    web: "https://www.marriott.com/en-us/hotels/ptgra-protea-hotel-polokwane-ranch-resort/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
    images: [],
  },
  {
    name: "V8 Hotel Classic Motorworld Region Stuttgart",
    activities: [
      "car-themed decor",
      "car hire",
      "massage services",
      "shoe-shining",
    ],
    address: "Charles-Lindbergh-Platz 1, 71034 Böblingen, Germany",
    country: "germany",
    location: {
      latitude: 48.681,
      longitude: 8.9999,
    },
    rating: 4.5,
    description:
      "Located on the old Stuttgart airfield, this hotel is perfect for automobile enthusiasts. The hotel features uniquely designed suites with automotive decor, including original car parts mounted on the walls.",
    amenities: [
      "Restaurant",
      "Bar",
      "Sauna",
      "Meeting rooms",
      "Fitness center",
    ],
    web: "https://www.booking.com",
    images: [],
  },
  {
    name: "Masseria Cervarolo",
    activities: ["cooking classes", "themed dinner nights", "walking tours"],
    address: "SP 14 Ostuni-Martina Franca, km 4,5, 72017 Ostuni BR, Italy",
    country: "italy",
    location: {
      latitude: 40.7392,
      longitude: 17.5816,
    },
    rating: 4.8,
    description:
      "Originally a 16th-century family farm, this hotel offers a relaxing atmosphere with a mix of historical charm and modern comfort. Guests can enjoy various activities and explore the nearby villages.",
    amenities: ["Spa", "Swimming pool", "Restaurant", "Garden"],
    web: "https://www.booking.com",
    images: [],
  },
  {
    name: "Electra Palace Hotel",
    activities: ["art exhibitions", "rooftop dining"],
    address: "9 Aristotelous Square, Thessaloniki, 546 24, Greece",
    country: "greece",
    location: {
      latitude: 40.6323,
      longitude: 22.9404,
    },
    rating: 4.7,
    description:
      "Situated in the heart of Thessaloniki, this hotel offers stunning sea views and cultural experiences, including viewing works of art displayed on the property.",
    amenities: ["Rooftop pool", "Indoor swimming pool", "Restaurant"],
    web: "https://www.booking.com",
    images: [],
  },
  {
    name: "Gaylord Palms and Convention Center",
    activities: [
      "alligator feeding",
      "pirate and princess shows",
      "ice skating",
      "surfing lessons",
    ],
    address: "6000 W Osceola Pkwy, Kissimmee, FL 34746, USA",
    country: "united states",
    location: {
      latitude: 28.3514,
      longitude: -81.5331,
    },
    rating: 4.6,
    description:
      "This hotel features a unique atrium with alligators and snakes, as well as a variety of seasonal activities such as scavenger hunts and cookie decorating.",
    amenities: ["Water park", "Spa", "Multiple dining options"],
    web: "https://www.creativetravelguide.com",
    images: [],
  },
  {
    name: "Treebones Resort",
    activities: ["glamping in yurts", "private decks with scenic views"],
    address: "71895 CA-1, Big Sur, CA 93920, USA",
    location: {
      latitude: 35.9643,
      longitude: -121.537,
    },
    rating: 4.5,
    description:
      "A quirky, eco-friendly resort offering glamping-style accommodation with spectacular views of Big Sur.",
    amenities: ["Restaurant", "Organic garden", "Hiking trails"],
    web: "https://www.creativetravelguide.com",
    images: [],
  },
  {
    name: "Hotel Max",
    activities: ["art exhibitions", "record players in rooms"],
    address: "620 Stewart St, Seattle, WA 98101, USA",
    location: {
      latitude: 47.6132,
      longitude: -122.3361,
    },
    rating: 4.4,
    description:
      "Located in downtown Seattle, this hotel is known for its artistic and musical theme, featuring original artwork and iconic photographs throughout the property.",
    amenities: ["Restaurant", "Fitness center", "Business services"],
    web: "https://www.creativetravelguide.com",
    images: [],
  },
  {
    name: "Grand Velas Riviera Maya",
    activities: ["salsa dancing classes", "aquafit classes"],
    address:
      "Carretera Cancún Tulum Km 62, 77710 Playa del Carmen, Q.R., Mexico",
    location: {
      latitude: 20.6371,
      longitude: -87.0568,
    },
    rating: 4.9,
    description:
      "A luxurious all-inclusive resort offering a variety of activities including salsa dancing classes and aquafit sessions.",
    amenities: ["Spa", "Multiple pools", "Gourmet dining"],
    web: "https://www.grandvelas.com",
    images: [],
  },
  {
    name: "W Barcelona",
    activities: ["sunrise yoga", "salsa nights"],
    address: "Plaça de la Rosa dels Vents, 1, 08039 Barcelona, Spain",
    location: {
      latitude: 41.3684,
      longitude: 2.1924,
    },
    rating: 4.7,
    description:
      "Situated along the beachfront, this hotel offers breathtaking views of the Mediterranean Sea and hosts salsa nights for guests to enjoy.",
    amenities: [
      "Beach access",
      "Infinity pool",
      "Multiple restaurants and bars",
    ],
    web: "https://www.marriott.com",
    images: [],
  },
  {
    name: "Hotel del Coronado",
    activities: [
      "beach yoga",
      "surfing lessons",
      "bicycle rentals",
      "beach bonfires",
    ],
    address: "1500 Orange Ave, Coronado, CA 92118, USA",
    location: {
      latitude: 32.6809,
      longitude: -117.1784,
    },
    rating: 4.6,
    description:
      "Located on the stunning shores of Coronado Island, this historic hotel offers a wide range of activities including beach yoga, surfing lessons, bicycle rentals, and beach bonfires.",
    amenities: ["Multiple restaurants and bars", "Spa", "Beachfront access"],
    web: "https://hoteldel.com/",
    images: [],
  },
  {
    name: "Amangiri",
    activities: [
      "stargazing",
      "hot air ballooning",
      "hiking",
      "horseback riding",
    ],
    address: "1 Kayenta Rd, Canyon Point, UT 84741, USA",
    location: {
      latitude: 37.0185,
      longitude: -111.9291,
    },
    rating: 4.9,
    description:
      "Set amidst the stark beauty of the Utah desert, Amangiri offers luxurious accommodations and a range of activities including stargazing, hot air ballooning, hiking, and horseback riding.",
    amenities: ["Spa", "Swimming pool", "Fine dining"],
    web: "https://www.aman.com/resorts/amangiri",
    images: [],
  },
  {
    name: "Soneva Fushi",
    activities: [
      "snorkeling",
      "diving",
      "private cinema screenings",
      "chocolate-making classes",
    ],
    address: "Kunfunadhoo Island, Baa Atoll, Maldives",
    location: {
      latitude: 5.7264,
      longitude: 73.003,
    },
    rating: 4.8,
    description:
      "Nestled within the pristine beauty of the Maldives, Soneva Fushi offers luxurious villas and a host of unique activities including snorkeling, diving, private cinema screenings, and chocolate-making classes.",
    amenities: ["Spa", "Multiple dining options", "Private beach"],
    web: "https://www.soneva.com/soneva-fushi/",
    images: [],
  },
  {
    name: "Fogo Island Inn",
    activities: [
      "iceberg watching",
      "boat tours",
      "artist-in-residence programs",
      "berry picking",
    ],
    address: "210 Main Rd, Joe Batt's Arm, NL A0G 2X0, Canada",
    location: {
      latitude: 49.7174,
      longitude: -54.176,
    },
    rating: 4.9,
    description:
      "Perched on the dramatic cliffs of Fogo Island, this award-winning inn offers breathtaking views and a range of activities including iceberg watching, boat tours, artist-in-residence programs, and berry picking.",
    amenities: ["Fine dining", "Spa", "Library"],
    web: "https://www.fogoislandinn.ca/",
    images: [],
  },
  {
    name: "Kakslauttanen Arctic Resort",
    activities: [
      "aurora hunting",
      "husky sledding",
      "ice fishing",
      "snowmobiling",
    ],
    address: "Kiilopääntie 9, 99830 Saariselkä, Finland",
    location: {
      latitude: 68.4186,
      longitude: 27.4177,
    },
    rating: 4.7,
    description:
      "Located in the Finnish Lapland, Kakslauttanen Arctic Resort offers unique accommodations in glass igloos and log cabins. Guests can enjoy activities such as aurora hunting, husky sledding, ice fishing, and snowmobiling.",
    amenities: ["Sauna", "Restaurant", "Gift shop"],
    web: "https://www.kakslauttanen.fi/",
    images: [],
  },
  {
    name: "Whitepod Eco-Luxury Hotel",
    activities: ["skiing", "snowshoeing", "yoga", "stargazing"],
    address: "Les Giettes, 1871 Monthey, Switzerland",
    location: {
      latitude: 46.2176,
      longitude: 6.9144,
    },
    rating: 4.8,
    description:
      "Nestled in the Swiss Alps, Whitepod Eco-Luxury Hotel offers unique geodesic dome accommodations and a range of activities including skiing, snowshoeing, yoga, and stargazing.",
    amenities: ["Restaurant", "Spa", "Private ski slopes"],
    web: "https://www.whitepod.com/",
    images: [],
  },
  {
    name: "Amilla Fushi",
    activities: [
      "submarine tours",
      "private island picnics",
      "sunset fishing",
      "underwater dining",
    ],
    address: "Baa Atoll, Maldives",
    location: {
      latitude: 5.7832,
      longitude: 73.4023,
    },
    rating: 4.9,
    description:
      "Situated in the Maldives, Amilla Fushi offers luxurious overwater and beachfront villas, as well as unique activities such as submarine tours, private island picnics, sunset fishing, and underwater dining experiences.",
    amenities: ["Spa", "Multiple dining options", "Private beach"],
    web: "https://www.amilla.com/",
    images: [],
  },
  {
    name: "Fogo Island Inn",
    activities: [
      "hiking",
      "birdwatching",
      "marine excursions",
      "artist studios",
    ],
    address: "210 Main Road, Joe Batt's Arm, NL A0G 2X0, Canada",
    location: {
      latitude: 49.7164,
      longitude: -54.1895,
    },
    rating: 4.9,
    description:
      "Perched on the rugged shores of Fogo Island in Newfoundland, Fogo Island Inn offers a unique blend of luxury accommodation and immersive experiences. Guests can enjoy activities such as hiking, birdwatching, marine excursions, and visiting artist studios.",
    amenities: ["Restaurant", "Spa", "Library"],
    web: "https://fogoislandinn.ca/",
    images: [],
  },
  {
    name: "Longitude 131°",
    activities: [
      "Uluru sunrise tours",
      "camel treks",
      "indigenous cultural experiences",
    ],
    address: "Yulara Drive, Yulara NT 0872, Australia",
    location: {
      latitude: -25.3447,
      longitude: 131.0369,
    },
    rating: 4.8,
    description:
      "Located near Uluru-Kata Tjuta National Park, Longitude 131° offers luxury tented accommodation with unparalleled views of Uluru. Guests can enjoy sunrise tours of Uluru, camel treks, and indigenous cultural experiences.",
    amenities: ["Restaurant", "Spa", "Swimming pool"],
    web: "https://longitude131.com.au/",
    images: [],
  },
  {
    name: "Soneva Kiri",
    activities: [
      "treepod dining",
      "private beach dinners",
      "snorkeling",
      "stargazing",
    ],
    address: "110 Moo 4, Ko Kut, Trat 23000, Thailand",
    location: {
      latitude: 11.589,
      longitude: 102.526,
    },
    rating: 4.9,
    description:
      "Located on the remote island of Koh Kood, Soneva Kiri offers luxurious villas and unique dining experiences such as treepod dining and private beach dinners. Guests can also enjoy snorkeling and stargazing in this pristine paradise.",
    amenities: ["Spa", "Private infinity pool", "Private butler service"],
    web: "https://www.soneva.com/soneva-kiri/",
    images: [],
  },
  {
    name: "The Singular Patagonia",
    activities: ["hiking", "horseback riding", "birdwatching", "glacier tours"],
    address:
      "KM 5 Norte, Puerto Bories, Puerto Natales, Natales, Magallanes y la Antártica Chilena, Chile",
    location: {
      latitude: -51.7206,
      longitude: -72.5068,
    },
    rating: 4.8,
    description:
      "Set against the stunning backdrop of the Patagonian landscape, The Singular Patagonia offers a range of outdoor activities including hiking, horseback riding, birdwatching, and glacier tours. Guests can immerse themselves in the natural beauty of southern Chile.",
    amenities: ["Restaurant", "Spa", "Indoor pool"],
    web: "https://www.thesingular.com/patagonia/",
    images: [],
  },
  {
    name: "Explora Rapa Nui",
    activities: ["hiking", "horseback riding", "biking", "stargazing"],
    address: "Unnamed Road, Isla de Pascua, Valparaíso Region, Chile",
    location: {
      latitude: -27.1384,
      longitude: -109.4275,
    },
    rating: 4.9,
    description:
      "Located on Easter Island, Explora Rapa Nui offers explorations of the island's archaeological sites, volcanic landscapes, and pristine beaches. Guests can enjoy activities such as hiking, horseback riding, biking, and stargazing.",
    amenities: ["Restaurant", "Spa", "Outdoor pool"],
    web: "https://www.explora.com/hotels-and-travesias/easter-island/explora-rapa-nui/",
    images: [],
  },
  {
    name: "Amangiri",
    activities: ["architecture tours", "canyon tours", "desert tours"],
    address: "1 Kayenta Road, Canyon Point, Utah 84741, USA",
    location: {
      latitude: 37.0017,
      longitude: -111.999,
    },
    rating: 4.8,
    description:
      "Nestled in the vast desert of Myabara, near Mount Waap, Amangiri offers stunning architecture and various excursions to canyons, deserts, and other natural wonders.",
    amenities: ["Restaurant", "Spa", "Pool"],
    web: "https://www.aman.com/resorts/amangiri",
    images: [],
  },
  {
    name: "Amangani",
    activities: ["mountaineering", "skiing", "mountain views"],
    address: "1535 NE Butte Road, Jackson, Wyoming 83001, USA",
    location: {
      latitude: 43.5285,
      longitude: -110.666,
    },
    rating: 4.7,
    description:
      "Located in the Grand Teton Mountains, Wyoming, USA, Amangani offers opportunities for mountaineering, skiing, or simply enjoying the mountain views.",
    amenities: ["Restaurant", "Spa", "Fitness center"],
    web: "https://www.aman.com/resorts/amangani",
    images: [],
  },
  {
    name: "Southern Ocean Lodge",
    activities: ["wildlife exploration", "wine tours"],
    address:
      "Hanson Bay Road, Kangaroo Island, South Australia 5222, Australia",
    location: {
      latitude: -36.0357,
      longitude: 137.2335,
    },
    rating: 4.9,
    description:
      "Situated on Kangaroo Island near South Australia, Southern Ocean Lodge offers opportunities for wildlife exploration, encountering kangaroos and other local residents, as well as wine tours to local wineries.",
    amenities: ["Restaurant", "Spa", "Library"],
    web: "https://southernoceanlodge.com.au/",
    images: [],
  },
  {
    name: "Explora Patagonia",
    activities: ["canyon exploration", "forest hikes", "lake excursions"],
    address: "Hotel Salto Chico, Torres del Paine National Park, Chile",
    location: {
      latitude: -50.9423,
      longitude: -73.4068,
    },
    rating: 4.8,
    description:
      "Located in Patagonia, Chile, Explora Patagonia is perfect for nature lovers. You can explore canyons, forests, and lakes during day trips, and enjoy the comfort of the hotel in the evenings.",
    amenities: ["Restaurant", "Spa", "Bar"],
    web: "https://www.explora.com/patagonia/",
    images: [],
  },
  {
    name: "The Brando",
    activities: ["snorkeling", "kayaking", "paddleboarding"],
    address: "Tetiaroa Private Island, Arue, French Polynesia",
    location: {
      latitude: -17.5695,
      longitude: -149.6079,
    },
    rating: 4.9,
    description:
      "Located on Tetiaroa Private Island in French Polynesia, The Brando offers a range of water activities including snorkeling, kayaking, and paddleboarding in the crystal-clear waters of the South Pacific.",
    amenities: ["Restaurant", "Spa", "Private beach"],
    web: "https://thebrando.com/",
    images: [],
  },
  {
    name: "Ladera Resort",
    activities: ["ziplining", "hiking", "sulphur springs visit"],
    address: "Soufrière, St Lucia",
    location: {
      latitude: 13.8569,
      longitude: -61.0565,
    },
    rating: 4.8,
    description:
      "Perched on a volcanic ridge overlooking the Pitons in St Lucia, Ladera Resort offers adventurous activities such as ziplining, hiking, and visits to the nearby sulphur springs.",
    amenities: ["Restaurant", "Spa", "Private plunge pools"],
    web: "https://www.ladera.com/",
    images: [],
  },
  {
    name: "The Datai Langkawi",
    activities: ["rainforest walks", "guided nature tours", "beach yoga"],
    address: "Jalan Teluk Datai, 07000 Langkawi, Kedah, Malaysia",
    location: {
      latitude: 6.4254,
      longitude: 99.7089,
    },
    rating: 4.8,
    description:
      "Nestled in the heart of an ancient rainforest in Langkawi, Malaysia, The Datai Langkawi offers guests the chance to experience the wonders of nature with rainforest walks, guided nature tours, and beach yoga sessions.",
    amenities: ["Restaurant", "Spa", "Golf course"],
    web: "https://www.thedatai.com/langkawi/",
    images: [],
  },
  {
    name: "Amanwana",
    activities: ["jungle trekking", "diving", "snorkeling"],
    address: "Moyo Island, Sumbawa, West Nusa Tenggara, Indonesia",
    location: {
      latitude: -8.3028,
      longitude: 117.3863,
    },
    rating: 4.7,
    description:
      "Located on Moyo Island in Indonesia, Amanwana offers guests the opportunity to explore pristine jungles with jungle trekking, as well as underwater adventures with diving and snorkeling in the surrounding coral reefs.",
    amenities: ["Restaurant", "Spa", "Private beach"],
    web: "https://www.aman.com/resorts/amanwana",
    images: [],
  },
  {
    name: "Six Senses Zighy Bay",
    activities: ["paragliding", "mountain biking", "dhow cruise"],
    address: "Zighy Bay, Musandam Peninsula, Oman",
    location: {
      latitude: 25.6797,
      longitude: 56.3541,
    },
    rating: 4.8,
    description:
      "Set on the Musandam Peninsula in Oman, Six Senses Zighy Bay offers thrilling activities such as paragliding, mountain biking, and dhow cruises, allowing guests to explore the rugged beauty of the region.",
    amenities: ["Restaurant", "Spa", "Private pool"],
    web: "https://www.sixsenses.com/resorts/zighy-bay",
    images: [],
  },
  {
    name: "Singita Lebombo Lodge",
    activities: ["safari drives", "bush walks", "stargazing"],
    address: "N'wanetsi Concession, Kruger National Park, South Africa",
    location: {
      latitude: -24.3083,
      longitude: 31.7053,
    },
    rating: 4.9,
    description:
      "Located in the Kruger National Park, South Africa, Singita Lebombo Lodge offers unforgettable safari experiences including safari drives, bush walks, and stargazing sessions in the African wilderness.",
    amenities: ["Restaurant", "Spa", "Swimming pool"],
    web: "https://singita.com/lebombo-lodge/",
    images: [],
  },
];
export default sourceOfHotels;
