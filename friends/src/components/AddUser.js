import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';


class AddUser extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    addNewUser = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/friends", this.state)
            .then(res => {
                // console.log(res)
                this.props.history.push("/friends")
            })
            .catch(err => console.log('Cannot add user', err))
    }


    render() {
        return (
            <div className="add-user-container" >
                <form onSubmit={this.addNewUser} className="add-user-form">
                    <h2>Add User</h2>

                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={this.handleChanges} name="name" value={this.state.name} />

                    <label htmlFor="age">Age</label>
                    <input type="number" onChange={this.handleChanges} name="age" value={this.state.age} />

                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={this.handleChanges} name="email" value={this.state.email} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUser;