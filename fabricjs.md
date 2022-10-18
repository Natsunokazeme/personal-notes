一个用于绘制 canvas 的 js 插件
fabric 是 canvas 的 extend

初始化 fabric 的 canvas
const canvas = new fabric.Canvas('canvas', {
...config
})

踩坑 基于 canvas new 一个 canvas 或 image 时，原 canvas 的 style 会被重置为真实大小
