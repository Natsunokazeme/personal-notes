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
//该行相当于该组件的script部分
}
与vue类似,可在html模板中使用{{}}获取插值
在angular中,html模板内绑定属性采用[]//类似v-bind,绑定事件采用()//类似v-on
例:<button(click)="sayMessage()"[disabled]="canClick">Triggeralertmessage</button>

\*ngIf类似于vue中v-if
用法:当为true时采用div原本模板,当为false时采用else后编号的ng-template模板

<div*ngIf="canEdit;else noEdit">
<p>Youcaneditthefollowingparagraph.</p>
</div*ngIf=>
<ng-template>
<p>Thefollowingparagraphisreadonly.Tryclickingthebutton!</p>
</ng-template #noEdit>

依赖注入
例:
//注册一个可注入方法logger.service.ts
import{Injectable}from'@angular/core';

@Injectable({providedIn:'root'})
exportclassClassname{
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
exportclassHelloWorldDependencyInjectionComponent{
count=0;

constructor(privatelogger:Logger){
}

onLogMe(){
this.logger.writeCount(this.count);
this.count++;
}
}

在angular项目中,component需要在module中注册引用后才可在其他组件中引用

@Input()传入
@Output()传出
EventEmitter事件传出

父组件引用子组件属性与方法
通过在父组件模板中的子组件标签内放入一个本地变量(以#为标记),代表子组件的引用；
例如:<button (click)="timer.stop()">Stop</button>

<div class="seconds">{{timer.seconds}}</div>
<app-countdown-timer #timer></app-countdown-timer>

双向绑定:[(input)]
双向绑定工作原理
为了使双向数据绑定有效,子组件中@Output()属性的名字必须遵循inputChange模式,其中input是相应@Input()属性的名字.例如,如果@Input()属性为size,则@Output()属性必须为sizeChange.
后面的子组件具有值属性size和事件属性sizeChange.size属性是@Input(),因此数据可以流入子组件.sizeChange事件是一个@Output(),它允许数据从子组件流出到父组件.
双向绑定语法只是属性绑定和事件绑定的组合的简写形式,

引入angularmaterial的知识点1.在materialV9及以上版本时需按需引入组件module2.引入是写在app.module.ts内,按需import之后在
@NgModule({imports:[

]})内写入,引入到核心module3.在需要使用该组件时直接使用对应的组件名

RxJS
opretor
fromEvent
forkjoin
swichmap
mergemap
first
take
timer
interval

angular output
@Output()quantityChange=newEventEmitter<number>();
this.quantityChange.emit(this.quantity);

angular setter和getter方法可在获取或设置属性前执行一些操作,比如可替代ngOnChanges

angular cookbook
components communication
1.InputOutput
2.service
3.setter getter
4.ogOnChanges
5.idofchildcomponentintemplate(componentRef)
6.viewChildcomponent
@viewChild(ClassName)child1:ClassName;
并将componentRef赋值给child1
7.dynamiccomponent(componentFactoryandviewContainerRef)

animation
angular有自定义的animation方式,
在需要动画的组件中引入Trigger,State,Style,Transition,animate,grounp,query,stagger,keyframes

24.angular的rxjs的observable与promise不兼容
25.observable方法,pipe用于管道,subscribe用于订阅,switchMap用于切换,需要返回observable,map用于映射,take用于取前几个,takeUntil用于取直到某个时间点,takeWhile用于取直到某个条件为false,

32.ngOnchanges参数changes:SimpleChanges可以查看改变的属性,可以用来判断是否改变了某个属性
33.ngFor可以根据值动态渲染

36.forkJoin(observable1,observable2,...)用于等待多个observable发送完成,然后执行一个函数

1xxx.asObservable();将xxx转化为一个Observable对象,这个对象可以被订阅,从而获取到xxx的值.
2BehaviorSubject是一个可订阅的对象,它可以存储一个初始值,并且可以通过订阅来获取这个值.
3.forkJoin()方法可以将多个Observable对象合并成一个Observable对象,它可以被订阅,从而获取到多个Observable对象的值.类似于promise.all()方法.
例如forkJoin([obs1,obs2,obs3])将会返回一个Observable对象,它可以被订阅,从而获取到三个Observable对象的值.可对每个Observable对象进行pipe处理,也可在订阅后获取到所有结果再进行处理.
4.switchMap()方法可以将一个Observable对象转化为另一个Observable对象,它可以被订阅,从而获取到另一个Observable对象的值.
例如obs1.pipe(switchMap((value1)=>obs2)).subscribe((value2))将会返回一个新的Observable对象,它可以被订阅,从而获取到obs2的值.
5.销毁订阅,防止内存泄漏.在pipe中使用takeUntil()方法,将一个Observable对象作为参数,当这个Observable对象发出值时,就会取消订阅.一般将一个空Subject对象(newSubject<void>();)作为参数,当这个Subject对象发出值时,就会取消订阅.
6.catchError()方法可以捕获错误,当Observable对象发生错误时,就会执行catchError()方法中的代码.写在pipe中.
7.of()方法可以将一个值转化为一个Observable对象,它可以被订阅,从而获取到这个值.
8.finalize()方法可以在Observable对象完成时执行一些代码,写在pipe中.相当于promise的finally()方法.
9.subject对象是一个observable,它可以存储一个值,并且可以通过subscribe来获取这个值.它可以被订阅多次,每次订阅都会获取到最新的值.subject同时是一个observer,它可以通过next方法来存储一个值.
例如:constsubject=newSubject();subject.subscribe((value)=>console.log(value));subject.next(1);subject.next(2);subject.next(3);//123
10.observable
1.ActivatedRoute用于获取路由参数,ActivatedRoute.snapshot:获取当前路由参数,但不会随着路由参数的变化而变化；ActivatedRoute.params:获取当前路由参数,会随着路由参数的变化而变化；ActivatedRoute.queryParams:获取当前路由参数,会随着路由参数的变化而变化；ActivatedRoute.fragment:获取当前路由参数,会随着路由参数的变化而变化；

2.angular自定义directive
directives
类似react的高阶组件,嵌在组件上,可对组件进行扩展,增加新的功能
自定义指令
   nggeneratedirectivedirectiveName
 用@Directive装饰器装饰类,selector为指令名称,可用在组件模版中；standalone为true时,可直接使用,false则只能在ngModule中声明后使用；
 @Directive({
selector:'[rqeTranslation]',
standalone:true,
})
120.ng-template用于动态创建组件,ng-container用于包裹元素,不会在dom中生成对应的标签,ng-content用于slot,只有select属性,用于选择器匹配
121.elementRef是对原生dom的封装,nativeElement是原生dom,viewContainerRef是对当前元素的视图宿主的引用,内部有各种方法来删除,插入,移动,替换视图等,viewRef是对当前元素的视图的引用,可以通过viewRef.rootNodes获取当前元素的所有子元素,templateRef是对模板的引用.
122.angular中[class.xxx]="boolean"会在true时将xxx添加到class中,false时将xxx从class中删除
129.angularanimationtiggerstatetransitionstyleanimatetodo
130.angularngTemplateOutlet指令将对应的templateRef嵌入到宿主视图中,ngTemplateOutletContext指令,将宿主的context传给templateRef,使template可使用宿主内的变量
131.observable是一个函数,它接受一个observer作为参数,返回一个subscription对象.它将内部产生的数据传给observer,observer可以是一个对象,也可以是一个函数.observer对象有三个方法,next,error,complete.next方法用于传递数据,error方法用于传递错误,complete方法用于传递完成信号.subject能有多个订阅者,而observable只能有一个订阅者.subject是一个observer,也是一个observable.subject有next,error,complete方法,可以通过这些方法来传递数据,错误,完成信号.operators是个纯函数,它的输入为observable,返回也observable.operators的本质是,描述从一个数据流到另一个数据流之间的关系,也就是observer到observable中间发生的转换,常见的有map,switchMap,forkJoin,merge,take,takeUntil等.
132.observable的next是用于向流里面推送新数据的方法,而subscribe是用于订阅observable并监听数据流变化的方法,subscribe里也有next方法,observable的next执行后产生的新数据传给subscribe里的next.
133.takeUntil是通过传入的observable传出数据时,直接使当前observable的subscribe方法执行complete方法,从而结束当前observable的数据流.
134. combineLast([obs1,obs2])是将多个observable合并成一个observable进行subscription,当所有observable都发出数据时,将所有observable的最新数据合并成一个数组,传给subscribe里的next方法. 例如:combineLast([obs1,obs2]).subscribe(([value1,value2])=>console.log(value1,value2))当obs1发出数据时,obs2还没发出数据,subscribe里的next不会执行,当obs2发出数据时,subscribe里的next才会执行,并且传入obs1和obs2的最新数据.
135. concat(ob1,ob2) 也是先执行ob1再执行ob2,区别是ob1需complete而不是next后再执行ob2.最终ob1和ob2的数据会合并成一个数组,传给subscribe里的next方法.

新约:
ngnewxxx//创建新项目
nggcxxx//创建新组件
nggmxxx//创建新模块
nggsxxx//创建新服务

life-circle生命周期
constructor初始化,但此时@Input,@ViewChild等都不存在
ngOnChanges@Input的值发生变化时触发
ngOnInit输入值将在这里获取
ngDoCheck只要有任何changedetection就执行,非常消耗性能
ngAfterContentInit组件内容初始化后执行,只执行一次
ngAfterContentChecked组件内容每次变更后执行
ngAfterViewInit组件视图初始化后执行,只执行一次
ngAfterViewChecked组件视图每次变更后执行
ngOnDestroy组件销毁前执行

钩子方法 用途 时机
ngOnChanges() 当Angular设置或重新设置数据绑定的输入属性时响应.该方法接受当前和上一属性值的SimpleChanges对象 如果组件绑定过输入属性,那么在ngOnInit()之前以及所绑定的一个或多个输入属性的值发生变化时都会调用.
 注意,这发生的非常频繁,所以你在这里执行的任何操作都会显著影响性能.欲知详情,参阅本文档的使用变更检测钩子. 注意,如果你的组件没有输入属性,或者你使用它时没有提供任何输入属性,那么框架就不会调用ngOnChanges().
ngOnInit() 在Angular第一次显示数据绑定和设置指令/组件的输入属性之后,初始化指令/组件.欲知详情,参阅本文档中的初始化组件或指令. 在第一轮ngOnChanges()完成之后调用,只调用一次.而且即使没有调用过ngOnChanges(),也仍然会调用ngOnInit()（比如当模板中没有绑定任何输入属性时）.
ngDoCheck() 检测,并在发生Angular无法或不愿意自己检测的变化时作出反应 紧跟在每次执行变更检测时的ngOnChanges()和首次执行变更检测时的ngOnInit()后调用.
ngAfterContentInit() 当Angular把外部内容投影进组件视图或指令所在的视图之后调用. 第一次ngDoCheck()之后调用,只调用一次.
ngAfterContentChecked() 每当Angular检查完被投影到组件或指令中的内容之后调用. ngAfterContentInit()和每次ngDoCheck()之后调用
ngAfterViewInit() 当Angular初始化完组件视图及其子视图或包含该指令的视图之后调用. 第一次ngAfterContentChecked()之后调用,只调用一次.
ngAfterViewChecked() 每当Angular做完组件视图和子视图或包含该指令的视图的变更检测之后调用. ngAfterViewInit()和每次ngAfterContentChecked()之后调用.
ngOnDestroy() 每当Angular每次销毁指令/组件之前调用并清扫.在这儿反订阅可观察对象和分离事件处理器,以防内存泄漏. 在Angular销毁指令或组件之前立即调用.

angular route
使用先到先得原则,即路由匹配到第一个符合条件的路由后,就不会再继续匹配其他路由了,因此通配符路由应该放在最后面,否则会导致其他路由无法匹配到

route有三个主要元素,router,activatedRoute,paramMap,后者是将路由拆分加入进Map,有get,getAll,has,keys方法查询

路由重定向:{path:'',redirectTo:'/heroes',pathMatch:'full'},pathMatch:'full'代表url完全匹配时才会重定向,若为prefix则只要url前缀匹配就会重定向,在该例子中,所有url的prefix都是'',因此会一直重定向

this.router.navigate(['items'],{relativeTo:this.route});//相对当前route跳转

routeGuard
canActivate:路由激活守卫,用于控制是否允许进入该路由
canDeactivate:路由退出守卫,用于控制是否允许退出该路由
canLoad:路由加载守卫,用于控制是否允许加载该路由
resolve:路由预加载守卫,用于在路由加载前获取数据
canActivateChild:路由子路由激活守卫,用于控制是否允许进入子路由
canMatch:路由匹配守卫,用于控制是否允许匹配该路由

Pipe
Pipe是一些在模版表达式(html)中使用的快捷处理方法,常用于格式化数据
操作符为｜,后接pipe名称.
例如:<p>Thehero'sbirthdayis{{birthday|date}}</p>
如果管道能接受多个参数,就用冒号分隔这些值.例如,{{amount|currency:'EUR':'Euros'}}
管道可链式调用,第一个管道的返回值作为第二个管道的传入值
Angular自带一些内置pipe如uppercase lowercase titlecase date currency percent
内置管道的完整列表详情可查看管道API文档
 1.自定义pipe
1.1把类用@Pipe装饰为管道,并在Ngmodule中的declarations内声明
ng g pipe自动注册管道
1.2在自定义管道类中实现PipeTransform接口来执行转换
Angular调用transform方法,该方法使用绑定的值作为第一个参数,把其它任何参数都以列表的形式作为第二个参数,并返回转换后的值.
 1.管道会检测输入值的变化,并再次执行管道,管道默认为纯管道,即会忽略复合类型的变化,只检测基本类型原始值和复合类型引用
若要检测非纯变更,需要对自定义管道进行进一步定义
@Pipe({name:'flyingHeroesImpure’,pure:false})
 1.异步管道AsyncPipe
该管道接受一个可观察对象作为输入,并自动订阅输入.并在销毁时自动取消订阅
{{message$|async}}
message$:Observable<string>;
4.管道优先级比三目运算符高,因此若要在管道中使用三目运算符,需要用括号括起来,例如{{(birthday|date:'fullDate')||'unknown'}}

动态组件
动态组件是指在运行时动态加载的组件,而不是在编译时加载的组件,举例,通过viewContainerRef.createComponent()方法动态创建组件挂在到宿主组件上,并传入data给动态组件

模版变量