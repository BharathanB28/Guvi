import Card from "./Components/Cards/Card";
import "./App.css";

function App() {
  const plans = [
    {
      subsType: "FREE",
      price: "$0",
      features: [
        "Single User",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
      ],
    },
    {
      subsType: "PLUS",
      price: "$9",
      features: [
        "Single User",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
      ],
    },
    {
      subsType: "PRO",
      price: "$49",
      features: [
        "Single User",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports",
      ],
    },
  ];

  return (
    <div className="container">
      {plans.map((el, i) => {
        return (
          <Card
            key={i}
            subsType={el.subsType}
            price={el.price}
            features={el.features}
          />
        );
      })}
    </div>
  );
}

export default App;
