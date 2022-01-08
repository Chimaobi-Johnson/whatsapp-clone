import Sidebar from './containers/Sidebar/Sidebar';
import ChatContainer from './containers/Chat/ChatContainer';

import './App.css';

function App() {
  return (
    <div className="wrapper">
        <Sidebar />
        <ChatContainer />
    </div>
  );
}

export default App;
