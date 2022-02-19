import Song from "../Song/Song";
import Header from "../Header/Header";
import "./Playlist.css"
import SideBar from "../SideBar/SideBar";
import { useState, useContext } from 'react';
import Context from "../../Context/Context";

const Playlist = () => {

    // const [urlSong, setUrlSong] = useState()
    // const showSong = (id) => {
    //     setUrlSong(songsList.find(song => song.id === id).url)
    // }
    // console.log(setSongsArr);
    // console.log(urlSong);

    const { title } = useContext(Context)
    // const { img } = useContext(Context)

    const removeFromPlaylist = (id) => {
        console.log("remove");
        setPlaylist(playlist.filter((song) => song.id !== id));
        console.log(playlist);
    }

    const { playlist, setPlaylist } = useContext(Context)

    // const addToPlaylist = () => {
    //     setPlaylist(...playlist,)
    // }

    // const playlistArr = [
    //     {
    //         id: 2,
    //         name: " Stay (Official Music Video)",
    //         by: "Zedd, Alessia Cara",
    //         img: `https://pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg`
    //     },
    //     {
    //         id: 3,
    //         name: " BLA BLA",
    //         by: "Noa Kirel",
    //         img: `https://pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg`
    //     },
    //     {
    //         id: 4,
    //         name: " BLA BLA",
    //         by: "Noa Kirel",
    //         img: `https://pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg`
    //     },
    //     {
    //         id: 5,
    //         name: " BLA BLA",
    //         by: "Noa Kirel",
    //         img: `https://pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg`
    //     },
    //     {
    //         id: 6,
    //         name: " BLA BLA",
    //         by: "Noa Kirel",
    //         img: `https://pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg`
    //     },
    //     {
    //         id: 7,
    //         name: " BLA BLA",
    //         by: "Noa Kirel",
    //         img: `https://pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg`
    //     },
    //     {
    //         id: 8,
    //         name: " BLA BLA",
    //         by: "Noa Kirel",
    //         img: `https://pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg`
    //     },
    // ]


    return (
        <div className="parallax5">
            <Header />
            <SideBar />
            <div className="container-playlist-details">
                <div className="playlistTitle2">
                    <h2 className="title-playlist">My PlayList</h2>
                </div>
                <div className="containerPlaylist">
                    <div className="playlistSongs">
                        {/* {playlist.map(song => (
                            <Song key={song.id} id={song.id} name={song.name} by={song.by} image={song.img} remove={removeFromPlaylist} />
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playlist;