import React from "react";
import './greetings.css'
import { Button } from 'reactstrap';


function Greetings() {
    return <div className="parent">

        <div class="container" >
            <div className="containerChild">
                <h1 className="Greetings"> Ordered Confirmed! </h1>
                <h1 className="Greetings"> Thanks For Your Purchase.</h1>
                <p className="productsButton">
                    <Button  size="lg"  onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/productpage';
                    }}>Continue Exploring Products</Button>
                </p>
            </div>
        </div>

    </div>
}

export default Greetings;
