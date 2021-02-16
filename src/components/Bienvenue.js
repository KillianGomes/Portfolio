import React from 'react';
import { BrowserRouter as Router,Route, Switch, Link } from 'react-router-dom';
import Projet from './Projet';
import Admin from './Admin';
import Edit from './Edit';
import Ajout from './Ajout';
import Page4O4 from './Page404';
import Presentation from './Presentation';
import Contact from './Contact';

const Bienvenue = () => {
    return (
        <Router>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-warning ">
        <Link className="ideas text-white"to="/" >K&G </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
            <li className="navbar-text pr-5 pl-5">
                <Link className="ideas" to="/"><i className="far fa-folder"></i> Projet</Link>
            </li>
            <li className="navbar-text pr-5">
                <Link className="ideas" to="/pre"><i className="far fa-user"></i> Présentation</Link>
            </li>
            <li className="navbar-text">
                <Link className="ideas" to="/co"><i className="far fa-paper-plane"></i> Contact</Link>
            </li>
            </ul>
            <span className="navbar-text">
            <Link className="ideas" to="/admin123"><i className="fa fa-cogs" ></i> Admin</Link>
            </span>
        </div>
        </nav>

       <Switch>
           <Route exact path="/">
               <Projet/>
           </Route>
           <Route path="/pre">
               <Presentation />
           </Route>
           <Route path="/co">
               <Contact />
           </Route>
           <Route path="/admin123">
                <Admin />
           </Route> 
           <Route path="/edit" component = {Ajout}/>
              
           <Route path="*">
                <Page4O4 />
           </Route>
       </Switch>
    </Router>
      );
}
 
export default Bienvenue;