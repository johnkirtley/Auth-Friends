import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.credentials)
    }

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload)
                this.props.history.push("/friends")
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <label htmlFor="username"></label>
                    <input type="text" onChange={this.handleChanges} name="username" value={this.state.credentials.username} placeholder="username" />

                    <label htmlFor="password"></label>
                    <input type="text" onChange={this.handleChanges} name="password" value={this.state.credentials.password} placeholder="password" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;