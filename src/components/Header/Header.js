import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  let className = !navBarOpen ? " nav-bar-closed" : " nav-bar-open";

  return (
    <header>
      <div className="nav-bar">
        <a className="logo-section" href="http://app.biblesc.com/">
          <img className="home-button" alt="home page" src="./Icon.png" />
          <h3>Bible Study Companion</h3>
        </a>
        <button
          className="nav-menu-button"
          onClick={() => {
            setNavBarOpen(!navBarOpen);
          }}
        >
          <i className={!navBarOpen ? "fas fa-bars" : "fas fa-times"} />
        </button>
      </div>
      <div className={"link-section" + className}>
        <a href="http://www.biblesc.com/translation">Translation</a>
        <a href="mailto:humanappmaker@gmail.com">Contact</a>
      </div>
    </header>
  );
}
