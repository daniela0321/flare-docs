import Head from "next/head"

// Head with metadata:
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
