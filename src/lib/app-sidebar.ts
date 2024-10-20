import { Store, ShoppingBag, ShoppingCart, Shapes } from "lucide-react";

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

export const items = [
  {
    title: "Products",
    url: "/",
    icon: ShoppingBag,
    isActive: true,
    items: [
      {
        title: "All Products",
        url: "/products",
      },
    ],
  },
  {
    title: "Category",
    url: "/",
    icon: Shapes,
    isActive: true,
    items: [
      {
        title: "kela",
        url: "/product",
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
        url: "/product",
      },
    ],
  },
];

export const user = {
  name: "Buggy D. Clown",
  email: "buggyxdama@example.com",
  avatar: "string",
};
