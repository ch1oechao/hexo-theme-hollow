# Hexo-theme-hollow

一款极致简洁的博客主题，可访问 [My Fragment](https://www.chen9.info/fragment/) 查看效果

## 安装

在你的 Hexo 博客仓库下 clone 主题
```
git clone https://github.com/zchen9/hexo-theme-hollow.git themes/hollow
```
在博客下的 _config.yml 文件修改主题为 hollow
```
theme: hollow
```
启动博客
```
hexo clean
hexo generate
hexo server
```
发布博客
```
hexo deploy
```
## 配置

主题下的 _config.yml 文件

```
# Camera icon for website
# 填写 baseurl 开启主页小相机，也可以在博客根目录的 _config.yml 文件末尾添加
baseurl:

# Default post title
# 默认文章标题
default_post_title: Halo

# Date Format
# 文章时间戳格式
# 也可以在博客主体的 _config.yml 配置，优先取博客主体的时间配置
date_format: YYYY 年 MM 月 DD 日

# Comment.
comments:
  # Disqus comment
  # 填写 disqus_shortname 即可使用 disqus
  disqus_shortname:

# Google Analytics Tracking ID
# 填写谷歌分析跟踪 ID，使用谷歌分析应用
google_analytics:

# Register service worker
# 使用 Service Workers
service_worker: false

# Local search with atom.xml, dependency hexo-generator-feed plugin
# 主页搜索服务，依赖插件 hexo-generator-feed
# 需要运行 npm install hexo-generator-feed --save 安装此插件
local_search: true

# using viewer.js to view image
# https://fengyuanchen.github.io/viewerjs/
# 使用 viewer.js 查看图片
image_viewer: true

# Table of content
# Maybe support more toc style in future.
# 文章目录
# 也许在之后的更新中会支持更多目录样式
toc:
  enable: true
```

## 文章格式

以下为 markdown 格式：

```
title: <文章标题>
category: <文章分类>
date: <文章日期> [YYYY-MM-DD]

---

文章预览内容

<!--more-->

文章正文在此

```

## CHANGELOG

20220202 @zchen9
- 调整 toc 样式
- 修复 Bootstrap CDN 404 问题
- 更新小相机配置

20210424 @zchen9
- 调整细节样式
- 优化深色模式配色

20210424 @fakeYanss [pull/44](https://github.com/zchen9/hexo-theme-hollow/pull/44)
- 支持文章目录
- 支持深色模式

20190526 @zchen9
- 主页开放小相机
- 微调阅读样式
- 优化搜索功能

20190519 @fakeYanss [pull/36](https://github.com/zchen9/hexo-theme-hollow/pull/36)
- 增加service worker
- 本地搜索
- 文章图片放大查看

## 其他

- 作者很懒，更新频率看心情，欢迎贡献你的设计

## LICENSE

[MIT](https://github.com/zchen9/hexo-theme-hollow/blob/master/LICENSE)
