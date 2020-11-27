import React from "react";
import cakestore from '../cakestore.jpg';
import { Container } from 'reactstrap';	  

function AboutUs() {
         return <Container>
               
                <h2 style={{color: "Red", paddingTop: "100px"}}>Who are we?</h2> 
                
                <img 
                src={cakestore}
                width="480"
                height="250"
                alt="Min cake"
                />

                <p style={{fontSize: "100%"}} >
                <b> MrsCake</b> shop is a famous brand that started as a small business. 
                The owners are <b>Parul</b>, <b>Alina</b> and <b>Abel</b> and MrsCake supported by owner and staff.<br /><br />
                Although not small any more,  our products and staff consider each customer 
                a member in this family of cake shoppers.
                Our mission is to make people happy.<br /> Keeping our prices reasonable are all different ways to achieve this goal.
                </p>

                </Container>
}

export default AboutUs;
