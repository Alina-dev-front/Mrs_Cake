import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, 
         FormGroup,  Row } from 'reactstrap';

class ResetPassword extends Component {
    state = 
    {    
      password: '',
    }

    
    render() {
         return <Form method="post">
            <div className="app flex-row align-items-center">
                <Container><br/><br/><br/>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <CardGroup>
                                <Card className="p-2">
                                    <CardBody>
                                      
                                            <div class="row" className="mb-2 pageheading">
                                                <div>
                                                   <b>Reset Password</b> 
                                                </div>
                                            </div>
                                            
                                            <div className="mb-3" class ="text-danger"></div>
                                            <Input type ="hidden" name="email"  />
                                            <Input type ="hidden" name="Token"  />
                                            <FormGroup className="mb-3">
                                            <Input  type="password" name="password"   placeholder="Password" />
                                            </FormGroup>
                                            <FormGroup className="mb-3">
                                            <Input  type="ConfirmPassword" name="confirmPassword"   placeholder="Confirm password" />
                                            </FormGroup>
                                            <Button onSubmit={this.mySubmitHandler} color="success" block>Reset</Button>
                                        
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Form>
    }
}

export default ResetPassword;
