// External packages:
import ReactMarkdown from 'react-markdown'
// Internal components
import HeadingWithId from "./markdown/HeadingWithId"
import MarkdownLink from "./markdown/MarkdownLink"


// Component to format the content of an insight for public display
export default function ArticleContent({ frontmatter, content, ImgComponent, styles }) {
  return (
    <article>
      <h1 className="mt-3 mb-4">{frontmatter.title}</h1>
      <p className={styles.insightAuthorEtc}>By {frontmatter.author} |
        Created on {frontmatter.created} |
        Last revised on {frontmatter.revised}</p>
      <p className={styles.insightTime}>Reading time: {frontmatter.time} min</p>

      {/* Use the component provided as a prop to display the featured image */}
      <ImgComponent
        src={frontmatter.image}
        alt={frontmatter.imageTitle}
      />
      <p className="mt-4 font-semi-bold">{frontmatter.excerpt}</p>

      {/* Display markdown using custom components for the given elements */}
      <ReactMarkdown
        className="markdown-content"
        components={{
          h2: HeadingWithId,
          h3: HeadingWithId,
          a: MarkdownLink,
          img: ImgComponent,
        }}
      >{content}</ReactMarkdown>
    </article>
  )
}
