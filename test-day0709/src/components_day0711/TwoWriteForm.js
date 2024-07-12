import React from 'react'

const TwoWriteForm = ({addData}) => {
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState(0);
    const [blood, setBlood] = React.useState('A')

    return (
        <table className='table table-striped' style={{width: '500px'}}>
            <thead>
                <tr className='table-danger'>
                    <th style={{width: '200px'}}>이름</th>
                    <th style={{width: '50px'}}>나이</th>
                    <th style={{width: '100px'}}>혈액형</th>
                    <th></th>
                </tr>
            </thead>
            <tbody style={{fontSize: '12px'}}>
                <tr>
                    <td>
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                    </td>
                    <td>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                    </td>
                    <td>
                        <select className='form-select' onChange={(e) => setBlood(e.target.value)}>
                            <option defaultChecked>A</option>
                            <option>B</option>
                            <option>AB</option>
                            <option>O</option>
                        </select>
                    </td>
                    <td>
                        <button className='btn btn-outline-success' onClick={() => {
                                                                        addData({name, age, blood});
                                                                        setName('');
                                                                        setAge(0);
                                                                    }}>+</button>
                    </td>
                </tr>
            </tbody>
        </table>

    )
}

export default TwoWriteForm