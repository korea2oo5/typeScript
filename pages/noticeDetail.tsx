import React from 'react'
import axios from 'axios'
import { useSelector} from "react-redux"

type Props = {
    info: any[]
}

function NoticeDetail({info}: Props) {
    const NtcId = useSelector((state) => state.notice.data)
    console.log(NtcId)
    return (
        <>
            <h1>
                {info.NTC_TITLE}
            </h1>
            <div>
                공지사항 내용
            </div>
            <div>
                {info.NTC_CONTENT}
            </div>
            {info.NTC_REG_DT}
            <div>
                <span>삭제</span> <span>수정</span>
            </div>

        </>
    )
}
NoticeDetail.getInitialProps = async function({query}) {
    const response = await axios.get('http://15.165.161.162:8086/api/web/notice/NoticeInfo',{
        params: {
            NTC_ID : query.id
        }
    });
    return {
        info : response.data.data[0]
    }
}
export default NoticeDetail