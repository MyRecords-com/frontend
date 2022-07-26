import profileimg from '../../img/img_avatar.png'
import AuthContext from "../../context/AuthContext";
import { useContext } from 'react'
import LoginPage from '../LoginPage/LoginPage';
import myLogo from '../../img/newsvg.svg'
import './NavBar.css'
export default function NavBar() {
    
  const { user } = useContext(AuthContext);
  
  const { logoutUser } = useContext(AuthContext);


if (user === null) {
    return (
<nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
  <a className="navbar-brand" href="/"><img src={myLogo} style={{width: '30px', height: '30px'}}></img> RecordCrates</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Navigation</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
            <a className="nav-link" href="#"><img src="" alt="" /></a>
            </li>
          <li className="nav-item text-center">
          <LoginPage />
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/records">Search Records</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    )
} else {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
      
      <a className="navbar-brand" href="/"><img src={myLogo} style={{width: '30px', height: '30px'}}></img> RecordCrates</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Navigation</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                <a className="nav-link" href="#"><img src="" alt="" /></a>
                </li>
              <li className="nav-item text-center">
                <a className="nav-link" href="#"><img src={profileimg} className="avatar"></img></a><br></br>
                Welcome Back <b>{user.username}</b> !<br></br>
                <button type="button" className="btn btn-primary btn-sm" onClick={logoutUser}>Logout</button>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/dashboard">My Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="records">Search Records</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
        )
}
}