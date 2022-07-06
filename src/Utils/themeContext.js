import React, { createContext, useState } from 'react';
import { useSelector } from 'react-redux';


const themes = {
    light : {
        button: {
            background: {
                primary: '#ffffff',
                secondary: '#008069'
            },
            text: {
                primary: '#ffffff',
                secondary: '#008069'
            }
        },
        dropDown: {
            background: {
             primary: '#ffffff'   
            }
        },
        input: {
            background: '#ffffff',
        },
        background: {
            primary: '#ffffff',
            secondary: '#ededed',
            tertiary: '#f6f6f6',
            landing: '#f8f9fa',
            container: '#d8dbdc',
        },
        profile: {
            background: {
                primary: '#f0f2f5',
                secondary: '#008069',
                tertiary: '#ffffff'
            },
            text: {
                primary: '#008069',
                secondary: '#3b4a54',
                secondary2: '#8696a0',
                tertiary: '#ffffff'
            }
        },
        chat: {
            background: {
                primary: '#ffffff',
                secondary: '#dcf8c6'
            },
            text: {
                primary: '#000000'
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
        button: {
            background: {
                primary: '#000000',
                secondary: '#008069'
            },
            text: {
                primary: '#000000',
                secondary: '#008069'
            }
        },
        dropDown: {
            background: {
             primary: '#000000'   
            }
        },
        input: {
            background: '#202c33',
            background2: '#2a3942'
        },
        background: {
            primary: '#111b21',
            secondary: '#202c33',
            tertiary: '#111b21',
            landing: '#f8f9fa',
            container: '#0a1014',
        },
        profile: {
            background: {
                primary: '#f0f2f5',
                secondary: '#008069',
                tertiary: '#000000'
            },
            text: {
                primary: '#008069',
                secondary: '#3b4a54',
                secondary2: '#8696a0',
                tertiary: '#000000'
            }
        },
        chat: {
            background: {
                primary: '#202c33',
                secondary: '#005c4b'
            },
            text: {
                primary: '#000000'
            }
        },
        text: {
            primary: '#384045',
            secondary: '#667781',
            tertiary: '#9e9e9e'
        },
        notification: {
            primary: '#59c7f7'
        }
    }
}





const ThemeContext = createContext(themes); // default theme



const ThemeProvider = ({ children }) => {

const currentTheme = useSelector(data => data.app.currentTheme);

const [theme, setCurrentTheme] = useState(themes.light);

console.log(theme)

// if(currentTheme === 'dark') {
//     setCurrentTheme(themes.dark)
// } else {
//     setCurrentTheme(themes.light)
// }



    const toggleTheme = (currentTheme) => {
        if(currentTheme === 'dark') {
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

