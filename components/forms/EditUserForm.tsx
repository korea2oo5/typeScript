import React, {useEffect, useState} from 'react'

type Props = {
    setEditing: any
    currentUser: any
    updateUser: any
}

const EditUserForm = ({setEditing, currentUser, updateUser}: Props) => {
    const [user, setUser] = useState(currentUser)

    const handleInputChange = event => {
        const {name, value} = event.target

        setUser({...user, [name]: value})
    }

    useEffect(() => {
        setUser(currentUser)
    }, [updateUser])

    return (
        <form
            onSubmit={event => {
                event.preventDefault()

                updateUser(user.id, user)
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button>Update user</button>
            <button onClick={() => setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    )
}

export default EditUserForm