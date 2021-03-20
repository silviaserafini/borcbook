import React, { Component } from 'react';

class Create extends Component {
    state = {
        name: '',
    };

    changeName = (event) => {
        this.setState({ name: event.target.value });
    };
    createEntity = (event) => {
        event.preventDefault();
        const entity = {
            id: 3,
            name: this.state.name,
            reservations: [],
        };
        this.props.createEntity(entity);
    };

    render() {
        return (
            <div>
                <h1>Create an entity</h1>
                <form onSubmit={this.createEntity}>
                    <label>Name: </label>
                    <input
                        value={this.state.name}
                        onChange={this.changeName}
                        placeholder="Start"
                    />
                    <button type="submit">Create</button>
                </form>
            </div>
        );
    }
}

export default Create;
