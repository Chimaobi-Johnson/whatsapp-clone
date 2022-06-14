import React, { createContext, useState } from 'react';

const themes = {
    light : {
        background: {
            primary: '#fff',
            secondary: '#ededed',
            tertiary: '#f6f6f6',
            landing: '#f8f9fa',
            container: '#d8dbdc',
        },
        profile: {
            background: {
                primary: '#f0f2f5',
                secondary: '#008069',
                tertiary: '#fff'
            },
            text: {
                primary: '#008069',
                secondary: '#3b4a54',
                secondary2: '#8696a0',
                tertiary: '#fff'
            }
        },
        chat: {
            background: {
                primary: '#fff',
                secondary: '#dcf8c6'
            },
            text: {
                primary: '#000'
            }
        },
        text: {
            secondary: '#667781',
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

