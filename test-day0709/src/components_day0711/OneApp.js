import React from 'react'
import { Alert, Button } from '@mui/material'
import OneSubApp from './OneSubApp';

const OneApp = () => {
    const [inputArray, setInputArray] = React.useState([
        {sname: '테스트중1', scolor: 'orange', sprice: 23000, sphoto: 'test1.png'}
    ]);
    const [inputs, setInputs] = React.useState({
        sname: '',
        scolor: '#ffccff',
        sprice: 0,
        sphoto: 'test1.png'
    });

    const chageDataEvent = (e) => {
        let {name, value} = e.target;

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const insertSang = () => {
        setInputArray(inputArray.concat(inputs))
        
        setInputs({
            sname: '',
            scolor: '#ffccff',
            sprice: 0,
            sphoto: 'test1.png'
        })
    }

    const delSelected = (idx) => {
        setInputArray(inputArray.slice(0, idx).concat(inputArray.slice(idx + 1)));
    }

    return (
        <div>
            <Alert>OneApp - 모든 입력값 하나의 변수에 넣기</Alert>
            <table className='table table-bordered' style={{width: '300px'}}>
                <tbody>
                    <tr>
                        <th style={{backgroundColor: '#ccf', width:'100px'}}>상품명</th>
                        <td>
                            <input type='text' className='form-control' value={inputs.sname} name='sname' onChange={chageDataEvent} />
                        </td>
                    </tr>
                    <tr>
                        <th style={{backgroundColor: '#ccf', width:'100px'}}>상품색</th>
                        <td>
                            <input type='color' className='form-control' value={inputs.scolor} name='scolor' onChange={chageDataEvent} />
                        </td>
                    </tr>
                    <tr>
                        <th style={{backgroundColor: '#ccf', width:'100px'}}>상품가격</th>
                        <td>
                            <input type='text' className='form-control' value={inputs.sprice} name='sprice' onChange={chageDataEvent} />
                        </td>
                    </tr>
                    <tr>
                        <th style={{backgroundColor: '#ccf', width:'100px'}}>상품가격</th>
                        <td>
                            <select className='form-select' name='sphoto' onChange={chageDataEvent}>
                                <option value={'test1.png'} defaultChecked>사진1</option>
                                <option value={'test2.png'}>사진2</option>
                                <option value={'test2.png'}>사진3</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} align='center'>
                            <Button variant='contained' color='success' size='small' onClick={insertSang} >상품 추가</Button>
                            <Button variant='contained' color='success' size='small' onClick={() => setInputs({
                                                                                                        sname: '',
                                                                                                        scolor: '#ffccff',
                                                                                                        sprice: 0,
                                                                                                        sphoto: 'test1.png'
                                                                                                    })}>입력 초기화</Button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} align='center'>
                            <h4>
                                상품명 : {inputs.sname} <br />
                                색상 : {inputs.scolor} <br />
                                가격 : {inputs.sprice} <br />
                                사진 : {inputs.sphoto} <br />
                            </h4>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h4> 총 {inputArray.length}개의 배열 데이터가 있습니다 </h4>
            <table className='table table-bordered' style={{width: '400px'}}>
                <tbody>
                    {
                        inputArray.map((item, idx) => <OneSubApp key={idx} idx={idx} item={item} delItem={delSelected} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OneApp