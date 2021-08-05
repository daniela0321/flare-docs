import classes from "./MarkdownImage.module.css"
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'
import Close from "./Close"

// Open image as modal:
export default function MarkdownImage({ src, title }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* Show image as a link */}
            <a href="#" onClick={handleShow}>
                <img src={src} alt={title} className="mt-3 mw-100" />
            </a>

            {/* Modal that opens up when clicking the image above */}
            <Modal
                show={show}
                dialogClassName={classes.modalSize}
                onHide={handleClose}
            >
                <Modal.Body>
                    <div onClick={handleClose} className="mb-2 d-flex flex-row-reverse">
                        <Close />
                    </div>
                    <img src={src} alt={title} className={classes.imageSize} />
                </Modal.Body>
            </Modal>
        </>
    )
}



