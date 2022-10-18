import React from "react";
import { Redirect } from "react-router-dom";
import BlankLayout from "../layout/BlankLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/Home";

import {
  requiresAuthentication,
  requiresNoAuthentication,
} from "../store/middleware";
import Signin from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ServicesPreferences from "../components/registerSteps/ServicesPreferences";
import Individuals from "../pages/Individuals";
import Companies from "../pages/Companies";
import Transactions from "../pages/Transactions";
import RechargeSuccessful from "../components/finances/recharge/RechargeSuccessful";
import RechargeFailed from "../components/finances/recharge/RechargeFailed";
import Wallets from "../pages/Wallets";
import Services from "../pages/Services";



const routes = [
  {
    component: BlankLayout,

    routes: [
      {
        name: "Index",
        path: "/",
        exact: true,
        render: () => <Redirect to="/signin" />,
      },
      {
        name: "Dashboard",
        path: "/dashboard",
        component: DashboardLayout,
        routes: [
          {
            name: "Dashboard Home",
            path: "/dashboard",
            exact: true,
            component: Home,
          },
          {
            name: "My services page",
            path: "/dashboard/individuals",
            exact: true,
            component: Individuals,
          },
          {
            name: "Companies page",
            path: "/dashboard/companies",
            exact: true,
            component: Companies,
          },
          {
            name: "Transactions page",
            path: "/dashboard/transactions",
            exact: true,
            component: Transactions,
          },
          {
            name: "Wallets page",
            path: "/dashboard/wallets",
            exact: true,
            component: Wallets,
          },
          {
            name: "Services page",
            path: "/dashboard/services",
            exact: true,
            component: Services,
          },
        ],
      },
      {
        name: "Services preferences",
        path: "/recharge/success",
        exact: true,
        component: RechargeSuccessful,
      },
      {
        name: "Services preferences",
        path: "/recharge/failed",
        exact: true,
        component: RechargeFailed,
      },
      {
        name: "Services preferences",
        path: "/preferences",

        exact: true,
        component: ServicesPreferences,
      },

      {
        name: "Sign in page",
        path: "/signin",
        exact: true,
        component: Signin,
      },
    ],
  },
];
export default routes;
