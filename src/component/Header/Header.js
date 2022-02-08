import "./Header.css"
// import react from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <h1 className="mainTitle">My Music</h1>
                    {/* <div className="containerIcons">
                        <Link to={`/home`} className="playlistTitle" ><HomeIcon /></Link>
                        <Link to={`/Playlist`} className="playlistTitle" ><MusicVideoIcon /></Link>
                        <Link to={`/search`} className="playlistTitle" ><SearchIcon /></Link>
                    </div> */}
                </div>
            </nav>
        </div>
    )
}

export default Header;