// Styles:
import styles from './Content.module.css'
// External packages:
import ReactMarkdown from 'react-markdown'
// Internal components
import H2WithId from "../../components/insight/markdown/H2WithId"
import H3WithId from "../../components/insight/markdown/H3WithId"
import MarkdownLink from "../../components/insight/markdown/MarkdownLink"


// Component to format the content of an insight for public display
export default function Content({ frontmatter, content, ImgComponent }) {
  return (
    <main className={styles.markdown}>
      <article>
        <h1 className="mt-3 mb-4">{frontmatter.title}</h1>
        <p className={styles.authorEtc}>By {frontmatter.author} |
          Created on {frontmatter.created} |
          Last revised on {frontmatter.revised}</p>
        <p className={styles.time}>Reading time: {frontmatter.time}</p>

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
            h2: H2WithId,
            h3: H3WithId,
            a: MarkdownLink,
            img: ImgComponent,
          }}
        >{content}</ReactMarkdown>
      </article>
    </main>

  )
}
