import "./FeatureList.css";

function FeatureList(props) {
  const features = [
    "Single User", 
    "50GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "Monthly Status Reports",
  ];

  return (
    <div>
      <ul>
        {features.map((el, i) => {
          if (props.features.includes(el)) {
            return (
              <div key={i} className="list-component">
                <i className="fa fa-check"></i>
                <li className="feature-list">
                  {props.features.length === features.length &&
                  el === "Free Subdomain"
                    ? "Unlimited Free Subdomains"
                    : el}
                </li>
              </div>
            );
          } else {
            return (
              <div key={i} className="list-component">
                <i className="fa fa-times disable" ></i>
                <li className="feature-list disable" id={i}>
                  {el}
                </li>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default FeatureList;
