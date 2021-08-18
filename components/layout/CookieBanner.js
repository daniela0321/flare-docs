// Styles:
import classes from "./CookieBanner.module.css"
// External packages:
import Link from "next/link"


// Cookie banner:
export default function CookieBanner() {
    return (
        <div className={`${classes.banner} container-fluid p-3 bg-secondary text-light`}>
            <div className="row d-flex justify-content-end align-items-center">

                <p className="my-0 mr-4">We use cookies to optimise our website and our service. <Link href="/cookie-policy"><a className={classes.link}>Read more</a></Link></p>
                <button type="button" className="btn btn-light mr-4">OK</button>
                <Link href="/cookie-policy/#consent"><a><button type="button" className="btn btn-outline-light mr-4">Settings</button></a></Link>

            </div>
        </div>
    )
}