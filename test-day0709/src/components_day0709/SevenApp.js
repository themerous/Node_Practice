import { Alert } from '@mui/material'
import React from 'react'

const SevenApp = () => {
    let arr1 = new Array(3);
    let arr2 = [
        {name: 'test1', price: '10000', photo: 'test1.png'},
        {name: 'test2', price: '20000', photo: 'test2.png'},
        {name: 'test3', price: '30000', photo: 'test3.png'}
    ]

    return (
        <div>
            <Alert>SevenApp</Alert>
            <h5>1~3 load photo</h5>
            {
                [...arr1].map((item, idx) => <img key={idx} alt="" src={require(`../test${idx + 1}.png`)} style={{width: '200px', height: '200px'}}/>)
            }
            <h5>1~3 load array data</h5>
            {
                arr2.map((item, idx) => 
                    <figure key={idx} style={{float: 'left', marginRight: '20px'}}>
                        <img alt="" src={require(`../${item.photo}`)} style={{width: '200px', height: '200px'}} />
                        <figcaption>
                            <h5>{item.name}</h5>
                            <p>{item.price}</p>
                        </figcaption>
                    </figure>
                )
            }
        </div>
    )
}

export default SevenApp