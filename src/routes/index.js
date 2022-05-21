import Cart from "../components/pages/cart";
import Category from "../components/pages/category";
import Product from "../components/pages/product";

export const routes = [
  {
    path: '/category',
    title: 'categories',
    component: Category,
  },
  {
    path: '/product/:id',
    title: 'product',
    component: Product,
  },
  {
    path: '/cart',
    title: 'createNewPassword',
    component: Cart,
  },
];