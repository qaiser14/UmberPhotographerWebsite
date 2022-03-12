import React from 'react'
import './Homeone.css';
import slide01 from '../../umberImages/slide-01.jpg'


class Homeone extends React.Component{
    render(){
        return(
                <div>
                    <div className="box1">
                        <img src={slide01}/>
                    </div>
                </div>
        )
    }
}

export default Homeone