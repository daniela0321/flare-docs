import sass from 'sass'
import { join } from 'path'
import { writeFileSync } from 'fs'

// Generate preview.css to load in the CMS for previewing insights
// Use bootstrap.theme.scss to generate the file
console.log('\n', '-----------------------');
console.log('Generating preview.css for the cms preview pane...')

const styles = sass.renderSync({ file: join(process.cwd(), 'styles/cms.preview.scss') })
writeFileSync(join(process.cwd(), 'public/admin/preview.css'), styles.css)

console.log('preview.css generated successfully.')
console.log('-----------------------', '\n');
