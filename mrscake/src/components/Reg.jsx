import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
class Reg extends Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      Email: '',
      Password: '',
        Id: '',
    }

    this.Email = this.Email.bind(this);
    this.Password = this.Password.bind(this);
    this.Name = this.Name.bind(this);
    this.Id = this.Id.bind(this);
  
  }

  Id(event) {
    this.setState({ Id: event.target.value })
}
  Email(event) {
    this.setState({ Email: event.target.value })
  }
 
  
 
  Password(event) {
    this.setState({ Password: event.target.value })
  }
 
  Name(event) {
    this.setState({ Name: event.target.value })
  }
 
  register(event) {
    fetch('http://localhost:3000/InsertUser', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Name: this.state.Name,
        Password: this.state.Password,
        Email: this.state.Email,
       Id: this.state.Id,
       
      })
    }).then((Response) => Response.json())
      .then((Result) => {
        if (Result.Status == 'Success')
                this.props.history.push("/Dashboard");
        else
          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
      })
  }
 
  render() {
 
    return (
      <div className="app flex-row align-items-center"><br/><br/>
        <Container>

           
        <nav className="navbar navbar-expand-lg navheader">   
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
              <a class="nav-link" href="Login">Login</a>   
              </li>    
              <li className="nav-item">    
              
              <a class="nav-link" href="Reg">SignUp</a>    
              </li>      
            </ul>    
          </div>    
        </nav> <br />
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <div class="row" className="mb-2 pageheading">
                      <div class="col-sm-12 btn btn-primary">
                        Sign Up
                        </div>
                    </div>
                    <InputGroup className="mb-3">
                      <Input type="text"  
                      onChange={this.Name} placeholder="Enter  Name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="text"  
                      onChange={this.Email} placeholder="Enter Email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="password"  
                      onChange={this.Password} placeholder="Enter Password" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="password"  
                      onChange={this.cpassword} placeholder="Enter confirm password" />
                    </InputGroup>
                    
                    
                    <Button  onClick={this.register}  
                    color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Reg;

