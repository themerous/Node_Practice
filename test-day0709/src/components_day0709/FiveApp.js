import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import img1 from '../test1.png';
import img2 from '../test2.png';

const FiveApp = () => {
    const [number, setNumber] = useState(1);
    const [count, setCount] = useState(100);
    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(true);

    // useEffect(() => {
    //     console.log("1. 처음 또는 값 변경시 항상 호출");
    // });

    useEffect(() => {
        console.log("2. 처음 딱 한번만 호출");
    }, []);

    useEffect(() => {
        console.log("3. number가 변경시만 호출");
        if(number % 3 === 0 && number/1 !== 0) {
            setShow(true);
        }else {
            setShow(false);
        }
    }, [number]);

    useEffect(() => {
        console.log("4. count가 변경시만 호출");
        if(count % 30 === 0 && count/1 !== 0) {
            setShow2(true);
        }else {
            setShow2(false);
        }
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
            <hr />
            {
                show && <img src={img1} alt="img for number" style={{width: '200px'}} />
            }
            {
                show2 && <img src={img2} alt="img for count" style={{width: '200px'}} />
            }
        </div>
    )
}

export default FiveApp