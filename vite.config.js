import { defineConfig } from 'vite'
import { resolve } from 'path'
import { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    // 禁用默认的构建过程，我们将手动复制文件
    write: false
  },
  plugins: [
    {
      name: 'custom-build',
      buildEnd() {
        // 清理 dist 目录
        const distDir = resolve(__dirname, 'dist')
        if (existsSync(distDir)) {
          rmSync(distDir, { recursive: true })
        }
        mkdirSync(distDir, { recursive: true })
        
        // 复制 HowToCook 目录
        const srcDir = resolve(__dirname, 'HowToCook')
        const destDir = resolve(__dirname, 'dist/HowToCook')
        
        if (existsSync(srcDir)) {
          cpSync(srcDir, destDir, { recursive: true })
          console.log('Copied HowToCook directory to dist')
        } else {
          console.error('HowToCook directory not found')
        }
        
        // 复制所有必要的文件
        const filesToCopy = [
          { src: 'public/index.html', dest: 'index.html' },
          { src: 'public/preload.js', dest: 'preload.js' },
          { src: 'public/plugin.json', dest: 'plugin.json' },
          { src: 'public/marked.min.js', dest: 'marked.min.js' },
          { src: 'public/markdown.css', dest: 'markdown.css' },
          { src: 'public/logo.png', dest: 'logo.png' }
        ]
        
        filesToCopy.forEach(file => {
          const srcPath = resolve(__dirname, file.src)
          const destPath = resolve(__dirname, 'dist', file.dest)
          
          if (existsSync(srcPath)) {
            copyFileSync(srcPath, destPath)
            console.log(`Copied ${file.src} to ${file.dest}`)
          } else {
            console.error(`${file.src} not found`)
          }
        })
        
        console.log('Build completed successfully!')
      }
    }
  ]
})
