import React from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import NoticeList from '../components/NoticeList'

type Props = {
    lists: any[]
}

function Index({lists}: Props) {
    return (
        <Layout>
            <NoticeList props={lists} />
        </Layout>
    )
}
Index.getInitialProps = async function () {
    const response = await axios.get('http://15.165.161.162:8086/api/web/notice/NoticeList?PAGE=1')
    return {
        lists : response.data.data[0].list
    }
}

export default Index