import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import facebook_sign from '../facebook_sign.svg';
import insta from '../insta.svg';
import './Footer.css';
import { Link } from 'react-router-dom';

function FooterPage() {
    return (
            <Navbar bg="light" variant="light" className="fixed-bottom">
                <Container>
                <div className="row">
                    <div className="column"><div>
                        <div>MRS CAKE</div> 
                        <div>
                            <img src={insta} alt="Contact us on Instagram" className="footer-img" />
                            <img src={facebook_sign} alt="Contact us on Facebook" className="footer-img" />
                        </div>
                    </div></div>
                    <div className="column">
                        <div margin-bottom="10%" ><font color="black">Customer Service</font></div>
                        <font color="black">Privacy policy</font><br/>
                        <font color="black">Payment and delivery</font><br/>
                    </div>
                    <div className="column">
                        <div><font color="black">Information</font></div>
                      
                            <Link to="/faq"><font color="black">FAQ</font></Link><br/>
                    
                      
                     
                        <font color="black">For organizations</font><br/>
                    </div>
                </div>
                </Container>
            </Navbar>
    );
}

export default FooterPage;
