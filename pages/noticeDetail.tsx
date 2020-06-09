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
    // console.log(Object.keys(context))
    // pathname - 현재 경로. 그것이 페이지의 경로입니다/pages
    // query -객체로 구문 분석 된 URL의 쿼리 문자열 섹션
    // asPath- String브라우저에 표시된 실제 경로 (쿼리 포함)
    // req - HTTP 요청 객체 (서버 만 해당)
    // res - HTTP 응답 객체 (서버 만 해당)
    // err - 렌더링 중 오류가 발생하면 오류 객체
    // store - dispatch, getState
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