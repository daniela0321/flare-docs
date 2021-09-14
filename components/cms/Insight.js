// External packages:
import { Row, Col } from 'react-bootstrap'
// Internal components
import Content from '../insight/Content'


// Component to show a live preview of the insight whilst editing in the CMS
export default function Insight({ entry, getAsset }) {

  // Transform entry coming from Netlify CMS to the same format as React Markdown
  const frontmatter = entry.toJS().data

  return (
    <Row className="m-0 p-0">
      <Col className="mt-3 mb-5 py-5 px-4 d-flex flex-column align-items-center">
        <Content
          frontmatter={frontmatter}
          content={frontmatter.body}
          ImgComponent={({ src, alt }) => <img src={getAsset(src)} alt={alt} className="mt-3 w-100" />}
          styles={{
            insightMarkdown: 'insightMarkdown',
            insightAuthorEtc: 'insightAuthorEtc',
            insightTime: 'insightTime'
          }}
        />
      </Col>
    </Row>
  )
}
