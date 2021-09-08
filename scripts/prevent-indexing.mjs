import { unlinkSync, copyFileSync } from 'fs'
import { resolve } from 'path'
import { fileURLToPath } from 'url';

// Set directory paths
const scriptDir = fileURLToPath(import.meta.url)
const publicDir = resolve(scriptDir, '..', '..', 'public')
const branchDir = resolve(scriptDir, '..', '..', 'branch-deploy')

// Move _header to public dir
const hdrFile = '_headers'
copyFileSync(resolve(branchDir, hdrFile), resolve(publicDir, hdrFile))

// Remove robots.txt and sitemaps
unlinkSync(resolve(publicDir, 'robots.txt'))
unlinkSync(resolve(publicDir, 'sitemap.xml'))
unlinkSync(resolve(publicDir, 'sitemap_old_site.xml'))
