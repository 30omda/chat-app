import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
const App = () => {
    if(!localStorage.getItem('username'))return <LoginForm />
    return (
        <ChatEngine 
            height="100vh"
            projectID="2e02a3f2-5ec3-466b-aed5-37b03af2bcfd"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        />
    );
}
export default App;