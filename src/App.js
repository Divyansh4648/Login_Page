import './App.css';
import {useState} from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [errors, setErrors] = useState({});

  const onSubmit = () => {
    if(!email) {
      setErrors(errors=> ({...errors, email: 'The Email field is required'}))
      return;
    } 
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors(errors=> ({
        ...errors,
        email: 'The email is invalid'
      }))
      return;
    }
    if(!password) {
      setErrors(errors=> ({...errors, password: 'The Password field is required'}))
      return;
    }
    if(password.length < 6) {
      setErrors(errors=> ({...errors, password: 'The Password must be a minimum of 6 characters!'}))
      return;
    }
  }

  return (
    <div className="App">
    <img  className="background" src={require("./urn_aaid_sc_US_9ede06e3-b742-4d60-8dcb-49b6e3e9fc85.png")} ></img>
   <div className ="form">
    <div className="header">
    <img src={require("./amazonlogo.png")} />
    </div>
    <div className='container'>
    <div className="body">
      <h1>Login</h1>
      <img style={{maxWidth: '100%'}} src={require("./urn_aaid_sc_US_9ede06e3-b742-4d60-8dcb-49b6e3e9fc85 (1).png")} />
      <input type="email" value={email} onChange={e=> {
        setErrors(v=> ({...v, email: ''}));
        setEmail(e.target.value)
      }} placeholder="Enter your email" required />
      {errors.email && <div className='error'><img src={require('./urn_aaid_sc_US_9ede06e3-b742-4d60-8dcb-49b6e3e9fc85 (2).png')} />&nbsp;{errors.email}</div>}
      <input type="password" value={password} onChange={e=> {
        setErrors(v=> ({...v, password: ''}));    
        setPassword(e.target.value);
      }} placeholder="Enter your password" required />
      {errors.password && <div className='error'><img src={require('./urn_aaid_sc_US_9ede06e3-b742-4d60-8dcb-49b6e3e9fc85 (2).png')} />&nbsp;{errors.password}</div>}
      <button className="SignIn" onClick={onSubmit}>
        Sign In
      </button>
      <div className="misc">
        <span>Forgot Password?</span>
        <span style={{color: '#D9185F'}}>New User? Sign Up</span>
      </div>
      <center>
        or
      </center>
      <button className='social-button'>
        <img src={require('./urn_aaid_sc_US_9ede06e3-b742-4d60-8dcb-49b6e3e9fc85 (4).png')} />
        <span>CONTINUE WITH GOOGLE</span>
      </button>
      <button className='social-button'>
        <img src={require('./urn_aaid_sc_US_9ede06e3-b742-4d60-8dcb-49b6e3e9fc85 (3).png')} />
        <span>CONTINUE WITH FACEBOOK</span>
      </button>
      </div>
    </div>
   </div>
    </div>
  );
}

export default App;
