
import "./Song.css"


const Song = ({ id, name, by, image, onClickPlayer }) => {
    // console.log(id);
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

            </div>
        </div>
    )
}

export default Song;