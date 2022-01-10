import React, { createContext, useState } from 'react';

const themes = {
    light : {
        secondaryColor: '#ededed',
        tertiaryColor: '#f6f6f6',
        primaryColor: '#fff',
        textColor3: '#9e9e9e'
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

