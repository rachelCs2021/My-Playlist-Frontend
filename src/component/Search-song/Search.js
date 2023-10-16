import "./Search.css"
import { useRef, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Spinner from "../Spinner/Spinner";
import Context from "../../Context/Context";

const Search = () => {

    const [spinner, setSpinner] = useState(<Spinner />);

    const { songs, setSongs } = useContext(Context)
    const { setTitle } = useContext(Context)
    const { setIdOfSong } = useContext(Context)

    const navigate = useNavigate();

    const freeText = (e) => {
        const text = e.target.value;
        fetch(`http://localhost:4001/search?q=${text}`)
            .then(res => res.json())
            .then(song => {
                const searchResult = song.filter(s => s.title.toLowerCase().includes(text.toLowerCase()))
                console.log(searchResult);
                setSongs(searchResult)
            }).catch(err => console.log(err))

        if (songs.length === 0) {
            setSpinner(<h1 className="noResultSearch">No Results</h1>);
        }
    }
    console.log(songs);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const happendOnClick = (id, title, img) => {
        console.log("s");
        console.log(id, title);
        setTitle(title)
        setIdOfSong(id)
        navigate(`/Play/${id}`)
        // setSongs([])
    }

    return (
        <div className="parallax">
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
                        ref={inputRef} />
                </form>
                <div className="containerSearchAndRecomend">
                    <div className="containerSearchResult">
                        {songs.lenght > 0 ?
                            (
                                <div className="SerchResult">
                                    {songs.map(song =>
                                        <div className="resultOfSearch" id={song.id} onClick={() => happendOnClick(song.id, song.title, song.img.url)} >
                                            <img className="searchImg" src={song.img.url} alt={song.title} />
                                            <h5 className="titleResule">{song.title}</h5>
                                        </div>)}
                                </div>)
                            : <div className="noResultSearch">No Results</div>}

                        {/* {songs.length > 0 ? (
                            <div className="SerchResult">
                                {songs.map(song =>
                                    <div className="resultOfSearch" id={song.id} onClick={() => happendOnClick(song.id, song.title, song.img.url)} >
                                        <img className="searchImg" src={song.img.url} alt={song.title} />
                                        <h5 className="titleResule">{song.title}</h5>
                                    </div>)}
                            </div>
                        ) : (
                            spinner
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;