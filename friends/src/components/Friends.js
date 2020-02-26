import React from 'react'
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class Friends extends React.Component {
    constructor() {
        super();
        this.state = {
            friendsList: [],
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const token = window.localStorage.getItem("token");

        axiosWithAuth()
            .get("/api/friends")
            .then(res => {
                console.log(res.data)

                this.setState({
                    friendsList: res.data
                })
            })
            .catch(err => console.log("Error fetching friends", err))
    }

    logout = e => {
        window.localStorage.clear("token");
    }

    // deleteUser(id) {
    //     axiosWithAuth()
    //         .delete(`/api/friends/${id}`)
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(err => console.log("Cannot delete user", err))
    // }




    render() {
        return (
            <>
                <div className="friends-nav">
                    <Link to='/'>Home</Link>
                    <Link to='login' onClick={this.logout}>Logout</Link>
                </div>
                <div className="add-user">
                    <Link to="/add_user" ><button>Add User</button></Link>
                </div>
                <div className='friend-grid'>
                    {this.state.friendsList.map(friend => {
                        return (
                            <div className="friend-card">
                                <div><span className="card-heading">Name:</span> {friend.name}</div>
                                <div><span className="card-heading">Age:</span> {friend.age}</div>
                                <div><span className="card-heading">Email:</span> {friend.email}</div>
                                <div>
                                    {/* <button onClick={this.deleteUser(friend.id)}>Delete</button>
                                    <button>Edit</button> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default Friends;