import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';


class Friends extends React.Component {
    constructor() {
        super();
        this.state = {
            friendsList: []
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
                this.setState({
                    friendsList: res.data
                })
            })
            .catch(err => console.log("Error fetching friends", err))
    }



    render() {
        return (
            <div>
                {this.state.friendsList.map(friend => {
                    return (
                        <div>{friend.name}</div>
                    )
                })}
            </div>
        )
    }
}

export default Friends;