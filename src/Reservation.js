import React, { Component } from 'react';

class Reservation extends Component {
    state = {
        startDate: '',
        endDate: '',
    };

    changeStartDate = (event) => {
        this.setState({ startDate: event.target.value });
    };

    changeEndDate = (event) => {
        this.setState({ endDate: event.target.value });
    };

    addReservation = (event) => {
        event.preventDefault();
        const reservation = {
            user: {
                email: 'silvia@borcabook.com',
                name: 'Silva',
                group: 'SilviaFamily',
            },
            status: 'pending',
            dateRange: {
                start: this.state.startDate,
                end: this.state.endDate,
            },
        };
        this.props.addReservation(this.props.match.params.id, reservation);
    };

    render() {
        return (
            <div>
                <h1>Reservation {this.props.match.params.id}</h1>
                <div>
                    <form onSubmit={this.addReservation}>
                        <label>Date: </label>
                        <input
                            value={this.state.startDate}
                            onChange={this.changeStartDate}
                            placeholder="Start"
                        />
                        <input
                            value={this.state.endDate}
                            onChange={this.changeEndDate}
                            placeholder="End"
                        />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Reservation;
