import HeaderNavbar from './components/HeaderNavbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About';
import Sophrologie from './components/Sophrologie';
import Seance from './components/Seance';
import Prestations from './components/Prestations';
import Contact from './components/Contact';
// import Logo from './components/Logo';
import LogoAnime from "./images/LogoAnime.gif";
import { useEffect, useState } from 'react';
import {  useLocation } from "react-router-dom";
import './App.css';
import Accueil from './components/Accueil';
import Entreprise from './components/Entreprise';

function App() {
  const location = useLocation();
const [loading, setLoading] = useState(true);

 useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 4000);
  return () => clearTimeout(timer);
}, []);
 
  return (
    <>
      {loading && location.pathname === "/" ? 
       <div className="my-animation">
      <img src={LogoAnime} alt="Claire" className="logo-anime" />
    </div> 
    : 
    <Router>  
     <HeaderNavbar />
      <Switch>
      <Route exact path="/" component={Accueil}></Route>
      <Route exact path="/accueil" component={Accueil}></Route>
     <Route exact path="/aproposdemoi" component={About}></Route>
        <Route exact path="/sophrologie" component={Sophrologie}></Route>
        <Route exact path="/entreprise" component={Entreprise}></Route> 
        <Route exact path="/seance" component={Seance}></Route>
        <Route exact path="/prestations" component={Prestations}></Route>
        <Route exact path="/contact" component={Contact}></Route>
       </Switch>
    </Router>}
    </>
  );
}

export default App;
