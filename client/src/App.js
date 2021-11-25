import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navs from "./components/Navs";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Services from "./components/Services";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NotFound4O4 from "./components/NotFound4O4";
// import { Container } from "react-bootstrap";
// import Body from "./components/Body";

function App() {
  return (
    <Router>
      <div className="App" style={{ background: "black" }}>
        <Navs />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />

          <Route exact path="*" component={NotFound4O4} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
