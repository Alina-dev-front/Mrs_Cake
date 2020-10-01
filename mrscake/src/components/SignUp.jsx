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
                <p>Select option for role </p>
                <div>
                <input type="radio" value="Male" name="gender" /> Are you bakery shoper?<br/>
                <input type="radio" value="Female" name="gender" /> Are you Admin?<br/>
                <input type="radio" value="Other" name="gender" /> Are you User?<br/>
                </div>              
                <button type="submit" className="btn btn-primary btn-block">Register</button> 
            </form>
            </div>  
        </div> 
    }
export default SignUp;
