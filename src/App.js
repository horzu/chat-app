import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";


import "./App.css";

const App = () =>  {
    if(!localStorage.getItem("username")) return <LoginForm />
    return (
        <ChatEngine 
            height="100vh"
            projectID= "2f0eafe1-124c-4000-9c77-790dc3c8aca5"
            userName= {localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;