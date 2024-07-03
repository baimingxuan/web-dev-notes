import{_ as s,c as e,o as i,a3 as a}from"./chunks/framework.BOZns9vE.js";const g=JSON.parse('{"title":"说说webpack的热更新是如何做到的？原理是什么？","description":"","frontmatter":{},"headers":[],"relativePath":"webpack/hmr.md","filePath":"webpack/hmr.md","lastUpdated":1719995857000}'),p={name:"webpack/hmr.md"},t=a(`<h1 id="说说webpack的热更新是如何做到的-原理是什么" tabindex="-1">说说webpack的热更新是如何做到的？原理是什么？ <a class="header-anchor" href="#说说webpack的热更新是如何做到的-原理是什么" aria-label="Permalink to &quot;说说webpack的热更新是如何做到的？原理是什么？&quot;">​</a></h1><p><img src="https://static.vue-js.com/a076da40-acd4-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><h3 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么" aria-label="Permalink to &quot;一、是什么&quot;">​</a></h3><p><code>HMR</code>全称 <code>Hot Module Replacement</code>，可以理解为模块热替换，指在应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个应用</p><p>例如，我们在应用运行过程中修改了某个模块，通过自动刷新会导致整个应用的整体刷新，那页面中的状态信息都会丢失</p><p>如果使用的是 <code>HMR</code>，就可以实现只将修改的模块实时替换至应用中，不必完全刷新整个应用</p><p>在<code>webpack</code>中配置开启热模块也非常的简单，如下代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> webpack</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;webpack&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  devServer: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 开启 HMR 特性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    hot: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // hotOnly: true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>通过上述这种配置，如果我们修改并保存<code>css</code>文件，确实能够以不刷新的形式更新到页面中</p><p>但是，当我们修改并保存<code>js</code>文件之后，页面依旧自动刷新了，这里并没有触发热模块</p><p>所以，<code>HMR</code>并不像 <code>Webpack</code> 的其他特性一样可以开箱即用，需要有一些额外的操作</p><p>我们需要去指定哪些模块发生更新时进行<code>HRM</code>，如下代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.hot){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.hot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">accept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./util.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;util.js更新了&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="二、实现原理" tabindex="-1">二、实现原理 <a class="header-anchor" href="#二、实现原理" aria-label="Permalink to &quot;二、实现原理&quot;">​</a></h2><p>首先来看看一张图，如下：</p><p><img src="https://static.vue-js.com/adc05780-acd4-11eb-ab90-d9ae814b240d.png" alt="img"></p><ul><li>Webpack Compile：将 JS 源代码编译成 bundle.js</li><li>HMR Server：用来将热更新的文件输出给 HMR Runtime</li><li>Bundle Server：静态资源文件服务器，提供文件访问路径</li><li>HMR Runtime：socket服务器，会被注入到浏览器，更新文件的变化</li><li>bundle.js：构建输出的文件</li><li>在HMR Runtime 和 HMR Server之间建立 websocket，即图上4号线，用于实时更新文件变化</li></ul><p>上面图中，可以分成两个阶段：</p><ul><li>启动阶段为上图 1 - 2 - A - B</li></ul><p>在编写未经过<code>webpack</code>打包的源代码后，<code>Webpack Compile</code> 将源代码和 <code>HMR Runtime</code> 一起编译成 <code>bundle</code>文件，传输给<code>Bundle Server</code> 静态资源服务器</p><ul><li>更新阶段为上图 1 - 2 - 3 - 4</li></ul><p>当某一个文件或者模块发生变化时，<code>webpack</code>监听到文件变化对文件重新编译打包，编译生成唯一的<code>hash</code>值，这个<code>hash</code>值用来作为下一次热更新的标识</p><p>根据变化的内容生成两个补丁文件：<code>manifest</code>（包含了 <code>hash</code> 和 <code>chundId</code>，用来说明变化的内容）和<code>chunk.js</code> 模块</p><p>由于<code>socket</code>服务器在<code>HMR Runtime</code> 和 <code>HMR Server</code>之间建立 <code>websocket</code>链接，当文件发生改动的时候，服务端会向浏览器推送一条消息，消息包含文件改动后生成的<code>hash</code>值，如下图的<code>h</code>属性，作为下一次热更细的标识</p><p><img src="https://static.vue-js.com/05a0edf0-ad4a-11eb-85f6-6fac77c0c9b3.png" alt="img"></p><p>在浏览器接受到这条消息之前，浏览器已经在上一次<code>socket</code> 消息中已经记住了此时的<code>hash</code> 标识，这时候我们会创建一个 <code>ajax</code> 去服务端请求获取到变化内容的 <code>manifest</code> 文件</p><p><code>mainfest</code>文件包含重新<code>build</code>生成的<code>hash</code>值，以及变化的模块，对应上图的<code>c</code>属性</p><p>浏览器根据 <code>manifest</code> 文件获取模块变化的内容，从而触发<code>render</code>流程，实现局部模块更新</p><p><img src="https://static.vue-js.com/0e7b7850-ad4a-11eb-ab90-d9ae814b240d.png" alt="img"></p><h2 id="三、总结" tabindex="-1">三、总结 <a class="header-anchor" href="#三、总结" aria-label="Permalink to &quot;三、总结&quot;">​</a></h2><p>关于<code>webpack</code>热模块更新的总结如下：</p><ul><li>通过<code>webpack-dev-server</code>创建两个服务器：提供静态资源的服务（express）和Socket服务</li><li>express server 负责直接提供静态资源的服务（打包后的资源直接被浏览器请求和解析）</li><li>socket server 是一个 websocket 的长连接，双方可以通信</li><li>当 socket server 监听到对应的模块发生变化时，会生成两个文件.json（manifest文件）和.js文件（update chunk）</li><li>通过长连接，socket server 可以直接将这两个文件主动发送给客户端（浏览器）</li><li>浏览器拿到两个新的文件后，通过HMR runtime机制，加载这两个文件，并且针对修改的模块进行更新</li></ul>`,32),l=[t];function n(c,d,h,o,k,r){return i(),e("div",null,l)}const u=s(p,[["render",n]]);export{g as __pageData,u as default};
