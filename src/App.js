import Sidebar from './containers/Sidebar/Sidebar';
import ChatContainer from './containers/Chat/ChatContainer';

import './App.css';
import ContactInfo from './components/ContactInfo/ContactInfo';
import { useContext } from 'react';
import { ThemeContext } from './Utils/themeContext';

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className="wrapper" style={{ backgroundColor: theme.background.container }}>

      <div className='background-cover'></div>

      <div className="container">
          <Sidebar />
          <ChatContainer />
          <ContactInfo />
      </div>

    </div>
  );
}

export default App;
