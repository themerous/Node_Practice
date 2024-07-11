import { Button } from '@mui/material';
import React from 'react'

const SixChild1App = (props) => {
    const {carname, carprice, carphoto, onIncre, bgcolor} = props;
    return (
        <div className='box2' style={{backgroundColor: bgcolor}}>
            자동차명 : {carname}<br />
            가격 : {carprice}원<br />
            사진 <br />
            <img className='small' alt='' src={require(`../${carphoto}`)} /><br />
            <Button variant='outlined' color='error' onClick={onIncre}>
                방문
            </Button>
        </div>
    )
}

export default SixChild1App