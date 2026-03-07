const fs = require('fs');
const path = require('path');

// 暴露文件读取API给前端
window.FileSystem = {
  // 读取文件内容
  readFile: function(filePath, callback) {
    try {
      const basePath = path.join(__dirname, 'HowToCook');
      const fullPath = path.join(basePath, filePath);
      
      if (fs.existsSync(fullPath)) {
        const text = fs.readFileSync(fullPath, 'utf8');
        callback(null, text, fullPath);
      } else {
        callback(new Error('文件不存在'), null, null);
      }
    } catch (error) {
      callback(error, null, null);
    }
  },
  
  // 检查文件是否存在
  exists: function(filePath, callback) {
    try {
      const basePath = path.join(__dirname, 'HowToCook');
      const fullPath = path.join(basePath, filePath);
      const exists = fs.existsSync(fullPath);
      callback(null, exists, fullPath);
    } catch (error) {
      callback(error, false, null);
    }
  },
  
  // 获取文件的完整路径
  getFullPath: function(filePath) {
    const basePath = path.join(__dirname, 'HowToCook');
    return path.join(basePath, filePath);
  },
  
  // 获取相对路径
  getRelativePath: function(fullPath) {
    return path.relative(__dirname, fullPath);
  }
};