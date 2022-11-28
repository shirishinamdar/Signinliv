import { useEffect, useState } from 'react'
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import jwt_decode from "jwt-decode";

function App() {
  const [ user,setUser ] = useState({});
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject)
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }
  
  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }
    useEffect(() => {
   /*global google */
   google.accounts.id.initialize({
     client_id: "693523469942-j8p9ofs9fio5cqod2fmgbb7q90ec4qf1.apps.googleusercontent.com",
     callback: handleCallbackResponse,
    });
    
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "medium", alignContent: 'top', }
  
    );
  }, []);
  /* if we have no user:sign in button*/
/* if we have a user:show logout button*/

  return (
    <div className="App">
      <div id="signInDiv"></div>
      
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      {
        Object.keys(user).length != 0 &&
        <button onClick={ (e) => handleSignOut(e)}>Log Out</button>
      }

      { user && 
      <div>
        <img src={user.picture}></img>
        <h3>{user.name}</h3>
        </div>

      }
    </div>
  );
}

export default App;
