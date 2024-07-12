import React from 'react';
import './context.css';
import { UserContext } from './UserContext';
import { ThemeContext } from './ThemeContext';
import Page from './Page';

const Root = () => {
    const [isDark, setIsDark] = React.useState(false);

    return (
        <div>
            <UserContext.Provider value={'강호동'}>
                <ThemeContext.Provider value={{isDark, setIsDark}}>
                    <Page />
                </ThemeContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default Root;