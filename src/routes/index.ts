import { OrdersPage, StorePage, RecipePage } from "pages";
const routes = [
  {
    path: "/",
    component: OrdersPage,
    exact: true,
  },
  {
    path: "/store",
    component: StorePage,
    exact: true,
  },
  {
    path: "/recipe",
    component: RecipePage,
    exact: true,
  },
];

export default routes;
