import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Header from "./Headers/Header";
import { Edit, SubDetails, Add ,ViewSubmissions} from "./Admin";
import {
  BookDetails,
  Collection,
  Contact,
  Homepage,
  SearchResults,
  Submissions,
} from "./Components";

const App = () => {
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetchBookData();
  });

  const fetchBookData = async () => {
    try {
      const res = await fetch("/catalogue/all-books");
      const data = await res.json();
      const bookArray = Object.values(data)[1];
      setAllBooks(bookArray.reverse());
    } catch (error) {
      throw "error";
    }
  };
  
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
          <Homepage allBooks={allBooks} />
        </Route>
        <Route exact path="/catalogue/collection">
          <Collection allBooks={allBooks} />
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
          <SearchResults searchResults={searchResults} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
