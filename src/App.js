import HeaderNavbar from './components/HeaderNavbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Logo from './components/Logo';
import LogoAnime from "./images/LogoAnime.gif";
import { useEffect, useState } from 'react';
import {  useLocation } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import MentionsLegales from './components/MentionsLegales';
import SinglePage from './components/SinglePage';

function App() {
  const {pathname, hash} = useLocation();
const [loading, setLoading] = useState(true);

 useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 3900);
  return () => {clearTimeout(timer)};
}, []);

 
  return (
<>
  {loading && pathname === '/' && hash === '' ? 
    <div className="my-animation" >
      <img src={LogoAnime} alt="Claire" className="logo-anime"/>
    </div>  
: 
  <Router>  
    <HeaderNavbar />
    <Switch>
      <Route exact path="/" component={SinglePage}></Route>
      <Route exact path="/mentionslegales" component={MentionsLegales}></Route>
  </Switch>
  <Footer/>
  </Router>
  }
</>
  );
}

export default App;
