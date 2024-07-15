import React from 'react';
import Axios from 'axios';
import MyCarRowItems from './MyCarRowItems';
import { Alert, Button } from '@mui/material';
import MyCarWriteForm from './MyCarWriteForm';

const MyCarList = () => {
    const [list, setList] = React.useState([]);
    const [show, setShow] = React.useState(false);

    // mycar CRUD
    const uploadCar = (data) => {
        Axios.post('/mycar', data).then((res) => {
            myCarList();
        })
    }
    const updateCar = (num, data) => {
        Axios.put(`/mycar/${Number(num)}`, data).then((res) => {
            myCarList();
        });
    }
    const deleteCar = (data) => {
        Axios.delete(`/mycar/${Number(data)}`).then((res) => {
            myCarList();
        })
    }

    // mycar/list GET
    const myCarList = () => {
        Axios.get('/mycar/list').then((res) => {
            setList(res.data);
        });
    }

    React.useEffect(() => {
        myCarList();
    }, []);

    return (
        <div>
            <Button variant='contained' color='info' onClick={() => setShow(!show)}>자동차 등록 show/hide</Button>
            {
                show && 
                <MyCarWriteForm uploadCar={uploadCar} />
            }
            <Alert severity='success' style={{fontSize: '16px', width: '600px'}}>
                MyCarList
            </Alert>
            <table className='table table-bordered' style={{width: '600px'}}>
                <thead>
                    <tr className='table-danger'>
                        <th>자동차명</th>
                        <th>가격</th>
                        <th>색상</th>
                        <th>구입일</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list &&
                        list.map((row, idx) => {
                            return(
                                <MyCarRowItems key={idx} row={row} deleteCar={deleteCar} updateCar={updateCar} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MyCarList