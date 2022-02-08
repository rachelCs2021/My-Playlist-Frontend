import "./Search.css"
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecomendSong from "../RocommendedSongs/RecomendSong";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
// import { Link } from "react-router-dom";


const Search = ({ onClick }) => {

    const [songs, setSongs] = useState([])

    const freeText = (e) => {
        console.log("search");
        const text = e.target.value;
        console.log(text);
        fetch(`http://localhost:4001/search?q=${text}`)
            .then(res => res.json())
            .then(song => {
                const searchResult = song.filter(s => s.title.toLowerCase().includes(text.toLowerCase()))
                console.log(searchResult);
                setSongs(searchResult)
            }).catch(err => console.log(err))
    }
    console.log(songs);

    // const [val, setVal] = useState("")
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const happendOnClick = (e) => {
        navigate(`/Play/${e.id}`)
        searchh(e)
    }

    const searchh = (event) => {
        onClick(event.target.value)
        console.log(event.target.value);
    }

    // console.log(songs.img.url);
    const navigate = useNavigate();

    return (
        <div className="parallax5">
            <Header />
            <SideBar />
            <div className="container-search">
                <form >
                    <input
                        className="form-control me-3 searchInput"
                        type="search"
                        placeholder="Enter For Search "
                        aria-label="Search"
                        onChange={freeText}
                        // value={val}
                        ref={inputRef} />
                </form>
                <div className="containerSearchAndRecomend">
                    <div className="containerSearchResult">
                        <div className="SerchResult">
                            {songs.map(song =>
                                <div className="resultOfSearch" id={song.id} value={song.id} onClick={happendOnClick} >
                                    <img className="searchImg" src={song.img.url} alt={song.title} />
                                    <h5 className="titleResule">{song.title}</h5>
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Search;