import React, { Component } from 'react';

class Overview extends Component{
    render(){
        const entity = this.props.location.state.entity;
        return (
            <div>
                <h1>Overview {entity.name}</h1>
                <h3>(ID: {entity.id})</h3>
            </div>
        );
    }
}

export default Overview