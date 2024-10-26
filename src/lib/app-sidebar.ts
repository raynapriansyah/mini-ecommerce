import { Store, ShoppingBag, ShoppingCart, Shapes } from "lucide-react";

// Platform;
export const items = [
  {
    title: "Product",
    url: "/",
    icon: ShoppingBag,
    isActive: true,
    items: [
      {
        title: "All Product",
        url: "/products",
      },
    ],
  },
  {
    title: "Categories",
    url: "/",
    icon: Shapes,
    isActive: true,
    items: [
      {
        title: "Electronics",
        url: "/categories/electronics",
      },
      {
        title: "Jewelery",
        url: "/categories/jewelery",
      },
      {
        title: "Men's  Clothing",
        url: "/categories/men-clothing",
      },
      {
        title: "Women's Clothing",
        url: "/categories/women-clothing",
      },
    ],
  },
  {
    title: "Cart",
    url: "/",
    icon: ShoppingCart,
    isActive: true,
    items: [
      {
        title: "kela",
        url: "#",
      },
    ],
  },
];

// Top Product
export const topProduct = [
  {
    name: "Product 1",
    url: "/product/1",
    icon: Store,
  },
  {
    name: "Product 2",
    url: "/product/2",
    icon: ShoppingBag,
  },
  {
    name: "Product 3",
    url: "/product/3",
    icon: ShoppingCart,
  },
];

export const user = {
  name: "Buggy D. Clown",
  email: "buggyxdama@example.com",
  avatar: "string",
};
