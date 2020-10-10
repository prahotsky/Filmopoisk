import React from "react";
import { Redirect } from "react-router-dom";

import MainPage from "../pages/MainPage";
import Catalog from "../pages/Catalog";

import {
  ROOT_PATH,
  CATALOG_PATH,
  INVALID_PATH,
} from "../shared/constants/links";

const routes = [
  { path: ROOT_PATH, component: MainPage, exact: true, private: false },
  { path: CATALOG_PATH, component: Catalog, private: false },
  {
    path: INVALID_PATH,
    render: () => <Redirect to={{ pathname: ROOT_PATH }} />,
    private: false,
  },
];

export default routes;
