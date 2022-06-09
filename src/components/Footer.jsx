import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const pageLists = [1, 2, 3];
  const [pages, setPages] = React.useState(1);
  const navigate = useNavigate();

  const href = window.location.pathname.split("");

  const handleMinus = () => {
    if (window.location.pathname !== `/${1}`) {
      setPages(pages - 1);
      navigate(`${Number(href[1]) - 1}`);
    }
    localStorage.clear();
  };

  const handlePlus = () => {
    if (window.location.pathname !== `/${3}`) {
      setPages(pages + 1);
      navigate(`${Number(href[1]) + 1}`);
    }
    localStorage.clear();
  };

  const handleNavigate = (el) => {
    navigate(`${el}`);
    localStorage.clear();
  };

  return (
    <footer>
      <button
        onClick={handleMinus}
        disabled={`/${1}` === window.location.pathname}
      >
        Назад
      </button>
      <ul>
        {pageLists.map((el) => {
          return (
            <li
              onClick={() => handleNavigate(el)}
              className={`/${el}` === window.location.pathname ? "active" : ""}
              key={el}
            >
              {el}
            </li>
          );
        })}
      </ul>
      <button
        onClick={handlePlus}
        disabled={`/${3}` === window.location.pathname}
      >
        Далее
      </button>
    </footer>
  );
};

export default Footer;
