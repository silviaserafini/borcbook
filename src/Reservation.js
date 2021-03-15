import React, { Component } from 'react';

class Reservation extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Reservation {this.props.match.params.id}</h1>
                <div>
                    <form>
                        <label>Date: </label>
                        <input placeholder="Start" />
                        <input placeholder="End" />
                        <button>Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Reservation;
