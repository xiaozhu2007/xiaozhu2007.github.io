# 在这里提交反馈： [![Gitter](https://badges.gitter.im/xiaozhu2007-github-io/community.svg)](https://gitter.im/xiaozhu2007-github-io/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)


#### 本项目由Hack Pig和他的伙伴们维护

------------------

## 欢迎使用GitHub
欢迎使用GitHub-数百万开发人员在该处共同开发软件。准备开始了吗？让我们通过构建和发布您的第一个GitHub Pages网站来了解所有工作原理！

## 储存库
现在，我们在您的第一个GitHub 存储库中。存储库就像是项目的文件夹或存储空间。项目的存储库包含其所有文件，例如代码，文档，图像等。它还跟踪您（或您的协作者）对每个文件所做的每一个更改，因此，如果您犯任何错误，则始终可以返回到项目的先前版本。

该存储库包含三个重要文件：GitHub上第一个网站的HTML代码，用颜色和字体装饰您的网站的CSS样式表以及README文件。它还包含一个图像文件夹，其中包含一个图像文件。

## 描述你的项目
您当前正在查看项目的README文件。自述文件就像您项目的封面或升降机间距。它们以纯文本或Markdown语言编写，通常包括描述项目的段落，使用方法的指导，创作者等。


## 您的第一个网站
GitHub Pages是使用驻留在GitHub存储库中的代码创建网站的一种免费，便捷的方法。您可以使用GitHub Pages构建您的作品集，创建个人网站或与全世界共享一个有趣的项目。在此存储库中会自动启用GitHub Pages，但是将来在您创建新存储库时，启动GitHub Pages网站的步骤将略有不同。


## 重命名此存储库以发布您的网站
我们已经根据您的个人用户名为您建立了GitHub Pages网站。该存储库称为hello-world，但您将其重命名为：username.github.io，以匹配您网站的URL地址。如果存储库的第一部分与您的用户名不完全匹配，则它将不起作用，因此请确保正确无误。

让我们开始吧！要更新此存储库的名称，请单击Settings此页面上的选项卡。这将带您进入存储库的设置页面。

回购设置图像

在“ 存储库名称”标题下，键入：username.github.io，其中username是您在GitHub上的用户名。然后单击“ 重命名”，仅此而已。完成后，单击存储库名称或浏览器的后退按钮以返回此页面。

named_screenshot

单击“ 重命名”后，您的网站将自动发布在：https : //your-username.github.io/
。该HTML文件（称为）index.html呈现为主页，您将在下一步中对此文件进行更改。

恭喜你！您刚刚启动了第一个GitHub Pages网站。现在可以与全世界分享

进行第一次编辑
当您对项目中的任何文件进行任何更改时，您都在进行commit。如果修复了错字，更新文件名或编辑代码，则可以将其作为提交添加到GitHub。您的提交代表了项目的整个历史记录，并且都保存在项目的存储库中。

每次提交时，您都有机会编写一个提交消息，即简短，有意义的注释，描述您对文件所做的更改。因此，无论何时返回提交，您始终都确切知道更改了什么。

实践：通过编写HTML代码自定义您的第一个GitHub网站
是否要编辑刚刚发布的网站？让我们通过在index.html文件中进行自我介绍来练习提交。不用担心第一次就把它弄对了，您以后可以随时使用它。

让我们从这个模板开始：
```
<p>Hello World! I’m [username]. This is my website!</p>
```
要添加您的简介，请复制我们的模板，然后单击index.html文件右上角的“编辑铅笔”图标。

编辑此文件

删除此占位符行：
```
<p>Welcome to your first GitHub Pages website!</p>
```
然后，将模板粘贴到第15行，并填写空白。

编辑-githuboctocat-index

完成后，向下滚动到Commit changes编辑页面底部附近的部分。添加一条简短的消息来说明您的更改，例如“添加我的介绍”，然后单击Commit changes。

添加我的用户名

单击之后Commit changes，您的更改将自动发布在GitHub Pages网站上。刷新页面以查看您所做的新更改。

🎉 您刚刚进行了第一次提交！ 🎉

## 额外信用：继续建设！

通过创建自己的个人Octocat表情符号来更改GitHub Pages网站上的占位符Octocat gif，或从此处的徽标库中选择其他Octocat gif。将该图像添加到index.html文件的第12行，代替<img src=链接。

是否想向您的GitHub Pages网站添加更多代码和有趣的样式？请按照以下说明来构建成熟的静态网站。



--------------------

```
<!DOCTYPE html>

<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <title>my-first-website</title>
  <LINK href="styles.css" rel="stylesheet" type="text/css">
</head>

<body>

<img src="https://octodex.github.com/images/daftpunktocat-thomas.gif" id="octocat" alt="octocat-gif" />

<!-- Change this code here by copy and pasting your template on line 15 -->
<p>Welcome to your first GitHub Pages website!</p>

</body>
</html>
```
---------------

```
* {
  margin:0px;
  padding:0px;
}

#octocat {
  display: block;
  width:384px;
  margin: 50px auto;
}

p {
  display: block;
  width: 400px;
  margin: 50px auto;
  font: 30px Monaco,"Courier New","DejaVu Sans Mono","Bitstream Vera Sans Mono",monospace;
}

```
------------

