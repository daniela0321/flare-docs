// Styles:
import '@fortawesome/fontawesome-svg-core/styles.css'
// External packages:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


// GitHub icon:
export default function GitHubIcon() {
    return (
        <FontAwesomeIcon
            icon={faGithub}
            size="2x"
        />
    )
}
