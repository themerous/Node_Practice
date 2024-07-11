import { Alert } from '@mui/material'
import React from 'react'
import TwoWriteForm from './TwoWriteForm'
import TwoRowItem from './TwoRowItem'

const TwoApp = () => {
    const [dataArray, setDataArray] = React.useState([
        {name: '이영자', blood: 'AB', age: 34, today: new Date()},
        {name: '강호동', blood: 'A', age: 23, today: new Date()},
        {name: '유재석', blood: 'O', age: 43, today: new Date()}
    ]);

    const delData = (idx) => {
        setDataArray(dataArray.filter((d,i) => i !== idx));
    }

    return (
        <div>
            <Alert>TwoApp - 객체 배열 출력 : tr의 rowSpan</Alert>
            <TwoWriteForm />
            <hr />
            <table className='table table-striped' style={{width: '400px'}}>
                <thead>
                    <tr className='table-danger'>
                        <th style={{width: '50px'}}>번호</th>
                        <th style={{width: '80px'}}>이름</th>
                        <th style={{width: '60px'}}>나이</th>
                        <th style={{width: '70px'}}>혈액형</th>
                        <th style={{width: '100px'}}>등록일</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody style={{fontSize: '12px'}}>
                    {
                        dataArray.map((item, idx) => 
                            <TwoRowItem key={idx} idx={idx} row={item} delData={delData} />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TwoApp