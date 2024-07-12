import { useState } from "react";
import test1 from '../test1.png';
import test2 from '../test2.png';
import test3 from '../test3.png';

const FourApp = () => {
    const [name, setName] = useState('이영자');
    const [age, setAge] = useState('34');
    const [addr, setAddr] = useState('서울시');
    const [photo, setPhoto] = useState(test2);

    return (
        <div>
            <h4>FourApp - 개인정보출력</h4>
            <table className="table table-bordered">
                <caption>개인정보출력</caption>
                <tbody>
                    <tr>
                        <td>이름</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>나이</td>
                        <td>{age}세</td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td>{addr}</td>
                    </tr>
                    <tr>
                        <td><img src={photo} alt="noimg"/></td>
                    </tr>
                </tbody>
            </table>
            <div className="input-group" style={{width: '400px'}}>
                <input type="text" className="form-control" style={{width: '100px'}} placeholder="이름"
                onChange={(e) => {setName(e.target.value)}} value={name}/>
                <input type="number" className="form-control" style={{width: '50px'}} placeholder="나이"
                onChange={(e) => {
                        setAge(e.target.value)
                        // if(e.target.value < 20) {
                        //     setPhoto(test1);
                        // }else if(e.target.value < 50) {
                        //     setPhoto(test2);
                        // }else {
                        //     setPhoto(test3);
                        // }
                        let s = e.target.value < 20 ? test1 : e.target.value < 50 ? test2 : test3;
                        setPhoto(s);
                    }} value={age}/>
                <input type="text" className="form-control" style={{width: '150px'}} placeholder="주소"
                onChange={(e) => {setAddr(e.target.value)}} value={addr}/>
            </div>
        </div>
    )
}

export default FourApp;