import React from "react";

function SignIn() {
        return <div class="row">
        <div className="col-md-3 center">
        <form action="http://localhost:3001/SignIn.jsx"><br/><br/><br/>
        
                <h3>User Sign In</h3>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
              
                <button  type="submit" className="btn btn-primary btn-block">Login</button>
                
                
                <p className="forgot-password text-center">
              
                
                    <a href="abc">Forgot password?</a><br/><br/>

                  <button >  <a role="button" class="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy" href="/signup"
                 ajaxify="/reg/spotlight/" id="u_0_2" data-testid="open-registration-form-button" rel="async">
                    Not Registered,Sign Up</a></button>
                </p>
            </form>
            </div>
        </div>
    }

export default SignIn;
