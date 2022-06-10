import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = ({ page, setPage }) => {
  const navigate = useNavigate();

  const pageLists = [1, 2, 3];
  const [selectedPage, setSelectedPage] = React.useState(1);

  const handleMinus = () => {
    if (page) {
      setPage(page - 10);
      navigate(`/skip=${page - 10}`);
      setSelectedPage((prev) => prev - 1);
    }
  };

  const handlePlus = () => {
    if (page !== 20) {
      setPage(page + 10);
      navigate(`/skip=${page + 10}`);
      setSelectedPage((prev) => prev + 1);
    }
  };

  const handleNavigate = (el) => {
    setSelectedPage(el);
  };

  return (
    <footer>
      <button onClick={handleMinus}>Назад</button>
      <ul>
        {pageLists.map((el) => {
          return (
            <li
              onClick={() => handleNavigate(el)}
              className={el === selectedPage ? "active" : ""}
              key={el}
            >
              {el}
            </li>
          );
        })}
      </ul>
      <button onClick={handlePlus}>Далее</button>
    </footer>
  );
};

export default Footer;
