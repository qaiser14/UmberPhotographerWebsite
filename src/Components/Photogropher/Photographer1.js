import React from 'react'
import Nav from '../HomePage/Nav'
import './Photographer1.css'
import blog01 from '../../umberImages/blog-01.jpg'


class Photographer1 extends React.Component{
    render(){
        return(
            <div>
                <Nav />

                {/* Creating the photographer pic div */}
                <div className="photopic1">
                    <div className="cameraPic">
                        <img src={blog01}/>
                    </div>

                    <div className="photoHdg1">
                        <p>PHOTOGRAPHY IS A FORM OF TIME TRAVEL</p>
                    </div>

                    <div className="photoHdg2">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit volupta accusantium doloremque laudantium, totam rem aperi, eaque ipsa quae ab illo inventore veritatis et quasi archit beatae vitae dicta sunt explicabo. Nemo enim ipsam alt voluptatem quia voluptas sit aspernatur aut odit aut mov fugit, sed quia consequuntur.</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Photographer1