import { useState, useContext } from "react";
import "./Login.css"
import Context from "../../Context/Context";
import { useNavigate } from "react-router-dom";
// import Header from "../Header/Header";

const Login = () => {

    const [userName, setUserName] = useState({})
    const [password, setPassword] = useState({})

    const navigateLogin = useNavigate();
    const { setUserAccessToken } = useContext(Context);

    const handleLogin = (evn) => {
        evn.preventDefault()
        fetch(`http://localhost:4001/users/login`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userName, password })
            })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                localStorage.setItem("Token", res.accessToken)
                setUserAccessToken(res.accessToken);
                if (localStorage.Token) {
                    return navigateLogin("/home");
                }
            })
            .catch((err) => {
                console.log(err);
            });
        // reset();
    }


    return (
        <div className="parallax1">
            {/* <Header /> */}
            <div className="containerLoggin">
                <h1 className="titleLogin">Wellcome</h1>
                <form className="formLogin">
                    <label htmlFor="userName">User Name:</label>
                    <input
                        type="text"
                        id="userName"
                        // required
                        minLength="2"
                        maxLength="10"
                        placeholder="user name"
                        className="inputLoggin"
                        onChange={({ target: { value } }) => {
                            setUserName(value)
                        }
                        }
                    />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        // required
                        placeholder="password"
                        className="inputLoggin"
                        onChange={({ target: { value } }) => {
                            setPassword(value)
                        }
                        }
                    />
                    <button
                        type="submit"
                        className="buttonLogin"
                        onClick={handleLogin}
                    >log in</button>
                </form>
            </div>

        </div>
    )
};

export default Login;