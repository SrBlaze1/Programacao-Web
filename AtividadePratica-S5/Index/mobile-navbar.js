 /*Curso de Engenharia de Software - UniEVANGÉLICA 
  Disciplina de Programação Web 
  Dev: Carlos Eduardo Cunha Ribeiro
  DATA  23/03/2023*/

import React, { useRef, useState, useEffect } from 'react';

function MobileNavbar({ mobileMenu, navList, navLinks }) {
  const mobileMenuRef = useRef(null);
  const navListRef = useRef(null);
  const navLinksRef = useRef([]);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    mobileMenuRef.current.addEventListener("click", handleClick);
    navLinksRef.current = Array.from(navListRef.current.querySelectorAll(navLinks));
  }, []);

  function handleClick() {
    setIsActive(!isActive);
    animateLinks();
  }

  function animateLinks() {
    navLinksRef.current.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  return (
    <div>
      <div className={`mobile-menu ${isActive ? "active" : ""}`} ref={mobileMenuRef}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-list ${isActive ? "active" : ""}`} ref={navListRef}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default Mobile-Navbar;
