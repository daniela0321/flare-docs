// External packages:
import Link from 'next/link'
import { Container } from "react-bootstrap"
// Internal components:
import HeadMeta from "../components/head/HeadMeta"
import PageTitle from "../components/layout/common/PageTitle"
import ContactDetails from "../components/privacy-policy/ContactDetails"
import ConsentSettings from '../components/cookie-policy/ConsentSettings'


// Cookie Policy page:
export default function CookiePolicy() {
    return (
        <>
            <HeadMeta
                title="Cookie Policy"
                description="More information on the Cookie Policy"
                canonical="true"
            // algoliaIndexing=
            // type=
            // image={{
            // url: 
            // alt:
            // }}
            />

            <main>

                <Container className="textContainer">

                    <PageTitle
                        title="Cookie Policy (EU)"
                    />

                    <p className="font-italic">Last Updated on 26 May 2022</p>
                    <p className="font-italic">This Cookie Policy applies to citizens and legal permanent
                        residents of the European Economic Area.</p>

                    <h2>1. Introduction</h2>

                    <p>Our website, <Link href="/"><a>https://flarehub.io</a></Link> (hereinafter:
                        &quot;the website&quot;) uses cookies and other related technologies
                        (for convenience all technologies are referred to as &quot;cookies&quot;). Cookies
                        are also placed by third parties we have engaged. In the document below we inform you
                        about the use of cookies on our website.</p>

                    <h2>2. What Are Cookies?</h2>

                    <p>A cookie is a small simple file that is sent along with pages of this website and
                        stored by your browser on the hard drive of your computer or another device. The
                        information stored therein may be returned to our servers or to the servers of the
                        relevant third parties during a subsequent visit.</p>

                    <h2>3. Types of Cookies</h2>

                    <ul>
                        <li><b>Technical or functional cookies</b>. Some cookies ensure that certain parts
                            of the website work properly and that your user preferences remain known. By
                            placing functional cookies, we make it easier for you to visit our website.
                            This way, you do not need to repeatedly enter the same information when visiting
                            our website and, for example, the items remain in your shopping cart until you have
                            paid. We may place these cookies without your consent.</li>
                        <li><b>Statistics cookies</b>. Statistics are being tracked anonymously.</li>
                    </ul>

                    <h2>4. Placed Cookies</h2>

                    <ul>
                        <li className="mb-3"><b>Google Analytics</b>
                            <ul>
                                <li><b>Type</b>: Statistics cookies (anonymous).</li>
                                <li><b>Usage</b>: we currently use Google Analytics for website statistics.</li>
                                <li><b>Sharing data</b>: for more information, please read the{' '}
                                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Analytics Privacy Statement</a>.</li>
                            </ul>
                        </li>
                        <li><b>Piwik Pro</b>
                            <ul>
                                <li><b>Type</b>: Statistics cookies (anonymous).</li>
                                <li><b>Usage</b>: We are migrating to Piwik Pro website statistics.</li>
                                <li><b>Sharing data</b>: for more information, please read the{' '}
                                    <a href="https://piwik.pro/privacy-policy" target="_blank" rel="noopener">Piwik Pro privacy policy</a>.</li>
                            </ul>
                        </li>
                    </ul>

                    <h2 id="consent">5. Manage Your Consent Settings</h2>

                    <ConsentSettings />

                    <h2>6. Enabling/Disabling and Deleting Cookies</h2>

                    <p>You can use your internet browser to automatically or manually delete cookies. You can also
                        specify that certain cookies may not be placed. Another option is to change the settings of your
                        internet browser so that you receive a message each time a cookie is placed. For more information
                        about these options, please refer to the instructions in the Help section of your browser.</p>

                    <p>Please note that our website may not work properly if all cookies are disabled. If you do
                        delete the cookies in your browser, they will be placed again after your consent when you visit
                        our websites again.</p>

                    <h2>7. Contact Details</h2>

                    <p>For questions and/or comments about our Cookie Policy and this statement, please contact us by
                        using the following contact details:</p>

                    <ContactDetails
                        name="Flare Hub Ltd"
                        address1="Mechelininkatu 23 B 49"
                        address2="00100 Helsinki"
                        country="Finland"
                        phone="+358 400 416187"
                        email="info@flarehub.io"
                    />

                </Container>
            </main>
        </>
    )
}
