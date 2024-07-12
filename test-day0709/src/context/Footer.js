import React from 'react'
import { ThemeContext } from './ThemeContext'
import { Button } from '@mui/material'

const Footer = () => {
    const {isDark, setIsDark} = React.useContext(ThemeContext);

    return (
        <footer className='footer' style={{backgroundColor: isDark?'pink':'cyan'}}>
            <Button variant='contained' color='error' onClick={() => setIsDark(!isDark)}>Dark Mode</Button>
        </footer>
    )
}

export default Footer