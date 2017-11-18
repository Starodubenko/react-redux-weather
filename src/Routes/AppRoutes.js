import * as React from "react";
import { Route } from "react-router";

import { Main } from "../layers/pages";

import './AppRouter.scss'

export const AppRoutes = () => {
  return (
      <div className="AppRouter">
          <Route exact path="/" component={Main}/>
      </div>
  )
};