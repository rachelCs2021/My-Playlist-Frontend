import "./RecomendSong.css"
import { useState } from "react";
import ShowSong from "../ShowSong/ShowSong";
import ReactPlayer from "react-player";
import Context from "../../Context/Context"
import { useNavigate } from "react-router-dom";


const RecomendSong = () => {

    const songsList = [
        {
            id: 'xQzS3JnZQZM',
            name: "The Middle (Lyrics) ft. Maren Morris",
            by: "Zedd, Grey",
            img: "https://i.ytimg.com/vi/M3mJkSqZbX4/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAIR_pqdBz0jB5sWOJkcUPTvuJKPw",
            url: "https://youtu.be/xQzS3JnZQZM"
        },
        {
            id: 'yWEK4v9AVKQ',
            name: " Stay (Official Music Video)",
            by: "Zedd, Alessia Cara",
            img: "https://i.ytimg.com/vi/h--P8HzYZ74/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCmR2mvm9H9borLCcIwuJ_2sf2EDA",
            url: "https://youtu.be/yWEK4v9AVKQ"
        },
        {
            id: 'Ey_hgKCCYU4',
            name: "Perfect Strangers ft. JP Cooper (Official Video)",
            by: "Jonas Blue",
            img: "https://i.ytimg.com/vi/Ey_hgKCCYU4/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLABxEf6RNUF4MsDdiENsDjur4GwXw",
            url: "https://youtu.be/Ey_hgKCCYU4"
        },
        {
            id: 'qPTfXwPf_HM',
            name: "Mama ft. William Singe (Official Video)",
            by: "Jonas Blue",
            img: "https://i.ytimg.com/vi/qPTfXwPf_HM/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDbNqM2eCyIcvhEYAFAsZ_n3JxM2A",
            url: "https://youtu.be/qPTfXwPf_HM"
        },
        {
            id: 'aJOTlE1K90k',
            name: "Girls Like You (Lyrics)",
            by: "Maroon 5, Cardi B",
            img: "https://i.ytimg.com/vi/aJOTlE1K90k/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBHIZaUFJHMGadi17DvvRQyCF_RgA",
            url: "https://youtu.be/aJOTlE1K90k"
        },
        {
            id: '9MeHPpdX54I',
            name: "End Of Every Story",
            by: "Eyal Golan",
            img: "https://i.ytimg.com/vi/9MeHPpdX54I/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBnbTlwxrSEXqBDxh8x4skAScM5Rg",
            url: "https://youtu.be/9MeHPpdX54I"
        },
        {
            id: 'cNw8A5pwbVI',
            name: "Do It Again ",
            by: "Pia Mia ft. Chris Brown, Tyga",
            img: "https://i.ytimg.com/vi/cNw8A5pwbVI/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCeHNcML1Iin2SNRm8mL7VFpF4p3g",
            url: "https://youtu.be/cNw8A5pwbVI"
        },
        {
            id: 'RdVx-GrnQzk',
            name: "Thought About That ",
            by: "Noa Kirel",
            img: "https://i.ytimg.com/vi/RdVx-GrnQzk/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBxVdGMOnOlYsUY78IZ6gWtGdAJcQ",
            url: "https://youtu.be/RdVx-GrnQzk"
        },
        {
            id: 'zKCrSN9oXgQ',
            name: " Ayo ",
            by: "Chris Brown, Tyga",
            img: "https://i.ytimg.com/vi/zKCrSN9oXgQ/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAOrVFkR35mSAfgZf666ttm4dhdvA",
            url: "https://youtu.be/zKCrSN9oXgQ"
        },
        {
            id: '3AyMjyHu1bA',
            name: "Intentions",
            by: "Justin Bieber",
            img: "https://i.ytimg.com/vi/3AyMjyHu1bA/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAC4OVDDFL_ttY6Y3pWwr3269Q9LA",
            url: "https://youtu.be/3AyMjyHu1bA"
        },
    ]

    const [songsArr, setSongsArr] = useState(songsList);
    const [urlSong, setUrlSong] = useState()
    const navigateRecomendSong = useNavigate()

    const showSongsR = (id) => {
        console.log(id);
        navigateRecomendSong(`/Play/${id}`)
        setUrlSong(songsList.find(song => song.id === id).url)
    }
    console.log(urlSong);

    return (
        <Context.Provider value={{ urlSong, songsArr }}>
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
            </div>
        </Context.Provider>
    )
};

export default RecomendSong;