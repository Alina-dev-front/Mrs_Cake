import React from "react";
import './greetings.css'
import { NavLink } from "react-router-dom";



function Greetings() {
    return <div className="parent">
        
        <div class="container" >
            <div class="title-wrap space-bottom-20">
               
                <h1 className="Greetings"> Ordered Confirmed! </h1>
                <h1 className="Greetings"> Thanks For Your Purchase.</h1>
               
                <NavLink className="nav-link" to={"/productpage"}>
                                <i className="display-4 mt-5 text-center" aria-hidden="false" />
              CONTINUE EXPLORING OUR PRODUCTS
            </NavLink>
            
            </div>
        </div>
        
    </div>
}

export default Greetings;
