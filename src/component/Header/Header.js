import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../../Context/Context";

const Header = () => {

    const { userName } = useContext(Context)

    const navigateToLogin = useNavigate()
    const happendOnClickUser = () => {
        navigateToLogin(`/login`)
    }

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <h1 className="mainTitle">My Music</h1>
                </div>
                <div className="privateArea">
                    <h5 className="helloUser">Hello, {userName ? userName : 'guest'}</h5>
                    <AccountCircleIcon
                        onClick={() => happendOnClickUser()}
                        style={{ color: "white", position: "absolute", right: "25px" }} />
                </div>
            </nav>
        </div>
    )
}

export default Header;