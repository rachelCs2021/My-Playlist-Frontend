import "./ShowSong.css"
import Context from "../../Context/Context";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext, useState } from "react";


const ShowSong = ({ id, name, by, img, onClickPlayer }) => {

    const { addToPlaylistIfExist } = useContext(Context)
    // const { addSongToPlaylist } = useContext(Context)
    const { removeFromPlaylist } = useContext(Context)
    // const { isUserConnected } = useContext(Context)

    const [color, setColor] = useState(false)
    const [onClick, setOnClick] = useState(true)

    const happendOnClick = (id) => {
        setOnClick(!onClick)
        if (onClick) {
            addToPlaylistIfExist(id)
            setColor(true)
        }
        else if (!onClick) {
            removeFromPlaylist(id)
            setColor(false)
        }
        else {
            console.log("bla");
        }
    }


    return (
        <div className="recomendSong" id={id} >
            <div className="contain-recomend-img" onClick={() => onClickPlayer(id)}>
                <img src={img} alt={name} className="img-recomend-song" />
            </div>
            <div className="containerRecommend">
                <h4 className="nameOfSong"><b>{name}</b></h4>
                <p className="artistOfSong">{by}</p>
            </div>
            <div className="likeIcon">
                <FavoriteIcon
                    className="favoriteIcon"
                    id="like-icon"
                    onClick={() => happendOnClick(id)}
                    style={{ color: !color ? "black" : "red" }}
                />
            </div>
        </div>
    )
};

export default ShowSong;