// Styles:
import '@fortawesome/fontawesome-svg-core/styles.css'
// External packages:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


// Icon for the contact form:
export default function FormIcon() {
    return (
        <FontAwesomeIcon
            icon={faEdit}
            size="2x"
        />
    )
}
