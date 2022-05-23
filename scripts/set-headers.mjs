import { unlinkSync, copyFileSync } from 'fs'
import { resolve } from 'path'
import { fileURLToPath } from 'url';

// Set directory paths
const scriptDir = fileURLToPath(import.meta.url)
const publicDir = resolve(scriptDir, '..', '..', 'public')
const headerDir = resolve(scriptDir, '..', '..', 'headers')
let headerFile = 'branch_deploy'

// For production deployments
if (process.env.CONTEXT === 'production') {
  headerFile = 'production'

  // Remove robots.txt
  copyFileSync(resolve(headerDir, 'robots.txt'), resolve(publicDir, 'robots.txt'))
}

// Move header file to public dir
copyFileSync(resolve(headerDir, headerFile), resolve(publicDir, '_headers'))
