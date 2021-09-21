// External packages:
import Link from 'next/link'
import { Container } from "react-bootstrap"
// Internal components:
import PageTitle from '../components/layout/common/PageTitle'


// 404 page:
export default function Custom404() {
    return (
        <Container className="textContainer">

            <PageTitle
                title="404 - Page Not Found"
            />

            <p className="text-center">
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
            </p>

            <div className="mt-5 d-flex justify-content-center">
                <Link href="/">
                    <a role="button" className="btn btn-primary">
                        Back to homepage
                    </a>
                </Link>
            </div>

        </Container>
    )
}

