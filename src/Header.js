import React from "react";
import "./styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

function Item(props) {
  return (
    <li className="header-menu__menu-item">
      <span className="menu-item__wrap-link">
        <a href="/list" className="header-menu__link">
          {props.name}
        </a>
      </span>
    </li>
  );
}

function Header() {
  const menu = [
    "жінкам",
    "чоловікам",
    "дім та декор",
    "косметика",
    "бренди",
    "інше",
  ];
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top__wrap">
            <a href="/" className="header__logo">
              <img src="logo-black.png" className="logo-img" alt="Всі. Свої" />
            </a>
            <div className="header__icons">
              <form id="header__form">
                <input type="search" autoComplete="off" />
                <button className="header__link header__search">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="header__link-img"
                  />
                </button>
              </form>
              <a href="/profile" className="header__link">
                <FontAwesomeIcon icon={faUser} className="header__link-img" />
              </a>
              <a href="/bag" className="header__link header__link-bag">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className="header__link-img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header-menu-wrap">
        <nav className="header__menu header-menu container">
          <ul className="header-menu__menu-list">
            {menu.map((item) => (
              <Item name={item} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
