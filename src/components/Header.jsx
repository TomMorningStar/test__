import React from "react";
import arrow from "../assets/arrow.svg";

const Header = ({ handleGetSort }) => {
  return (
    <thead>
      <tr>
        <th className="itemId">
          ID <img src={arrow} alt="" />
        </th>
        <th className="title" onClick={handleGetSort}>
          Заголовок
          <img src={arrow} alt="" />
        </th>
        <th className="tags">tags</th>
        <th>
          Описание <img src={arrow} alt="" />
        </th>
      </tr>
    </thead>
  );
};

export default Header;
