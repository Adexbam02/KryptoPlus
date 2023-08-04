import "./whykrypto.css";
import baricon from "../../assets/baricon.svg";
import moneyicon from "../../assets/moneyicon.svg";
import circdollaricon from "../../assets/circdollaricon.svg";
import medalicon from "../../assets/medalicon.svg";
import more from "../../assets/more.svg";
import Ellipse54 from "../../assets/Ellipse54.svg";
import spiral from "../../assets/spiral.svg";
import Reqpay from "../Reqpay";

const Whykrypto = () => {
  return (
    <section id="whykrypto+" className="section__padding">
      <div className="flex whykrypto__content ">
        <div className="whykrypto__content-heading">
          <p>Why Krypto+</p>
          <h1>Specially designed for crypto payments</h1>
        </div>
        <div className="flex whykrypto__content-bars">
          <div className="flex whykrypto__content-bar">
            <div className="flex whykrypto__content-bar__board bar_board">
              <img className="Ellipse1" src={Ellipse54} alt="" />
              <div className="flex whykrypto__content-bar__dashboards">
                <div className=" flex whykrypto__content-bar__dashboard">
                  <img src={baricon} alt="baricon" />
                  <div>
                    <small>Total net worth</small>
                    <p>$5,250.90</p>
                  </div>
                </div>
                <div className="flex whykrypto__content-bar__dashboard">
                  <img src={moneyicon} alt="moneyicon" />
                  <div>
                    <small>Total earnings</small>
                    <p>$10,594.90</p>
                  </div>
                </div>
                <div className="flex whykrypto__content-bar__dashboard">
                  <img src={circdollaricon} alt="circdollaricon" />
                  <div>
                    <small>Harvested losses</small>
                    <p>$0.00</p>
                  </div>
                </div>
                <div className="flex whykrypto__content-bar__dashboard">
                  <img src={medalicon} alt="medalicon" />
                  <div>
                    <small>Total for all goals</small>
                    <p>$5,596.90</p>
                  </div>
                </div>
              </div>
            </div>
            <h2>Quick Summaries</h2>
            <p>
              At Krypto+, we provide concise and up-to-date summaries of various
              cryptocurrencies, saving you time and effort in researching the
              vast crypto market. Stay informed with key insights and make
              smarter investment decisions.
            </p>
          </div>

          <div className="flex whykrypto__content-bar">
            <div className="flex whykrypto__content-bar__board bar__board">
              <img className="Ellipse2" src={Ellipse54} alt="" />
              <span className="flex mywallet__title">
                <p>My Wallets</p>
                <img src={more} alt="more" />
              </span>
              <div className="flex mywallet">
                <div className="flex">
                  <small>BTC</small> <p>69%</p>
                </div>
                <div className="flex">
                  <small>LTC</small> <p>82%</p>
                </div>
                <div className="flex fullpercent">
                  <small>XRP</small> <p>99%</p>
                </div>
                <div className="flex">
                  <small>BLT</small> <p>69%</p>
                </div>
                <div className="flex addnew">
                  <small className="flex">+ADD NEW</small> <p>wal</p>
                </div>
              </div>
            </div>
            <h2>Manage your wallets</h2>
            <p>
              Managing your crypto assets has never been easier. Krypto+ offers
              a secure and intuitive wallet management feature, allowing you to
              effortlessly track, send, and receive digital currencies, ensuring
              your investments are safe and organized.
            </p>
          </div>

          <div className="flex whykrypto__content-bar">
            <div className="flex whykrypto__content-bar__board  request__payment">
              <img className="Ellipse54" src={Ellipse54} alt="Ellipse54" />
              <img className="spiral" src={spiral} alt="spiral" />
              <Reqpay />
            </div>
            <h2>Request Payments</h2>
            <p>
              Simplify transactions with our &quot;Request Payment&quot; tool.
              Effortlessly request cryptocurrency payments from friends,
              clients, or customers with a straightforward process, making
              Krypto+ your go-to platform for seamless crypto payments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whykrypto;
