import { useState } from 'react';
import test1 from '../test1.png';
import test2 from '../test2.png';
import test3 from '../test3.png';

const SixApp = () => {
    const [photo, setPhoto] = useState(test1);
    const [width, setWidth] = useState(1);
    const [style, setStyle] = useState('solid');
    const [display, setDisplay] = useState(true);
    const [text, setText] = useState("hello world");

    return (
        <div style={{width: '800px', display: 'flex', flexDirection: 'column'}}>
            <h1>Six App - Problem</h1>
            <h2>오늘의 문제</h2>
            <hr />
            <div style={{display: 'flex'}}>
                <label style={{width: '100px', textAlign: 'center'}}>
                    <input onChange={() => {
                        setDisplay(!display)
                    }} type="checkbox"/>사진숨김
                </label>
                <div style = {{width: '600px', display: 'flex', justifyContent: 'center'}}>
                    <button onClick={() => {setWidth(width - 1)}}>점점작게</button>
                    <button onClick={() => {setWidth(width + 1)}}>점점크게</button>
                </div>
            </div>
            <div style={{width: '800px', padding: '10px', boxSizing: 'border-box'}}>
                <input style={{width: '780px'}} type="text" value={text} onChange={(e) => {setText(e.target.value)}} />
            </div>
            <div style={{display: 'flex'}}>
                <div style={{width: '400px', padding: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <select onChange={(e) => setPhoto(e.target.value)}>
                        <option value={test1} defaultValue>테스트1</option>
                        <option value={test2}>테스트2</option>
                        <option value={test3}>테스트3</option>
                    </select>
                    <select onChange={(e) => setStyle(e.target.value)}>
                        <option value={'solid'} defaultValue>solid</option>
                        <option value={'dashed'}>dashed</option>
                        <option value={'dotted'}>dotted</option>
                        <option value={'double'}>double</option>
                        <option value={'groove'}>groove</option>
                        <option value={'ridge'}>ridge</option>
                        <option value={'inset'}>inset</option>
                        <option value={'outset'}>outset</option>
                    </select>
                </div>
                <div>
                    {
                        display ? <img alt='noimg' style={{border: width + 'px ' + style + ' gray'}} width={400} src={photo} /> : ""
                    }
                </div>
            </div>
            <div style={{fontSize: '20px'}}>
                {text}
            </div>
        </div>
    )
}

export default SixApp