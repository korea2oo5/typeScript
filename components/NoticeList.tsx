import React from "react"
import Link from 'next/link'
import {useDispatch} from 'react-redux'
import { getNtc } from '../modules/notice'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}))
type Props = {
    props: any[]
}

function NoticeList ({props}: Props) {

    const lists = props;
    const dispatch = useDispatch()
    return(
        <>
            <div className={useStyles}>
                {lists && lists.map((list) => (
                    <List component="nav">
                        <Link href={{pathname:'noticeDetail', query: {id: list.NTC_ID}}}>
                            <li key={list.NTC_ID} onClick={() => dispatch(getNtc(list.NTC_ID))}>{list.NTC_TITLE}</li>
                        </Link>
                        <Divider />
                    </List>
                ))}
            </div>
        </>
    )
}
export default NoticeList