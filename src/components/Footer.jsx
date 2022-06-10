import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = ({ page, setPage }) => {
  const navigate = useNavigate();

  const handleMinus = () => {
    if (page) {
      setPage(page - 10);
      navigate(`/skip=${page - 10}`);
    }
  };

  const handlePlus = () => {
    if (page !== 20) {
      setPage(page + 10);
      navigate(`/skip=${page + 10}`);
    }
  };

  return (
    <footer>
      <button onClick={handleMinus}>Назад</button>
      <button onClick={handlePlus}>Далее</button>
    </footer>
  );
};

export default Footer;
