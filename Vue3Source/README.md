# Vue3架构分析
## 1.Monorepo
Monorepo 是管理项目代码的一种反思，指在一个仓库（repo）中管理多个模块/包

- 缺点：包会变大

## 2.Vue3项目结构
1.reactivity：响应式系统
2.runtime-core：与平台无关的运行时核心
3.runtime-dom：针对浏览器的运行时。包括DOM API属性，事件处理
4.runtime-test：用于测试
5.server-renderer：用于服务器端渲染
6.compiler-core：与平台无关的编译器核心
7.compiler-ssr：针对服务端渲染的编译模块
8.compiler-sfc：针对单文件解析
9.size-check：用来测试代码体积
10.template-explorer：用于调试编译器输出的开发工具
11.shared：多个包之间共享的内容
12.vue：完整版本，包括运行时的编译器