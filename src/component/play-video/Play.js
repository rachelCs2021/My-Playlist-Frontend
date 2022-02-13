import "./Play.css"
import ReactPlayer from "react-player";
import Header from "../Header/Header";
import RecomendSong from "../RocommendedSongs/RecomendSong";
import SideBar from "../SideBar/SideBar";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Context from "../../Context/Context";
import Playlist from "../Playlist/Playlist";
import { useNavigate } from "react-router-dom";
// import axios from "axios";


const Play = () => {

    const { setPlaylist } = useContext(Context)
    // const { userAccessToken } = useContext(Context);
    // const { urlSong } = useContext(Context)
    const [urlSearchSong, setUrlSearchSong] = useState()

    const [showSongPlay, setShowSongPlay] = useState([])

    let { idSong } = useParams();

    useEffect(() => {
        handleUrl(idSong)
    }, []);

    const handleUrl = (idSong) => {
        console.log(idSong);
        const showSearchSong = `https://youtu.be/${idSong}`
        setUrlSearchSong(showSearchSong)
        setShowSongPlay(showSearchSong)
        console.log(showSongPlay);
    }

    const navigateToPlaylist = useNavigate();

    const addSongToPlaylist = () => {
        console.log("click");
        navigateToPlaylist(`/Playlist`)
    }

    return (
        <div className='parallax5'>
            <Header />
            <SideBar />
            <div className="containerAllDetail">
                <div className="playSomeSong">
                    <div className="playSong" id={idSong}>
                        <ReactPlayer controls
                            url={urlSearchSong}
                        />
                        <p></p>
                        {/* <div>
                            {showSongPlay.map((ss) =>
                                <div>
                                    <h2>{ss.title}</h2>
                                    <p>{ss.artist}</p>
                                </div>
                            )}
                        </div> */}
                        <div className="icon-add-to-playlist" onClick={() => addSongToPlaylist()}>
                            <FavoriteBorderIcon />
                        </div>
                    </div>
                </div>

                {/* <h2 className="titlePlay">Recommended Songs</h2> */}
                {/* <div className="playlistRecommendSong">
                    <RecomendSong />
                </div> */}
            </div>
        </div>
    )
}


export default Play;