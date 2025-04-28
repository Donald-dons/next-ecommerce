type Product = {
  id: number;
  title: string;
  img?: string;
  category?: string;
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Cake",
    img: "/temporary/a4.png",
    category: "cakes",
  },
  {
    id: 2,
    title: "Cupcakes",
    img: "/temporary/a5.png",
    category: "cupcakes",
  },
  {
    id: 3,
    title: "Macarons",
    img: "/temporary/a1.png",
    category: "macarons",
  },
  {
    id: 4,
    title: "Waffles",
    img: "/temporary/a2.jpg",
    category: "waffles",
  },
];


export const singleProduct: Product = {
  id: 1,
  title: "Chocolate Fudge",
  img: "/temporary/a1.png",
  category: "cupcakes",
};


type Menu = {
  category: string;
  id: number;
  slug: string;
  title: string;
  img?: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "cakes",
    title: "Strawberry Dream",
    img: "/temporary/2.webp",
    category: "Cakes"
  },
  {
    id: 2,
    slug: "cakes",
    title: "Pink Velvet",
    img: "/temporary/3.webp",
    category: "Cakes"
  },
  {
    id: 3,
    slug: "cakes",
    title: "Pink Ombre Cake",
    img: "/temporary/12.webp",
    category: "Cakes"
  },
  {
    id: 4,
    slug: "cakes",
    title: "Berry Blush Delight",
    img: "/temporary/10.webp",
    category: "Cakes"
  },
  {
    id: 5,
    slug: "waffles",
    title: "Strawberry Shortcake Waffle",
    img: "/temporary/4.webp",
    category: "Waffles"
  },
  {
    id: 6,
    slug: "waffles",
    title: "Pink Velvet Waffle",
    img: "/temporary/5.webp",
    category: "Waffles"
  },
  {
    id: 7,
    slug: "macarons",
    title: "Strawberry Macaron Burger Delight",
    img: "/temporary/6.webp",
    category: "Macarons"
  },
  {
    id: 8,
    slug: "macarons",
    title: "Cotton Candy Bliss",
    img: "/temporary/14.webp",
    category: "Macarons"
  },
  {
    id: 9,
    slug: "macarons",
    title: "Cherry Blossom Kiss",
    img: "/temporary/7.webp",
    category: "Macarons"
  },
  {
    id: 10,
    slug: "macarons",
    title: "Pink Champagne Macarons",
    img: "/temporary/8.webp",
    category: "Macarons"
  },
  {
    id: 11,
    slug: "cupcakes",
    title: "Pink Champagne",
    img: "/temporary/9.webp",
    category: "Cupcakes"
  },
  {
    id: 12,
    slug: "cupcakes",
    title: "Cherry Bomb",
    img: "/temporary/16.png",
    category: "Cupcakes"
  },
  {
    id: 13,
    slug: "cookies",
    title: "Strawberry Shortcake Cookie",
    img: "/temporary/15.webp",
    category: "Cookies"
  },
  {
    id: 14,
    slug: "cookies",
    title: "Pink Velvet Crinkles",
    img: "/temporary/a7.png",
    category: "Cookies"
  },
];
