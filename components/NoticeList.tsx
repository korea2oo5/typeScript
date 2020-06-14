import React from "react"
import Link from 'next/link'
import {useDispatch} from 'react-redux'
import { setNtc } from '../modules/notice'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

type Props = {
    props: any[]
}

function NoticeList ({props}: Props) {

    const lists = props;
    const dispatch = useDispatch()
    return(
        <>
            <Link href='noticeAdd'><button>등록</button></Link>
            <TableContainer component={Paper}>
                <Table className={useStyles} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell align="right">분류</TableCell>
                            <TableCell align="right">제목</TableCell>
                            <TableCell align="right">등록일자</TableCell>
                        </TableRow>
                    </TableHead>
                    <Link href='/noticeDetail'>
                        <TableBody>
                            {lists.map((list) => (
                                <TableRow key={list.NTC_ID} onClick={() => dispatch(setNtc(list.NTC_ID))}>
                                    <TableCell component="th" scope="row">
                                        {list.NTC_NUM}
                                    </TableCell>
                                    <TableCell align="right">{list.NTC_TYPE_NM}</TableCell>
                                    <TableCell align="right">{list.NTC_TITLE}</TableCell>
                                    <TableCell align="right">{list.NTC_REG_DT}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Link>
                </Table>
            </TableContainer>
        </>
    )
}
export default NoticeList