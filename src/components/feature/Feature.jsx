import "./feature.css";
import lady from "../../assets/lady.png";
import Reqpay from "../Reqpay";
import Prop1 from "../prop1/Prop1";

const Feature = () => {
  return (
    <section id="feature" className="Feature__section section__padding">
      <div className="flex feature__section-content">
        <div className="feature__section-content__left">
          <div className="flex reqpay">
            <Reqpay />
          </div>
          <img className="lady" src={lady} alt="lady" />
        </div>

        <div className="flex feature__section-content__right">
          <Prop1
            heading="OUR FEATURE"
            title="Receive payments quickly from anywhere"
            paragraph="Effortless Transactions: Instantly accept crypto payments from anywhere in the world. Seamlessly receive funds and unlock endless possibilities with Krypto+!"
            button="Get Started"
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
