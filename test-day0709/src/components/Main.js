import OneApp from "./OneApp";
import TwoApp from "./TwoApp";
import ThreeApp from "./ThreeApp";
import FourApp from "./FourApp";
import FiveApp from "./FiveApp";
import SixApp from "./SixApp";
import { useState } from "react";

const Main = () => {
    const [number, setNumber] = useState('1');

    return (
        <div>
            <h3>2024-07-09 React 수업</h3>
            <br />
            <select 
                className="form-select" 
                defaultValue={1}
                onChange={(e) => setNumber(e.target.value)}
            >
                <option value={1}>OneApp</option>
                <option value={2}>TwoApp</option>
                <option value={3}>ThreeApp</option>
                <option value={4}>FourApp</option>
                <option value={5}>FiveApp</option>
                <option value={6}>SixApp</option>
            </select>  
            <hr />
            {
                number === '1' ? 
                    <OneApp /> : number === '2' ? 
                    <TwoApp /> : number === '3' ? 
                    <ThreeApp /> : number === '4' ? 
                    <FourApp /> : number === 5 ? 
                    <FiveApp /> : <SixApp />
            }
        </div>
    )
}

export default Main