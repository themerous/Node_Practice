import { Alert, Button } from '@mui/material'
import React from 'react'
import Axios from 'axios'

const MyCarWriteForm = ({uploadCar}) => {
    const [carname, setCarname] = React.useState('');
    const [carprice, setCarprice] = React.useState('0');
    const [carcolor, setCarcolor] = React.useState('');
    const [carguip, setCarguip] = React.useState('');
    const [carphoto, setCarphoto] = React.useState('');
    const photopath = `https://6f0niq3g3693.edge.naverncp.com/VLLPPlIVML/test-bucket/${carphoto}/?type=f&w=150&h=150&ttype=jpg`;

    // Photo Upload Event
    const uploadPhoto = (e) => {
        const uploadFile = e.target.files[0];
        const uploadForm = new FormData();

        uploadForm.append("upload", uploadFile);

        Axios.post('/mycar/photo', uploadForm, {headers: {'Content-Type': 'multipart/form-data'}}).then((res) => {
            setCarphoto(res.data.carphoto);
        })
    }

    // Upload Event
    const uploadData = () => {
        uploadCar({carname, carphoto, carprice, carcolor, carguip});
        setCarcolor('');
        setCarname('');
        setCarprice(0);
        setCarguip('');
        setCarphoto('');
    }

    return (
        <div>
            <Alert severity='error' style={{fontSize: '16px', width: '500px'}}>자동차 등록하기</Alert>
            <table className='table table-bordered' style={{width: '500px'}}>
                <tbody>
                    <tr>
                        <th>자동차명</th>
                        <td><input type='text' className='form-control' 
                        style={{width: '200px'}} onChange={(e) => setCarname(e.target.value)} value={carname} /></td>
                        <td rowSpan={5} width={200}>
                            <img alt='' src={`${photopath}`} />
                        </td>
                    </tr>
                    <tr>
                        <th>가격</th>
                        <td><input type='number' className='form-control' 
                        style={{width: '200px'}} onChange={(e) => setCarprice(e.target.value)} value={carprice} /></td>
                    </tr>
                    <tr>
                        <th>자동차색</th>
                        <td><input type='color' className='form-control' 
                        style={{width: '200px'}} onChange={(e) => setCarcolor(e.target.value)} value={carcolor} /></td>
                    </tr>
                    <tr>
                        <th>구입일</th>
                        <td><input type='date' className='form-control'
                        style={{width: '200px'}} onChange={(e) => setCarguip(e.target.value)} value={carguip} /></td>
                    </tr>
                    <tr>
                        <th>사진</th>
                        <td><input type='file' className='form-control' 
                        style={{width: '200px'}} onChange={(e) => uploadPhoto(e)} /></td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <Button variant='contained' color='success' onClick={() => uploadData()}>등록</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MyCarWriteForm