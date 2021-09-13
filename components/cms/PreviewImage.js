// Component to display image in the CMS insight preview
export default function PreviewImage({ src, alt }) {
  return (
    <img src={src} alt={alt} className="mt-3 mw-100" />
  )
}
