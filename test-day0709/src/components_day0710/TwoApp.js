import { Alert } from '@mui/material'
import React from 'react'

const TwoApp = () => {
    const [names, setNames] = React.useState(["한가인", "캔디", "테리우스"]);

    const addByEnter = (e) => {
        if(e.key === "Enter") {
            if(e.target.value === ""){
                alert("이름을 입력해주세요");
            }else {
                if(!names.includes(e.target.value)) {
                    setNames(names.concat(e.target.value));
                    e.target.value = "";
                }else {
                    alert("이미 포함된 이름입니다");
                    e.target.value = "";
                }
            }
        }
    }
    const addByButton = () => {
        const val = document.getElementById('nameInput');
        if(val.value === ""){
            alert("이름을 입력해주세요");
        }else {
            if(!names.includes(val.value)) {
                setNames(names.concat(val.value));
                val.value = "";
            }else {
                alert("이미 포함된 이름입니다");
                val.value = "";
            }
        }
    }
    const removeName = (e) => {
        setNames(names.slice(0, e).concat(names.slice(e + 1)));
    }

    return (
        <div>
            <Alert>TwoApp - 배열 추가/삭제 복습문제</Alert>
            <hr />
            <div>
                <label>
                    이름입력:
                    <input onKeyDown={addByEnter} id='nameInput' type='text' style={{width: '150px'}} />
                    <button className='btn btn-outline-danger' onClick={addByButton}>추가</button>
                </label>
            </div>
            <hr />
            {
                names &&
                names.map((item, idx) => 
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '200px', margin: '10px'}}>
                        {item}
                        <button className='btn btn-success' onClick={() => removeName(idx)}>삭제</button>
                    </div>
                )
            }
        </div>
    )
}

export default TwoApp