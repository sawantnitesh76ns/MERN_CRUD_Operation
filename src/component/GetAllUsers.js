import React, { Component } from "react";
import { BasicTable } from "./BasicTable";
import { columns } from "./column";
import axios from "axios";

class GetAllUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []

        }
    }

    componentDidMount() {
        console.log("Component Did Mout Get Called")
        this.renderPosts();
    }

    renderPosts = async () => {
        try {
            const res = await axios.get('http://localhost:8080/api/users');
            const usersList = res.data.users;
            console.log("Response Data")
            console.log(res)
            // this will re render the view with new data
            this.setState({
                users: [usersList]
            });

        } catch (err) {
            console.log(err);
        }

    }



    render() {
        const data = [
            {
                firstname: 'Minsk',
                lastname: 'henry',
                emailaddress: 'nink@gmail.com',
                description: "Hello How Are Your",
                testfield: "Im Testing this field"
            },
            {
                firstname: 'Minsk',
                lastname: 'henry',
                emailaddress: 'nink@gmail.com',
                description: "Hello How Are Your"
            }]
        const usersTable = this.state.users !== null ? <BasicTable column={columns} usersData={this.state.users} /> : <h2>Please Waitt</h2>;

        return (
            <div>
                <ul className="list-group list-group-flush">
                    {usersTable}
                </ul>
            </div>
        );
    }


}

export default GetAllUsers