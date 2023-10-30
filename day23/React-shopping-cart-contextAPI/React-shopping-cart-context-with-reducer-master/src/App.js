import "./App.css";
import Header from "./components/Header";
import React, { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
