import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css';
import Homeone from './Homeone'
import HomeTwo from './HomeTwo'
import Nav from './Nav'


class Home extends React.Component{
    render(){
        return(
        <div>
            
            <Nav />

            <Homeone />

            <HomeTwo />

        </div>
    
        )
    }
}

export default Home