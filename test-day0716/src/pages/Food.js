import { Alert } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom';
import photo1 from '../images/1.png';
import photo2 from '../images/2.png';
import photo3 from '../images/3.png';

const Food = () => {
    // Path의 param값 받기
    const {food1, food2} = useParams();
    console.log(food1);
    console.log(food2);

    return (
        <div>
            <Alert severity='error'>Food</Alert>
            <div style={{marginTop: '20px'}}>
                {
                    food1 == null && food2 == null ?
                        <div>
                            <h2>저녁</h2>
                            <img src={photo1} alt='' />
                        </div> 
                    : food1 != null && food2 == null ?
                        <div>
                            <h2>후식</h2>
                            <img src={photo2} alt='' />
                        </div> 
                    :
                        <div>
                            <h2>점심</h2>
                            <img src={photo3} alt='' />
                        </div>
                }
            </div>
        </div>
    )
}

export default Food