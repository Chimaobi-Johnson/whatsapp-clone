import React, { createContext, useState } from 'react';

const themes = {
    light : {
        background: {
            primary: '#fff',
            secondary: '#ededed',
            tertiary: '#f6f6f6'
        },
        text: {
            tertiary: '#9e9e9e'
        },
        notification: {
            primary: '#59c7f7'
        }
    },
    dark: {
        headerColor: '#000'
    }
}


const ThemeContext = createContext(themes.light); // default theme

const ThemeProvider = ({ children }) => {
    const [theme, setCurrentTheme] = useState(themes.light);
    const toggleTheme = () => {
        if(theme === themes.light) {
            setCurrentTheme(themes.dark)
        } else {
            setCurrentTheme(themes.light)
        }
        };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }

