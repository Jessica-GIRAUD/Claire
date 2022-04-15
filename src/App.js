import HeaderNavbar from "./components/HeaderNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import MentionsLegales from "./components/MentionsLegales";
import SinglePage from "./components/SinglePage";

function App() {
  return (
    <Router>
      <HeaderNavbar />
      <Switch>
        <Route exact path="/" component={SinglePage}></Route>
        <Route
          exact
          path="/mentionslegales"
          component={MentionsLegales}
        ></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
