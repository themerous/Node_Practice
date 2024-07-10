import { Alert, Button } from '@mui/material'
import React from 'react'

const ThreeApp = () => {
    const [count, setCount] = React.useState(1);
    const countRef = React.useRef(1);
    console.log("랜더링중...");

    const countIncre = () => setCount(count + 1);
    const countRefIncre = () => {
        countRef.current = countRef.current + 1;
        console.log("countRef.current = " + countRef.current);
    }

    return (
        <div>
            <Alert>ThreeApp- useRef 공부</Alert>
            <h1>state변수 : {count}</h1>
            <h1>ref 변수 : {countRef.current}</h1>
            <hr />
            <Button variant='contained' color='success' onClick={countIncre}>
                state 변수 1 증가시키기
            </Button>
            <br /><br />
            <Button variant='contained' color='success' onClick={countRefIncre}>
                ref 변수 1 증가시키기
            </Button>
        </div>
    )
}

export default ThreeApp