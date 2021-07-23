import { Modal } from 'react-bootstrap'
import React, { useState } from 'react';
import Close from "./Close"

function MarkdownImage({ src, title }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* Img placed inside a link to get the mouse hover over */}
            <a href="#" onClick={handleShow}>
                <img src={src} alt={title} className="mt-3 mw-100" />
            </a>

            <Modal
                className="mh-100"
                show={show}
                size="xl"
                onHide={handleClose}
            >

                <Modal.Body>
                    <div onClick={handleClose} className="mb-2 d-flex flex-row-reverse">
                        <Close />
                    </div>
                    <img src={src} alt={title} className="mh-100 mw-100" />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default MarkdownImage



