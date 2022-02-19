
import "./Song.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";


const Song = ({ id, name, by, image, remove }) => {

    const navigate = useNavigate();

    const onClickPlayer = (id) => {
        console.log("s");
        console.log(id);
        navigate(`/Play/${id}`)
    }

    return (

        <div className="playlistSong" id={id} onClick={() => onClickPlayer(id)}>
            <img
                src={image}
                alt={name}
                style={{ width: "100%", height: "200px", }}
            />
            <div className="containerPlaylist">
                <h4><b>{name}</b></h4>
                <p>{by}</p>

                <div onClick={remove}>
                    <FavoriteBorderIcon />
                </div>
            </div>
        </div>
    )
}

export default Song;