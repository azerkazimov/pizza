import React from "react";
import Navbar from "./Components/Navbar/Navrbar";
import Header from "./Components/Main/Header";
import Menu from "./Components/Menu/Menu";
import Events from "./Components/Event/Events";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Basket from "./Components/Basket/Basket";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Menu />
              <Events />
              <About />
            </>
          }
        />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
