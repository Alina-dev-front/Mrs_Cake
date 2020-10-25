import React, { Component } from 'react';
import './Login.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, FormGroup,  Row } from 'reactstrap';
import axios from 'axios';  


class ForgotPassword extends Component {
    state = 
    {    
      password: '',
    }

    componentDidMount() {
        if (this.props.user) 
          {
              const {  email, password } = this.props.user
              this.setState({  email, password,});
         }
         }
         mySubmitHandler = (event) => {
            event.preventDefault();
            const data = {
                email: this.email
            }; 
            axios.post('forgot', data).then(
                res=>    {
                    console.log(res)
         }
         
     ).catch(
                err => {
                  
                    console.log(err);

   } 
   )         
          
};
       
      
    render() {
         return <Form id ="user-log"  onSubmit={this.props.user ? this.submitEdit : this.submitNew}>
            <div className="app flex-row align-items-center">
                <Container><br/><br/><br/>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <CardGroup>
                                <Card className="p-2">
                                    <CardBody>
                                        <Form>
                                            <div class="row" className="mb-2 pageheading">
                                                <div>
                                                   <b>Forgot Password</b> 
                                                </div>
                                            </div>
                                            <p>To reset your password, submit your email address below. If we can find you in the database, an email will be sent to your email address, with instructions how to get access again.</p>
                                            <FormGroup className="mb-3">
                                            <Input  type="email" name="email" onChange={this.handleChange} value={this.state.email === '' ? '' : this.state.email} placeholder="Email" />
                                            </FormGroup>
                                            <Button onSubmit={this.mySubmitHandler} color="success" block>Submit</Button>
                                        </Form>
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

export default ForgotPassword;
