import React from "react";
import "./Footer.css";

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer>
      <a href="http://www.biblesc.com/privacy">Privacy Policy</a>
      <a href="http://www.biblesc.com/terms-and-conditions">Terms and Conditions</a>
      <p>© {year}</p>
    </footer>
  );
}
