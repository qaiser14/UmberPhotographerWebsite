import React from 'react'
import './HomeTwo.css'
import iam01 from '../../umberImages/i-am-01.jpg'


class HomeTwo extends React.Component{
    render(){
        return(
            <div>
                {/* Top Victor Headings */}
                <div className="victor1">
                    <div className="nameV">
                        <p>Hi, my name is</p>
                    </div>
                    <div className="nameV2">
                        <p>Victor Umber</p>
                    </div>
                    <div className="victorP1">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptate 
                            accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab</p>
                    </div>
                </div>

                {/* Creating the victor Pic */}
                <div className="pic1Back">
                    <div className="victorPic1">
                        <img src={iam01}/>
                    </div>

                    {/* Creating the contact now button */}
                        <div className="conNow">
                            <p className="conHdg1">CONTACT NOW</p>
                        </div>
                </div>

               
            </div>
        )
    }
}

export default HomeTwo