import "./newsletter.css";
import Prop1 from "../prop1/Prop1";

const Newsletter = () => {
  return (
    <section className="newsletter section__padding">
      <div className="flex newsletter__content">
        <div className="newsletter__content-left">
          <Prop1
            heading="Our Newsletter"
            title="Stay updated with our
            weekly newsletter"
            paragraph="Stay Informed: Get ahead in the crypto world with our weekly newsletter. Receive expert insights, market updates, and exciting opportunities, all delivered straight to your inbox! "
          />
        </div>

        <div className="newsletter__content-right">
          <div className="newsletter__form">
            <form className="flex">
              <h3>Signup For Newsletter</h3>
              <input
                type="email"
                inputMode="email"
                placeholder="Email Address"
              />
              <input
                type="password"
                inputMode="password"
                placeholder="Password"
              />
              <button type="submit">GET STARTED</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
