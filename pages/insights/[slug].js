import { readdirSync, readFileSync } from 'fs'
import path from 'path'
import React from "react"
import matter from "gray-matter"
import ReactMarkdown from 'react-markdown'
import { Container, Row, Col } from "react-bootstrap"
import SidebarRight from "../../components/insights/SidebarRight"
import SidebarTop from "../../components/insights/SidebarTop"
import classes from "./[slug].module.css"

// Render Insight template
export default function InsightTemplate({ frontmatter, content }) {
    // console.log(frontmatter)
    const contentColumnOrder = { span: 9, order: 1 }
    const sidebarColumnOrder = { span: 3, order: 2 }

    return (
        <Container className="m-0 p-0" fluid>
            <Row className="m-0 p-0">
                <Col xl={sidebarColumnOrder} className="m-0 bg-primary text-light">
                    {/* Page contents on large screens */}
                    <SidebarRight />
                    {/* Page contents on smaller screens */}
                    <SidebarTop />
                </Col>
                <Col xl={contentColumnOrder} className="m-0 p-5 d-flex flex-column align-items-center">
                    <main className={classes.main}>
                        <h1>{frontmatter.title}</h1>
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </main>
                </Col>
            </Row>
        </Container>
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
    const { slug } = context.params

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

