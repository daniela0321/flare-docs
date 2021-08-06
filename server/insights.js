// External packages:
import { readdirSync, readFileSync } from "fs"
import path from "path"
import matter from "gray-matter"


// Return  filenames for all posts:
function getFileNames() {
    // path.join() method joins all given path segments together
    // process.cwd() gives the directory where Next.js is being executed
    const insightFolder = path.join(process.cwd(), "Content")
    //  Return an array of filenames (readdirSync lists the filesnames of the directory)
    return readdirSync(insightFolder)
}

// For all posts, return the necessary content for the card
export async function getStaticProps() {

    // Get file names
    const fileNames = getFileNames()

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

    // Pass data to component props
    return {
        props: {
            insights: insights
        },
        revalidate: 10
    }
}

