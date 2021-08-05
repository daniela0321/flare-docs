import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { AccordionContext } from 'react-bootstrap'

// Arrow that turns 180 degrees when clicking it:
export default function ClickArrow({ eventKey }) {

    const activeAccordionKey = useContext(AccordionContext)
    const isActiveAccordionKey = activeAccordionKey === eventKey

    return (
        <FontAwesomeIcon
            className={isActiveAccordionKey ? "fa-rotate-180" : ""}
            icon={faChevronDown}
            size="1x"
        />
    )
}
