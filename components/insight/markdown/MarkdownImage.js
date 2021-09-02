// Styles:
import styles from "./MarkdownImage.module.css"
// External packages:
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'
// Internal components:
import Close from "./Close"
import Image from "../../layout/Image";


// Open image as modal:
export default function MarkdownImage({ src, alt, lazy }) {

    // To control the opening and closing the image in a modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* Show image as a link */}
            <a href="#" onClick={handleShow}>
                <Image src={src} alt={alt} className="mt-3 mw-100" sizes="(min-width: 796px) 700px, 80vw" lazy={lazy} />
            </a>

            {/* Modal that opens up when clicking the image above */}
            <Modal
                show={show}
                dialogClassName={styles.modalSize}
                onHide={handleClose}
            >
                <Modal.Body>
                    <div onClick={handleClose} className="mb-2 d-flex flex-row-reverse">
                        <Close />
                    </div>
                    <Image src={src} alt={alt} className={styles.imageSize} />
                </Modal.Body>
            </Modal>
        </>
    )
}



