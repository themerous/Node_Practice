import { Alert, Button } from '@mui/material'
import React from 'react'

const FourApp = () => {
    const [result, setResult] = React.useState('');
    const nameRef = React.useRef('');
    const korRef = React.useRef(0);
    const engRef = React.useRef(0);

    return (
        <div>
            <Alert>FourApp - useRef 응용예제</Alert>
            <table className='table table-bordered' style={{width: '300px'}}>
                <tbody>
                    <tr>
                        <th style={{width: '100px'}} className='table-info'>이름</th>
                        <td>
                            <input type='text' className='form-control' ref={nameRef} />
                        </td>
                    </tr>
                    <tr>
                        <th style={{width: '100px'}} className='table-info'>국어점수</th>
                        <td>
                            <input type='text' className='form-control' ref={korRef} />
                        </td>
                    </tr>
                    <tr>
                        <th style={{width: '100px'}} className='table-info'>영어점수</th>
                        <td>
                            <input type='text' className='form-control' ref={engRef} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} align='center'>
                            <Button variant='contained' color='error'>
                                결과 출력하기
                            </Button>
                        </td>
                    </tr>
                    <tr style={{height: '100px'}}>
                        {
                            <td colSpan={2} style={{fontSize: '16px', whiteSpace: 'pre-line', backgroundColor: '#ffc'}}>
                                {result}
                            </td>
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FourApp