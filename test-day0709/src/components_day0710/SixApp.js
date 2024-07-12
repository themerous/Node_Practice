import { Alert } from '@mui/material'
import React from 'react'
import SixChild1App from './SixChild1App'
import SixChild2App from './SixChild2App';

const SixApp = () => {
    const [count, setCount] = React.useState(0);
    const [array, setArray] = React.useState([
        {cname: "Audi", cphoto: "test1.png", cprice: "1000", color: "#afeeee"},
        {cname: "Bench", cphoto: "test2.png", cprice: "2000", color: "#ffc0cb"},
        {cname: "Genesis", cphoto: "test3.png", cprice: "3000", color: "#e0ffff"}
    ]);

    const countIncre = () => setCount(count + 1);
    const delCar = (idx) => setArray(array.slice(0,idx).concat(array.slice(idx + 1)));

    return (
        <div>
            <Alert>SixApp - 부모자식간의 통신 2</Alert>
            <Alert severity='error' style={{fontSize: '20px'}}>
                회원 방문 횟수 : {count} 회
            </Alert>
            <SixChild1App bgcolor="#ffc0cb" carname="아반떼" carphoto="test1.png" carprice="3500" onIncre={countIncre} />
            <SixChild1App bgcolor="#7fffd4" carname="그랜져" carphoto="test2.png" carprice="4700" onIncre={countIncre} />
            <hr />
            {
                array.map((item, idx) => 
                    <SixChild2App key={idx} row={item} onDelete={delCar} idx={idx} />
                )
            }
        </div>
    )
}

export default SixApp