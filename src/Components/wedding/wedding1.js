import React from 'react'
import '../wedding/wedding1.css';
import slide15 from '../../weddingimages/slide-15.jpg'



class Wedding1 extends React.Component{
    render(){
        return(
                <div>
                    <div className="wedBox1">
                        <img src={slide15}/>
                    </div>
                </div>
        )
    }
}

export default Wedding1