import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import facebook_sign from '../facebook_sign.svg';
import insta from '../insta.svg';
import './Footer.css';

function FooterPage() {
    return (
            <Navbar bg="light" variant="light" className="fixed-bottom">
                <Container>
                <div class="row">
                    <div class="column"><div>
                        <div>MRS CAKE</div> 
                        <div>
                            <img src={insta} alt="Contact us on Instagram" className="footer-img" />
                            <img src={facebook_sign} alt="Contact us on Facebook" className="footer-img" />
                        </div>
                    </div></div>
                    <div class="column">
                        <div margin-bottom="10%" >Customer Service</div>
                        <p>Privacy policy</p>
                        <p>Payment and delivery</p>
                    </div>
                    <div class="column">
                        <div>Information</div>
                        <p>FAQ</p>
                        <p>For organizations</p>
                    </div>
                </div>
                </Container>
            </Navbar>
    );
}

export default FooterPage;
