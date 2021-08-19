// Styles:
import classes from "./CookieBanner.module.css"
// External packages:
import Link from "next/link"


// Cookie banner:
export default function CookieBanner() {
    return (
        <div className={`${classes.banner} container-fluid p-3 bg-secondary text-light`}>
            <div className={`${classes.bannerRow} row d-flex justify-content-end align-items-center`}>

                <div>
                    <p className="mx-4 my-4">We use cookies to optimise our website and our
                        service. <Link href="/cookie-policy"><a className={classes.link}>Read more</a></Link></p>
                </div>

                <div>
                    <button type="button" className={`${classes.button} btn btn-light mx-4`}>OK</button>
                    <Link href="/cookie-policy/#consent"><a><button type="button"
                        className={`${classes.button} btn btn-outline-light mr-4`}>Settings</button></a></Link>
                </div>

            </div>
        </div >
    )
}