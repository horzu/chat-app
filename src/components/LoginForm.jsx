import React,{useState} from 'react';
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 
            "Project-ID": "2f0eafe1-124c-4000-9c77-790dc3c8aca5",
            "User-Name": username,
            "User-Secret": password        
        };

        try {
            await axios.get("https://api.chatengine.io/chats", {headers: authObject});
            // works out -> logged in
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)

            window.location.reload();
        } catch(error){
            // error -> try with new username
            setError("Oppps, incorrect username or password.")
        }

        // username / password => chatEngine -> give messages
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit} >
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
            
        </div>
    )
}

export default LoginForm
