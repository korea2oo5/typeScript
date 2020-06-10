import React from 'react'

type Props = {
    users: any[]
    deleteUser: any
    editRow: any
}

function UserTable({users, deleteUser, editRow }:Props) {
    console.log(users)
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.length > 0 ? (
                users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button onClick={() => editRow(user)} className={"button muted-button"}>Edit</button>
                            <button onClick={() => deleteUser(user.id)} className={"button muted-button"}>Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

export default UserTable