import { Container, Row, Text } from "react-bootstrap"
import HeadMeta from "../components/layout/HeadMeta"
import PageTitle from "../components/layout/PageTitle"
import Container700 from "../components/layout/Container700"
import ContactDetails from "../components/privacy-policy/ContactDetails"
import Link from 'next/link'

function PrivacyPolicy() {
    return (
        <main>

            <HeadMeta
                title="Privacy Policy | Flare Hub"
                description="More information on the Privacy Policy."
            />

            <PageTitle
                title="Privacy Policy"
            />

            <Container700>

                <p className="font-italic">Last Updated: July 13th, 2020</p>

                <p>According to the data privacy regulation, a registrar has the responsibility to inform data subjects distinctly. This privacy policy respects this obligation.</p>

                <h2>1. Registrar and Contact Details</h2>

                <ContactDetails
                    name="Flare Hub Ltd (“Flare Hub”)"
                    address1="Mechelininkatu 23 B 49"
                    address2="00100 Helsinki"
                    country="Finland"
                    phone="+358 400 416187"
                    email="info@flarehub.io"
                /> <br />

                <p>This Privacy Policy applies to flarehub.io and any other products and services provided by Flare Hub (“Services”).</p>

                <h2>2. Data Subjects</h2>

                <p>The register includes:</p>
                <ul>
                    <li>Visitors who have given their details in the Services.</li>
                    <li>Customers and partners of Flare Hub.</li>
                    <li>Potential customers (e.g. a lead list from an event, when a permission given to save the details).</li>
                </ul>

                <h2>3. Legal bases and Intended Use of the Register</h2>

                <p>We may collect personal data about you in the case of:</p>
                <ul>
                    <li>A customer relationship, partnership or legitimate interest: the processing is necessary for managing the relationship and tasks.</li>
                    <li>Provided consent: the individual has given clear consent for us to process their personal data.</li>
                </ul>
                <p>Personal data is used only for the following purposes:</p>
                <ul>
                    <li>Managing the Flare Hub customer relationships and tasks.</li>
                    <li>Communication of the Services and products and related offerings.</li>
                    <li>Quality assurance, administration and development of customer relationships and existing/upcoming services and products.</li>
                </ul>

                <p>The Services can include different kinds of Social Media components which enable users to move their details to different kinds of Social Media services. The Services can also include embedded content from other websites (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the same way as if the visitor has visited the other website. These service providers may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content. We recommend getting acquainted with the privacy policies of these service providers.</p>

                <h2>4. Personal Data Captured in the Register</h2>

                <p>Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data). We may collect, use, store and transfer (see section 7) different kinds of personal data about you which we have grouped together as follows:</p>
                <ul>
                    <li>Identity Data: username, first name and last name.</li>
                    <li>Contact Data: email addresses, telephone numbers, physical address and default language.</li>
                    <li>Company Data: your job role, company name, and industry.</li>
                    <li>Marketing and Communications Data: your preferences in receiving marketing from us, your communication preferences, and your interactions with us.</li>
                    <li>Purchase and Transaction Data: details of products and services you have purchased from Flare Hub, details about payments to and from Flare Hub, and feedback provided by you relating to your use of the Services.</li>
                </ul>

                <p>We may collect Technical Data about your computer for system administration and statistical analysis. This is statistical data about our users’ browsing actions and patterns and does not identify any individual. One way Flare Hub collects this data is with cookies. A cookie is a small file which is stored on the hard drive of your computer and is used to improve the quality of the Services. Browsing the pages without cookies can have impact on the Services so that some functions cannot be used. More information on the cookies we use can be found in our <Link href="/cookie-policy">Cookie Policy</Link>.</p>

                <h2 id="rights-of-data-subject">5. Rights of a Data Subject</h2>

                <p>A data subject has the following rights. Requests regarding these should be sent to the address info@flarehub.io</p>
                <ul>
                    <li>Right to inspect: A data subject may verify his personal data captured in the register.</li>
                    <li>Right to amend data: A data subject may correct or amend his personal data as needed.</li>
                    <li>Right to protest: A data subject may protest the use of his personal data if he feels that the data has been used illegally.</li>
                    <li>Direct marketing ban: A data subject may deny access to his personal data for direct marketing.</li>
                    <li>Right for removal of data: A data subject may ask to remove his personal data if the purpose for which the data is being processed is no longer legal or appropriate. We will process the request, after which we either remove the data or inform if there are obstacles for removing the data (e.g. the applicable law requires otherwise).</li>
                    <li>Cancelling consent: If the data processing is based only on a consent, a data subject can cancel the consent.</li>
                    <li>Right to appeal: A data subject may require limiting the use of controversial personal data until the dispute has been resolved.</li>
                    <li>Right to appeal to the Data Protection Ombudsman: A data subject may make a complaint to the Data Protection Ombudsman if he feels that we are breaking the privacy laws when processing personal data. Contact details for the Data Protection Ombudsman: <Link href="https://tietosuoja.fi/en/contact-information"><a target="_blank">https://tietosuoja.fi/en/contact-information</a></Link></li>
                </ul>

                <h2>6. Regular Sources of Information</h2>

                <p>Principally, a data subject’s personal data is received from the data subject himself when using the Services, registering to the Services, becoming a customer/partner or when another relevant connection arises between Flare Hub and the data subject.</p>

                <h2>7. Third Party Data Sharing</h2>

                <p>Flare Hub do not principally share personal data for marketing purposes with third parties. Personal data can be shared for the purposes described in this privacy policy, and with authorities within the limits of existing legislation. If there will be any company ownership restructurings, then we may disclose information to the relevant parties. We have ensured that all our service providers comply with the data privacy legislation.</p>

                <h2>8. Duration of Data Processing</h2>

                <p>Personal data will be stored only for as long as necessary for the purposes specified in section 3 above. A data subject may ask to remove his details from our marketing register.</p>

                <h2>9. Data Processors</h2>

                <p>Flare Hub employees working with the Services may process personal data. We can also partly outsource the data processing to third parties, in which case we warrant (with the help of contracts) that personal data is processed according to the existing data privacy legislation.</p>

                <h2>10. Transferring Data Outside EU</h2>

                <p>We might transfer personal data outside EU or EEA if it is necessary because of the intended data use mentioned above or because of the technical implementation of data processing. In this case we make sure that personal data is processed according to the existing data privacy legislation.</p>

                <h2>11. Automated Decision Making and Profiling</h2>

                <p>We are not using personal data for automated decision making nor profiling.</p>

                <h2>12. Changes to the Privacy Policy</h2>

                <p>Flare Hub will update this policy from time to time to reflect the changes in the Services or applicable laws.

                </p>

            </Container700>

        </main>
    )
}

export default PrivacyPolicy