import HeadMeta from "../components/layout/HeadMeta"
import PageTitle from "../components/layout/PageTitle"
import TextContainer from "../components/layout/TextContainer"
import ContactDetails from "../components/privacy-policy/ContactDetails"
import Link from 'next/link'

function CookiePolicy() {
    return (
        <main>

            <HeadMeta
                title="Cookie Policy | Flare Hub"
                description="More information on the Cookie Policy."
            />

            <PageTitle
                title="Cookie Policy (EU)"
            />

            <TextContainer>

                <p className="font-italic">Last Updated: August 1st, 2021</p>
                <p className="font-italic">This Cookie Policy applies to citizens and legal permanent residents of the European Economic Area.</p>

                <h2>1. Introduction</h2>

                <p>Our website, <Link href="/">https://flarehub.io</Link> (hereinafter: &quot;the website&quot;) uses cookies and other related technologies (for convenience all technologies are referred to as &quot;cookies&quot;). Cookies are also placed by third parties we have engaged. In the document below we inform you about the use of cookies on our website.</p>

                <h2>2. What Are Cookies?</h2>

                <p>A cookie is a small simple file that is sent along with pages of this website and stored by your browser on the hard drive of your computer or another device. The information stored therein may be returned to our servers or to the servers of the relevant third parties during a subsequent visit.</p>

                {/* <p><b>Scripts</b>. A script is a piece of program code that is used to make our website function properly and interactively. This code is executed on our server or on your device.</p>
                <p><b>Web beacons</b>. A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website that is used to monitor traffic on a website. In order to do this, various data about you is stored using web beacons.</p> */}

                <h2>3. Types of Cookies</h2>

                <ul>
                    <li><b>Technical or functional cookies</b>. Some cookies ensure that certain parts of the website work properly and that your user preferences remain known. By placing functional cookies, we make it easier for you to visit our website. This way, you do not need to repeatedly enter the same information when visiting our website and, for example, the items remain in your shopping cart until you have paid. We may place these cookies without your consent.</li>
                    <li><b>Statistics cookies</b>. Because statistics are being tracked anonymously, no permission is asked to place statistics cookies.</li>
                </ul>

                <h2>4. Placed Cookies</h2>

                <p><b>Google Analytics - Statistics (anonymous)</b></p>

                <ul>
                    <li><b>Usage</b>: we use Google Analytics for website statistics.</li>
                    <li><b>Sharing data</b>: for more information, please read the <Link href="https://policies.google.com/privacy"><a target="_blank">Google Analytics Privacy Statement</a></Link>.</li>
                </ul>

                {/* <h2>5. Consent</h2>
                <p>When you visit our website for the first time, we will show you a pop-up with an explanation about cookies. As soon as you click on &quot;Save preferences&quot;, you consent to us using the categories of cookies and plug-ins you selected in the pop-up, as described in this Cookie Policy. You can disable the use of cookies via your browser, but please note that our website may no longer work properly.</p> */}

                {/* <h2>6. Your Rights with Respect to Personal Data</h2>
                <p>Please see your rights with respect to your personal data on our <Link href="/privacy-policy/#rights-of-data-subject">Privacy Policy</Link>.</p> */}

                <h2>5. Enabling/Disabling and Deleting Cookies</h2>

                <p>You can use your internet browser to automatically or manually delete cookies. You can also specify that certain cookies may not be placed. Another option is to change the settings of your internet browser so that you receive a message each time a cookie is placed. For more information about these options, please refer to the instructions in the Help section of your browser.</p>

                <p>Please note that our website may not work properly if all cookies are disabled. If you do delete the cookies in your browser, they will be placed again after your consent when you visit our websites again.</p>

                <h2>6. Contact Details</h2>

                <p>For questions and/or comments about our Cookie Policy and this statement, please contact us by using the following contact details:</p>

                <ContactDetails
                    name="Flare Hub Ltd"
                    address1="Mechelininkatu 23 B 49"
                    address2="00100 Helsinki"
                    country="Finland"
                    phone="+358 400 416187"
                    email="info@flarehub.io"
                />

            </TextContainer>

        </main>
    )
}

export default CookiePolicy