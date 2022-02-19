import "./ShowSong.css"
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ShowSong = ({ id, name, by, img, url, onClickPlayer }) => {

    return (
        <div className="recomendSong" id={id} >

            <div className="contain-recomend-img" onClick={() => onClickPlayer(id)}>
                <img src={img} alt={name} className="img-recomend-song" />
            </div>
            <div className="containerRecommend">
                <h4 className="nameOfSong"><b>{name}</b></h4>
                <p className="artistOfSong">{by}</p>
            </div>
            {/* <div className="likeIcon">
                <FavoriteBorderIcon />
            </div> */}
        </div>
    )
};

export default ShowSong;