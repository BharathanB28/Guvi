import FeatureList from "../FeaturesList/FeatureList";
import "./Card.css";
function Card(props) {
  return (
    <div className="main-container">
      <div className="upper-part">
        <div className="subscription-type">{props.subsType}</div>
        <h1>
          {props.price}
          <span className="subtitle">/month</span>
        </h1>
      </div>
      <div className="seperation-line"></div>
      <FeatureList features={props.features} />
      <button className="btn btn-buy">BUY</button>
    </div>
  );
}

export default Card;
