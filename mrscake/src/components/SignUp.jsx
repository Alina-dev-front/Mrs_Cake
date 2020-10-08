import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, 
    Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
class SignUp extends Component {
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
        <Container><br/>
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
                    
                    <div onChange={this.onChangeValue}>
                    <p><b>Select one User Role : </b></p>
                    <input type="radio" value="User" name="User" /> Are you Customer?<br/>
                    <input type="radio" value="Bakery" name="Bakery" /> Are you bakery?<br/>
                    <input type="radio" value="Admin" name="Admin" /> Are you Admin?<br/>
                    </div>
                   
                <br/>    <Button  onClick={this.register}  
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

export default SignUp;

