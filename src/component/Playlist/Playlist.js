import Song from "../Song/Song";
import Header from "../Header/Header";
import "./Playlist.css"
import SideBar from "../SideBar/SideBar";
import { useState } from 'react';
import Context from "../../Context/Context";

const Playlist = ({ remove }) => {

    // const [songsArr, setSongsArr] = useState(songsList);
    // const [urlSong, setUrlSong] = useState()
    // const showSong = (id) => {
    //     setUrlSong(songsList.find(song => song.id === id).url)
    // }
    // console.log(setSongsArr);
    // console.log(urlSong);

    const [playlist, setPlaylist] = useState([])

    // const addToPlaylist = () => {
    //     setPlaylist(...playlist,)
    // }

    const playlistArr = [
        {
            id: 2,
            name: " Stay (Official Music Video)",
            by: "Zedd, Alessia Cara",
            img: `https://pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg`
        },
        {
            id: 3,
            name: " BLA BLA",
            by: "Noa Kirel",
            img: `https://pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg`
        },
        {
            id: 4,
            name: " BLA BLA",
            by: "Noa Kirel",
            img: `https://pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg`
        },
        {
            id: 5,
            name: " BLA BLA",
            by: "Noa Kirel",
            img: `https://pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg`
        },
        {
            id: 6,
            name: " BLA BLA",
            by: "Noa Kirel",
            img: `https://pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg`
        },
        {
            id: 7,
            name: " BLA BLA",
            by: "Noa Kirel",
            img: `https://pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg`
        },
        {
            id: 8,
            name: " BLA BLA",
            by: "Noa Kirel",
            img: `https://pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg`
        },
    ]

    return (
        <div className="parallax5">
            <Header />
            <SideBar />
            <Context.Provider value={{ setPlaylist }} >
                <div className="container-playlist-details">
                    <div className="playlistTitle2">
                        <h2 className="title-playlist">My PlayList</h2>
                    </div>
                    <div className="containerPlaylist">
                        <div className="playlistSongs">
                            {playlistArr.map(song => (
                                <Song key={song.id} id={song.id} name={song.name} by={song.by} image={song.img} remove={remove} />
                            ))}
                        </div>
                    </div>
                </div>
            </Context.Provider>
        </div>
    )
}

export default Playlist;