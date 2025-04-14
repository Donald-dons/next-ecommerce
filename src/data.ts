type Product = {
  id: number;
  title: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
  category?: string;
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Chocolate Fudge",
    img: "/temporary/a1.png",
    price: 3.5,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 0.5 },
      { title: "Large", additionalPrice: 1 }
    ],
    category: "waffles"
  },
  {
    id: 2,
    title: "Vanilla Dream",
    img: "/temporary/a2.jpg",
    price: 3.2,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 0.5 },
      { title: "Large", additionalPrice: 1 }
    ],
    category: "cupcakes"
  },
  {
    id: 3,
    title: "Red Velvet Delight",
    img: "/temporary/a1.png",
    price: 3.8,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 0.5 },
      { title: "Large", additionalPrice: 1 }
    ],
    category: "cupcakes"
  },
  {
    id: 4,
    title: "Lemon Zest",
    img: "/temporary/a2.jpg",
    price: 3.3,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 0.5 },
      { title: "Large", additionalPrice: 1 }
    ],
    category: "cupcakes"
  },
  {
    id: 5,
    title: "Strawberry Swirl",
    img: "/temporary/a1.png",
    price: 3.6,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 0.5 },
      { title: "Large", additionalPrice: 1 }
    ],
    category: "cupcakes"
  },
  {
    id: 6,
    title: "Caramel Crunch",
    img: "/temporary/a1.png",
    price: 3.7,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 0.5 },
      { title: "Large", additionalPrice: 1 }
    ],
    category: "cupcakes"
  },
  {
    id: 7,
    title: "Mint Chocolate Chip",
    img: "/temporary/a2.jpg",
    price: 3.9,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 0.5 },
      { title: "Large", additionalPrice: 1 }
    ],
    category: "cupcakes"
  },
  {
    id: 8,
    title: "Cookies & Cream",
    img: "/temporary/a1.png",
    price: 3.4,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 0.5 },
      { title: "Large", additionalPrice: 1 }
    ],
    category: "macarons"},
  {
    id: 9,
    title: "Tiramisu Bliss",
    img: "/temporary/cake.jpg",
    price: 4.0,
    options: [
      { title: "Small", additionalPrice: 0 },
      { title: "Medium", additionalPrice: 0.5 },
      { title: "Large", additionalPrice: 1 }
    ],
    category: "cupcakes"
  }
];

export const singleProduct: Product = {
  id: 1,
  title: "Chocolate Fudge",
  img: "/temporary/a1.png",
  price: 3.5,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 0.5,
    },
    {
      title: "Large",
      additionalPrice: 1,
    },
  ],
  category: "cupcakes",
};


type Menu = {
  category: any;
  id: number;
  slug: string;
  title: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "cupcakes",
    title: "Delicious Cupcakes",
    img: "/temporary/a1.png",
    color: "pink",
    category: "Cupcakes"
  },
  {
    id: 2,
    slug: " cakes",
    title: "Fun Cake Pops",
    img: "/temporary/a2.jpg",
    color: "yellow",
    category: "Cakes"
  },
  {
    id: 3,
    slug: "waffles",
    title: "Flaky Waffles",
    img: "/temporary/a1.png",
    color: "orange",
    category: "Waffles"
  },
  {
    id: 4,
    slug: "macarons",
    title: "Seasonal Specials",
    img: "/temporary/a2.jpg",
    color: "green",
    category: "Macarons"
  }
];
