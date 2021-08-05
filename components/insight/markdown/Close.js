// Styles:
import '@fortawesome/fontawesome-svg-core/styles.css'
// External packages:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


// Close icon to close the modal:
export default function Close() {
    return (
        <FontAwesomeIcon
            icon={faTimes}
            size="2x"
        />
    )
}
