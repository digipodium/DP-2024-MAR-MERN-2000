'use client';
import React, { useEffect, useState } from 'react'

const ManageUsers = () => {

    const [userList, setUserList] = useState([]);

    const fetchUsers = async () => {
        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);

        const data = await res.json();
        console.table(data);
        setUserList(data);
    }

    useEffect(() => {
        fetchUsers();
    }, [])


    return (
        <div className='pt-5'>

            <h3 className='text-center fw-bold'>Manage Users</h3>

            <div className='container'>

                <table className='table table-dark'>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map((user) => {
                                return <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                </tr>
                            })
                        }
                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default ManageUsers;