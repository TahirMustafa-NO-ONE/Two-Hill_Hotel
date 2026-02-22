import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins = [
  {
    name: "001",
    maxcapacity: 2,
    regularprice: 280,
    discount: 0,
    image: imageUrl + "cabin-001.jpg",
    description:
      "Perfect romantic hideaway for two. This intimate cabin features rustic charm with contemporary amenities, including a stone fireplace, gourmet kitchenette, and panoramic forest views. The luxurious queen bed with premium bedding ensures restful nights. Enjoy your private outdoor soaking tub under the stars.",
  },
  {
    name: "002",
    maxcapacity: 2,
    regularprice: 380,
    discount: 30,
    image: imageUrl + "cabin-002.jpg",
    description:
      "Elegant couples retreat with floor-to-ceiling windows showcasing breathtaking mountain vistas. Features include handcrafted woodwork, a cozy reading nook, premium espresso machine, and rainfall shower. The wraparound deck with hot tub offers unparalleled sunset views.",
  },
  {
    name: "003",
    maxcapacity: 4,
    regularprice: 320,
    discount: 0,
    image: imageUrl + "cabin-003.jpg",
    description:
      "Charming family sanctuary accommodating up to 4 guests. This thoughtfully designed space includes two bedrooms, a spacious living room with wood-burning stove, full kitchen with modern appliances, and a game area. Private deck features BBQ grill and hot tub for family enjoyment.",
  },
  {
    name: "004",
    maxcapacity: 4,
    regularprice: 520,
    discount: 40,
    image: imageUrl + "cabin-004.jpg",
    description:
      "Premium family lodge with upscale finishes throughout. Boasts vaulted ceilings, chef's kitchen with granite counters, two elegant bedrooms with en-suite bathrooms, and a media room. Outside deck includes dining area, lounge seating, and therapeutic hot tub overlooking pristine wilderness.",
  },
  {
    name: "005",
    maxcapacity: 6,
    regularprice: 420,
    discount: 0,
    image: imageUrl + "cabin-005.jpg",
    description:
      "Spacious family haven ideal for groups up to 6. Features three comfortable bedrooms, open-concept living and dining areas, fully stocked kitchen, and entertainment space. The expansive deck offers multiple seating zones, outdoor dining table, and a relaxing hot tub surrounded by nature.",
  },
  {
    name: "006",
    maxcapacity: 6,
    regularprice: 850,
    discount: 120,
    image: imageUrl + "cabin-006.jpg",
    description:
      "Luxurious mountain estate for discerning travelers. This exceptional property features designer interiors, three master suites with spa bathrooms, gourmet kitchen with professional appliances, and a grand living room with stone fireplace. The private terrace includes premium hot tub, fire pit, and spectacular valley views.",
  },
  {
    name: "007",
    maxcapacity: 8,
    regularprice: 680,
    discount: 90,
    image: imageUrl + "cabin-007.jpg",
    description:
      "Expansive retreat perfect for large gatherings. Includes four well-appointed bedrooms, multiple bathrooms, spacious living areas with entertainment systems, professional kitchen, and game room. The multi-level deck features hot tub, outdoor fireplace, and ample seating for unforgettable evenings under the stars.",
  },
  {
    name: "008",
    maxcapacity: 10,
    regularprice: 1500,
    discount: 0,
    image: imageUrl + "cabin-008.jpg",
    description:
      "Magnificent luxury estate suitable for exclusive gatherings. This architectural masterpiece showcases five premium bedrooms with designer bathrooms, commercial-grade kitchen, formal dining room, library, home theater, and multiple living spaces. The resort-style deck features an oversized hot tub, outdoor kitchen, fire features, and breathtaking panoramic wilderness views.",
  },
];
