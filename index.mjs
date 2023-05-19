import fs from 'fs'
import path from 'path'

const dir = process.cwd()

const srcDir =
  fs.existsSync(path.posix.join(dir, 'src/pages')) ||
    fs.existsSync(path.posix.join(dir, 'src/app'))
    ? path.posix.join(dir, 'src')
    : dir

console.log(srcDir)
