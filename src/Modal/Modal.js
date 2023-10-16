import "./Modal.css"
import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Button';
import Context from "../Context/Context";


const Modall = () => {

    const { handleClose, handleShow } = useContext(Context)
    const { showModal } = useContext(Context)

    console.log(showModal);

    return (
        <>

            <Modal
                show={showModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Modall
