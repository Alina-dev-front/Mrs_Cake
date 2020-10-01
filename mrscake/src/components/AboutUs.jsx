import React from "react";
import cakestore from '../cakestore.jpg';
function AboutUs() {
         return <div><br></br>
         <br/>
         <div class="container theme-container">   
      
            <div class="title-wrap space-bottom-20">
            <div class="col-md-6 col-sm-12">
                <p class="Protit">
               
                  <br/><br/><br/> <h2  style={{color: "Red"}}>Who are  we? </h2> 
                </p>  
                <div className="col-md-3 center">
                
                <img
         src={cakestore}
        width="200"
        height="200"
        className="d-inline-block align-top"
        alt="Min cake"
      />
      </div>
            </div>
            <div class="clear"></div>
            <div class="our-history space-bottom-20 space-top-20">
               <p> <h5>
                <b> MrsCake</b>   Shop is a famous brand that started as a small business. 
                The owners are <b> Parul, Alina, Niloufar, Abel and Nareerat </b>and MrsCake supported by owner and staff.<br /><br />
                Although not small any more,  our products and staff consider each customer 
                a member in this family of cake shoppers.
                Our mission is to make people happy.Keeping our prices reasonable are all different ways to achieve this goal.
                </h5>  </p>
            </div>
        </div>
</div>
</div>

}

export default AboutUs;
