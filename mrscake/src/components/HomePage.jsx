import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';



export class HomePage extends Component{
    render(){
        let wrapperStyle = {
            margin: 'auto',
            top: '50%',
            position: 'absolute',
            width: '100%',
            height: '150px',           
          };
        return(

            <div style={wrapperStyle}>
                <Link to="/bakeryregistration"  variant="primary" size="lg" block>
                <Button  variant="primary" size="lg" block>
                Register your shop today !
                </Button>
      
                </Link>
            </div>
        );
    }
}