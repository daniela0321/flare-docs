// External packages:
import Head from "next/head"


// Head with metadata:
// TO-DO: Check what data is required here and then complete props in files
export default function HeadMeta({ title, description, type }) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{title} | Flare Hub</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            {type && <meta property="og:type" content={type} />}
        </Head>
    )
}
