import React, { useState } from "react";
import NavBar from "./NavBar.js";
import "../index.css";

export default function NavBarAnimation() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className={isActive ? "app" : "container"}>
      <h1>Hello react</h1>
      <button onClick={handleToggle}>Toggle class</button>
    </div>
  );
}

// const menuToggle = document.querySelector(".toggle");
// const showcase = document.querySelector(".showcase");

// menuToggle.addEventListener("click", () => {
//   menuToggle.classList.toggle("active");
//   showcase.classList.toggle("active");
// });