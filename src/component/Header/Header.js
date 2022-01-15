import "./Header.css"
import { useState, useRef, useEffect } from "react";


const Header = ({ addsong }) => {

    const [val, setVal] = useState("")
    const inputRef = useRef(null);
    console.log(inputRef);
    useEffect(() => {
        inputRef.current.focus();
    })

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <img
                        src={require("./logo.png")}
                        alt="logo" />
                    <form className="d-flex form">
                        <input
                            className="form-control me-3"
                            type="text"
                            placeholder="Enter For Add"
                            // aria-label="Search"
                            onChange={(e) => setVal(e.target.value)}
                            value={val}
                            ref={inputRef} />

                        <button
                            className="btn btn-outline-danger"
                            type="submit"
                            onClick={(e) => {
                                console.log(val);
                                addsong(val)
                                e.preventDefault()
                                setVal("");
                            }}>Add</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header;