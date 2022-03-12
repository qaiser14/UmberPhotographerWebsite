import React from 'react'
import Nav from '../HomePage/Nav'
import './AlbumsV4.css'
import albumv41 from '../../weddingimages/albumv41.jpg'
import logoWhite from '../../umberImages/logo-white.png'




class AlbumsV4 extends React.Component{
    render(){
        return(
            <div>
                <Nav/>

                <div className="albumpic1">
                    <img src={albumv41}/>
                </div>
                
                <div className="footer1">
                    <img src={logoWhite}/>
                </div>
                
            </div>
        )
    }
}

export default AlbumsV4