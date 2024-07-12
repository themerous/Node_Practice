import React from 'react';
import { ThemeContext } from './ThemeContext';
import { UserContext } from './UserContext';

const Content = () => {
    const {isDark} = React.useContext(ThemeContext);
    const myname = React.useContext(UserContext);

    return (
        <div className='content' style={{backgroundColor: isDark?'gray':'white'}}>
            <h1>{myname}님과 React 공부중</h1>
        </div>
    )
}

export default Content;