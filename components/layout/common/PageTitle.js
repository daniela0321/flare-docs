// External packages:
import { Container, Row } from "react-bootstrap"


// Page title:
export default function PageTitle({ title }) {
    return (
        <div className="py-5" >
            <div className="pt-4 d-flex flex-row justify-content-center text-center">
                <h1>{title}</h1>
            </div>
        </div>
    )
}
