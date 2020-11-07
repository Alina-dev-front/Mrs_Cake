import React from "react";
import contactus from '../contactus.svg';
import email from '../email.svg';
import './ContaktUs.css';
function ContactUs() {

return <div>
<div class="container theme-container" >   

   <div class="title-wrap space-bottom-20">
   <div class="col-md-6 col-sm-12">
       <p class="italic" >
      
        <h2   style={{color: "Red", paddingTop: "100px"}}>Contact Us </h2> 
       </p> 
       <div className="col-md-3 center" style={{paddingTop: "100px"}}>
       
       <img style={{paddingTop: "80px"}}
         src={contactus}
         width="300"
         height="300"
         className="d-inline-block align-top"
            alt="Min cake"
         />
         <img style={{paddingTop: "80px"}}
         src={email}
         width="300"
         height="300"
         className="d-inline-block align-top"
            alt="Min cake"
         />
      </div>
       </div>
                   <h7>
                  <br/>  <b>Customer Service  </b><br/>
                    <b>Opening hours:  </b> Mon–Fri 8.00 a.m. – 7.00 p.m.<br/>
                    <b> Telephone:  </b> 467894532171<br/>
                     <b>Contact us by email:  </b>mrscake1509@gmail.com<br/>
                    <b>For technical inquiries about Mrs cake:  </b>
                    467894532171<br/><br/>
                    <b>Owner/Bakery Info:</b><br/>
                   <b> Name:</b>"LoveCakes" <br/>
                  <b>Address:  </b>"Sweden, Gothenburg, Nya gatan, 6"<br/>
                 <b> Email:  </b>"lovecakes_bakery@gmail.com"<br/>
                 <b> Phone:  </b>"46099827221"</h7>
               
                    </div>  
                    </div>    
                </div>
}
export default ContactUs;