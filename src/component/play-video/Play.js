import "./Play.css"
import ReactPlayer from "react-player";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Context from "../../Context/Context";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Play = () => {

    const [urlSearchSong, setUrlSearchSong] = useState()
    const [showSongPlay, setShowSongPlay] = useState([])
    const [Click, setClick] = useState(true)
    const [color, setColor] = useState(false)
    const { addSongToPlaylist } = useContext(Context)
    const { playlist, setPlaylist } = useContext(Context)

    let { title } = useContext(Context)
    console.log(title);

    if (title.length > 50) {
        title = title.slice(0, 70) + String("...");
    }
    let { idSong } = useParams();

    useEffect(() => {
        handleUrl(idSong)
    });

    // const songExistInPlaylist = playlist.find(s => s.id === idSong);
    // console.log(songExistInPlaylist);
    // if (songExistInPlaylist) {
    //     setClick(true)
    // } else {
    //     setClick(false)
    // }

    const handleUrl = (idSong) => {
        console.log(idSong);
        const showSearchSong = `https://youtu.be/${idSong}`
        setUrlSearchSong(showSearchSong)
        setShowSongPlay(showSearchSong)
        console.log(showSongPlay);
    }

    const removeFromPlaylist = (id) => {
        console.log("remove");
        setPlaylist(playlist.filter((song) => song.id !== id));
        console.log(playlist);
    }

    const happendOnClickPlay = (id) => {
        setClick(!Click)
        console.log("click");
        if (Click) {
            console.log("adddd");
            addSongToPlaylist(id)
            setColor(true)
        }
        else if (!Click) {
            console.log("removeee");
            removeFromPlaylist(id)
            setColor(false)
        }
        else {
            console.log("bla");
        }
    }

    return (
        <div className='parallax'>
            <Header />
            <SideBar />

            <div className="containerAllDetail" >
                <div className="playSomeSong">
                    <div className="playSong" id={idSong}>
                        <ReactPlayer controls
                            url={urlSearchSong}
                            className="play-the-song"
                        // width={"100%"} height={"50%"}
                        />
                        <div className="container-details-play">
                            <p className="title-of-song"><b>{title}</b></p>
                            <div className="icon-add-to-playlist" >
                                <FavoriteIcon className="iconClick"
                                    onClick={() => happendOnClickPlay(idSong)}
                                    style={{ color: !color ? "white" : "red" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Play;