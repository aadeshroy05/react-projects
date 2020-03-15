import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {

   
    render() {
        
        const {onReset, counters, onDelete, onIncrement, onDecrement}=this.props  //object  destructuring
        

        return (
        <div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter =>
                 <Counter key={counter.id}
                  onDelete={onDelete} 
                  onIncrement={onIncrement} 
                  onDecrement={onDecrement} 
                  counter={counter} > 

                     {/* <h4></h4> */}

                 </Counter> 
                 
                 )}

        </div>
        );
    }
}
 
export default Counters;