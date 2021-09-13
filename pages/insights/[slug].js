// Styles:
import styles from '../../styles/[slug].module.css'
// External packages:
import React from "react"
import ReactMarkdown from 'react-markdown'
import { Container, Row, Col } from "react-bootstrap"
// Internal components:
import H2WithId from "../../components/insight/markdown/H2WithId"
import H3WithId from "../../components/insight/markdown/H3WithId"
import MarkdownLink from "../../components/insight/markdown/MarkdownLink"
import MarkdownImage from "../../components/insight/markdown/MarkdownImage"
import HeadMeta from "../../components/head/HeadMeta"
import Sidebar from '../../components/layout/common/toc/Sidebar'
import TocForPost from '../../components/layout/common/toc/TocForPost'
import PageContent from '../../components/layout/common/PageContent'


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

                    {/* Table of Contents sidebar
                    (on the rigth side with bigger screen, and at the top with smaller screen) */}
                    <Sidebar
                        bgClass="bgGrey"
                    >
                        <TocForPost
                            content={content}
                        />
                    </Sidebar>

                    {/* Post content: */}
                    <PageContent>
                        <article>
                            <h1 className="mb-4">{frontmatter.title}</h1>
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
                                components={{
                                    h2: H2WithId,
                                    h3: H3WithId,
                                    a: MarkdownLink,
                                    img: MarkdownImage,
                                }}
                            >{content}</ReactMarkdown>
                        </article>
                    </PageContent>

                </Row>
            </Container>
        </>
    )
}
