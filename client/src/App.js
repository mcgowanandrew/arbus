import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Add from "../src/admin/Add";
import Homepage from "./Homepage";
import Submissions from "./Submissions";
import Collection from "./Collection";
import BookDetails from "./BookDetails";
import Header from "./Headers/Header";
import ViewSubmissions from "./admin/ViewSubmissions";
import SubDetails from "./admin/SubDetails";
import Edit from "./admin/Edit"

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/catalogue/collection">
          <Collection />
        </Route>
        <Route exact path="/catalogue/:_id">
          <BookDetails />
        </Route>
        <Route exact path="/admin/add">
          <Add />
        </Route>
        <Route exact path="/edit/:_id">
          <Edit/>
        </Route>
        <Route exact path="/submissions">
          <Submissions />
        </Route>
        <Route exact path="/admin/all-submissions">
          <ViewSubmissions />
        </Route>
        <Route exact path="/admin/sub/edit/:_id">
          <SubDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
