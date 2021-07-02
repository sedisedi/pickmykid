import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster

const Schedule = lazy(() => import("../pages/Schedule"));
const Cancel = lazy(() => import("../pages/Cancel"));
const AllPickups = lazy (() => import ("../pages/dashboard/AllPickups"))
const Home = lazy (() => import ("../Home"))


/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  //   {
  //     path: '/dashboarddefault', // the url
  //     component: Dashboard, // view rendered
  //   },
  {
    path: "/schedule",
    component: Schedule,
  },
  {
    path: "/cancel",
    component: Cancel,
  },
  {
    path: "/home",
    component: Home,
  },
  //   {
  //     path: '/settings',
  //     component: Settings,
  //   },
  //   {
  //     path: '/billing',
  //     component: Billing,
  //   },
  
  
  
  
  {
    path: '/allpickups',
    component: AllPickups
  }

];

export default routes;
