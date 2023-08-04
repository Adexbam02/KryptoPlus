import Ellipse2 from "../assets/Ellipse2.svg";

// import Ellipse2 from "../../assets/Ellipse2.svg";
import profile1 from "../assets/profile1.svg";
import profile2 from "../assets/profile2.svg";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Reqpay = () => {
  return (
    <>
      <div className="flex namemark">
        <div className="flex">
          <img className="ellipse2" src={Ellipse2} alt="circleimg" />
          <span>
            <p>John Do</p>
            <small>Mon, Feb 28</small>
          </span>
        </div>
      </div>
      <div className="flex by1 namemark">
        <div className="flex">
          <IoMdCheckmarkCircle
            fill="#4F46BA"
            stroke="#4F46BA"
            className="IoMdCheckmarkCircle"
          />
          <span>
            <p>Mike Taylor</p>
            <small>Tue, Feb 21</small>
          </span>
        </div>
        <img src={profile1} alt="" />
      </div>
      <div className="flex namemark">
        <div className="flex">
          <img className="ellipse2" src={Ellipse2} alt="circleimg" />
          <span>
            <p>Angela Taylor</p>
            <small>Tue, Feb 21</small>
          </span>
        </div>
        <img src={profile2} alt="" />
      </div>
    </>
  );
};

export default Reqpay;
