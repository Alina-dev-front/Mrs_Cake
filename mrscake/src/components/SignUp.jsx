import React from "react";

function SignUp() {
    return <div class="row">
    <div className="col-md-3 center">
    <form action="http://localhost:3000/SignUp.jsx"><br/><br/><br/>
       
                <h3>User Sign Up</h3>
   
                <div className="form-group">
                    <label>First Name</label>
                    
                    <input type="name" className="form-control" placeholder="First name" />
            
                    <label>Last Name
                    <input type="name" className="form-control" placeholder="Last name" />
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

                <button type="submit" className="btn btn-primary btn-block">Register</button>
               
            </form>
            </div>  
        </div> 
    }


export default SignUp;
