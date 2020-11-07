import React, { useState } from "react";
import { Container, Label, Table } from 'reactstrap';
import contactus from '../contactus.svg';
import email from '../email.svg';
import { BAKERIES_API_URL } from '../constants/bakeries_api_url';

import './ContaktUs.css';
function ContactUs() {
  
      const [allBakeries, setAllBakeries] = useState(null)
      ShowAllBakeries();
  
      function ShowAllBakeries() {
              fetch(BAKERIES_API_URL)
              .then(res => res.json())
              .then(usersData => setAllBakeries(usersData))
              .catch(err => console.log(err));
      
          }
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
                    467894532171</h7>
                    <Container style={{paddingTop: "20px"}}>
               <Label><b>Bakeries contacts list</b></Label>
                    <Table striped>
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {!allBakeries || allBakeries.length <= 0 ?
                        <tr>
                            <td colSpan="6" align="center"><b>Uploading bakeries...</b></td>
                        </tr>
                        : allBakeries.map(bakery => (
                        <tr key={bakery.id}>
                           
                            <td>
                                {bakery.name}
                            </td>
                            <td>
                                {bakery.email}
                            </td>
                            <td >
                                {bakery.phone}
                            </td>
                           
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </Container> 
                   
               
                    </div>  
                    </div>    
                </div>
}
export default ContactUs;