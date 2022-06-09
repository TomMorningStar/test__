import React from "react";
import Content from "./Content";
import Header from "./Header";
import { Navigate, Route, Routes } from "react-router-dom";

const Main = ({ items }) => {
  return (
    <main>
      <table>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/1" replace />} />
          <Route path="/1" element={<Content items={items.slice(0, 10)} />} />
          <Route path="/2" element={<Content items={items.slice(10, 20)} />} />
          <Route path="/3" element={<Content items={items.slice(20, 30)} />} />
        </Routes>
      </table>
    </main>
  );
};

export default Main;
