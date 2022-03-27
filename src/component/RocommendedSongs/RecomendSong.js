import "./RecomendSong.css"
import { useState, useContext } from "react";
import ShowSong from "../ShowSong/ShowSong";
import Context from "../../Context/Context"
import { useNavigate } from "react-router-dom";


const RecomendSong = () => {

    const [urlSong, setUrlSong] = useState()
    const navigateRecomendSong = useNavigate()
    const { setTitle } = useContext(Context)
    const { songsList } = useContext(Context)

    const showSongsR = (id, name) => {
        console.log(id);
        navigateRecomendSong(`/Play/${id}`)
        setUrlSong(songsList.find(song => song.id === id).url)
        setTitle(name)
    }
    console.log(urlSong);

    return (

        <div className="containRecomendSong">
            <div className="showRecomendSong">
                {songsList.map(song =>
                    <ShowSong
                        key={song.id}
                        id={song.id}
                        name={song.title}
                        by={song.artist}
                        img={song.img.url}
                        url={song.url}
                        onClickPlayer={() => showSongsR(song.id, song.title)}
                    />)}
            </div>
        </div>
    )
};

export default RecomendSong;
