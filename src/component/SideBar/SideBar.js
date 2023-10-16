
import "./SideBar.css"
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import SearchIcon from '@mui/icons-material/Search';
import Context from "../../Context/Context";
import { useContext } from "react";


const SideBar = () => {

    const { songs, setSongs } = useContext(Context)
    console.log(songs);
    return (
        <div className="div-side-bar navbar-dark bg-dark">
            <Link to={`/`} className="playlistTitle">
                <div className="container-title-and-icon">
                    <h4 className="title-of-sidebar">Home</h4>
                    <HomeIcon />
                </div>
            </Link>
            <Link to={`/Playlist`} className="playlistTitle">
                <div className="container-title-and-icon">
                    <h4 className="title-of-sidebar">PlayList</h4>
                    <MusicVideoIcon />
                </div>
            </Link>
            <Link to={`/search`} className="playlistTitle">
                <div className="container-title-and-icon" onClick={() => setSongs([])}>
                    <h4 className="title-of-sidebar">Search</h4>
                    <SearchIcon />
                </div>
            </Link>
        </div>
    )

}

export default SideBar;