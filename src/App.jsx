import React from "react";

import Main from "./components/Main";
import Footer from "./components/Footer";

import { useEffect } from "react";
import Search from "./components/Search";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [searchItemsWindow, setSearchItemsWindow] = React.useState(true);
  const [validation, setValidation] = React.useState(false);

  const navigate = useNavigate();

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
    navigate("1");
  };

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        localStorage.clear();
        setItems(posts.posts);
        setIsLoading(true);
      });
  }, []);

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
        <Main items={items} />
      ) : (
        <div className="loading">Fetching posts...</div>
      )}

      {searchItemsWindow && <Footer />}
    </div>
  );
};

export default App;
