import React, {useState} from "react";

function Login() {
    const [isAuthenticated, handleAuth] = useState(false);
    return (<div>
        <button onClick= {() => {handleAuth(true)}}>lets go</button>
    </div>)   
}

export default Login;