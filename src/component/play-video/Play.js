import "./Play.css"
import ReactPlayer from "react-player";
import Header from "../Header/Header";
// import RecomendSong from "../RocommendedSongs/RecomendSong";
import SideBar from "../SideBar/SideBar";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Context from "../../Context/Context";

const Play = () => {

    const { title } = useContext(Context)
    // const { idOfSong } = useContext(Context)
    console.log(title);
    // console.log(idOfSong);
    // const { setPlaylist } = useContext(Context)
    // const { userAccessToken } = useContext(Context);
    // const { urlSong } = useContext(Context)
    const [urlSearchSong, setUrlSearchSong] = useState()
    const [showSongPlay, setShowSongPlay] = useState([])

    const { addSongToPlaylist } = useContext(Context)

    let { idSong } = useParams();
    console.log(idSong);

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



    return (
        <div className='parallax5'>
            <Header />
            <SideBar />
            <div className="containerAllDetail" >
                <div className="playSomeSong">
                    <div className="playSong" id={idSong}>
                        <ReactPlayer controls
                            url={urlSearchSong}
                        />
                        <div className="container-details-play">
                            <p className="title-of-song"><b>{title}</b></p>
                            <div className="icon-add-to-playlist" >
                                <FavoriteBorderIcon className="iconClick" onClick={() => addSongToPlaylist(idSong)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Play;