// External packages:
import { readdirSync, readFileSync } from 'fs'
import path from 'path'
import matter from "gray-matter"


// Return slugs for all posts:
export async function getStaticPaths() {

    // path.join() method joins all given path segments together
    // process.cwd() gives the directory where Next.js is being executed
    const insightFolder = path.join(process.cwd(), "Content")

    // readdirSync reads the contents of the directory
    const insights = readdirSync(insightFolder)

    // For each post, give an object in the format that getStaticProps expects, including the slug
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


// For each slug, return the content and frontmatter:
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

