import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "../styles/1.menu/menu.scss"

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const menuBtn = document.querySelector('.menu-btn');
    if (!menuBtn) return;

    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
    };

    menuBtn.addEventListener('click', handleMenuClick);

    return () => {
      menuBtn.removeEventListener('click', handleMenuClick);
    };
  }, [menuOpen]);

  return (
    <div className="background_menu">
      <nav className="bloc_menu">
        <ul className="bloc_menu_nav">
        <div className={`menu-btn ${menuOpen ? 'open' : ''}`}>
            <div className="menu-btn__burger"></div>
        </div>
          <Link className="bloc_menu_texte1" to="/"><li>ACCUEIL</li></Link>
          <Link className="bloc_menu_texte" to="/"><li>MES PROJETS</li></Link>
          <Link className="bloc_menu_texte" to="/"><li>STAGES</li></Link>
          <Link className="bloc_menu_texte" to="/"><li>MON PROFIL</li></Link>
        </ul>
      </nav>
    </div>
  );
}