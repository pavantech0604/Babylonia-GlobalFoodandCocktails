export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'continental' | 'asian' | 'indian' | 'cocktails';
  tags: string[];
  isChefPick?: boolean;
  isAvailable: boolean;
  image?: string;
}

export interface Reservation {
  id: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  date: string;
  time: string;
  guests: number;
  seating: 'rooftop' | 'indoor' | 'bar';
  occasion?: string;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'seated' | 'arrived' | 'no-show' | 'completed';
  tableNumber?: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  artist?: string;
  category: 'music' | 'theme' | 'special';
  banner: string;
  coverCharge: number;
  maxCapacity: number;
  rsvps: number;
  isPublished: boolean;
}

export interface GuestProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  visitCount: number;
  spendTier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'VIP';
  preferences: string[];
  favoriteSection: string;
  birthday?: string;
  anniversary?: string;
  specialNotes?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m1",
    name: "Tiramisu Martini",
    description: "A decadent blend of espresso, vodka, and coffee liqueur, topped with a creamy mascarpone foam.",
    price: 450,
    category: "cocktails",
    tags: ["Signature", "Dessert"],
    isChefPick: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "m2",
    name: "Pablo's Pastime",
    description: "A refreshing mixology creation with botanical notes and a hint of citrus.",
    price: 550,
    category: "cocktails",
    tags: ["Refreshing", "Botanical"],
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "m3",
    name: "Pesto Paneer Tostada",
    description: "Crispy corn tortilla topped with basil pesto marinated paneer, fresh salsa, and microgreens.",
    price: 299,
    category: "continental",
    tags: ["Vegetarian", "Appetizer"],
    isChefPick: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "m4",
    name: "Smashed Double Lamb Cheeseburger",
    description: "Two juicy smashed lamb patties, cheddar cheese, caramelized onions, and signature sauce on a brioche bun.",
    price: 499,
    category: "continental",
    tags: ["Entree", "Premium"],
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "m5",
    name: "Thai Basil Chilli Prawn",
    description: "Succulent prawns tossed with fresh Thai basil, bird's eye chillies, and garlic in a savory sauce.",
    price: 429,
    category: "asian",
    tags: ["Spicy", "Seafood"],
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "m6",
    name: "Butter Chicken Tostada",
    description: "A fusion delight featuring shredded butter chicken, makhani gravy, and cheese on a crispy base.",
    price: 329,
    category: "indian",
    tags: ["Fusion", "Signature"],
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "m7",
    name: "Andhra Chilli Chicken",
    description: "A fiery South Indian style chicken starter packed with the heat of green chillies and spices.",
    price: 329,
    category: "indian",
    tags: ["Spicy", "Classic"],
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "m8",
    name: "Cantonese Style Steamed Basa",
    description: "Delicate fish fillets steamed with ginger, scallions, and a light soy dressing.",
    price: 399,
    category: "asian",
    tags: ["Healthy", "Steamed"],
    isChefPick: true,
    isAvailable: true,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60"
  }
];

export const RESERVATIONS: Reservation[] = [
  {
    id: "r1",
    guestName: "Julianne Sterling",
    guestEmail: "julianne@gastronomytoday.com",
    guestPhone: "+1 (555) 019-2834",
    date: "2026-04-28",
    time: "19:30",
    guests: 2,
    seating: "rooftop",
    occasion: "Anniversary",
    specialRequests: "Window seat requested for the sunset view.",
    status: "confirmed",
    tableNumber: "R1"
  },
  {
    id: "r2",
    guestName: "Marcus Vance",
    guestEmail: "marcus@financecorp.com",
    guestPhone: "+1 (555) 012-7765",
    date: "2026-04-28",
    time: "20:00",
    guests: 4,
    seating: "indoor",
    status: "seated",
    tableNumber: "I4"
  },
  {
    id: "r3",
    guestName: "Elena Rostova",
    guestEmail: "elena@vogue.com",
    guestPhone: "+1 (555) 015-4432",
    date: "2026-04-29",
    time: "21:00",
    guests: 6,
    seating: "rooftop",
    occasion: "Birthday",
    status: "pending"
  }
];

export const EVENTS: EventItem[] = [
  {
    id: "e1",
    title: "Rhythmic Night",
    description: "Experience the ultimate rooftop vibe with live music, dance, and signature cocktails under the stars.",
    date: "2026-04-30",
    time: "20:00",
    artist: "Live DJ & Percussionists",
    category: "music",
    banner: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60",
    coverCharge: 500,
    maxCapacity: 150,
    rsvps: 85,
    isPublished: true
  },
  {
    id: "e2",
    title: "Sundowner ft. DJ Charles",
    description: "Golden hour meets groovy beats. Join us for the best sunset views in Koramangala.",
    date: "2026-05-03",
    time: "18:00",
    artist: "DJ Charles",
    category: "special",
    banner: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&auto=format&fit=crop&q=60",
    coverCharge: 1000,
    maxCapacity: 150,
    rsvps: 120,
    isPublished: true
  }
];

export const GUEST_PROFILES: GuestProfile[] = [
  {
    id: "g1",
    name: "Julianne Sterling",
    email: "julianne@gastronomytoday.com",
    phone: "+1 (555) 019-2834",
    visitCount: 12,
    spendTier: "VIP",
    preferences: ["Window Seating", "Kashmiri Saffron cocktails", "Dairy-free options"],
    favoriteSection: "Rooftop Lounge",
    birthday: "1988-11-14"
  },
  {
    id: "g2",
    name: "Marcus Vance",
    email: "marcus@financecorp.com",
    phone: "+1 (555) 012-7765",
    visitCount: 5,
    spendTier: "Gold",
    preferences: ["Strictly Indoor", "Pinot Noir", "Medium-rare steaks"],
    favoriteSection: "Main Dining Hall"
  }
];
