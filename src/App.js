import "./App.css";
import NavBar from "./jspublico/NavBar";
import "../src/css/Watt.css";
import Popnews from "./jspublico/Popnews";
import React from "react";
import  { useState, useEffect } from "react";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const handleScroll = (e) => {
      if (isModalOpen) {
        e.preventDefault();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isModalOpen]);

  return (
    <div className="App border-radio">
      {isModalOpen && <Popnews onClose={() => setIsModalOpen(false)} />}
      <NavBar />
      <a
        href="https://wa.me/1234567890"
        className="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;
