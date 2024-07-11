import React from 'react'

const SixChild2App = ({row, onDelete, idx}) => {
    return (
        <div style={{backgroundColor: row.color}}>
            이름: {row.cname} | 가격: {row.cprice} | 사진: <img alt='' src={require(`../${row.cphoto}`)} />
            <button onClick={() => onDelete(idx)}>삭제</button>
        </div>
    )
}

export default SixChild2App