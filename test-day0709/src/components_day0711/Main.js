import OneApp from "./OneApp";
import TwoApp from "./TwoApp";
import ThreeApp from "./ThreeApp";
import FourApp from "./FourApp";
import { useState } from "react";

const Main = () => {
    const [number, setNumber] = useState('4');

    const changeApp = (e) => {
        setNumber(e.target.defaultValue);
    }

    return (
        <div>
            <h3>2024-07-10 React 수업</h3>
            <br />
            <label>
                <input type="radio" name="app" defaultValue={1} onClick={changeApp} /> OneApp - 배열 추가/삭제
            </label>
            <br />
            <label>
                <input type="radio" name="app" defaultValue={2} onClick={changeApp} /> TwoApp
            </label>
            <br />
            <label>
                <input type="radio" name="app" defaultValue={3} onClick={changeApp} /> ThreeApp
            </label>
            <br />
            <label>
                <input type="radio" name="app" defaultValue={4} defaultChecked onClick={changeApp} /> FourApp
            </label>
            <hr />
            {
                number === '1' ? 
                    <OneApp /> : number === '2' ? 
                    <TwoApp /> : number === '3' ? 
                    <ThreeApp /> : <FourApp />
            }
        </div>
    )
}

export default Main