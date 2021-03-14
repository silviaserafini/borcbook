import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Join extends Component {
   render(){
       return(
           <div>
                <h1>Join a group</h1>
                <form>
                    <label>groupID</label>
                    <input/>
                    <button>Join</button>
                </form>
            </div>
       );
   }
}

export default Join 