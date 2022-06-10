import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Content from "./Content";
import Header from "./Header";

const Main = ({ items, page }) => {
  return (
    <main>
      <table>
        <Header />

        <Routes>
          <Route path="*" element={<Navigate to="skip=0" replace />} />
          <Route path={`/skip=${page}`} element={<Content items={items} />} />
        </Routes>
      </table>
    </main>
  );
};

export default Main;
