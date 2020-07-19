import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./pages";
import TodoList from "./pages/todolist";

function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" render={props => <Main {...props} />} />
      <Route exact path="/:id" render={props => <TodoList {...props} />} />
    </Switch>
  );
}

export default AppRoutes;
