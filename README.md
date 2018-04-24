# Hexo-theme-hollow

一款极致简洁的博客主题 😉 可访问[我的博客](http://www.chen9.info/fragment/)查看实际效果


## 界面

- 主页

<img src="http://7xic0o.com1.z0.glb.clouddn.com/hexo-theme-hollow-01.png" width="420"/>

- 文章

<img src="http://7xic0o.com1.z0.glb.clouddn.com/hexo-theme-hollow-02.png" width="420"/>

- 分类

<img src="http://7xic0o.com1.z0.glb.clouddn.com/hexo-theme-hollow-03.png" width="420"/>


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
	date_format: YYYY 年 MM 月 DD 日
	
	# Comment 
	# 填写 disqus_shortname 即可使用 disqus
	comments:
	  disqus_shortname: 
	
	# Google Analytics Tracking ID
	google_analytics: 
	 
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

	
## 问题

有什么好的建议或者发现BUG 欢迎提 [issue](https://github.com/zchen9/hexo-theme-hollow/issues) 和我讨论 🙋🏻


## LICENSE

[MIT](https://github.com/zchen9/hexo-theme-hollow/blob/master/LICENSE)
