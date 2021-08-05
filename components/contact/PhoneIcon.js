// Styles:
import '@fortawesome/fontawesome-svg-core/styles.css'
// External packages:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


// Phone icon:
export default function PhoneIcon() {
    return (
        <FontAwesomeIcon
            icon={faPhone}
            size="2x"
        />
    )
}
