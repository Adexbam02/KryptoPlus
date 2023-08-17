import "./navbar.css";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import KryptoLogo from "../../assets/KryptoLogo.png";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="section__padding">
      <div className="nav__content ">
        <div className="nav__content-logo">
          <a href="#" className="nav__content-logo">
            <img src={KryptoLogo} alt="navlogo" />
          </a>
        </div>

        <div className="nav__content-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#whykrypto+">Why Krypto+</a>
            </li>
            <li>
              <a href="#feature">Feature</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
          </ul>
        </div>

        <div className="nav__content-button">
          <li>
            <a href="#">Sign in</a>
          </li>
          <button className="btn" type="button">
            Start Free
          </button>
        </div>

        <div className="nav__hamburger ">
          {toggleMenu ? (
            <HiOutlineX onClick={() => setToggleMenu(false)} />
          ) : (
            <HiOutlineMenuAlt3 onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <div className="slide-top nav__content__hamburger-menu">
              <div className="nav__content__hamburger-menu__link">
                <ul className="nav__content__hamburger-menu__link-list">
                  <li onClick={() => setToggleMenu(false)}>
                    <a href="#">Home</a>
                  </li>
                  <li onClick={() => setToggleMenu(false)}>
                    <a href="#whykrypto+">Why Krypto+</a>
                  </li>
                  <li onClick={() => setToggleMenu(false)}>
                    <a href="#feature">Feature</a>
                  </li>
                  <li onClick={() => setToggleMenu(false)}>
                    <a href="#testimonial">Testimonial</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
