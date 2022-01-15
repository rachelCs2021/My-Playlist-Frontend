import Song from "../Song/Song";
import "./Playlist.css"

const Playlist = ({ list, remove }) => {
    return (
        <div className="play">
            <h2>My PlayList</h2>
            <div className="playlist">
                {list.map(song => (
                    <Song key={song.id} id={song.id} name={song.name} by={song.by} image={song.img} remove={remove} />
                ))}
            </div>
        </div>
    )
}

export default Playlist;