import React from "react";

function SignUp() {
    return <div class="row">
    <div className="col-md-3 center">
    <form action="http://localhost:3000/SignUp.jsx"><br/><br/><br/>
       
                <h3>User Sign Up</h3>
   
                <div className="form-group">
                    
            
                    <label>Name
                    <input type="name" className="form-control" placeholder="name" />
                    </label>
                </div>
                <div className="form-group">
                    <label>Email address
                    <input type="email" className="form-control" placeholder="Enter email" />
                    </label>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter new password" />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="Confirm password" className="form-control" placeholder="Enter confirm password" />
                </div>
                <p>Select one option </p>
                
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Are you bakery shoper</label>  
                    </div>
              

                
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                        <label className="custom-control-label" htmlFor="customCheck2">Are you customer</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck3" />
                        <label className="custom-control-label" htmlFor="customCheck3">Are you Admin</label>   
                    </div>
                <button type="submit" className="btn btn-primary btn-block">Register</button> 
            </form>
            </div>  
        </div> 
    }


export default SignUp;
