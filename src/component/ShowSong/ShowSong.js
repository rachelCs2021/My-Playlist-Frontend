import "./ShowSong.css"

const ShowSong = ({ id, name, by, img, url, onClickPlayer }) => {

    return (
        <div className="recomendSong" id={id} onClick={() => onClickPlayer(id)}>

            <div className="containerRecommend">
                <img src={img} alt={name} className="img-recomend-song" />
                <h4 className="nameOfSong"><b>{name}</b></h4>
                <p className="artistOfSong">{by}</p>
            </div>
        </div>
    )
};

export default ShowSong;