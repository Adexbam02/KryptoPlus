import "./cta.css";

const CTA = () => {
  return (
    <section className="flex cta section__padding">
      <div className="flex cta__content">
        <h2>
          Get Started With <span className="k">Krypto</span>
          <span className="plus">+</span>
        </h2>
        <p>
          Unlock the Crypto World: Begin your crypto adventure with Krypto+.
          Join now and access the future of digital finance!
        </p>
        <button className="btn">Get Started</button>
      </div>
    </section>
  );
};

export default CTA;
