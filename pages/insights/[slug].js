// Styles:
import styles from '../../styles/[slug].module.css'
// External packages:
import React from "react"
import ReactMarkdown from 'react-markdown'
import { Container, Row, Col } from "react-bootstrap"
// Internal components:
import SidebarRight from "../../components/insight/toc/SidebarRight"
import SidebarTop from "../../components/insight/toc/SidebarTop"
import H2WithId from "../../components/insight/markdown/H2WithId"
import H3WithId from "../../components/insight/markdown/H3WithId"
import MarkdownLink from "../../components/insight/markdown/MarkdownLink"
import MarkdownImage from "../../components/insight/markdown/MarkdownImage"
import HeadMeta from "../../components/layout/HeadMeta"


// Import and export server side functions:
export { getStaticPaths, getStaticProps } from "../../server/[slug]"


// Insight page template:
export default function InsightTemplate({ frontmatter, content }) {

    const contentColumnOrder = { span: 8, order: 1 }
    const sidebarColumnOrder = { span: 4, order: 2 }

    return (
        <>
            <HeadMeta
                title={frontmatter.title}
                // Add description
                description=""
                styleFontAwesome={true}
            />

            <Container className="mx-0 mt-0 mb-5 p-0" fluid>

                {/* Page Contents: */}
                <Row className="m-0 p-0">

                    <Col xl={sidebarColumnOrder} className={`${styles.customBg} m-0 p-0 border-left`}>
                        {/* Page Contents on large screens */}
                        <SidebarRight
                            content={content}
                        />
                        {/* Page Contents on smaller screens */}
                        <SidebarTop
                            content={content}
                        />
                    </Col>

                    {/* Post content: */}
                    <Col xl={contentColumnOrder} className="mt-3 p-5 d-flex flex-column align-items-center">
                        <main className={styles.markdown}>
                            <h1 className="mt-3 mb-4">{frontmatter.title}</h1>
                            <p className={styles.authorEtc}>By {frontmatter.author} |
                                Created on {frontmatter.created} |
                                Last revised on {frontmatter.revised}</p>
                            <p className={styles.time}>Reading time: {frontmatter.time}</p>
                            <MarkdownImage
                                src={frontmatter.image}
                                title={frontmatter.title}
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
                            // This will change later when I will install the image plugin
                            // transformImageUri={uri => uri.startsWith("/") ? `${process.env.IMAGE_BASE_URL}${uri}` : uri}
                            >{content}</ReactMarkdown>
                        </main>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
