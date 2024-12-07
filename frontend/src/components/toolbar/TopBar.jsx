import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:3002/images/"
  const openSocialMedia = (url) => {
    window.open(url, '_blank'); // Opens the link in a new tab
  }
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square" onClick={() => openSocialMedia('https://www.facebook.com/rithik.kodeboyina')}></i>
        <i className="topIcon fab fa-twitter-square" onClick={() => openSocialMedia('https://twitter.com/Rithik_sai_27')}></i>
        <i className=" topIcon fab fa-twitter-square fa-brands fa-github" onClick={() => openSocialMedia('https://github.com/rithiksai27')}></i>
        <i className="topIcon fab fa-instagram-square" onClick={() => openSocialMedia('https://www.instagram.com/rithik_sai_official/')}></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/schedule">
              SCHEDULE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/pastsessions">
              PAST SESSIONS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/feedback">
              FEEDBACK
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
  {user ? (
    <Link to="/settings">
      <img className="topImg" src={PF + user.profilePic} alt="" />
    </Link>
  ) : (
    <ul className="topList">
      <li className="topListItem">
        <Link className="link" to="/login">
          <button type="button" className="btn btn-outline-secondary">
            LOGIN
          </button>
        </Link>
      </li>
      <li className="topListItem">
        <Link className="link" to="/admin">
          <button type="button" className="btn btn-outline-secondary">
            ADMIN
          </button>
        </Link>
      </li>
      <li className="topListItem">
        <Link className="link" to="/register">
          <button type="button" className="btn btn-outline-secondary">
            REGISTER
          </button>
        </Link>
      </li>
    </ul>
  )}
  
  <i className="topSearchIcon fas fa-search"></i>
</div>
      </div>

  );
}
