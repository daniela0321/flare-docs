// External packages:
import Head from "next/head"
import { useRouter } from 'next/router'


// Head with metadata:
export default function HeadMeta({ title, description, canonical, type, image, algoliaIndexing }) {

    const router = useRouter()

    const fullTitle = title + " | Flare Hub"
    const imagePath = process.env.SITE_URL + router.basePath + (image ? image.url : '/images/intro-image.jpg')
    const imageAlt = image ? image.alt : "Flare intro image"
    const iconPath = router.basePath + '/favicon.ico'

    const fullCanonical = (canonical === true || canonical === 'true') ?
        canonical = process.env.SITE_URL + router.basePath + router.asPath :
        (typeof canonical === 'string' && canonical.charAt(0) === '/') ?
            canonical = process.env.SITE_URL + router.basePath + canonical :
            canonical

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="icon" href={iconPath} />
            {/* Icon used for a web page icon on the Apple iPhone, iPod Touch, and iPad */}
            <link rel="apple-touch-icon" href={iconPath} />
            {/* Use canonical URL if duplicate content */}
            {canonical && <link rel="canonical" href={fullCanonical} />}
            {/* Facebook */}
            <meta property="og:type" content={type || 'website'} />
            <meta name="og:title" property="og:title" content={title} />
            <meta name="og:description" property="og:description" content={description} />
            <meta property="og:site_name" content="Flare Hub" />
            {canonical && <meta property="og:url" content={fullCanonical} />}
            <meta property="og:image" content={imagePath} />
            <meta property="og:image:alt" content={imageAlt} />
            {/* Twitter (falls back to OpenGraph*/}
            <meta name="twitter:title" content={fullTitle} />
            {/* Algolia */}
            {(algoliaIndexing !== true && algoliaIndexing !== 'true')
                && <meta name="Algolia crawler" content="noindex" />}
        </Head>
    )
}

