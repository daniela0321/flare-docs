import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

function Close() {

    return (
        <FontAwesomeIcon
            icon={faTimes}
            size="2x"
        />
    )
}

export default Close