import React from "react";
import Navbar from "./Components/Navbar/Navrbar";
import Header from "./Components/Main/Header";
import Menu from "./Components/Menu/Menu";
import Events from "./Components/Event/Events";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Menu />
      <Events />
      <About />
      <Footer />
    </div>
  );
}

export default App;
