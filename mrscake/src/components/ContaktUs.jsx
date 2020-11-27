import React, { useState } from "react";
import { Container, Label, Table } from 'reactstrap';
import contactus from '../contactus.svg';
import email from '../email.svg';
import { BAKERIES_API_URL } from '../constants/bakeries_api_url';

function ContactUs() {
    const [allBakeries, setAllBakeries] = useState(null)
    ShowAllBakeries();
  
    function ShowAllBakeries() {
        fetch(BAKERIES_API_URL)
        .then(res => res.json())
        .then(bakeryData => setAllBakeries(bakeryData))
        .catch(err => console.log(err));
    }

    function RenderImages() {
        const contactUsPictures = [contactus, email];
        
        return(contactUsPictures.map((item, i) => 
        <img key={i} style={{paddingTop: "40px"}}
            src={item}
            alt="Contact Us"
            width="150"
            height="150"
        />))    
    } 
         
return  <React.Fragment>

        <Container>   
        <h2 style={{color: "Red", paddingTop: "100px"}}>Contact Us</h2> 
        
        <RenderImages />

        <p>
            <b>Customer Service  </b><br/>
            <b>Opening hours:  </b> Mon–Fri 8.00 a.m. – 7.00 p.m.<br/>
            <b>Email:  </b>mrscake1509@gmail.com<br/>
            <b> Telephone: </b> 467894532171<br/>
        </p>
        </Container>

        <Container style={{paddingTop: "120px"}}>
            <Label><b>Bakeries contact list</b></Label>
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
        </React.Fragment>
}

export default ContactUs;
