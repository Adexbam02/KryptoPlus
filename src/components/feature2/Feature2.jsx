import "../feature2/feature2.css";
import Prop1 from "../prop1/Prop1";
import createinvoice from "../../assets/createinvoice.png";
const Feature2 = () => {
  return (
    <section className="flex Feature2__section section__padding">
      <div className="flex feature2__section-content">
        <div className="feature2__section-content__left">
          <Prop1
            heading="OUR FEATURE"
            title="Manage all expenses &
              incomes from your dashboard"
            paragraph="Smart Financial Control: Take charge of your finances effortlessly. Monitor expenses and incomes, and stay on top of your financial game with Krypto+ dashboard!"
            button="Get Started"
          />
        </div>

        <div className="flex feature2__section-content__right">
          <div className="flex">
            <div className="flex daily__activities">
              <p>Daily Activities</p>
              <div className="flex daily__activities-bars">
                <div className="flex daily__activities-bar">
                  <div></div>
                  <small>Mon</small>
                </div>
                <div className="flex daily__activities-bar">
                  <div></div>
                  <small>Tue</small>
                </div>
                <div className="flex daily__activities-bar">
                  <div></div>
                  <small>Thu</small>
                </div>
                <div className="flex daily__activities-bar">
                  <div></div>
                  <small>Fri</small>
                </div>
                <div className="flex daily__activities-bar">
                  <div></div>
                  <small>Sat</small>
                </div>
              </div>
            </div>

            <div className="create__invoice">
              <img src={createinvoice} className="createinvoice" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
