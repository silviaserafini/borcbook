import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Overview extends Component{
    render(){
        const entity = this.props.location.state.entity;
        const reservations = entity.reservations.map((reservation) => {
            return (
                <li>
                    <div>
                        <p>User: {reservation.user.name} <span>({reservation.user.email})</span></p>
                        <p>Status: {reservation.status}</p>
                        <p>Date: {reservation.dateRange.start} - {reservation.dateRange.end}</p>
                    </div>
                </li>
            );
        });
        return (
            <div>
                <h1>Overview {entity.name}</h1>
                <h3>(ID: {entity.id})</h3>
                <Link to={`/reservation/${entity.id}`}><button>Add reservation</button></Link>
                <div>
                    <ul>
                        {reservations}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Overview