// External packages:
import Link from 'next/link'
import { Container } from "react-bootstrap"
// Internal components:
import PageTitle from '../components/layout/common/PageTitle'


// 500 page:
export default function Custom500() {
    return (
        <Container className="textContainer">

            <PageTitle
                title="500 - Server-Side Error Occurred"
            />

            <p className="text-center">Sorry, there seems to be an error on our side.</p>
            <p className="text-center">You can try to refresh the page. If the problem continues, please let us know.</p>

            <div className="mt-5 d-flex justify-content-center">
                <Link href="/contact">
                    <a role="button" className="btn btn-primary">
                        Contact us
                    </a>
                </Link>
            </div>

        </Container>
    )
}






