import React from "react";
import "./App.css";
import "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { BasketPage } from "./pages/BasketPage/BasketPage";
import { MainPage } from "./pages/MainPage/Main";
import { PizzaPage } from "./pages/PizzaPage/PizzaPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<MainPage/>} />
       <Route path="basket" element={<BasketPage />} />
       <Route path="pizza" element={<PizzaPage />}  />
       <Route path="*" element={<NotFoundPage />}  />
      {/* <div className="App">
        <Header />
      </div> */}
      </Route>
    </Routes>
  );
}

export default App;
