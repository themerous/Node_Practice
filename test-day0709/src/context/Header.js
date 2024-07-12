import React from 'react'
import { ThemeContext } from './ThemeContext';
import { UserContext } from './UserContext';

const Header = () => {
    const {isDark} = React.useContext(ThemeContext);
    const username = React.useContext(UserContext);
    console.log(isDark);
    console.log(username);

    return (
        <header className='header' style={{backgroundColor: isDark?'black':'lightgray'}}>
            <h1>안녕하세요 {username} 님!</h1>
        </header>
    )
}

export default Header