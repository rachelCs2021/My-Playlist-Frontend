import Home from "./Home";
import React, { useEffect, useState } from "react";
import Play from "./component/play-video/Play";
import LogIn from "./component/login/LogIn";
import Search from "./component/Search-song/Search";
import Context from "./Context/Context";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Playlist from "./component/Playlist/Playlist";
import Register from "./component/Register/Register";


const App = () => {

    const [token, setToken] = useState()
    const [userAccessToken, setUserAccessToken] = useState(null);
    const [isUserConnected, setUserConnected] = useState(false);
    const [title, setTitle] = useState()
    const [idOfSong, setIdOfSong] = useState()
    const [playlist, setPlaylist] = useState([])
    const [songs, setSongs] = useState([])
    // const [artist, setArtist] = useState()
    const [img, setImg] = useState()

    const addSongToPlaylist = (id) => {
        // const changeColor = document.querySelector('iconClick')
        // changeColor.style.backgroundColor = 'black'
        console.log("click");
        setPlaylist((prev) => {
            const updateSongsList = [...prev]
            console.log(updateSongsList);
            updateSongsList.unshift(songs.find(s => s.id === id))
            console.log(updateSongsList);
            return updateSongsList
        });
        console.log(playlist);
    }

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
        setToken(true)
    }, [userAccessToken]);


    return (
        <Context.Provider
            value={{
                userAccessToken,
                isUserConnected,
                setUserAccessToken,
                title,
                setTitle,
                img,
                setImg,
                idOfSong,
                setIdOfSong,
                playlist,
                setPlaylist,
                addSongToPlaylist,
                songs,
                setSongs
            }}>
            <Router>
                <Routes>
                    {/* {token &&
                        <> */}
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/Playlist" element={<Playlist />} />
                    <Route exact path="/Play/:idSong" element={<Play />} />
                    <Route exact path="/search" element={<Search />} />
                    {/* </>} */}
                    <Route exact path="/login" element={<LogIn />} />
                    <Route exact path="/register" element={<Register />} />
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