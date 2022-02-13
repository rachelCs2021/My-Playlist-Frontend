import "./Search.css"
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Spinner from "../Spinner/Spinner";
// import { Link } from "react-router-dom";

const Search = ({ onClick }) => {

    const [songs, setSongs] = useState([])
    const [spinner, setSpinner] = useState(<Spinner />);

    const navigate = useNavigate();

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

        if (songs.length === 0 || !songs) {
            setSpinner(<h1 className="noResultSearch">No Results</h1>);
        }
        // if (songs.length > 0) {
        // }
    }
    console.log(songs);

    // const [val, setVal] = useState("")
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const happendOnClick = (id) => {
        console.log("s");
        // const searchClick = e.target.value
        // console.log(searchClick);
        console.log(id);
        navigate(`/Play/${id}`)
        // searchh(e)
    }

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
                        {songs.length > 0 ? (
                            <div className="SerchResult">
                                {songs.map(song =>
                                    <div className="resultOfSearch" id={song.id} onClick={() => happendOnClick(song.id)} >
                                        <img className="searchImg" src={song.img.url} alt={song.title} />
                                        <h5 className="titleResule">{song.title}</h5>
                                    </div>)}
                            </div>
                        ) : (
                            spinner
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;