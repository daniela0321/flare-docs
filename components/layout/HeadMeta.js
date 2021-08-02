import Head from "next/head"

function HeadMeta(props) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{props.title} | Flare Hub</title>
            <meta name="description" content={props.description} />
            <link rel="icon" href="/favicon.ico" />
            {props.type && <meta property="og:type" content={props.type} />}
        </Head>
    )
}

export default HeadMeta