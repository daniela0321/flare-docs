import genSitemap from 'next-ssg-sitemap'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import { visit } from 'unist-util-visit'
import { config as envConfig } from 'dotenv-flow'

envConfig()
console.log('Creating sitemap...')

// Create a sitemap based on the static files generated in the build phase.
genSitemap(process.cwd(), process.env.URL, {
  // Set location to save the sitemap
  sitemapLoc: 'public/sitemap.xml',
  // Transform each page with props to a sitemap url object.
  async processPath({ url, path, props }) {
    // Exclude pages from sitemap
    if (['search', 'success'].includes(path)) return
    // Create a base sitemap url object.
    const item = {
      url: url + '/',
    }

    // If the page has props, add the relevant props to the url object.
    if (props) {
      // Check frontmatter for revision date and main image.
      if (props.frontmatter) {
        const { revised, image, imageTitle } = props.frontmatter
        // Frontmatter is only available on Insights and they should have a priority of 1.
        item.priority = 1

        if (revised) {
          // If a revised date is provided, format it to YYY-MM-DD as supported by sitemap.js.
          const revDate = new Date(revised)
          const revYear = revDate.getFullYear().toString()
          const revMonth = (revDate.getMonth() + 1).toString().padStart(2, '0')
          const revDay = revDate.getDate().toString().padStart(2, '0')
          const W3CDate = revYear + '-' + revMonth + '-' + revDay
          // Include date in url object
          item.lastmod = W3CDate
        }
        if (image) {
          // If an image is provided, add the url and title to the img array in the url object.
          const img = { url: props.frontmatter.image }
          if (imageTitle) img.title = imageTitle
          item.img = [img]
        }
      }
      if (props.content) {
        // If content is provided, create a readable tree from the markdown and extract the images.
        const ast = await unified()
          .use(remarkParse)
          .parse(props.content)

        visit(ast, 'image', node => {
          // For each image, add the url and alt text to the img array of the sitemap url object.
          if (!item.img) item.img = []
          const img = { url: node.url }
          if (node.alt) img.title = node.alt
          item.img.push(img)
        })
      }
    }

    return item
  }
})
  .then(() => console.log('Sitemap has been added to the public folder', '\n'))
