import { Button } from "@mui/material";
import { useEffect, useState } from "react"

const FiveApp = () => {
    const [number, setNumber] = useState(1);
    const [count, setCount] = useState(100);

    // useEffect(() => {
    //     console.log("1. 처음 또는 값 변경시 항상 호출");
    // });

    useEffect(() => {
        console.log("2. 처음 딱 한번만 호출");
    }, []);

    useEffect(() => {
        console.log("3. number가 변경시만 호출");
    }, [number]);

    useEffect(() => {
        console.log("4. count가 변경시만 호출");
    }, [count]);

    return (
        <div>
            <h3 className="alert alert-success">FiveApp</h3>

            <b style={{fontSize: '30px', color: 'red'}}>Number : {number}</b>
            &nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='success' onClick={() => setNumber(number - 1)}>Number 감소</Button>
            <Button variant='contained' color='success' onClick={() => setNumber(number + 1)}>Number 증가</Button>
            <hr />

            <b style={{fontSize: '30px', color: 'red'}}>Count : {count}</b>
            &nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='info' onClick={() => setCount(count - 10)}>Count 감소</Button>
            <Button variant='contained' color='info' onClick={() => setCount(count + 10)}>Count 증가</Button>
            <hr />

            <Button variant='contained' color='secondary' onClick={() => {setNumber(number - 1); setCount(count - 10)}}>모두 감소</Button>
            <Button variant='contained' color='secondary' onClick={() => {setNumber(number + 1); setCount(count + 10)}}>모두 증가</Button>
        </div>
    )
}

export default FiveApp