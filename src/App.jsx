import React from "react";

import Main from "./components/Main";
import Footer from "./components/Footer";

import { useEffect } from "react";
import Search from "./components/Search";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [searchItemsWindow, setSearchItemsWindow] = React.useState(true);
  const [validation, setValidation] = React.useState(false);
  const [page, setPage] = React.useState(0);

  const handleCancel = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setItems(posts.posts);
        setIsLoading(true);
      });

    localStorage.clear();
    setSearchItemsWindow(true);
  };

  const handleGetValue = () => {
    fetch(`https://dummyjson.com/posts/search?q=${value}`)
      .then((res) => res.json())
      .then((posts) => {
        setItems(posts.posts);
        setIsLoading(true);
      });

    localStorage.clear();

    setValue("");
    if (value) {
      setSearchItemsWindow(false);
      setValidation(false);
    } else {
      setValidation(true);
      setSearchItemsWindow(true);
    }
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/posts?limit=10&skip=${page}`)
      .then((res) => res.json())
      .then((posts) => {
        localStorage.clear();
        setItems(posts.posts);
        setIsLoading(true);
      });
  }, [page]);

  return (
    <div className="App">
      <Search
        validation={validation}
        handleCancel={handleCancel}
        setValue={setValue}
        value={value}
        handleGetValue={handleGetValue}
      />

      {isLoading ? (
        <Main page={page} items={items} />
      ) : (
        <div className="loading">Fetching posts...</div>
      )}

      {searchItemsWindow && (
        <Footer setItems={setItems} page={page} setPage={setPage} />
      )}
    </div>
  );
};

export default App;
