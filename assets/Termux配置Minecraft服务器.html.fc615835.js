import{_ as t,r as c,o as i,b as o,d as a,e as s,F as l,g as n,f as r}from"./app.629fec38.js";const p={},d=n('<h2 id="termux\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#termux\u4E0B\u8F7D" aria-hidden="true">#</a> Termux\u4E0B\u8F7D</h2><p>Termux\u5B98\u7F51\uFF1A https://termux.com/</p><p>\u5B98\u7F51\u63A8\u8350\u4E0B\u8F7D\u5730\u5740\uFF1A https://f-droid.org/packages/com.termux/</p><h2 id="\u4E0B\u8F7Djava\u5305" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7Djava\u5305" aria-hidden="true">#</a> \u4E0B\u8F7DJava\u5305</h2><blockquote><p>\u6B64\u5904\u4E3A\u4E86\u6F14\u793A\uFF0C\u4F7F\u7528Java8\uFF08\u7406\u8BBA\u652F\u6301Java11\u548C16\uFF09</p></blockquote><h3 id="\u4E0B\u8F7D\u89E3\u538B" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u89E3\u538B" aria-hidden="true">#</a> \u4E0B\u8F7D\u89E3\u538B</h3><h4 id="\u4E0B\u8F7Djdk8-11" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7Djdk8-11" aria-hidden="true">#</a> \u4E0B\u8F7Djdk8/11</h4>',7),h={href:"https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html",target:"_blank",rel:"noopener noreferrer"},u=r("JDK8\u4E0B\u8F7D\u5730\u5740"),m={href:"https://www.oracle.com/java/technologies/javase-jdk11-downloads.html",target:"_blank",rel:"noopener noreferrer"},b=r("JDK11\u4E0B\u8F7D\u5730\u5740"),v=n(`<p>\u6211\u4E0B\u8F7D\u7684\u662F\uFF1Ajdk-8u291-linux-aarch64.tar.gz\uFF08Java11\u662Fjdk-11.0.10_linux-aarch64_bin.tar.gz\uFF09 \u89E3\u538B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxvf jdk-8u291-linux-aarch64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><em>or Java11</em></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxvf jdk-11.0.10_linux-aarch64_bin.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u89E3\u538B\u5230\u4E00\u4E2A\u597D\u8BB0\u7684\u76EE\u5F55\u5C31\u53EF\u4EE5\u4E86\u3002 \u6211\u89E3\u538B\u7684\u76EE\u5F55\u662F\uFF1A/data/data/com.termux/files/home/java/jdk8/</p><h4 id="\u4FEE\u6539\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u4FEE\u6539\u73AF\u5883\u53D8\u91CF</h4><p>\u914D\u7F6E<code>vim ~/.zshrc</code>\uFF0C\u589E\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>#JDK8
export JAVA_HOME=/data/data/com.termux/files/home/java/jdk8
export PATH=$PATH:$JAVA_HOME/bin:.
export CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8FD9\u6837jdk\u5C31\u914D\u7F6E\u5B8C\u6210\u4E86\u3002</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>java --version #\u67E5\u770BJava\u7248\u672C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><h3 id="\u4E0B\u8F7D\u670D\u52A1\u7AEFjar\u5305" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u670D\u52A1\u7AEFjar\u5305" aria-hidden="true">#</a> \u4E0B\u8F7D\u670D\u52A1\u7AEFJar\u5305</h3><p>\u4E0B\u8F7D\u6700\u65B0\u7248\u670D\u52A1\u5668\u7AEFjar\u5305\uFF0Cminecraft\u670D\u52A1\u7AEF\u6709\u591A\u4E2A\u7248\u672C\uFF0C\u4E0B\u9762\u662F\u90E8\u5206\u670D\u52A1\u7AEF\u4E0B\u8F7D\u94FE\u63A5\uFF1A</p><p>\u5B98\u65B9\u670D\u52A1\u7AEF\u6700\u65B0\u7248\u672C\uFF1Ahttps://minecraft.net/zh-hans/download/server/</p><p>\u5B98\u65B9\u5BA2\u6237\u7AEF\u3001\u670D\u52A1\u7AEF\u6240\u6709\u7248\u672C(\u63A8\u8350)\uFF1Ahttps://mcversions.net/</p><p>papermc\u670D\u52A1\u7AEF\uFF1Ahttps://papermc.io/downloads</p><p>spigot\u670D\u52A1\u7AEF(\u9700\u81EA\u884C\u6784\u5EFA)\uFF1Ahttps://hub.spigotmc.org/jenkins/job/BuildTools/</p><p>sponge\u670D\u52A1\u7AEF\uFF1Ahttps://www.spongepowered.org/</p><p>\u56DE\u5230\u7EC8\u7AEF\uFF0C\u7EE7\u7EED\u8F93\u5165</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~
<span class="token function">mkdir</span> <span class="token function">mc</span> 
<span class="token builtin class-name">cd</span> <span class="token function">mc</span> 
<span class="token function">wget</span> https://launcher.mojang.com/v1/objects/1b557e7b033b583cd9f66746b7a9ab1ec1673ced/server.jar <span class="token comment">#1.16.5\u5B98\u65B9</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;java -jar server.jar&quot;</span> <span class="token operator">&gt;</span> start.sh
<span class="token function">bash</span> start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u9996\u6B21\u542F\u52A8\u4F1A\u5931\u8D25\uFF0C\u9700\u8981\u624B\u52A8\u63A5\u53D7\u300A\u6700\u7EC8\u7528\u6237\u8BB8\u53EF\u534F\u8BAE\u300BEnd-User License Agreement\uFF08EULA\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E00\u952E\u4FEE\u6539\u547D\u4EE4</span>
<span class="token function">sed</span> -i <span class="token string">&#39;s/eula=false/eula=true/g&#39;</span> eula.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E3B\u914D\u7F6E\u6587\u4EF6\u662Fserver.properties\uFF0C\u5176\u4E2D\u5927\u90E8\u5206\u914D\u7F6E\u5728\u8FD9\u91CC\u8FDB\u884C\u4FEE\u6539</p><p>\u6BD4\u5982\uFF1A\u542F\u7528\u79BB\u7EBF\u6A21\u5F0F\uFF08\u76D7\u7248\u53EF\u8FDB\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sed</span> -i <span class="token string">&#39;s/online-mode=true/online-mode=false/g&#39;</span> server.properties
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,25);function g(k,_){const e=c("ExternalLinkIcon");return i(),o(l,null,[d,a("p",null,[a("a",h,[u,s(e)]),a("a",m,[b,s(e)])]),v],64)}var f=t(p,[["render",g]]);export{f as default};
