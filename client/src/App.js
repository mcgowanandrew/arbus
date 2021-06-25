import React, { useState, useEffect } from "react";
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
import Edit from "./admin/Edit";
import Contact from "./Contact";
import SearchResults from "./SearchResults";

const App = () => {
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("/catalogue/all-books", { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        const bookArray = Object.values(data)[1];
        setAllBooks(bookArray.reverse());
      });
  }, []);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header
        value={value}
        setValue={setValue}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        allBooks={allBooks}
      />
      <Switch>
        <Route exact path="/">
          <Homepage allBooks={allBooks}/>
        </Route>
        <Route exact path="/catalogue/collection">
          <Collection allBooks={allBooks} setAllBooks={setAllBooks} />
        </Route>
        <Route exact path="/catalogue/:_id">
          <BookDetails />
        </Route>
        <Route exact path="/admin/add">
          <Add />
        </Route>
        <Route exact path="/edit/:_id">
          <Edit />
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
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/search/results">
            <SearchResults
              value={value}
              SetValue={setValue}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
