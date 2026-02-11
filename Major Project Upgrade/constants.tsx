
import { Flavor, Product } from './types';

export const FLAVORS: Flavor[] = [
  { name: "Original", price: 0 },
  { name: "Garlic", price: 5 },
  { name: "Jack Daniels", price: 5 },
  { name: "Yangnyeom", price: 5 },
  { name: "Yangnyeom X2", price: 5 },
  { name: "Spicy BBQ", price: 5 },
  { name: "Lemon Glaze", price: 5 },
  { name: "Yangnyeom W Garlic", price: 10 },
  { name: "24 Cheddar", price: 10 },
  { name: "Snow Cheese", price: 10 },
  { name: "Yangnyeom X2 W Garlic", price: 10 },
  { name: "Dark Truffle", price: 10 },
];

export const PRODUCTS: Product[] = [
  // COFFEE SECTION
  {
    id: 'c1',
    name: "Iced Caramel Macchiato",
    description: "Espresso, milk, and luscious caramel syrup layers.",
    price: 39,
    category: 'coffee',
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600",
    gradient: "from-[#38220f] to-[#dfc28a]"
  },
  {
    id: 'c2',
    name: "Donya Berry Coffee",
    description: "Velvety berry notes infused with bold espresso.",
    price: 39,
    category: 'coffee',
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=600",
    gradient: "from-[#cb5475] to-[#f2d4dc]"
  },
  {
    id: 'c3',
    name: "Don Matchatos Coffee",
    description: "Premium Matcha harmonized with a bold espresso shot.",
    price: 39,
    category: 'coffee',
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=600",
    gradient: "from-[#49592a] to-[#c3d4a5]"
  },
  {
    id: 'c4',
    name: "Don Darko Coffee",
    description: "Belgian dark chocolate blended with bold espresso.",
    price: 39,
    category: 'coffee',
    image: "https://images.unsplash.com/photo-1544787210-2211d44b505b?auto=format&fit=crop&q=80&w=600",
    gradient: "from-[#0c0906] to-[#dbc1ac]"
  },
  {
    id: 'c5',
    name: "Matcha Berry Coffee",
    description: "Revitalizing matcha with creamy berry-infused espresso.",
    price: 39,
    category: 'coffee',
    image: "https://images.unsplash.com/photo-1536816579748-4fcb3f49a7f4?auto=format&fit=crop&q=80&w=600",
    gradient: "from-[#82a742] to-[#cc6985]"
  },
  {
    id: 'c6',
    name: "Black Forest Coffee",
    description: "Dark chocolate and strawberry espresso fusion.",
    price: 39,
    category: 'coffee',
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=600",
    gradient: "from-[#8e0b21] to-[#e5a9ba]"
  },
  {
    id: 'c7',
    name: "Oreo Coffee",
    description: "Rich coffee infused with crushed classic Oreo cookies.",
    price: 39,
    category: 'coffee',
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
    gradient: "from-[#333] to-[#cfcfcf]"
  },
  {
    id: 'c8',
    name: "Brown Spanish Latte",
    description: "Creamy milk with sweet brown sugar and espresso.",
    price: 39,
    category: 'coffee',
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600",
    gradient: "from-[#967259] to-[#f7ebde]"
  },
  
  // MEALS SECTION
  {
    id: 'm1',
    name: "RM2: 2pcs Boneless Chicken",
    description: "Two pieces of juicy Korean fried chicken with rice.",
    price: 95,
    category: 'meal',
    hasFlavors: true,
    image: "https://images.unsplash.com/photo-1562607311-660417633c7d?auto=format&fit=crop&q=80&w=600",
    gradient: "from-orange-600 to-yellow-400"
  },
  {
    id: 'm2',
    name: "RM3: 3pcs Boneless Chicken",
    description: "Three pieces of signature Korean fried chicken with rice.",
    price: 130,
    category: 'meal',
    hasFlavors: true,
    image: "https://images.unsplash.com/photo-1569058242253-92a9c71f9867?auto=format&fit=crop&q=80&w=600",
    gradient: "from-orange-600 to-yellow-400"
  },
  {
    id: 'm3',
    name: "KRM2: Kimchi Rice Meal",
    description: "Two pieces of boneless chicken with spicy kimchi rice.",
    price: 135,
    category: 'meal',
    hasFlavors: true,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=600",
    gradient: "from-red-600 to-orange-400"
  },
  {
    id: 'm4',
    name: "KRM3: Large Kimchi Meal",
    description: "Three pieces of boneless chicken with spicy kimchi rice.",
    price: 170,
    category: 'meal',
    hasFlavors: true,
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=600",
    gradient: "from-red-600 to-orange-400"
  }
];
