import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import { Button} from 'react-bootstrap';
import Counters from './shoppingCartComponents/counters';



  class ShoppingCart extends Component{
   state = {
       counters:[
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
       ]
   };
   handleIncrement = counter => {
    const  counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
}

handleDecrement = counter => {
  const  counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  if(counters[index].value > 0){
    counters[index].value--;
  }
  
  this.setState({counters});
}

handleReset = () => {
const counters =  this.state.counters.map(c => {
         c.value = 0;
         return c;
      });
     this.setState({counters}); 
};

handleDelete = counterId => {
    const counters = this.state.counters.filter( c => c.id !== counterId);
    this.setState({counters});
};

    render(){
        let wrapperStyle = {
            margin: 'auto',
            top: '10%',
            left: '20%',
            position: 'absolute',
            width: '50%',
            height: '150px',           
          };
        return(
            <div >
                <main className="container" style={wrapperStyle} >
                <Counters 
                counters={this.state.counters}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
                onDecrement={this.handleDecrement}
                />
                </main>

            </div>
        );
    }
}
export default ShoppingCart;