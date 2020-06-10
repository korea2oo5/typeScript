import React from 'react'
import axios from 'axios'
type Props = {
    info: any[]
}
function NoticeDetail({info}: Props) {
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