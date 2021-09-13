// External packages:
import { Row, Col } from 'react-bootstrap'
// Internal components
import Content from '../insight/Content'
import PreviewImage from './PreviewImage'


// Component to show a live preview of the insight whilst editing in the CMS
export default function Insight({ entry, getAsset }) {

  // Transform entry coming from Netlify CMS to the same format as React Markdown
  const frontmatter = {
    ...entry.toJS().data,
    image: getAsset(entry.getIn(['data', 'image']))
  }

  return (
    <Row className="m-0 p-0">
      <Col className="mt-3 mb-5 py-5 px-4 d-flex flex-column align-items-center">
        <Content
          frontmatter={frontmatter}
          content={frontmatter.body}
          ImgComponent={PreviewImage}
        />
      </Col>
    </Row>
  )
}
