// External packages:
import { readdirSync, readFileSync } from "fs"
import path from "path"
import matter from "gray-matter"

// Return a sorted list of all insights
function getInsights() {
    // path.join() method joins all given path segments together
    // process.cwd() gives the directory where Next.js is being executed
    const insightFolder = path.join(process.cwd(), "Content")

    //  Get an array of filenames (readdirSync lists the filesnames of the directory)
    const fileNames = readdirSync(insightFolder)

    // Get the content of each file
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
            buttonLink: "/insights/" + slug,
            id: slug,
            revisedMs: Date.parse(frontmatter.data.revised),
        }
    })

    // Sort posts based on 'revised' date (that has been converted to milliseconds):
    return insights.sort((a, b) => (b.revisedMs - a.revisedMs))
}

// Get all insights
const sortedInsights = getInsights()

// Number of insights per page
const insightsPerPage = 12

// Determine the total number of pages
const totalPages = Math.ceil(sortedInsights.length / insightsPerPage)

// Generate a page for each 12 insights
export function getStaticPaths() {

    // Initialise the object structure expected by Next
    const res = {
        paths: [],
        fallback: false,
    }

    // Add a page number to the paths array for each page
    for (let i = 1; i <= totalPages; i++) {
        res.paths.push({ params: { page: i.toString() } })
    }

    return res
}

// Return all the insights on the provided page
export async function getStaticProps(context) {
    // context.params contains the variables from the dynamic routes
    const pageNum = context.params.page

    // Get the insights for the current page
    const firstInsight = (pageNum - 1) * insightsPerPage
    const lastInsight = pageNum * insightsPerPage
    const insights = sortedInsights.slice(firstInsight, lastInsight)

    // Return the insights in the format expected by Next
    return {
        props: {
            insights,
            totalPages,
        }
    }
}

