import HeadMeta from "../components/layout/HeadMeta"
import React, { useState } from "react"
import { Fragment } from "react"
import { Container } from "react-bootstrap"
import { readdirSync, readFileSync } from 'fs'
import path from 'path'
import matter from "gray-matter"
import ReactMarkdown from 'react-markdown'
import PageTitle from "../components/layout/PageTitle"
import InsightList from "../components/insights/InsightList"
import InsightsPagination from "../components/insights/InsightsPagination"
import Link from 'next/link'

export default function Insights(props) {
    const [activePage, setActivePage] = useState(1)

    function handleClick(newActivePage) {
        setActivePage(newActivePage)
    }

    return (
        <Fragment>

            <HeadMeta
                title="Flare Hub Insights"
                description="Browse the list of Insights which address common frameworks and theories used when building digital solutions"
            />

            <PageTitle
                title="Insights"
            />

            <Container>
                <InsightList
                    insights={props.insights}
                    activePage={activePage}
                />
                <InsightsPagination
                    amountOfFiles={props.insights.length}
                    handleClick={handleClick}
                    activePage={activePage}
                />
            </Container>
        </Fragment>
    )
}

// Return  filenames for all Insights
function getFileNames() {
    // path.join() method joins all given path segments together
    // process.cwd() gives the directory where Next.js is being executed
    const insightFolder = path.join(process.cwd(), "Content")
    //  Return an array of filenames (readdirSync lists the filesnames of the directory)
    return readdirSync(insightFolder)
}

// For all Insights, return the necessary content for the card
export async function getStaticProps(context) {

    // Get file names
    const fileNames = getFileNames()

    // console.log("fileNames:", fileNames)

    const insights = fileNames.map((fileName) => {

        // Construct file path
        const filePath = path.join(process.cwd(), `Content/${fileName}`)

        //  Import .md file using the file path (readFileSync returns the content of a file)
        const content = readFileSync(filePath, "utf8")

        // Parse .md data through "matter"
        // This holds the data between `---` from the .md file
        const frontmatter = matter(content)

        const slug = fileName.replace(".md", "")

        return {
            image: frontmatter.data.image,
            title: frontmatter.data.title,
            excerpt: frontmatter.data.excerpt,
            // body: frontmatter.content.slice(0, 200) + "...",
            buttonLink: "/insights/" + slug,
            id: slug,
            revisedMs: Date.parse(frontmatter.data.revised),
        }
    })

    // Pass data to component props
    return {
        props: {
            insights: insights
        },
        revalidate: 10
    }
}

