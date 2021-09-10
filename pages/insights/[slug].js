// Styles:
import styles from '../../styles/[slug].module.css'
// External packages:
import React from "react"
import ReactMarkdown from 'react-markdown'
import { Container, Row, Col } from "react-bootstrap"
// Internal components:
import SidebarRight from "../../components/layout/common/toc/SidebarRight"
import SidebarTop from "../../components/layout/common/toc/SidebarTop"
import H2WithId from "../../components/insight/markdown/H2WithId"
import H3WithId from "../../components/insight/markdown/H3WithId"
import MarkdownLink from "../../components/insight/markdown/MarkdownLink"
import MarkdownImage from "../../components/insight/markdown/MarkdownImage"
import HeadMeta from "../../components/head/HeadMeta"


// Import and export server side functions:
export { getStaticPaths, getStaticProps } from "../../server/insights/[slug]"


// Insight page template:
export default function InsightTemplate({ frontmatter, content }) {

    return (
        <>
            <HeadMeta
                title={frontmatter.title}
                description={frontmatter.excerpt}
                canonical="true"
                image={{
                    url: frontmatter.image,
                    alt: frontmatter.imageTitle
                }}
                algoliaIndexing="true"
            // type=

            />

            <Container className="m-0 p-0" fluid>

                <Row className="m-0 p-0">

                    {/* Table of Contents on smaller screens: */}
                    <Col className="m-0 p-0 d-xl-none">
                        {/* <Col className={`${styles.mobileToc} sticky-top m-0 p-0 d-xl-none`}> */}
                        <SidebarTop
                            content={content}
                        />
                    </Col>

                    {/* Table of Contents on large screens: */}
                    <Col xl={{ span: 4, order: 2 }} className={`${styles.customBg} m-0 px-0 pt-0 pb-2 border-left d-none d-xl-block`}>
                        <SidebarRight
                            content={content}
                        />
                    </Col>

                    {/* Post content: */}
                    <Col xl={{ span: 8, order: 1 }} className="mt-3 mb-5 py-5 px-4 d-flex flex-column align-items-center">
                        <main className={styles.markdown}>
                            <article>
                                <h1 className="mt-3 mb-4">{frontmatter.title}</h1>
                                <p className={styles.authorEtc}>By {frontmatter.author} |
                                    Created on {frontmatter.created} |
                                    Last revised on {frontmatter.revised}</p>
                                <p className={styles.time}>Reading time: {frontmatter.time}</p>
                                <MarkdownImage
                                    src={frontmatter.image}
                                    alt={frontmatter.imageTitle}
                                    lazy="false"
                                />
                                <p className="mt-4 font-semi-bold">{frontmatter.excerpt}</p>
                                <ReactMarkdown
                                    className="markdown-content"
                                    components={{
                                        h2: H2WithId,
                                        h3: H3WithId,
                                        a: MarkdownLink,
                                        img: MarkdownImage,
                                    }}
                                >{content}</ReactMarkdown>
                            </article>
                        </main>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
