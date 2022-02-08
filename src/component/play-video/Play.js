import "./Play.css"
import ReactPlayer from "react-player";
import Header from "../Header/Header";
import RecomendSong from "../RocommendedSongs/RecomendSong";
import SideBar from "../SideBar/SideBar";
// import { useParams } from 'react';
// import Context from "../../Context/Context"

const Play = () => {

    // let { urlSong } = useParams();
    // const { urlSong } = useContext(Context)

    return (
        <div className='parallax'>
            <Header />
            <SideBar />
            <div className="containerAllDetail">
                <div className="playSomeSong">
                    <div className="playSong">
                        <ReactPlayer controls
                        // url={urlSong}
                        />
                        <p></p>
                    </div>
                </div>

                {/* <h2 className="titlePlay">Recommended Songs</h2> */}
                <div className="playlistRecommendSong">
                    <RecomendSong />
                </div>
            </div>
        </div>
    )
}


export default Play;