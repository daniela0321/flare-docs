import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useContext } from 'react'
import { AccordionContext } from 'react-bootstrap'

function ClickArrow({ eventKey }) {
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

export default ClickArrow