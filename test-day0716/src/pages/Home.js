import { Alert, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navi = useNavigate();
    return (
        <div>
            <Alert severity='success'>Home</Alert>
            <h3>페이지 이동 연습</h3>
            <Button variant='contained' size="small" color='error' onClick={() => navi('/about')}>
                About으로 이동
            </Button>
        </div>
    )
}

export default Home