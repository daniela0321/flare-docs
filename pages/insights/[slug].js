import { readdirSync, readFileSync } from 'fs'
import path from 'path'
import React from "react"
import matter from "gray-matter"
import ReactMarkdown from 'react-markdown'
import { Container, Row, Col } from "react-bootstrap"
import SidebarRight from "../../components/insight/toc/SidebarRight"
import SidebarTop from "../../components/insight/toc/SidebarTop"
import classes from "./[slug].module.css"
import H2WithId from "../../components/insight/markdown/H2WithId"
import H3WithId from "../../components/insight/markdown/H3WithId"
import MarkdownList from "../../components/insight/markdown/MarkdownList"
import MarkdownLink from "../../components/insight/markdown/MarkdownLink"
import MarkdownImage from "../../components/insight/markdown/MarkdownImage"
import HeadMeta from "../../components/layout/HeadMeta"

// Render Insight template
export default function InsightTemplate({ frontmatter, content }) {
    // console.log(frontmatter)
    const contentColumnOrder = { span: 8, order: 1 }
    const sidebarColumnOrder = { span: 4, order: 2 }

    return (
        <>
            <HeadMeta
                title={frontmatter.title}
                description=""
                styleFontAwesome={true}
            />

            <Container className="mx-0 mt-0 mb-5 p-0" fluid>
                <Row className="m-0 p-0">
                    <Col xl={sidebarColumnOrder} className="m-0 p-0 border-left custom-bg">
                        {/* Page contents on large screens */}
                        <SidebarRight
                            content={content}
                        />
                        {/* Page contents on smaller screens */}
                        <SidebarTop
                            content={content}
                        />
                    </Col>
                    <Col xl={contentColumnOrder} className="mt-3 p-5 d-flex flex-column align-items-center">
                        <main className={classes.main}>
                            <h1 className="mt-3 mb-4">{frontmatter.title}</h1>
                            <p className={classes.authoretc}>By {frontmatter.author} | Created on {frontmatter.created} | Last revised on {frontmatter.revised}</p>
                            <p className={classes.time}>Reading time: {frontmatter.time}</p>
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
                                    ul: MarkdownList,
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

// Return slugs for all Insights
export async function getStaticPaths() {
    // path.join() method joins all given path segments together
    // process.cwd() gives the directory where Next.js is being executed
    const insightFolder = path.join(process.cwd(), "Content")
    // readdirSync reads the contents of the directory
    const insights = readdirSync(insightFolder)

    // For each Insight, give an object in the format that getStaticProps expects, including the slug
    const paths = insights.map(insight => ({
        params: {
            slug: insight.replace(".md", "")
        }
    }))

    return {
        fallback: false,
        paths: paths
    }
}


// For each slug, return the content and frontmatter 
export async function getStaticProps(context) {
    // params contains the variables from the dynamic routes (Next)
    const { slug } = context.params

    // Construct the filepaths
    const filePath = path.join(process.cwd(), `Content/${slug}.md`)

    //  Import .md file using the `slug` from the URL
    const content = readFileSync(filePath, "utf8")

    // Parse .md data through "matter"
    // This holds the data between `---` from the .md file
    const frontmatter = matter(content)

    // Pass data to component props
    return {
        props: {
            frontmatter: frontmatter.data,
            content: frontmatter.content
        }
    }
}

