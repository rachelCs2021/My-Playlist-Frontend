import Home from "./Home";
import React, { useEffect, useState } from "react";
import Play from "./component/play-video/Play";
import Login from "./component/login/Login";
import Search from "./component/Search-song/Search";
import Context from "./Context/Context";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Playlist from "./component/Playlist/Playlist";


const App = () => {

    const [token, setToken] = useState()
    const [userAccessToken, setUserAccessToken] = useState(null);
    const [isUserConnected, setUserConnected] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("Token");
        if (token) {
            setUserAccessToken(token);
        }
    }, []);

    useEffect(() => {
        if (!userAccessToken) {
            setUserConnected(false);
            return;
        }
        setUserConnected(true);
    }, [userAccessToken]);


    return (
        <Context.Provider
            value={{
                userAccessToken,
                isUserConnected,
                setUserAccessToken,
            }}>
            <Router>
                <Routes>
                    {/* {token &&
                        <> */}
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/Playlist" element={<Playlist />} />
                    <Route exact path="/Play/:id" element={<Play />} />
                    <Route exact path="/search" element={<Search />} />
                    {/* </>} */}
                    <Route exact path="/login" element={<Login />} />
                    {/* {token || <Route
                        path="*"
                        element={<Navigate to="/login" />}
                    />} */}
                </Routes>
            </Router>
        </Context.Provider>
    )
}

export default App;