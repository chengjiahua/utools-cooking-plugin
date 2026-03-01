# HowToCook uTools 插件

这是 HowToCook 项目的 uTools 插件版本，将程序员做饭指南集成到 uTools 中，方便用户快速查阅菜谱和烹饪技巧。

## 插件截图

<p align="center">
  <img src="https://raw.githubusercontent.com/chengjiahua/MarkdownPhotos/main/utools/cooking/1.png" width="400" />
  <img src="https://raw.githubusercontent.com/chengjiahua/MarkdownPhotos/main/utools/cooking/2.png" width="400" />
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/chengjiahua/MarkdownPhotos/main/utools/cooking/3.png" width="400" />
  <img src="https://raw.githubusercontent.com/chengjiahua/MarkdownPhotos/main/utools/cooking/4.png" width="400" />
</p>

## 功能特点

- 完整集成 HowToCook 项目的所有菜谱和烹饪技巧
- 支持按分类浏览菜谱（素菜、荤菜、水产、早餐、主食等）
- 支持搜索功能，快速找到需要的菜谱
- 响应式设计，适配不同屏幕尺寸

## 安装方法

1. 确保已安装 uTools（下载地址：https://u.tools/）
2. 下载本插件的 zip 包，或克隆本仓库
3. 在 uTools 中打开开发者工具（快捷键：Alt+P）
4. 点击 "接入开发插件"，选择本插件的 `utools` 目录
5. 插件将自动加载到 uTools 中

## 使用方法

1. 在 uTools 输入框中输入命令 `做饭`、`菜谱` 或 `HowToCook` 启动插件
2. 在侧边栏中选择分类，浏览相应的菜谱
3. 在搜索框中输入关键词，搜索需要的菜谱

## 目录结构

```
utools/
├── index.html       # 插件主页面
├── plugin.json      # 插件配置文件
└── README.md        # 插件说明文件
```

## 开发说明

### 调试方法

1. 在 uTools 开发者工具中接入插件后，点击插件图标启动
2. 点击插件右上角的图标，选择 "开发者工具" 或按快捷键 `Ctrl+Shift+I` 打开调试工具
3. 在调试工具中进行代码调试和样式修改

### 热更新配置

如果需要使用热更新功能，可以在 `plugin.json` 中添加以下配置：

```json
"development": {
  "main": "http://127.0.0.1:5173/index.html"
}
```

然后使用 Vite 或 Webpack 等工具启动开发服务器，端口需要与配置中的端口一致。

## 项目来源

本插件基于 [HowToCook](https://github.com/Anduin2017/HowToCook) 项目开发，感谢原项目作者和贡献者的努力。

## 许可证

MIT License