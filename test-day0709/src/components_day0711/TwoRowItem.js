import React from 'react'

const TwoRowItem = (props) => {
    let {idx, row, delData} = props;
    return (
        <tr>
            <td>{idx + 1}</td>
            <td>{row.name}</td>
            <td>{row.age}세</td>
            <td>{row.blood}형</td>
            <td>{row.today.toLocaleDateString('ko-KR')}</td>
            <td>
                <button className='btn btn-outline-danger btn-sm' onClick={() => {
                    if(window.confirm('정말로 삭제하시겠습니까?')) {
                        delData(idx);
                    }
                }}>X</button>
            </td>
        </tr>
    )
}

export default TwoRowItem