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

life-circle生命周期
constructor 初始化，但此时@Input，@ViewChild等都不存在
ngOnChanges @Input 的值发生变化时触发
ngOnInit 输入值将在这里获取
ngDoCheck 只要有任何 change detection就执行，非常消耗性能
ngAfterContentInit 组件内容初始化后执行,只执行一次
ngAfterContentChecked 组件内容每次变更后执行
ngAfterViewInit 组件视图初始化后执行，只执行一次
ngAfterViewChecked 组件视图每次变更后执行
ngOnDestroy 组件销毁前执行

钩子方法	用途	时机
ngOnChanges()	当 Angular 设置或重新设置数据绑定的输入属性时响应。 该方法接受当前和上一属性值的 SimpleChanges 对象	如果组件绑定过输入属性，那么在 ngOnInit() 之前以及所绑定的一个或多个输入属性的值发生变化时都会调用。
	注意，这发生的非常频繁，所以你在这里执行的任何操作都会显著影响性能。 欲知详情，参阅本文档的使用变更检测钩子。	注意，如果你的组件没有输入属性，或者你使用它时没有提供任何输入属性，那么框架就不会调用 ngOnChanges()。
ngOnInit()	在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。 欲知详情，参阅本文档中的初始化组件或指令。	在第一轮 ngOnChanges() 完成之后调用，只调用一次。而且即使没有调用过 ngOnChanges()，也仍然会调用 ngOnInit()（比如当模板中没有绑定任何输入属性时）。
ngDoCheck()	检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应。 欲知详情和范例，参阅本文档中的自定义变更检测。	紧跟在每次执行变更检测时的 ngOnChanges() 和 首次执行变更检测时的 ngOnInit() 后调用。
ngAfterContentInit()	当 Angular 把外部内容投影进组件视图或指令所在的视图之后调用。	第一次 ngDoCheck() 之后调用，只调用一次。
	欲知详情和范例，参阅本文档中的响应内容中的变更。
ngAfterContentChecked()	每当 Angular 检查完被投影到组件或指令中的内容之后调用。	ngAfterContentInit() 和每次 ngDoCheck() 之后调用
	欲知详情和范例，参阅本文档中的响应被投影内容的变更。
ngAfterViewInit()	当 Angular 初始化完组件视图及其子视图或包含该指令的视图之后调用。	第一次 ngAfterContentChecked() 之后调用，只调用一次。
	欲知详情和范例，参阅本文档中的响应视图变更。
ngAfterViewChecked()	每当 Angular 做完组件视图和子视图或包含该指令的视图的变更检测之后调用。	ngAfterViewInit() 和每次 ngAfterContentChecked() 之后调用。
ngOnDestroy()	每当 Angular 每次销毁指令/组件之前调用并清扫。 在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。 欲知详情，参阅本文档中的在实例销毁时进行清理。	在 Angular 销毁指令或组件之前立即调用。


Pipe
Pipe是一些在模版表达式(html)中使用的快捷处理方法，常用于格式化数据
操作符为｜ ，后接pipe名称。
例如：<p>The hero's birthday is {{ birthday | date}}</p>
如果管道能接受多个参数，就用冒号分隔这些值。例如，{{ amount | currency:'EUR':'Euros '}}
管道可链式调用，第一个管道的返回值作为第二个管道的传入值
Angular 自带一些内置pipe 如uppercase lowercase  titlecase date currency percent  
内置管道的完整列表详情可查看管道 API 文档 
	1. 自定义pipe
1.1 把类用@Pipe装饰为管道，并在Ngmodule中的declarations内声明
ng g pipe 自动注册管道
1.2 在自定义管道类中实现 PipeTransform 接口来执行转换
Angular 调用 transform 方法，该方法使用绑定的值作为第一个参数，把其它任何参数都以列表的形式作为第二个参数，并返回转换后的值。
	1. 管道会检测输入值的变化，并再次执行管道,管道默认为纯管道，即会忽略复合类型的变化，只检测基本类型原始值和复合类型引用
若要检测非纯变更，需要对自定义管道进行进一步定义
@Pipe({name: 'flyingHeroesImpure’,pure:false})
	2. 异步管道AsyncPipe 
该管道接受一个可观察对象作为输入，并自动订阅输入。并在销毁时自动取消订阅
{{ message$ | async }}
message$: Observable<string>;
4.管道优先级比三目运算符高

directives
类似react的高阶组件，可对组件进行扩展，增加新的功能
  1. 自定义指令
ng generate directive directiveName