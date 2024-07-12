import { useState } from "react";
import test1 from "../test1.png";

const FiveApp = () => {
    const [show, setShow] = useState(true);
    const [font, setFont] = useState("Times New Roman");
    const [bcolor, setBcolor] = useState("rgba(200, 200, 200, 1)")

    return (
        <div>
            <h5 className="alert alert-danger">FiveApp - 글꼴변경</h5>
            <button type="button" className="btn btn-sm btn-info"
            onClick={ () => {
                setShow(!show);
            }}> show/hide </button>
            {
                show ? <img src={test1} alt="noimg" /> : ""
            }
            <hr />
            <h5 style={{fontFamily: font, backgroundColor: bcolor}}>select 이벤트 이용하여 글꼴 변경</h5>
            <div  className="input-group" style={{width: '300px'}}>
                <select className="form-select" style={{width: '120px'}}
                    onChange={(e) => setFont(e.target.value)}
                >
                    <option>Arial</option>
                    <option defaultValue>Times New Roman</option>
                </select>
            </div>
            <div  className="input-group" style={{width: '300px'}}>
                <label>
                    <input name="bcolor" onClick={(e) => setBcolor(e.target.value)} type="radio" value={"rgba(255, 255, 255, 1)"}/>White
                </label>
                <label>
                    <input name="bcolor" onClick={(e) => setBcolor(e.target.value)} type="radio" value={"rgba(200, 200, 200, 1)"} defaultChecked/>Gray
                </label>
                <label>
                    <input name="bcolor" onClick={(e) => setBcolor(e.target.value)} type="radio" value={"rgba(255, 0, 0, 1)"}/>Red
                </label>
                <label>
                    <input name="bcolor" onClick={(e) => setBcolor(e.target.value)} type="radio" value={"rgba(0, 255, 0, 1)"}/>Green
                </label>
                <label>
                    <input name="bcolor" onClick={(e) => setBcolor(e.target.value)} type="radio" value={"rgba(0, 0, 255, 1)"}/>Blue
                </label>
            </div>
        </div>
    )
}

export default FiveApp