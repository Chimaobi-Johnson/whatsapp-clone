import Sidebar from './containers/Sidebar/Sidebar';
import ChatContainer from './containers/Chat/ChatContainer';

import './App.css';
import ContactInfo from './components/ContactInfo/ContactInfo';

function App() {
  return (
    <div className="wrapper">

      <div className="container">
          <Sidebar />
          <ChatContainer />
          <ContactInfo />
      </div>

    </div>
  );
}

export default App;
