import OneApp from "./OneApp";
import TwoApp from "./TwoApp";
import ThreeApp from "./ThreeApp";
import FourApp from "./FourApp";
import FiveApp from "./FiveApp";
import SixApp from "./SixApp";
import { useState } from "react";

const Main = () => {
    const [day1, setDay1] = useState(6);
    return (
        <div>
            {/* <OneApp />
            <hr />
            <TwoApp />
            <hr />
            <ThreeApp />
            <hr />
            <FourApp />
            <hr />
            <FiveApp />
            <hr />
            <SixApp /> */}
            <h1>React Day1</h1>
            <select defaultValue={6} className="form-select" onChange={(e) => {setDay1(e.target.value)}}>
                <option value={1}>ex1</option>
                <option value={2}>ex2</option>
                <option value={3}>ex3</option>
                <option value={4}>ex4</option>
                <option value={5}>ex5</option>
                <option value={6}>ex6</option>
            </select>
            <hr />
            {
                day1 === '1' ? <OneApp /> : day1 === '2' ? <TwoApp /> : day1 === '3' ? <ThreeApp /> : day1 === '4' ? <FourApp /> : day1 === '5' ? <FiveApp /> : <SixApp />
            }
        </div>
    )
}

export default Main;