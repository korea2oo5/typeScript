import React, {useState} from 'react'
import Link from "next/link";
import axios from "axios";
import Router from "next/router";
function NoticeAdd() {

    const initialFormState = {id: null, NTC_TYPE: '', NTC_TITLE: '', NTC_CONTENT: ''}
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const {name, value} = event.target

        setUser({...user, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const userObject = {
            NTC_TYPE: user.NTC_TYPE,
            NTC_TITLE: user.NTC_TITLE,
            NTC_CONTENT: user.NTC_CONTENT
        }
        console.log(userObject)
        axios.post('http://15.165.161.162:8086/api/web/notice/NoticeAdd', userObject)
            .then((res) => {
                console.log(res.data)
                Router.push('/')
            }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <form
                onSubmit={onSubmit}
            >
                <label>분류</label>
                <input type="text" name="NTC_TYPE" value={user.NTC_TYPE} onChange={handleInputChange} />
                <label>제목</label>
                <input type="text" name="NTC_TITLE" value={user.NTC_TITLE} onChange={handleInputChange} />
                <label>내용</label>
                <textarea name="NTC_CONTENT" rows="4" cols="50" value={user.NTC_CONTENT} onChange={handleInputChange}>

                </textarea>
                <button>등록</button>
                <Link href='/'><button>취소</button></Link>
            </form>
        </>
    )
}
export default NoticeAdd