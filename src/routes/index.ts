import React from "react";
import { Home, Login } from "../pages";

export interface IRoutes {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  HOME_PAGE = "/",
  LOGIN_PAGE = "/login",
}

export const publicRoutes: IRoutes[] = [
  {
    path: RouteNames.LOGIN_PAGE,
    element: Login,
  },
];

export const privateRoutes: IRoutes[] = [
  {
    path: RouteNames.HOME_PAGE,
    element: Home,
  },
];
