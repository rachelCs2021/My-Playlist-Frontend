import "./RecomendSong.css"
import Context from "../../Context/Context"
import ShowSong from "../ShowSong/ShowSong";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";


const RecomendSong = () => {

    // const [urlSong, setUrlSong] = useState()
    const navigateRecomendSong = useNavigate()
    const { setTitle, title } = useContext(Context)
    const [songsList, setSongsList] = useState([])
    // const { songsList } = useContext(Context)

    const recommendSongs = () => {

        fetch(`http://localhost:4001/recommendSong`)
            .then(res => res.json())
            .then(songs => {
                setSongsList(songs)
            }).catch(err => console.log(err))
    }

    useEffect(() => {
        recommendSongs()
    })

    const showSongsR = (name, url) => {
        const idSong = url.slice(17)
        navigateRecomendSong(`/Play/${idSong}`)
        // setUrlSong(songsList.find(song => song.id === idSong).url)
        // console.log("lhj", urlSong);
        setTitle(name)
    }

    return (

        <div className="containRecomendSong">
            <div className="showRecomendSong">
                {songsList.map(song =>
                    <ShowSong
                        key={song.id}
                        id={song.id}
                        name={song.title}
                        by={song.artist}
                        img={song.img}
                        url={song.src}
                        onClickPlayer={() => showSongsR(song.title, song.url)}
                    />)}
            </div>
        </div>
    )
};

export default RecomendSong;
