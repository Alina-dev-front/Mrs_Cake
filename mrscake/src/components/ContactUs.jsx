import React from "react";
import contactus from '../contactus.jpg';

function ContactUs() {

return <div><br></br>
         <br/>
         <div class="container theme-container">   
      
            <div class="title-wrap space-bottom-20">
            <div class="col-md-6 col-sm-12">
                
                </div>
                <div class="our-history space-bottom-20 space-top-20" style={{paddingBottom: "100px"}}>
                <div class="col-md-6 col-sm-12" style={{paddingBottom: "100px"}}>    
                   <p> <h5 style={{color: "Red", paddingTop: "100px"}}>Contact us</h5><br/></p> </div><br/>
                   <p style={{paddingTop: "30px"}}> 
                   <div className="col-md-3 center" style={{paddingTop: "20px"}}>
                
                <img style={{paddingBottom: "80px"}}
         src={contactus}
        width="400"
        height="250"
        className="d-inline-block align-top"
        alt="Min cake"
      />
      </div>
                    <b>Telephone numbers and opening hours</b><br/>
                    <b>Customer Service</b><br/>
                    <b>Opening hours:</b> Mon–Fri 8.00 a.m. – 7.00 p.m.<br/>
                    <b> Telephone:</b> XXXXXXXXX<br/>
                   <b>Contact us by email</b>  XXXXXXX<br/>
                    <b>For technical inquiries about Mrs cake:</b>
                    XXXXXXXXXXX<br/>
                  <b>  From abroad:</b> XXXXXXXX</p>
                    </div>
                </div>
                </div>
                </div>
}
export default ContactUs;