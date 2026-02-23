import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins = [
  {
    id: 1,
    name: "Valley View Suite",
    maxcapacity: 2,
    regularprice: 120,
    discount: 0,
    description:
      "Perched on the hillside with sweeping valley views, the Valley View Suite offers a cozy retreat for couples. The room features a king-size bed, a private balcony, and a modern en-suite bathroom. Perfect for a romantic getaway surrounded by nature.",
    image: imageUrl + "cabin-001.jpg",
  },
  {
    id: 2,
    name: "Pine Ridge Room",
    maxcapacity: 3,
    regularprice: 150,
    discount: 15,
    description:
      "Nestled among tall pine trees, the Pine Ridge Room brings the outdoors in with its floor-to-ceiling windows and rustic wood décor. Ideal for a small family or group of friends looking to unwind. Features a queen bed, a fold-out sofa, and a private terrace.",
    image: imageUrl + "cabin-002.jpg",
  },
  {
    id: 3,
    name: "Summit Escape",
    maxcapacity: 4,
    regularprice: 190,
    discount: 20,
    description:
      "Situated at the highest point of the property, the Summit Escape offers breathtaking panoramic views of two hilltops. With two bedrooms, a spacious living area, and a fully equipped kitchenette, it's the perfect base for adventurous families or small groups.",
    image: imageUrl + "cabin-003.jpg",
  },
  {
    id: 4,
    name: "Terrace Haven",
    maxcapacity: 4,
    regularprice: 200,
    discount: 0,
    description:
      "The Terrace Haven lives up to its name with a spacious wraparound terrace ideal for morning coffee or stargazing at night. The suite includes two queen beds, a reading nook, and a luxurious rain-shower bathroom. Surrounded by lush greenery for total privacy.",
    image: imageUrl + "cabin-004.jpg",
  },
  {
    id: 5,
    name: "Stone Cottage",
    maxcapacity: 6,
    regularprice: 280,
    discount: 30,
    description:
      "A charming standalone stone cottage built into the hillside, the Stone Cottage offers an authentic mountain experience. It includes three bedrooms, a wood-burning fireplace, a fully equipped kitchen, and a private garden — ideal for larger families or friend groups.",
    image: imageUrl + "cabin-005.jpg",
  },
  {
    id: 6,
    name: "Birch Canopy Loft",
    maxcapacity: 6,
    regularprice: 310,
    discount: 25,
    description:
      "Elevated among the birch trees, this architectural loft features a mezzanine bedroom, exposed timber beams, and stunning canopy views from every window. Accommodates up to six guests across two bedrooms and a loft sleeping area. A truly unique stay.",
    image: imageUrl + "cabin-006.jpg",
  },
  {
    id: 7,
    name: "Two Peaks Penthouse",
    maxcapacity: 8,
    regularprice: 420,
    discount: 0,
    description:
      "The crown jewel of The Hill Hotel, the Two Peaks Penthouse commands awe-inspiring views of both hilltops from its private rooftop terrace. Featuring four bedrooms, a gourmet kitchen, a home theatre setup, and a dedicated butler service, this suite redefines luxury accommodation.",
    image: imageUrl + "cabin-007.jpg",
  },
  {
    id: 8,
    name: "Meadow Bungalow",
    maxcapacity: 10,
    regularprice: 550,
    discount: 50,
    description:
      "Our most spacious offering, the Meadow Bungalow is a self-contained retreat set in a private meadow at the foot of the hills. With five bedrooms, a large communal dining room, a games room, and a BBQ terrace, it's perfect for large family reunions or corporate retreats.",
    image: imageUrl + "cabin-008.jpg",
  },
];
