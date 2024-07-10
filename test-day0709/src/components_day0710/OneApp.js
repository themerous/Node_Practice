import React from 'react'
import { Alert } from '@mui/material'

const OneApp = () => {
    const [msg, setMsg] = React.useState(["Happy", "안녕", "Bitcamp"]);

    const addMessage = (e) => {
        if(e.key === 'Enter') {
            //setMsg(msg.concat(e.target.value));
            setMsg(msg.concat(e.target.value));
            e.target.value = "";
        }
    }

    const deleteMessage = (e) => {
        alert("'" + msg[e] + "' (을/를) 삭제합니다");
        setMsg(msg.slice(0, e).concat(msg.slice(e + 1)));
    }

    return (
        <div>
            <Alert>OneApp</Alert>
            <hr />
            <input type='text' className='form-control' style={{width: '300px'}} 
            placeholder='메세지 입력 후 엔터' onKeyDown={addMessage} />
            <hr />
            <h4 style={{color: 'red'}}>배열 정보 출력</h4>
            <Alert severity='info'>총 {msg.length}개의 메세지가 있습니다</Alert>
            {
                msg && msg.map((item, idx) => 
                    <h5 key={idx} style={{cursor: 'default'}} onClick={() => deleteMessage(idx)}>{item}</h5>
                )
            }
        </div>
    )
}

export default OneApp