import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Add from "../src/admin/Add";
import Homepage from "./Homepage";
import Submissions from "./Submissions"

const App = () => {

  
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/admin/add">
          <Add />
        </Route>
        <Route exact path="/submissions">
          <Submissions/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
