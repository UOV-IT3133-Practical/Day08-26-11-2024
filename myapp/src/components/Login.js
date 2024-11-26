import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const aunthenticate = ()=>{
        navigate('/dashboard')
    }
    return (
      <div>
        <h1>Login Page</h1>
        <button onClick={()=>aunthenticate()}>Click here to Login</button>
      </div>
    );
  }
  
  export default Login;