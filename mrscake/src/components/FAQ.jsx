import React from "react";
import faqq from '../faqq.svg';

function FAQ() {
         return <div>
         <div class="container theme-container" >   
      
            <div class="title-wrap space-bottom-20">
            <div class="col-md-6 col-sm-12">
                <p class="Protit" >
               
                   
                </p> 
                <div className="col-md-3 center" style={{paddingTop: "100px"}}>
                
                <img style={{paddingTop: "80px"}}
         src={faqq}
        width="200"
        height="200"
        className="d-inline-block align-top"
        alt="min faq"
      />
      </div>
            </div>
            <div class="clear"></div>
            <div class="our-history space-bottom-20 space-top-20"></div>
               <p>
                <b> Q: How many types of cakes you have?</b><br/>
                A: Each cake is very different, the price starts out with how many servings you'll be needing, 
                from there we will have to look at how much detail and time that will be put into making items <br/>
                such as cake, pie, cupcake, donut, cookies. <br/><br/>

               <b> Q: Am I able to get each tier a different flavor?</b><br/>
                A: Yes! There is no additional cost to do more than one flavor.
                The only additional cost would be if you were to add a specially batter or filling to any of those tiers!<br/><br/>

<b>Q: When can I pick up my cake?</b><br/>
A:  I take all days pickups for cake orders! Weekend time varies, usually from 11am-4pm. <br/><br/>

<b>Q: Can I pay for my cake in full when I pick it up?</b><br/>
A: YES  
</p>
</div>
        </div>
</div>

}

export default FAQ;
