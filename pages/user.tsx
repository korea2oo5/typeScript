import React, {useState} from 'react'
import Layout from '../components/Layout'
import UserTable from "../components/tables/UserTable";
import AddUserForm from "../components/forms/AddUserForm";
import EditUserForm from "../components/forms/EditUserForm";


function User() {

    const usersData = [
        {id: 1, name: '노태현', username: '팥빵미인'},
        {id: 2, name: '송택우', username: '계란탁파송송'},
        {id: 3, name: '이상진', username: '뭐였지?'},
    ]
    const [users, setUsers] = useState(usersData)

    // 새로운 사용자 추가
    const addUser = user => {
        user.id = users.length + 1
        setUsers([...users, user])
    }
    // 사용자 삭제
    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id))
    }

    const [editing, setEditing] = useState(false)

    const initialFormState = {id: null, name: '', username: ''}

    const [currentUser, setCurrentUser] = useState(initialFormState)

    const editRow = user => {
        setEditing(true)

        setCurrentUser({id: user.id, name: user.name, username: user.username})
    }

    const updateUser = (id, updateUser) => {
        setEditing(false)

        setUsers(users.map(user => (user.id === id ? updateUser : user)))
    }

    return (
        <Layout>
            <div className={"container"}>
                <h1>CRUD Hook</h1>
                <div className={"flex-row"}>
                    <div className={"flex-large"}>
                        {editing ? (
                            <div>
                                <h2>Edit user</h2>
                                <EditUserForm
                                    setEditing={setEditing}
                                    currentUser={currentUser}
                                    updateUser={updateUser}
                                />
                            </div>
                        ) : (
                            <div>
                                <h2>Add user</h2>
                                <AddUserForm addUser={addUser} />
                            </div>
                        )}
                    </div>
                    <div className={"flex-large"}>
                        <h2>View users</h2>
                        <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default User