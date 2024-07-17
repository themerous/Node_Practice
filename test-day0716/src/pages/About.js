import { Alert } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    const {about1} = useParams();

    return (
        <div>
            <Alert severity='info'>About</Alert>
            {
                // eslint-disable-next-line
                about1 == "samsung" ?
                    <div>
                        삼성직원
                    </div>
                // eslint-disable-next-line
                : about1 == "naver" ?
                    <div>
                        네이버직원
                    </div>
                :
                    <div>
                        취업준비중
                    </div>
            }
        </div>
    )
}

export default About