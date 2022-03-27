import "./Song.css"
// import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../../Context/Context";

const Song = ({ id, name, by, image, remove }) => {

    const navigate = useNavigate();
    const { setTitle } = useContext(Context)

    const onClickPlayer = (id, name) => {
        console.log("s");
        console.log(id);
        setTitle(name)
        navigate(`/Play/${id}`)
    }

    return (

        <div className="playlistSong" id={id} onClick={() => onClickPlayer(id, name)}>
            <img
                src={image}
                alt={name}
                style={{ width: "100px", height: "100px", borderRadius: "80%", margin: "5px" }}
            />
            <div className="containerPlaylistSong">
                <h4 className="nameOfSong"><b>{name}  ||</b></h4>
                <p className="nameOfArtist">{by}</p>
            </div>
            <div className="icon-remove-from-playlist" onClick={remove}>
                <DeleteOutlineIcon
                    style={{ color: "black" }}
                    onClick={remove}
                />
            </div>
        </div>
    )
}

export default Song;