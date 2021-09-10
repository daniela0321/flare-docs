import { useRouter } from 'next/router'

// img element using Netlify's image optimization to provide a responsive srcset
export default function Image({ src, srcSizes, defaultSize, sizes, alt, lazy, className, width, height }) {
  const router = useRouter()

  // Create srcset from sizes provided in srcSizes or using defaults
  const srcSetList = srcSizes || [375, 700, 1400, 3000]
  const srcSet = srcSetList.map(
    size => `${router.basePath + process.env.LOCAL_PATH + src}?nf_resize=fit&w=${size} ${size}w`
  ).join(', ')

  // Set src url including resize query parameter
  const defaultSizeItem = Math.floor((srcSetList.length - 1) / 2)
  const resizedSrc = router.basePath + process.env.LOCAL_PATH + src + '?nf_resize=fit&w='
    + (defaultSize || srcSetList[defaultSizeItem])

  // Only disable lazy loading if lazy is set to false (default to true)
  const loading = (lazy === false || lazy === 'false') ? 'eager' : 'lazy'

  // Return img element
  return (
    <img
      src={resizedSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={loading}
      className={className}
      width={width}
      height={height}
    />
  )
}
