import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__links container">
        <a
          class="footer__link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/waheedmusa"
        >
          GitHub
        </a>
        <a
          class="footer__link"
          target="_blank"
          rel="noreferrer"
          href="https://dribbble.com/waheedmusa"
        >
          Dribbble
        </a>
      </div>
    </footer>
  );
};
