// External packages:
import Link from 'next/link'
import { Container } from "react-bootstrap"
// Internal components:
import HeadMeta from "../components/head/HeadMeta"
import PageTitle from "../components/layout/common/PageTitle"


// Termus of use page:
export default function Terms() {
    return (
        <>
            <HeadMeta
                title="Terms of Use"
                description="More information on the terms of use"
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
                        title="Terms of Use"
                    />

                    <p className="font-italic">Last Updated on 13 July 2020</p>

                    <h2>1. Acceptance of Terms</h2>

                    <p>By accessing, downloading, installing, or using the flarehub.io (“Service”),
                        whether or not you become a registered user (“User”, “You”, “Yourself”, “Your”),
                        you agree to be bound by these Terms, as they may be amended by Flare Hub Ltd
                        (“Flare Hub”, “We”, “Our”), from time to time, which You acknowledge that You
                        have read and understood.</p>

                    <p>We reserve the right, at Our sole discretion, to change, modify or otherwise
                        alter these Terms at any time. You must review these Terms at
                        https://flarehub.io/terms/ on a regular basis to keep Yourself informed of any changes.</p>

                    <p>Your use of Our Service is also subject to
                        Our <Link href="/cookie-policy"><a>Cookie Policy</a></Link> and Our <Link href="/privacy-policy"><a>Privacy Policy</a></Link>,
                        which covers how We collect, use, share, and store Your personal information.</p>

                    <h2>2. Other Sites and Apps</h2>

                    <p>You are responsible for deciding if You want to access or use third-party apps or
                        sites that link from the Service. Third-party apps and sites have their own legal terms
                        and privacy policies, and You may be giving others permission to use Your information in
                        ways We would not. Please note that You use these sites and apps at Your own risk.</p>

                    <p>In addition, We have no control over, and no liability for any third party sites,
                        apps or content. Therefore We do not make guarantees about the accuracy, currency,
                        content, or quality of the information provided by such sites or apps, and We assume
                        no responsibility for unintended, objectionable, inaccurate, misleading, or unlawful
                        content that may reside on those sites and apps.</p>

                    <h2>3. Compliance with Intellectual Property Laws</h2>

                    <p>When accessing or using the Service, You agree to obey the law and to respect the
                        intellectual property rights of others. Your use of the Service is at all times
                        governed by and subject to laws regarding copyright ownership and use of
                        intellectual property.</p>

                    <p>You agree not to upload, download, display, perform, transmit, or otherwise
                        distribute any information or content (collectively, “Content”) in violation
                        of any third party’s copyrights, trademarks, or other intellectual property
                        or proprietary rights. You agree to abide by laws regarding copyright ownership
                        and use of intellectual property, and You shall be solely responsible for any
                        violations of any relevant laws and for any infringements of third party rights
                        caused by any content You provide or transmit, or that is provided or transmitted
                        using Your User ID. The burden of proving that any content does not violate any
                        laws or third-party rights rests solely with You.</p>

                    <h2>4. Prohibited Uses</h2>

                    <p>We impose certain restrictions on Your permissible use of the Service. You are
                        prohibited from violating or attempting to violate the Service or any of it’s security
                        features.</p>

                    <h2>5. No Warranties</h2>

                    <p>To the extent allowed under law, We and Our affiliates a) disclaim all implied
                        warranties and representations, b) do not guarantee that the Service will function
                        without interruption or errors, and c) provide the Service (including Content and
                        information) on an “as is” and “as available” basis.</p>

                    <h2>6. Exclusion of Liability</h2>

                    <p>To the extent permitted under law, We and Our affiliates shall not be liable to
                        You or others for any indirect, incidental, special, consequential or punitive
                        damages, or any loss of data, opportunities, reputation, profits or revenues,
                        related to the Service.</p>

                    <h2>7. Changes to the Service</h2>

                    <p>We shall have the right to change the Service or any part thereof at any time.
                        If You do not wish to use the changed Service, You may terminate Your use of the
                        Service. We reserve the right to discontinue the Service or any part of it.</p>

                    <h2>8. Termination</h2>

                    <p>You may terminate Your use of the Service anytime. We reserve the right to
                        restrict, suspend, or terminate Your account if We believe that You may be in
                        breach of these Terms or law or are misusing the Service.</p>

                    <h2>9. Governing Law and Dispute Resolution</h2>

                    <p>In the unlikely event we end up in a legal dispute, it will be resolved
                        in the district court of Helsinki, Finland, in accordance with the
                        Finnish laws.</p>

                    <h2>10. Changes to the Terms</h2>

                    <p>We may modify these Terms, Our Privacy Policy and Our Cookies Policy from
                        time to time. We agree that changes cannot be retroactive. If You object to
                        any changes, You may terminate Your use of the Service.</p>

                    <h2>11. General Terms</h2>

                    <p>Our failure to enforce any part of these Terms will not constitute a waiver
                        of Our right to later enforce that or any other part of these Terms. If any
                        provision of these Terms is found to be unenforceable, that part will be
                        limited to the minimum extent necessary the other provisions of these Terms
                        remain in full force and effect.</p>

                    <p>You may not assign or transfer Your membership or use of the Service to
                        anyone without Our consent. However, You agree that We may assign Your
                        membership without Your consent to Flare Hub’s affiliates or if there
                        will be any company ownership restructurings with Flare Hub.</p>

                </Container>

            </main>
        </>
    )
}


