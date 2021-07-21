import { Modal } from 'react-bootstrap'
import React, { useState } from 'react';
import classes from "./MarkdownImage.module.css"

function MarkdownImage({ src, title }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <a href="#" onClick={handleShow}>
                <img src={src} alt={title} className={classes.image} />
            </a>

            {/* Set the hight of the modal, and then the hight of the image */}
            <Modal
                show={show}
                size="xl"
                onHide={handleClose}
            >

                <Modal.Body>
                    {/* Modify the close icon! */}
                    <p onClick={handleClose}>X</p>
                    <img src={src} alt={title} className={classes.image} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default MarkdownImage

