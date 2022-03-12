import React from 'react'
import {Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import {FaShoppingBag} from 'react-icons/fa'
import logoBlack from '../../umberImages/logo-black.png'
import './Home.css'


class Nav extends React.Component{
        render(){
            return(
                <div>
                    <div className="topNav">
                        {/* Creating the li list */}
                        <ul className="list1">
                            <Link to="/" className="list2"><li >Home</li>
                                <div className="homeDrop1">
                                    <Link to="/photographer1"className="homeGrid1"><div>Photographer</div></Link>
                                    <Link to="/AlbumsV4" className="homeGrid1"><div>Albums Slider V4</div></Link>
                                    <Link to="/wedding" className="homeGrid1"> <div>Wedding</div></Link>
                                    <Link to="/Creative" className="homeGrid1"><div>Creative Showcase</div></Link>
                                </div>
                            </Link>
                            
                            <Link to="Albums" className="list2"><li>Albums</li>
                                <div className="homeDrop2">
                                    <Link to="/photographer1"className="homeGrid1"><div>Album Version 1</div></Link>
                                    <Link to="/AlbumsV4" className="homeGrid1"><div>Album Version 2</div></Link>
                                    <Link to="/wedding" className="homeGrid1"> <div>Album Version 3</div></Link>
                                    <Link to="/Creative" className="homeGrid1"><div>Album Version 4</div></Link>
                                </div>
                            </Link>

                            <Link to="Gallery" className="list2"><li>Gallery</li></Link>
                            <Link to="Pages" className="list2"><li>Pages</li></Link>
                            <Link to="Shop" className="list2"><li>Shop</li></Link>
                            <Link to="Blog" className="list2"><li>Blog</li></Link>
                        </ul>

                        {/* Creating the search icon */}
                        <div className="homeIcon1">
                            <i className="iconEdit1"><BsSearch/></i>
                        </div>

                        {/* Creating the main logo in the center */}
                        <div className="mainLogo">
                            <img src={logoBlack}/>
                        </div>

                        {/* Creating the shopping car logo */}
                        <div className="homeIcon2">
                            <i className="iconEdit2"><FaShoppingBag/></i>
                        </div>
                    </div>
                </div>
            )
        }
}

export default Nav