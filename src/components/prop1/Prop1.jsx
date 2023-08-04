import "../prop1/prop1.css";

// eslint-disable-next-line react/prop-types
const Prop1 = ({ heading, title, paragraph, button }) => {
  return (
    <div className="flex prop1">
      <h3>{heading}</h3>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <button className="btn">{button}</button>
    </div>
  );
};

export default Prop1;
