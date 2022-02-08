import "./RecomendSong.css"
import { useState } from "react";
import ShowSong from "../ShowSong/ShowSong";
import ReactPlayer from "react-player";
import Context from "../../Context/Context"


const RecomendSong = () => {

    const songsList = [
        {
            id: 1,
            name: "The Middle (Lyrics) ft. Maren Morris",
            by: "Zedd, Grey",
            img: "https://i.ytimg.com/vi/M3mJkSqZbX4/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAIR_pqdBz0jB5sWOJkcUPTvuJKPw",
            url: "https://youtu.be/xQzS3JnZQZM"
        },
        {
            id: 2,
            name: " Stay (Official Music Video)",
            by: "Zedd, Alessia Cara",
            img: "https://i.ytimg.com/vi/h--P8HzYZ74/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCmR2mvm9H9borLCcIwuJ_2sf2EDA",
            url: "https://youtu.be/yWEK4v9AVKQ"
        },
        {
            id: 3,
            name: "Perfect Strangers ft. JP Cooper (Official Video)",
            by: "Jonas Blue",
            img: "https://i.ytimg.com/vi/Ey_hgKCCYU4/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLABxEf6RNUF4MsDdiENsDjur4GwXw",
            url: "https://youtu.be/Ey_hgKCCYU4"
        },
        {
            id: 4,
            name: "Mama ft. William Singe (Official Video)",
            by: "Jonas Blue",
            img: "https://i.ytimg.com/vi/qPTfXwPf_HM/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDbNqM2eCyIcvhEYAFAsZ_n3JxM2A",
            url: "https://youtu.be/qPTfXwPf_HM"
        },
        {
            id: 5,
            name: "Girls Like You (Lyrics)",
            by: "Maroon 5, Cardi B",
            img: "https://i.ytimg.com/vi/aJOTlE1K90k/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBHIZaUFJHMGadi17DvvRQyCF_RgA",
            url: "https://youtu.be/aJOTlE1K90k"
        },
        {
            id: 6,
            name: "End Of Every Story",
            by: "Eyal Golan",
            img: "https://i.ytimg.com/vi/9MeHPpdX54I/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBnbTlwxrSEXqBDxh8x4skAScM5Rg",
            url: "https://youtu.be/9MeHPpdX54I"
        },
    ]

    const [songsArr, setSongsArr] = useState(songsList);
    const [urlSong, setUrlSong] = useState()

    const showSongsR = (id) => {
        console.log(id);
        setUrlSong(songsList.find(song => song.id === id).url)
    }
    console.log(urlSong);

    return (
        <Context.Provider value={{ urlSong }}>
            <div className="containRecomendSong">
                <div className="showRecomendSong">
                    {songsArr.map(song =>
                        <ShowSong
                            key={song.id}
                            id={song.id}
                            name={song.name}
                            by={song.by}
                            img={song.img}
                            url={song.url}
                            //   remove={remove} 
                            onClickPlayer={showSongsR}
                        />)}
                </div>
                <div>
                    <ReactPlayer controls
                        url={urlSong}
                    />
                </div>
            </div>
        </Context.Provider>
    )
};

export default RecomendSong;