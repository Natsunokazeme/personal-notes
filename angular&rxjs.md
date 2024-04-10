组件分为三部分
@component({
selector
template/templateUrl
style/styleUrls
})
例:import{Component}from'@angular/core';

@Component({
selector:'hello-world',
template:`<h2>HelloWorld</h2><p>Thisismyfirstcomponent!</p>`,
})
exportclassHelloWorldComponent{
//Thecodeinthisclassdrivesthecomponent'sbehavior.
//该行相当于该组件的 script 部分
}
与 vue 类似,可在 html 模板中使用{{}}获取插值
在 angular 中,html 模板内绑定属性采用[]//类似 v-bind,绑定事件采用()//类似 v-on
例:<button(click)="sayMessage()"[disabled]="canClick">Triggeralertmessage</button>

\*ngIf 类似于 vue 中 v-if
用法:当为 true 时采用 div 原本模板,当为 false 时采用 else 后编号的 ng-template 模板

<div\*ngIf="canEdit;else noEdit">

<p>Youcaneditthefollowingparagraph.</p>
</div*ngIf=>
<ng-template>
<p>Thefollowingparagraphisreadonly.Tryclickingthebutton!</p>
</ng-template #noEdit>

# 依赖注入

例:
//注册一个可注入方法 logger.service.ts
import{Injectable}from'@angular/core';

@Injectable({providedIn:'root'})
export class Logger {
writeCount(count:number){
console.warn(count);
}
}

//在组件中注入
import{Component}from'@angular/core';
import{Logger}from'../logger.service';

@Component({
selector:'hello-world-di',
templateUrl:'./hello-world-di.component.html'
})
export class HelloWorldDependencyInjectionComponent{
count=0;

constructor(private logger:Logger){
}

onLogMe(){
this.logger.writeCount(this.count);
this.count++;
}
}

在 angular 项目中,component 需要在 module 中注册引用后才可在其他组件中引用

@Input()传入
@Output()传出
EventEmitter 事件传出

# 父组件直接引用子组件属性与方法

