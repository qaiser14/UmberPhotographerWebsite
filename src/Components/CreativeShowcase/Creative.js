import React from 'react'
import Nav from '../HomePage/Nav'
import './Creative.css'
import createOrange from '../../umberImages/createOrange-01.jpg'
import createhi from '../../umberImages/create-02.png'


class Creative extends React.Component{
    render(){
        return(
            <div>
                <Nav />

                <div className="creativePic1">
                    <img src={createOrange}/>
                        <div className="creativePic2">
                            <img src={createhi}/>
                        </div>
                </div>

            </div>
        )
    }

}

export default Creative