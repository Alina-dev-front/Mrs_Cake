import React from "react";
import faqq from '../faqq.svg';
import { Container} from 'reactstrap';	  


function FAQ() {
         return <Container>   
      
                <img style={{paddingTop: "100px"}}
                src={faqq}
                width="200"
                height="200"
                className="d-inline-block align-top"
                alt="min faq"
                />

                <p>
                <b> Q: How many types of cakes you have?</b><br/>
                A: Each cake is very different, the price starts out with how many servings you'll be needing, 
                from there we will have to look at how much detail and time that will be put<br/> 
                into making items such as cake, pie, cupcake, donut, cookies. <br/><br/>

               <b> Q: Am I able to get each tier a different flavor?</b><br/>
                A: Yes! There is no additional cost to do more than one flavor.
                The only additional cost would be if you were to add a specially batter or filling to any of those layers!<br/><br/>

                <b>Q: When can I pick up my cake?</b><br/>
                A:  You can pickup the cakes every day! Weekend time varies, usually from 11am-4pm. <br/><br/>

                <b>Q: Can I pay for my cake is pully paid in the web when I pick it up?</b><br/>
                A: Yes
                </p>

                </Container>
}

export default FAQ;
