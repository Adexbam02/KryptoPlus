import "./logowall.css";
import {
  OpenZeppolin,
  Oracle,
  Morpheus,
  Samsung,
  Monday,
  Segment,
  Protonet,
} from "../../assets/index";
const Logowall = () => {
  return (
    <section className="logowall section__padding">
      <div className="flex logowall__content">
        <p>Companies we have helped grow</p>

        <div className="flex logowall__content-logo">
          <img src={OpenZeppolin} alt="logoimage" />
          <img src={Oracle} alt="logoimage" />
          <img src={Morpheus} alt="logoimage" />
          <img src={Samsung} alt="logoimage" />
          <img src={Monday} alt="logoimage" />
          <img src={Segment} alt="logoimage" />
          <img src={Protonet} alt="logoimage" />
        </div>
      </div>
    </section>
  );
};

export default Logowall;
