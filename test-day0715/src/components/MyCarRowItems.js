import { DeleteForeverOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import React from 'react'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Transition2 = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const MyCarRowItems = ({idx, row, deleteCar, updateCar}) => {
    const photopath = `https://6f0niq3g3693.edge.naverncp.com/VLLPPlIVML/test-bucket/${row.carphoto}?type=f&w=40&h=40&faceopt=true&ttype=jpg`;

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const [carname, setCarname] = React.useState(row.carname);
    const [carprice, setCarprice] = React.useState(row.carprice);
    const [carcolor, setCarcolor] = React.useState(row.carcolor);

    const handleClickOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(!open);
    };

    const handleClickOpen2 = () => {
        setOpen2(!open2);
    };

    const handleClose2 = () => {
        setOpen2(!open2);
    };

    return (
        <>
            <tr style={{fontSize: '14px'}}>
                <td>
                    <img alt="" src={`${photopath}`} border='1' onClick={() => handleClickOpen()} />
                    <span style={{marginLeft: '5px'}}>{row.carname}</span>
                </td>
                <td align='right'>
                    {row.carprice} 만원
                </td>
                <td align='center'>
                    <div style={{width: '30px', height: '30px', backgroundColor: row.carcolor}}></div>
                </td>
                <td>
                    {row.carguip}
                </td>
                <td>
                    <span style={{color: 'gray', fontSize: '13px'}} onClick={() => {
                        deleteCar(row.num);
                        console.log(row.num)}}>{row.writeday}&nbsp;<DeleteForeverOutlined style={{cursor: 'pointer'}} /></span>
                </td>
                <td>
                    <span style={{color: 'gray', fontSize: '13px'}} onClick={() => handleClickOpen2()}>수정</span>
                </td>
            </tr>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Car Image"}</DialogTitle>
                <DialogContent>
                    <img alt='' src={`https://kr.object.ncloudstorage.com/jpa-practice/test-bucket/${row.carphoto}`} />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={open2}
                TransitionComponent={Transition2}
                keepMounted
                onClose={handleClose2}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Car Update"}</DialogTitle>
                <DialogContent>
                    <table className='table table-bordered' style={{width: '500px'}}>
                        <tbody>
                            <tr>
                                <th>자동차명</th>
                                <td><input type='text' className='form-control' 
                                style={{width: '200px'}} onChange={(e) => setCarname(e.target.value)} value={carname} /></td>
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
                                <td colSpan={2}>
                                    <Button variant='contained' color='success' onClick={() => {
                                        updateCar(row.num, {carname, carcolor, carprice});
                                        handleClose2();
                                    }}>Update</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose2}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MyCarRowItems