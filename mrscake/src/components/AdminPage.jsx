import React, { useState } from "react";
import { Container, Label, Table } from 'reactstrap';
import { USERS_API_URL } from '../constants/user_api_url';


function AdminPage() {
    const [allUsers, setAllUsers] = useState(null)
    ShowAllUsers();

    function ShowAllUsers() {
            fetch(USERS_API_URL)
            .then(res => res.json())
            .then(usersData => setAllUsers(usersData))
            .catch(err => console.log(err));
    }

   return   <Container style={{paddingTop: "150px"}}>
               <Label>USER LIST</Label>
                <Table striped>
                    <thead className="thead-light">
                        <tr>
                            <th>User Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile Phone</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!allUsers || allUsers.length <= 0 ?
                        <tr>
                            <td colSpan="6" align="center"><b>Uploading users...</b></td>
                        </tr>
                        : allUsers.map(user => (
                        <tr key={user.id}>
                            <td>
                                {user.id}
                            </td>
                            <td>
                                {user.firstName}
                            </td>
                            <td>
                                {user.lastName}
                            </td>
                            <td >
                                {user.email}
                            </td>
                            <td>
                                {user.mobilePhone}
                            </td>
                            <td>
                                {user.userRole}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
}

export default AdminPage;
