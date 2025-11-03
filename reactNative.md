1. react native 是一个使用 React 和应用平台的原生功能来构建 Android 和 iOS 应用的框架，android 和 ios,因此它也根据平台的不同，需要不同的依赖工具，以 ios 为例，必要的工具有 xcode，node，watchman，cocoaPods 以及苹果开发者账号(99$/year)
2. 在 Android 和 iOS 开发中，一个视图是 UI 的基本组成部分：屏幕上的一个小矩形元素、可用于显示文本、图像或响应用户输入。
3. 原生组件就是指在 Android 和 iOS 平台上的视图，它们是由平台的原生 UI 工具包提供的，而不是由 React Native 提供的。React Native 组件就是对原生组件的封装。
4. React Native 组件，View Text Image TextInput ScrollView StyleSheet Button Switch FlatList SectionList
5. # hermes 架构 让 React Native 在手机上运行 编译好的 JavaScript 字节码，而不是动态解析 JS 源文件
   Hermes 在 构建阶段（build time） 把你的 JS 转换成 .hbc（Hermes Bytecode）文件。 这样，运行时就不需要再解析 JS 源代码。解决以下了问题
   冷启动慢 预编译字节码（Bytecode）取代运行时解析 JS 源码
   内存占用大 更紧凑的内存布局、分代垃圾回收（GC）
   包体积大 Hermes 引擎体积远小于 JSC（几 MB → 1.x MB）
   运行性能波动 更稳定的执行优化、减少 GC 停顿时间
6. # 新架构核心：JSI + Fabric + TurboModules + Hermes

   ## 旧架构 JS 线程 ←(JSON 序列化/反序列化)→ Bridge ←(JNI)→ Native 线程

   每次通过 bridge 沟通特别耗时，有以下缺点

   1. 序列化 / 反序列化开销大（尤其复杂对象），
   2. 消息异步批量传递，存在延迟
   3. 线程切换频繁（JS ↔ Native）
   4. 无法共享内存或对象引用，只能通过字符串传输数据

   ## _新架构_

   JSI 是一个 C++ 层的抽象接口，允许 JS 引擎（如 Hermes）直接访问 Native 对象，而无需 JSON 序列化。
   TurboModules 是新一代 Native 模块系统，基于 JSI 实现。
   Fabric 是 React Native 的新渲染引擎，使用 C++ Shared Tree（共享树），JS 与 Native 直接共享内存数据结构；
   总结：新架构通过 JSI 让 JS 引擎（Hermes）能直接操作 C++ 对象，
   从根本上消除了 React Native 旧 Bridge 的序列化/反序列化与异步通信瓶颈。TurboModules 管理原生模块，Fabric 管理 UI 渲染，Hermes 提供运行时支持，三者合力实现“真正的零桥接 React Native”。

7. # react native 问题排查，内存检测和优化
   一般分为 JS 内存和 native 内存

## 常见内存问题：

1.  JS 对象未释放（闭包引用、未清理 timer、未解绑事件）
2.  Native View 未销毁（React 组件卸载但 View 未释放）
3.  图片/资源缓存过多（FastImage、Image、WebView 等）
4.  频繁创建大对象（列表渲染、动画、日志等）
5.  Bridge 数据传递频繁（旧架构）

## 内存检测工具与手段

1. 使用 Hermes Profiling / Chrome DevTools
2. 使用 Flipper，Flipper 是 Meta 官方的 RN 调试工具，内置 Hermes Debugger + Memory Inspector。
3. Android：使用 Android Studio Profiler
4. iOS：使用 Xcode Instruments

## 内存优化手段

1. 清理副作用与事件监听
2. 控制列表渲染内存（FlatList 优化）
3. 延迟加载大图或组件
4. 避免大对象常驻
5. 减少 JS ↔ Native 频繁通信
6. 使用 Hermes（如果尚未开启）
