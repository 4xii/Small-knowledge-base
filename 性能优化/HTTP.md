HTTP网络层 
代码编译层webpack
代码运行层html css js vue react
安全xss csrf

## url解析
http://user:pass@www.xxx.com.cn:80/index.html?lx=1&from=wx#video
http 协议

user:pass 登录信息

www.xxx.com.cn 域名：服务器地址

80 端口号: 0~65535 服务器端177.34.14.131上 端口80项目一 端口81项目2
默认端口号: HTTP 80  /  HTTPS443  / FTP  21

index.html 请求资源文件路径

lx=1&from=wx 查询字符串:问号参数
```js
let url = "http://www.xxx.cn/api/?lx=1&name=世新&from=http://www.baidu.com";
//编码处理
//对整个URL的编码：处理空格/处理空格
//encodeURI/decodeURI

//主要对传递的参数信息进行编码
//encodeURIComponent / decodeURIComponent
let url1 = `http://www.xxx.cn/api/?lx=1&name=${encodeURIComponent("世新")}&from=${encodeURIComponent("http://www.baidu.com")}`;
```


#video 片段标识符：HASH值

HTTPS：SLL/TLS
FTP传输一些大文件

# 缓存检测(静态资源缓存)
1.先检查是否存在强缓存
+ 有 且未生效，走强缓存
+ 如果没有，或者失效
  检测是否有协商缓存
  +有
  +没用 重新获取数据

缓存位置：内存缓存  硬盘缓存
强缓存cache-contorl
携带标识向本地请求 -> 本地没有再向服务器发送新http请求 ->返回请求结果缓存标识

* 服务器更新后，让资源名称和之前不一样，这样页面导入全新的资源 webpack name
* 当文件更新后，在html导入的时候，设置一个后缀（时间戳）
```html
<script src="index.js?325116><script>
```

协商缓存 强缓存失效 Last-Modified/ETag
携带缓存标识发送HTTP请求
[没更新] 304，读取缓存           [更新过] 200 并且更新资源
304 从本地缓存中获取内容进        200 直接渲染 并且缓存

如果协商缓存没用（没用传任何标识）
服务器收到请求准备内容 
Last-Modified 资源文件最后更新时间 
ETag记录一个标识，资源文件更新生成的，每一次都会重新生成ETag

第二次发送请求
客户端拿到信息后渲染，信息和标识都缓存到本地
if(Modified-since = Last-Modified if-None_Mach = ETag)
给服务器
服务器判断文件是否更新

# DNS
本地 -> DNS服务器
减少DNS请求（一个页面尽量减少不同域名：资源放在相同服务器）但是真实项目会把不同资源放在不同服务器上 web服务器 数据服务器 影音服务器 图片服务器
资源合理应用

# TCP三次握手
建立连接通道 建立完成之后 不关闭 connection:keep-alive
# TCP四次挥手
释放TCP通道

HTTP1.0 每次请求建立TCP，用完关闭
HTTP1.1 长连接 若干个请求排队串行化单线程处理，后面的请求等待前面的返回才能获得执行机会，一旦请求超时，后面的都会被阻塞（线头阻塞）
HTTP2.0 可以同时发送多个请求 多路复用