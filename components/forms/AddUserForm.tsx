import React, {useState} from 'react'

type Props = {
    addUser: any
}
function AddUserForm({addUser}: Props) {

    console.log(addUser)
    const initialFormState = {id: null, name: '', username: ''}
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const {name, value} = event.target

        setUser({...user, [name]: value})
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!user.name || !user.username) return

                addUser(user)
                setUser(initialFormState)
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
            <label>UserName</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange}/>
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm