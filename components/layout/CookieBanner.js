// Styles:
import styles from "./CookieBanner.module.css"
// External packages:
import Link from "next/link"
import { useState, useEffect } from "react"
// Internal modules
import * as gaConsent from "../../utils/gaConsent"


// Cookie banner:
export default function CookieBanner() {
    // Get consent status on browser side
    const [statConsent, setStatConsent] = useState(false)

    useEffect(() => {
        setStatConsent(gaConsent.get(false))
    }, [])

    // Update consent status when toggling statistics switch
    function handleClick() {
        const consent = 'granted'
        gaConsent.set(consent)
        setStatConsent(consent)
    }

    // Only return cookie banner if no consent has been set
    if (!statConsent) return (
        <div className={`${styles.banner} container-fluid p-3 bg-secondary text-light`}>
            <div className={`${styles.bannerRow} row d-flex justify-content-end align-items-center`}>

                <div>
                    <p className="mx-4 my-4">We use cookies to optimise our website and our
                        service. <Link href="/cookie-policy"><a className={styles.link}>Read more</a></Link></p>
                </div>

                <div>
                    <button type="button" className={`${styles.button} btn btn-light mx-4`} onClick={handleClick}>OK</button>
                    <Link href="/cookie-policy/#consent"><a><button type="button"
                        className={`${styles.button} btn btn-outline-light mr-4`} onClick={handleClick}>Settings</button></a></Link>
                </div>

            </div>
        </div >
    )

    return <></>
}