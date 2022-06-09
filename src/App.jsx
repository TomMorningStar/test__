import React from "react";

import Main from "./components/Main";
import Footer from "./components/Footer";

import { useEffect } from "react";
import Search from "./components/Search";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [searchItems, setSearchItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [searchItemsWindow, setSearchItemsWindow] = React.useState(true);

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
    const filteredItems = searchItems.filter((item) => {
      const searchTags = item.tags.map((item) => {
        return item;
      });

      return (
        item.body.toLowerCase().includes(value.toLowerCase()) ||
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        searchTags.join(" ").toLowerCase().includes(value.toLowerCase())
      );
    });
    localStorage.clear();
    setItems(filteredItems);
    setValue("");
    setSearchItemsWindow(false);
    navigate("1");
  };

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        localStorage.clear();
        setItems(posts.posts);
        setSearchItems(posts.posts);
        setIsLoading(true);
      });
  }, []);

  return (
    <div className="App">
      <Search
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
