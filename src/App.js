import "./assets/css/App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Menu } from "./components/Pages/Menu";
import { Contact } from "./components/Pages/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <Router>
      <ScrollToTop>
        <NavBar />
        <div className="pages">
          <AnimatePresence>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/menu" component={Menu} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
          </AnimatePresence>
        </div>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;