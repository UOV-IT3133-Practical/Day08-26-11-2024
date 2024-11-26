import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const aunthenticate = (e)=>{
        e.preventDefault();
        if(userName === "nazik" && password === "N12345"){
            navigate('/dashboard');  
        }
        setError("Username or Password is Incorrect! Please Check")
    }
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={(e)=>aunthenticate(e)}>
            <div>
                <label>Username: </label>
                <input type="text" name="userName" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit">Login</button>
        </form>

        {error && <p>{error}</p>}
      </div>
    );
  }
  
  export default Login;