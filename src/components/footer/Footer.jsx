import "./footer.css";
import KryptoLogo from "../../assets/KryptoLogo.png";

import linkedin from "../../assets/linkedin.svg";
import messenger from "../../assets/messenger.svg";
import twitter from "../../assets/twitter.svg";
import twoo from "../../assets/twoo.svg";

const Footer = () => {
  return (
    <footer className="flex section__padding">
      <div className="footer__content">
        <div className="flex footer__desc">
          <img src={KryptoLogo} alt="KryptoLogo" />
          <p>
            Real-time data, expert insights, and tools for informed crypto
            investing.
          </p>
          <div className="flex footer__desc-socials">
            <a href="#">
              <img src={linkedin} alt="" />
            </a>
            <a href="#">
              <img src={messenger} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
            <a href="#">
              <img src={twoo} alt="" />
            </a>
          </div>
        </div>

        <div className="footer__company">
          <h4>Company</h4>
          <ul className="flex">
            <li>
              <a href="/">About US</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>

        <div className="footer__product">
          <h4>Product</h4>
          <ul className="flex">
            <li>
              <a href="#feature">Features</a>
            </li>
            <li>
              <a href="/">Exchange</a>
            </li>
            <li>
              <a href="/">Wallet</a>
            </li>
            <li>
              <a href="/">Krypto+ API</a>
            </li>
          </ul>
        </div>

        <div className="footer__resources">
          <h4>Resources</h4>
          <ul className="flex">
            <li>
              <a href="/">Discover</a>
            </li>
            <li>
              <a href="/">Status</a>
            </li>
            <li>
              <a href="/">Crypto Prices</a>
            </li>
            <li>
              <a href="/">Help</a>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <h4>Contact Us</h4>
          <ul className="flex">
            <li>
              <a href="/">+000 000 0000</a>
            </li>
            <li>
              <a href="/">Customer Service</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="flex copyright">
        Copyright @ <a href="/">Krypto+</a> 2023. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