通过在父组件模板中的子组件标签内放入一个本地变量(以#为标记),代表子组件的引用；
例如:
<app-countdown-timer #timer></app-countdown-timer>
<button (click)="timer.stop()">Stop</button>

<div class="seconds">{{timer.seconds}}</div>

双向绑定:[(input)]
双向绑定工作原理
为了使双向数据绑定有效,子组件中@Output()属性的名字必须遵循 inputChange 模式,其中 input 是相应@Input()属性的名字.例如,如果@Input()属性为 size,则@Output()属性必须为 sizeChange.
后面的子组件具有值属性 size 和事件属性 sizeChange.size 属性是@Input(),因此数据可以流入子组件.sizeChange 事件是一个@Output(),它允许数据从子组件流出到父组件.
双向绑定语法只是属性绑定和事件绑定的组合的简写形式,

引入 angularmaterial 的知识点 1.在 materialV9 及以上版本时需按需引入组件 module2.引入是写在 module 内,按需 import 之后在
@NgModule({imports:[]})内写入,引入到核心 module3.在需要使用该组件时直接使用对应的组件名

RxJS
operator
fromEvent
forkjoin
swichmap
mergemap
first
take
timer
interval

angular setter 和 getter 方法可在获取或设置属性前执行一些操作,比如可替代 ngOnChanges

angular cookbook

# components communication

1.InputOutput
2.service
3.setter getter
4.ngOnChanges
5.id of child componentin template(componentRef#)
6.viewChild component @viewChild(ClassName)child1:ClassName;并将 componentRef 赋值给 child1
7.dynamic component(component Factory and viewContainerRef)

# animation

angular 有自定义的 animation 方式,
在需要动画的组件中引入 Trigger,State,Style,Transition,animate,grounp,query,stagger,keyframes

# angular 自定义 directive

directives
类似 react 的高阶组件,嵌在组件上,可对组件进行扩展,增加新的功能
自定义指令
ng generate directive directiveName
用@Directive 装饰器装饰类,selector 为指令名称,可用在组件模版中；standalone 为 true 时,可直接使用,false 则只能在 ngModule 中声明后使用；
@Directive({
selector:'[rqeTranslation]',
standalone:true,
})

1. ng-template 用于动态创建组件,ng-container 用于包裹元素,不会在 dom 中生成对应的标签,ng-content 用于 slot,只有 select 属性,用于选择器匹配
2. _elementRef 是对原生 dom 的封装,nativeElement 是原生 dom,viewContainerRef 是对当前元素的视图宿主的引用,内部有各种方法来删除,插入,移动,替换视图等,viewRef 是对当前元素的视图的引用,可以通过 viewRef.rootNodes 获取当前元素的所有子元素,templateRef 是对模板的引用._
3. angular 中[class.xxx]="boolean"会在 true 时将 xxx 添加到 class 中,false 时将 xxx 从 class 中删除
4. angular animation tigger state transition style animate todo
5. _angular ngTemplateOutlet 指令将对应的 templateRef 嵌入到宿主视图中,ngTemplateOutletContext 指令,将宿主的 context 传给 templateRef,使 template 可使用宿主内的变量_
6. _observable 是一个函数,它接受一个 observer 作为参数,返回一个 subscription 对象.它将内部产生的数据传给 observer,observer 可以是一个对象,也可以是一个函数.observer 对象有三个方法,next,error,complete.next 方法用于传递数据,error 方法用于传递错误,complete 方法用于传递完成信号.subject 能有多个订阅者,而 observable 只能有一个订阅者.subject 是一个 observer,也是一个 observable.subject 有 next,error,complete 方法,可以通过这些方法来传递数据,错误,完成信号.operators 是个纯函数,它的输入为 observable,返回也 observable.operators 的本质是,描述从一个数据流到另一个数据流之间的关系,也就是 observer 到 observable 中间发生的转换,常见的有 map,switchMap,forkJoin,merge,take,takeUntil 等._
7. _observable 的 next 是用于向流里面推送新数据的方法,而 subscribe 是用于订阅 observable 并监听数据流变化的方法,subscribe 里也有 next 方法,observable 的 next 执行后产生的新数据传给 subscribe 里的 next._
8. takeUntil 是通过传入的 observable 传出数据时,直接使当前 observable 的 subscribe 方法执行 complete 方法,从而结束当前 observable 的数据流.
9. combineLast([obs1,obs2])是将多个 observable 合并成一个 observable 进行 subscription,当所有 observable 都发出数据时,将所有 observable 的最新数据合并成一个数组,传给 subscribe 里的 next 方法. 例如:combineLast([obs1,obs2]).subscribe(([value1,value2])=>console.log(value1,value2))当 obs1 发出数据时,obs2 还没发出数据,subscribe 里的 next 不会执行,当 obs2 发出数据时,subscribe 里的 next 才会执行,并且传入 obs1 和 obs2 的最新数据.
10. concat(ob1,ob2) 也是先执行 ob1 再执行 ob2,区别是 ob1 需 complete 而不是 next 后再执行 ob2.最终 ob1 和 ob2 的数据会合并成一个数组,传给 subscribe 里的 next 方法.

新约:
ngnewxxx//创建新项目
nggcxxx//创建新组件
nggmxxx//创建新模块
nggsxxx//创建新服务

# life-circle 生命周期

constructor 初始化,但此时@Input,@ViewChild 等都不存在
ngOnChanges@Input 的值发生变化时触发
ngOnInit 输入值将在这里获取
ngDoCheck 只要有任何 changedetection 就执行,非常消耗性能
ngAfterContentInit 组件内容初始化后执行,只执行一次
ngAfterContentChecked 组件内容每次变更后执行
ngAfterViewInit 组件视图初始化后执行,只执行一次
ngAfterViewChecked 组件视图每次变更后执行
ngOnDestroy 组件销毁前执行

# 钩子方法 用途 时机

ngOnChanges() 当 Angular 设置或重新设置数据绑定的输入属性时响应.该方法接受当前和上一属性值的 SimpleChanges 对象 如果组件绑定过输入属性,那么在 ngOnInit()之前以及所绑定的一个或多个输入属性的值发生变化时都会调用.
注意,这发生的非常频繁,所以你在这里执行的任何操作都会显著影响性能.欲知详情,参阅本文档的使用变更检测钩子. 注意,如果你的组件没有输入属性,或者你使用它时没有提供任何输入属性,那么框架就不会调用 ngOnChanges().
ngOnInit() 在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后,初始化指令/组件.欲知详情,参阅本文档中的初始化组件或指令. 在第一轮 ngOnChanges()完成之后调用,只调用一次.而且即使没有调用过 ngOnChanges(),也仍然会调用 ngOnInit()（比如当模板中没有绑定任何输入属性时）.
ngDoCheck() 检测,并在发生 Angular 无法或不愿意自己检测的变化时作出反应 紧跟在每次执行变更检测时的 ngOnChanges()和首次执行变更检测时的 ngOnInit()后调用.
ngAfterContentInit() 当 Angular 把外部内容投影进组件视图或指令所在的视图之后调用. 第一次 ngDoCheck()之后调用,只调用一次.
ngAfterContentChecked() 每当 Angular 检查完被投影到组件或指令中的内容之后调用. ngAfterContentInit()和每次 ngDoCheck()之后调用
ngAfterViewInit() 当 Angular 初始化完组件视图及其子视图或包含该指令的视图之后调用. 第一次 ngAfterContentChecked()之后调用,只调用一次.
ngAfterViewChecked() 每当 Angular 做完组件视图和子视图或包含该指令的视图的变更检测之后调用. ngAfterViewInit()和每次 ngAfterContentChecked()之后调用.
ngOnDestroy() 每当 Angular 每次销毁指令/组件之前调用并清扫.在这儿反订阅可观察对象和分离事件处理器,以防内存泄漏. 在 Angular 销毁指令或组件之前立即调用.

# angular route

使用先到先得原则,即路由匹配到第一个符合条件的路由后,就不会再继续匹配其他路由了,因此通配符路由应该放在最后面,否则会导致其他路由无法匹配到

route 有三个主要元素,router,activatedRoute,paramMap,后者是将路由拆分加入进 Map,有 get,getAll,has,keys 方法查询

路由重定向:{path:'',redirectTo:'/heroes',pathMatch:'full'},pathMatch:'full'代表 url 完全匹配时才会重定向,若为 prefix 则只要 url 前缀匹配就会重定向,在该例子中,所有 url 的 prefix 都是'',因此会一直重定向

this.router.navigate(['items'],{relativeTo:this.route});//相对当前 route 跳转

# routeGuard

canActivate:路由激活守卫,用于控制是否允许进入该路由
canDeactivate:路由退出守卫,用于控制是否允许退出该路由
canLoad:路由加载守卫,用于控制是否允许加载该路由
resolve:路由预加载守卫,用于在路由加载前获取数据
canActivateChild:路由子路由激活守卫,用于控制是否允许进入子路由
canMatch:路由匹配守卫,用于控制是否允许匹配该路由\*

# Pipe

Pipe 是一些在模版表达式(html)中使用的快捷处理方法,常用于格式化数据
操作符为｜,后接 pipe 名称.
例如:<p>Thehero'sbirthdayis{{birthday|date}}</p>
如果管道能接受多个参数,就用冒号分隔这些值.例如,{{amount|currency:'EUR':'Euros'}}
管道可链式调用,第一个管道的返回值作为第二个管道的传入值
Angular 自带一些内置 pipe 如 uppercase lowercase titlecase date currency percent
内置管道的完整列表详情可查看管道 API 文档 1.自定义 pipe
1.1 把类用@Pipe 装饰为管道,并在 Ngmodule 中的 declarations 内声明
ng g pipe 自动注册管道
1.2 在自定义管道类中实现 PipeTransform 接口来执行转换
Angular 调用 transform 方法,该方法使用绑定的值作为第一个参数,把其它任何参数都以列表的形式作为第二个参数,并返回转换后的值. 1.管道会检测输入值的变化,并再次执行管道,管道默认为纯管道,即会忽略复合类型的变化,只检测基本类型原始值和复合类型引用
若要检测非纯变更,需要对自定义管道进行进一步定义
@Pipe({name:'flyingHeroesImpure’,pure:false}) 1.异步管道 AsyncPipe
该管道接受一个可观察对象作为输入,并自动订阅输入.并在销毁时自动取消订阅
{{message$|async}}
message$:Observable<string>; 4.管道优先级比三目运算符高,因此若要在管道中使用三目运算符,需要用括号括起来,例如{{(birthday|date:'fullDate')||'unknown'}}

# 动态组件

动态组件是指在运行时动态加载的组件,而不是在编译时加载的组件,举例,通过 viewContainerRef.createComponent()方法动态创建组件挂在到宿主组件上,并传入 data 给动态组件

模版变量

_rxjs 通过 zonejs 将异步代码包裹成 observable_

_firstValueFrom()方法用于获取 observable 的第一个值,并返回一个 promise 对象,该方法只会获取 observable 的第一个值,并且在获取到第一个值后就会取消订阅,因此该方法只能用于获取单个值,而不能用于获取多个值._

render2, angular 的渲染器,用于渲染 dom,可用于创建元素,设置属性,添加事件监听器,创建注释,设置样式等

_templateRef.createEmbedView(child,context)方法用于创建一个嵌入视图,并将其挂载到 templateRef 上,child 为注入的 templateRef,context 为注入的 变量_

_ngif 和 ngFor 都是通过 templateRef.createEmbeddedView()方法创建嵌入视图,并将其挂载到 templateRef 上,ngIf 是在 ngOnChanges()方法中创建嵌入视图，如果它们在同一宿主元素上，ngif 为 false 时会销毁元素，ngfor 会创造元素，因此 ngif 和 ngfor 不能同时用在同一宿主元素上_

# angular 装饰器

装饰器用于修改类，方法，属性的行为，添加元数据，扩展框架功能

# angular 实现类 keep-alive

1. 注册一个服务 cacheService，用于存储组件实例
2. 创建一个宿主组件作为容器，用于接收需要缓存的组件，创建一个缓存组件的 ref 数组，用于存储缓存的组件的 ref
3. 实现一个创建组件的方法，通过 viewContainerRef.createComponent()方法动态创建组件挂在到容器上,并传入 data 给动态组件，将创建的组件的 ref 存入缓存组件的 ref 数组
4. 实现一个获取组件的方法，通过 ref 数组获取组件的 ref
5. 实现一个销毁组件的方法，通过 ref 数组获取组件的 ref，并调用 ref.destroy()方法销毁组件
6. 在新宿主组件调用服务，若存在缓存组件，则获取缓存组件的 ref，若不存在，则创建组件，并将返回的组件的 ref 通过 ViewContainerRef.insert 方法挂在到新宿主组件上;
7. 根据需求，实现组件的销毁，组件的激活，组件的切换等功能

# angular 17

## angular 17 与 angular 16 的区别

angular 采用了 esbuild 和 vite 进行打包

## 新的内置控制流

通过@if @for @switch 替换 ngif ngfor ngswitch,不需要再挂载到 container 上,而是直接在模版中使用

@for 还有一些隐式变量,如 $count(遍历的对象长度),$index,$first(当前遍历是否是第一个遍历),$last,$even(当前遍历是否是偶数),$odd
例:@for (item of items; track item.id; let idx = $index, e = $even) {
Item #{{ idx }}: {{ item.name }}
}

## signals

signals 是响应式更新的一种方式,类似于 vue 的 watch,当某个值发生变化时,使用该值的所有地方都会更新,而不是只更新使用该值的地方
signals 分为 writableSignal 和一般 signal，writableSignal 可以通过 set，update，mutate 改变值。
set() 直接传入新值
update() 传入一个改变函数，入参为当前值，返回改变值 counter.update(oldVal => oldVal + 1)
mutate() 同样传入改变函数，但没有返回值，直接改变入参的对象（一般用于非 primitive type）

const users = signal({}, (a, b) => {
return a.id === b.id
})
自定义相等判断函数，默认是 Object.is()

computed()
计算式 signal，当依赖改变时，会重新计算值并 cache，类似于 vue 的 computed，依赖是动态的，可通过条件语句控制依赖

effect()
副作用 signal，当依赖改变时，会执行副作用函数，是响应式依赖的终点

untracked() 在 effect 中使用，用于阻止内部的 signal 依赖被追踪从而触发 effect

onCleanup() 在 effect 中使用，用于注册清理函数，当 effect 被销毁时，会执行清理函数

1. angular 的 rxjs 的 observable 与 promise 不兼容
2. observable 方法,pipe 用于管道,subscribe 用于订阅,switchMap 用于切换,需要返回 observable,map 用于映射,take 用于取前几个,takeUntil 用于取直到某个时间点,takeWhile 用于取直到某个条件为 false,

3. ngOnchanges 参数 changes:SimpleChanges 可以查看改变的属性,可以用来判断是否改变了某个属性
4. ngFor 可以根据值动态渲染

5. forkJoin(observable1,observable2,...)用于等待多个 observable 发送完成,然后执行一个函数
6. xxx.asObservable();将 xxx 转化为一个 Observable 对象,这个对象可以被订阅,从而获取到 xxx 的值.
7. BehaviorSubject 是一个可订阅的对象,它可以存储一个初始值,并且可以通过订阅来获取这个值.
8. forkJoin()方法可以将多个 Observable 对象合并成一个 Observable 对象,它可以被订阅,从而获取到多个 Observable 对象的值.类似于 promise.all()方法.例如 forkJoin([obs1,obs2,obs3])将会返回一个 Observable 对象,它可以被订阅,从而获取到三个 Observable 对象的值.可对每个 Observable 对象进行 pipe 处理,也可在订阅后获取到所有结果再进行处理.
9. switchMap()方法可以将一个 Observable 对象转化为另一个 Observable 对象,它可以被订阅,从而获取到另一个 Observable 对象的值.例如 obs1.pipe(switchMap((value1)=>obs2)).subscribe((value2))将会返回一个新的 Observable 对象,它可以被订阅,从而获取到 obs2 的值.
10. 销毁订阅,防止内存泄漏.在 pipe 中使用 takeUntil()方法,将一个 Observable 对象作为参数,当这个 Observable 对象发出值时,就会取消订阅.一般将一个空 Subject 对象(newSubject<void>();)作为参数,当这个 Subject 对象发出值时,就会取消订阅.
11. catchError()方法可以捕获错误,当 Observable 对象发生错误时,就会执行 catchError()方法中的代码.写在 pipe 中.
12. of()方法可以将一个值转化为一个 Observable 对象,它可以被订阅,从而获取到这个值.
13. finalize()方法可以在 Observable 对象完成时执行一些代码,写在 pipe 中.相当于 promise 的 finally()方法.
14. subject 对象是一个 observable,它可以存储一个值,并且可以通过 subscribe 来获取这个值.它可以被订阅多次,每次订阅都会获取到最新的值.subject 同时是一个 observer,它可以通过 next 方法来存储一个值.例如:constsubject=newSubject();subject.subscribe((value)=>console.log(value));subject.next(1);subject.next(2);subject.next(3);//123
15. ActivatedRoute 用于获取路由参数,ActivatedRoute.snapshot:获取当前路由参数,但不会随着路由参数的变化而变化；ActivatedRoute.params:获取当前路由参数,会随着路由参数的变化而变化；ActivatedRoute.queryParams:获取当前路由参数,会随着路由参数的变化而变化；ActivatedRoute.fragment:获取当前路由参数,会随着路由参数的变化而变化；
16. angular 装饰器 HostListener,用于监听宿主元素上的事件
17. angular icon registry,用于注册 svg 图标为 mat-icon,并且可以设置图标的颜色,大小等属性.通过 MatIconRegistry 这个 service 的 addSvgIcon()方法注册图标,然后通过 MatIcon 组件的 svgIcon 属性使用图标.
18. angular sanitizer 用于过滤 html 标签,防止 xss 攻击；sanitizer.bypassSecurityTrustResourceUrl() 方法用于信任资源 url,防止 angular 报错.若不通过该方法,angular 会认为该 url 不安全,不会加载该资源.(踩坑 0.5day)
19. angular 里 pipeline 设置
