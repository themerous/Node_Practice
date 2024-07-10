import { Alert } from '@mui/material';
import React from 'react'

const EightApp = () => {
    const personArray = [
        {name: '이름1', photo: 'test1.png', addr: 'random addr 1', age: '12'},
        {name: '이름2', photo: 'test2.png', addr: 'random addr 1', age: '24'},
        {name: '이름3', photo: 'test3.png', addr: 'random addr 1', age: '36'},
        {name: '이름4', photo: 'test4.png', addr: 'random addr 1', age: '33'},
        {name: '이름5', photo: 'test5.png', addr: 'random addr 1', age: '30'}
    ];

    return (
        <div>
            <Alert>EIGHTAPP</Alert>
        </div>
    )
}

export default EightApp