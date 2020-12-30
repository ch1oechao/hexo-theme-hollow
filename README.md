# Hexo-theme-hollow

一款极致简洁的博客主题 😉 可访问[我的博客](http://www.chen9.info/fragment/)查看实际效果

## 安装

在你的 Hexo 博客仓库下 clone 主题

	git clone https://github.com/zchen9/hexo-theme-hollow.git themes/hollow

在博客下的 _config.yml 文件修改主题为 hollow
	
	theme: hollow

启动博客

	hexo clean
	hexo generate
	hexo server
	
发布博客

	hexo deploy
	
## 配置

主题下的 _config.yml 文件

	# Default post title
	# 默认文章标题
	default_post_title: Halo
	
	# Date Format
	# 文章时间戳格式
	# 也可以在博客主体的 _config.yml 配置，优先取博客主体的时间配置
	date_format: YYYY 年 MM 月 DD 日

	# Comment 
	# 填写 disqus_shortname 即可使用 disqus
	comments:
	  disqus_shortname: 
	
	# Google Analytics Tracking ID
	google_analytics: 
		
	# Register service worker
	service_worker: false

	# Local search with atom.xml, dependency hexo-generator-feed plugin
	# 本地搜索功能，需要安装 hexo-generator-feed 插件
	local_search: true

	# using viewer.js to view image
	# https://fengyuanchen.github.io/viewerjs/
	image_viewer: true

	# using highlight.js to show the code
	# https://highlightjs.org/
	# 使用 highlight.js 显示代码块
	# enable 控制开关, theme 控制主题, 主题可在 https://highlightjs.org/static/demo/ 选择
	hljs:
		enable: true
		theme: xcode


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

20201229 @timlzh
- 增加highlight.js显示代码块, 可以愉快地贴代码啦

20190526 @zchen9
- 主页开放小相机
- 微调阅读样式
- 优化搜索功能

20190519 @fakeYanss [pull/36](https://github.com/zchen9/hexo-theme-hollow/pull/36)
- 增加service worker
- 本地搜索
- 文章图片放大查看

## 其他

- 作者很懒，更新频率看心情 ╮(╯_╰)╭
- 欢迎贡献你的代码 🙋 [issue](https://github.com/zchen9/hexo-theme-hollow/issues)

## LICENSE

[MIT](https://github.com/zchen9/hexo-theme-hollow/blob/master/LICENSE)
