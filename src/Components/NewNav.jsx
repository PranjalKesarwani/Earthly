import React from "react";
import { NavLink } from "react-router-dom";

const changeNav = ()=>{
    console.log('clicked');
    document.getElementById('newHamburger').classList.toggle('icon');
    document.getElementById('newNavPages').classList.toggle('change');
}

const NewNav = () => {
    return (
        <React.StrictMode>
            <nav id="navigation">

                <div >
                    <img src='./images/logo.png' alt="Some error occured" id="img"/>
                    <p>Earthly</p>
                </div>

                <ul id='newNavPages' className="newNavPages">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/LogIn.jsx">Log In</NavLink></li>
                    <li><NavLink to="/SignUp.jsx">Sign Up</NavLink></li>
                    <li><NavLink to="/"><i id="cart" className="fa-solid fa-cart-shopping"></i></NavLink></li>
                </ul>
                <div id="newHamburger" className='newBurger' onClick={changeNav}>
                    <div id="newBar1" className='newBar'></div>
                    <div id="newBar2" className='newBar'></div>
                    <div id="newBar3" className='newBar'></div>
                </div>
            </nav>
        </React.StrictMode>
    )
}

export default NewNav;