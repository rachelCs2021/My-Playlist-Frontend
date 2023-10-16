import axios from "axios";
import Home from "./Home";
import React, { useEffect, useState } from "react";
import Play from "./component/play-video/Play";
import LogIn from "./component/login/LogIn";
import Search from "./component/Search-song/Search";
import Modall from "./Modal/Modal"
import Context from "./Context/Context";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Navigate
} from "react-router-dom";
import Playlist from "./component/Playlist/Playlist";
import Register from "./component/Register/Register";

const App = () => {

    const [token, setToken] = useState()
    const [userAccessToken, setUserAccessToken] = useState(null);
    const [isUserConnected, setUserConnected] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState()
    const [idOfSong, setIdOfSong] = useState()
    const [playlist, setPlaylist] = useState([])
    const [songs, setSongs] = useState([])
    const [userName, setUserName] = useState('')


    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    // console.log(token);

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

    console.log(userAccessToken);

    const songsList = [
        {
            id: 'xQzS3JnZQZM',
            title: "The Middle (Lyrics) ft. Maren Morris",
            artist: "Zedd, Grey",
            img: {
                url: "https://i.ytimg.com/vi/M3mJkSqZbX4/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAIR_pqdBz0jB5sWOJkcUPTvuJKPw",
            },
            url: "https://youtu.be/xQzS3JnZQZM"
        },
        {
            id: 'yWEK4v9AVKQ',
            title: " Stay (Official Music Video)",
            artist: "Zedd, Alessia Cara",
            img: {
                url: "https://i.ytimg.com/vi/h--P8HzYZ74/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCmR2mvm9H9borLCcIwuJ_2sf2EDA",
            },
            url: "https://youtu.be/yWEK4v9AVKQ"
        },
        {
            id: 'Ey_hgKCCYU4',
            title: "Perfect Strangers ft. JP Cooper (Official Video)",
            artist: "Jonas Blue",
            img: {
                url: "https://i.ytimg.com/vi/Ey_hgKCCYU4/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLABxEf6RNUF4MsDdiENsDjur4GwXw",
            },
            url: "https://youtu.be/Ey_hgKCCYU4"
        },
        {
            id: 'qPTfXwPf_HM',
            title: "Mama ft. William Singe (Official Video)",
            artist: "Jonas Blue",
            img: {
                url: "https://i.ytimg.com/vi/qPTfXwPf_HM/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDbNqM2eCyIcvhEYAFAsZ_n3JxM2A",
            },
            url: "https://youtu.be/qPTfXwPf_HM"
        },
        {
            id: 'aJOTlE1K90k',
            title: "Girls Like You (Lyrics)",
            artist: "Maroon 5, Cardi B",
            img: {
                url: "https://i.ytimg.com/vi/aJOTlE1K90k/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBHIZaUFJHMGadi17DvvRQyCF_RgA",
            },
            url: "https://youtu.be/aJOTlE1K90k"
        },
        {
            id: '9MeHPpdX54I',
            title: "End Of Every Story",
            artist: "Eyal Golan",
            img: {
                url: "https://i.ytimg.com/vi/9MeHPpdX54I/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBnbTlwxrSEXqBDxh8x4skAScM5Rg",
            },
            url: "https://youtu.be/9MeHPpdX54I"
        },
        {
            id: 'cNw8A5pwbVI',
            title: "Do It Again (Official Music Video)",
            artist: "Pia Mia ft. Chris Brown, Tyga",
            img: {
                url: "https://i.ytimg.com/vi/cNw8A5pwbVI/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCeHNcML1Iin2SNRm8mL7VFpF4p3g",
            },
            url: "https://youtu.be/cNw8A5pwbVI"
        },
        {
            id: 'RdVx-GrnQzk',
            title: "Thought About That (Official Music Video)",
            artist: "Noa Kirel",
            img: {
                url: "https://i.ytimg.com/vi/RdVx-GrnQzk/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBxVdGMOnOlYsUY78IZ6gWtGdAJcQ",
            },
            url: "https://youtu.be/RdVx-GrnQzk"
        },
        {
            id: 'zKCrSN9oXgQ',
            title: "Ayo (Official Video)",
            artist: "Chris Brown, Tyga",
            img: {
                url: "https://i.ytimg.com/vi/zKCrSN9oXgQ/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAOrVFkR35mSAfgZf666ttm4dhdvA",
            },
            url: "https://youtu.be/zKCrSN9oXgQ"
        },
        {
            id: '3AyMjyHu1bA',
            title: "Intentions (Official Video (Short Version)) ft. Quavo",
            artist: "Justin Bieber",
            img: {
                url: "https://i.ytimg.com/vi/3AyMjyHu1bA/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAC4OVDDFL_ttY6Y3pWwr3269Q9LA",
            },
            url: "https://youtu.be/3AyMjyHu1bA"
        },
    ]

    const addToPlaylistIfExist = (id) => {
        console.log(isUserConnected);
        if (!isUserConnected) {
            addSongToPlaylist(id)
        } else {
            console.log("not connect");
            setShowModal(true)
            openModal()
            handleShow()
        }
    }

    const openModal = () => {
        alert("No User Connect")
        return (
            <div>
                <button>open modal</button>
                <Modall
                    show={showModal}
                />
            </div>
        )
    }

    const addSongToPlaylist = (id) => {
        console.log("clicked");
        console.log(id);
        const findSong = (songs.find(s => s.id === id) || songsList.find(s => s.id === id))
        console.log(findSong);
        findSong.url = `https://youtu.be/${id}`

        axios({
            method: "post",
            url: "http://localhost:4001/songs",
            data: {
                title: findSong.title,
                artist: findSong.artist,
                url: findSong.url,
                user: "6202a9e1a80704f64345280a",
            },
            validateStatus: (status) => {
                return status;
            },
        })
            .then((response) => {
                console.log(response);
                // axios({
                //     method: "put",
                //     url: "http://localhost:4001/playlist",
                //     data: {
                //         song: response,
                //         user: "6202a9e1a80704f64345280a",
                //     },
                //     validateStatus: (status) => {
                //         return true;
                //     },
                // });
            })
            // .then((res) => {
            //     console.log(res);
            // })
            .catch((error) => {
                console.log(error);
            });

        setPlaylist((song) => {
            const updateSongsList = [...song]
            console.log(updateSongsList);

            const findSong = (songs.find(s => s.id === id) || songsList.find(s => s.id === id))
            console.log(findSong);

            const songExist = playlist.find(f => f.id === id)
            if (!songExist) {
                updateSongsList.unshift(findSong)
            }
            console.log(updateSongsList);
            return updateSongsList
        });
        console.log(playlist);
    }

    const removeFromPlaylist = (id) => {
        console.log("remove");
        setPlaylist(playlist.filter((song) => song.id !== id));
        console.log(playlist);
    }

    return (
        <Context.Provider
            value={{
                userAccessToken,
                isUserConnected,
                setUserAccessToken,
                title,
                setTitle,
                idOfSong,
                setIdOfSong,
                playlist,
                setPlaylist,
                addToPlaylistIfExist,
                addSongToPlaylist,
                songs,
                setSongs,
                songsList,
                userName,
                setUserName,
                removeFromPlaylist,
                handleClose,
                handleShow,
                showModal,
                setShowModal
            }}>
            <Router>
                <Routes>
                    {token &&
                        <>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/Playlist" element={<Playlist />} />
                            <Route exact path="/Play/:idSong" element={<Play />} />
                            <Route exact path="/search" element={<Search />} />
                        </>}
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