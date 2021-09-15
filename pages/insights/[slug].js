// Styles:
import styles from '../../styles/[slug].module.css'
// External packages:
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
// Internal components:
import Sidebar from '../../components/layout/common/toc/Sidebar'
import MarkdownImage from "../../components/insight/markdown/MarkdownImage"
import HeadMeta from "../../components/head/HeadMeta"
import Content from "../../components/insight/Content"
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
                        <Content
                            frontmatter={frontmatter}
                            content={content}
                            ImgComponent={MarkdownImage}
                            styles={styles}
                        />
                    </PageContent>

                </Row>
            </Container>
        </>
    )
}
