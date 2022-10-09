ng new xxx //创建新项目
ng g c xxx //创建新组件
ng g m xxx //创建新模块
ng g s xxx //创建新服务

组件分为三部分
@component({
selector
template/templateUrl
style/styleUrls
})
例：import { Component } from '@angular/core';

@Component({
selector: 'hello-world',
template: `<h2>Hello World</h2> <p>This is my first component!</p>`,
})
export class HelloWorldComponent {
// The code in this class drives the component's behavior.
//该行相当于该组件的 script 部分
}
与 vue 类似，可在 html 模板中使用{{}}获取插值
在 angular 中，html 模板内绑定属性采用[]//类似 v-bind,绑定事件采用()//类似 v-on
例：<button (click)="sayMessage()" [disabled]="canClick">Trigger alert message</button>

\*ngIf 类似于 vue 中 v-if
用法：当为 true 时采用 div 原本模板，当为 false 时采用 else 后编号的 ng-template 模板

<div *ngIf="canEdit; else noEdit">
    <p>You can edit the following paragraph.</p>
</div>
<ng-template #noEdit>
    <p>The following paragraph is read only. Try clicking the button!</p>
</ng-template>

依赖注入
例：
//注册一个可注入方法 logger.service.ts
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class Classname {
writeCount(count: number) {
console.warn(count);
}
}
//在组件中注入
import { Component } from '@angular/core';
import { Logger } from '../logger.service';

@Component({
selector: 'hello-world-di',
templateUrl: './hello-world-di.component.html'
})
export class HelloWorldDependencyInjectionComponent {
count = 0;

constructor(private logger: Logger) {
}

onLogMe() {
this.logger.writeCount(this.count);
this.count++;
}
}

在 angular 项目中，component 需要在 module 中注册引用后才可在其他组件中引用

angular 生命周期函数 onchanges 可监听变化

@Input() 传入
@Output() 传出
EventEmitter 事件传出

父组件引用子组件属性与方法
通过在父组件模板中的子组件标签内放入一个本地变量(以#为标记)，代表子组件的引用；
例如：<button (click)="timer.stop()">Stop</button>

  <div class="seconds">{{timer.seconds}}</div>
  <app-countdown-timer #timer></app-countdown-timer>

双向绑定：[(input)]
双向绑定工作原理
为了使双向数据绑定有效，子组件中@Output() 属性的名字必须遵循 inputChange 模式，其中 input 是相应 @Input() 属性的名字。例如，如果 @Input() 属性为 size ，则 @Output() 属性必须为 sizeChange 。
后面的子组件具有值属性 size 和事件属性 sizeChange。 size 属性是 @Input()，因此数据可以流入子组件。 sizeChange 事件是一个 @Output() ，它允许数据从子组件流出到父组件。
双向绑定语法只是属性绑定和事件绑定的组合的简写形式，

router
{path：/\*\*/ component：NOT_FOUND}//路径错误时采用本路径模板

引入 angular material 的知识点 1.在 material V9 及以上版本时需按需引入组件 module 2.引入是写在 app.module.ts 内，按需 import 之后在
@NgModule({imports:[

]})内写入，引入到核心 module 3.在需要使用该组件时直接使用对应的组件名

RxJS
opreater
fromEvent
forkjoin
swichmap
mergemap
first
take
timer
interval

生命周期
constructor 初始化，输入值为 undefined
ngOnInit 输入值将在这里获取

angular output
@Output() quantityChange = new EventEmitter<number>();
this.quantityChange.emit(this.quantity);

angular setter 和 getter 方法可在获取或设置属性前执行一些操作，比如可替代 ngOnChanges

angular cookbook
components communication
1.Input Output
2.service
3.setter getter
4.ogOnChanges
5.id of child component in template (componentRef)
6.viewChild component
@viewChild(ClassName) child1: ClassName;
并将 componentRef 赋值给 child1
7.dynamic component(componentFactory and viewContainerRef)

8.animation
angular 有自定义的 animation 方式，
在需要动画的组件中引入 Trigger, State, Style, Transition, animate,grounp, query, stagger, keyframes
