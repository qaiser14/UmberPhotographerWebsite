import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Components/HomePage/Home'
import Wedding from './Components/wedding/Wedding'
import Photographer1 from './Components/Photogropher/Photographer1';
import AlbumsV4 from './Components/AlbumsV4/AlbumsV4';
import Creative from './Components/CreativeShowcase/Creative';
import Albums from './Components/Albums/Albums';

class App extends React.Component{

  render(){
    return(
      <div>
        <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/wedding"  component={Wedding}/>
                <Route path="/photographer1" component={Photographer1}/>
                <Route path="/AlbumsV4" component={AlbumsV4}/>  
                <Route path="/Creative" component={Creative}/>
                <Route path="/Albums" component={Albums}/>   
        </Router>
      </div>
    )
  }
}

export default App;
