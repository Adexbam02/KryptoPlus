import "./header.css";
import Frame1 from "../../assets/Frame1.png";
import { AiFillCheckCircle } from "react-icons/ai";
import revenuecircle from "../../assets/revenuecircle.svg";
// import bar1 from "..ss/../assets/bar1.png"

const Header = () => {
  return (
    <header className="section__padding">
      <div className="header__content">
        <div className="header__content-left">
          <h1>
            Welcome to <span className="k">Krypto</span>
            <span className="plus">+</span> : Your Ultimate Crypto Companion!
          </h1>
          <p>
            Krypto+, Your Crypto Companion: Real-time data, expert insights, and
            tools for informed crypto investing. Join the revolution now!
          </p>
          <div className="header__content-left__btns">
            <button className="header__content-left__btn btn">
              Get Started
            </button>
            <a href="#">See How it Works</a>
          </div>
          <div className="header__content-left__checked">
            <span>
              <AiFillCheckCircle /> Free Register
            </span>
            <span>
              <AiFillCheckCircle /> Great Service
            </span>
          </div>
        </div>

        <div className="header__content-right">
          <div className="header__content-right__img">
            <div className="revenue__card">
              <div className="revenue__card-title">
                <img src={revenuecircle} alt="" />
                <p>Revenue</p>
              </div>
              <div className="revenue__card-content">
                <div>
                  <h3>$36,680</h3>
                  <p>+12%</p>
                </div>
                <small>Compared to $28,000 Last Year</small>
              </div>
            </div>

            <div className="total__balance">
              <div>
                <div className="revenue__card-title">
                  <p>Total Balance</p>
                </div>
                <div className="revenue__card-content">
                  <div>
                    <h3>$4,200</h3>
                    <p>+14%</p>
                  </div>
                </div>
              </div>

              <div className="barchart__stats">
                <div className="barchart__stats-figure">
                  <small>10k</small>
                  <small>4k</small>
                  <small>2k</small>
                  <small>0k</small>
                </div>
                <div className="barchart">
                  <div className="Sun">
                    <small>S</small>
                  </div>
                  <div className="Mon">
                    <small>M</small>
                  </div>
                  <div className="Tue">
                    <small>T</small>
                  </div>
                  <div className="Wed">
                    <small>W</small>
                  </div>
                  <div className="Thu">
                    <small>T</small>
                  </div>
                  <div className="Fri">
                    <small>F</small>
                  </div>
                  <div className="Sat">
                    <small>S</small>
                  </div>
                  <div className="Satt">
                    <small>S</small>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="header__content-right__img-dashboard"
              src={Frame1}
              alt="Frame1"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
