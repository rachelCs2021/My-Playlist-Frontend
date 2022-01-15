import "./Song.css"


const Song = ({ id, name, by, image, remove }) => {
    // console.log(id);
    return (

        <div className="song">
            <button className="delete" id={id}
                onClick={() => remove(id)}>❌</button>
            {/* <img
                src={require(image)}
                alt={name}
                style={{ width: "100%", height: "200px", }}
            /> */}
            <div className="container">
                <h4><b>{name}</b></h4>
                <p>{by}</p>
            </div>
        </div>
    )
}

export default Song;