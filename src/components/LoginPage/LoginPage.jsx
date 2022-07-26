import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function LoginPage() {
  let navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
    navigate('/')
  };

  return (
    <div className="login">
      <h1 className="text-center"><u>Login</u></h1>
      <form onSubmit={handleSubmit} className="col-lg-6 offset-lg-3">
        <div class="form-group">
          <div>
            <label htmlFor="username"><h5>Username</h5></label>
          </div>
          <input type="text" id="username" placeholder="Enter Username" />
        </div>
        <div class="form-group">
          <div>
            <label htmlFor="password"><h5>Password</h5></label>
          </div>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter Password" 
          />
        </div>
        <br></br><button type="submit" className="btn btn-secondary">Login</button>
      </form><br></br>
      Not A User? <a href='register/'><b>Sign Up!</b></a>
    </div>
  );
};

export default LoginPage;