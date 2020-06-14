import React, {useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
import Router from 'next/router'
type Props = {
    info: any[]
}
function NoticeDetail({info}: Props) {

    const [user, setUser] = useState(info)

    const handleInputChange = event => {
        const {name, value} = event.target

        setUser({...user, [name]: value})
    }
    // 수정
    const onSubmit = (e) => {
        e.preventDefault()
        const userObject = {
            NTC_ID: user.NTC_ID,
            NTC_TYPE: user.NTC_TYPE,
            NTC_TITLE: user.NTC_TITLE,
            NTC_CONTENT: user.NTC_CONTENT
        }
        console.log(userObject)
        axios.patch('http://15.165.161.162:8086/api/web/notice/NoticeUpdate', userObject)
            .then((res) => {
                console.log(res.data)
                Router.push('/')
            }).catch((error) => {
                console.log(error)
        })
    }
    // 삭제
    const deleteNotice = (id) => {
        axios.delete('http://15.165.161.162:8086/api/web/notice/NoticeDelete', {
            params: {
                NTC_ID : id
            }
        }).then((res) => {
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
                <label>제목</label>
                <input type="text" name="NTC_TITLE" value={user.NTC_TITLE} onChange={handleInputChange} />
                <label>내용</label>
                <textarea name="NTC_CONTENT" rows="4" cols="50" value={user.NTC_CONTENT} onChange={handleInputChange}>

                </textarea>
                <button>수정</button>
                <Link href='/'><button>취소</button></Link>
                <button onClick={() => deleteNotice(user.NTC_ID)}>삭제</button>
            </form>
        </>
    )
}
NoticeDetail.getInitialProps = async function({store}) {
    const state = store.getState();
    const response = await axios.get('http://15.165.161.162:8086/api/web/notice/NoticeInfo',{
        params: {
            NTC_ID : state.notice.ntcId
        }
    });

    return {
        info : response.data.data[0]
    }
}
export default NoticeDetail