import React from 'react'
import './MyStyle.css';

const FiveChild1App = (props) => {
    return (
        <div className='box1'>
            이름 : {props.irum},
            나이 : {props.age} 세,
            주소 : {props.addr}
        </div>
    )
}

export default FiveChild1App;