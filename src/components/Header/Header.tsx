import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container.tsx";
import "./Header.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  function handleIsNavOpenToggle() {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  }

  return (
    <header className="header">
      <Container className="header__container">
        <div>
          <Link className="header__logo-link" to="/">
            Header Logo
          </Link>
        </div>
        <nav aria-label="primiary navigation">
          <ul
            id="header__nav-list"
            className="header__nav-list"
            data-visible={isNavOpen}
          >
            <li>
              <Link className="header__nav-link" to="/">
                Link One
              </Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/">
                Link Two
              </Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/">
                Link Three
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="header__nav-toggle-btn"
          aria-controls="header__nav-list"
          aria-expanded={isNavOpen}
          onClick={handleIsNavOpenToggle}
        >
          <span className="visually-hidden">Menu</span>
        </button>
      </Container>
    </header>
  );
}

export default Header;
