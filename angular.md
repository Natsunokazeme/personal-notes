组件分为三部分
@component({
    selector
    template/templateUrl
    style/styleUrls

})
例：import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
    `,
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
  //该行相当于该组件的script部分
}
与vue类似，可在html模板中使用{{}}获取插值
在angular中，html模板内绑定属性采用[]//类似v-bind,绑定事件采用()//类似v-on
例：<button (click)="sayMessage()" [disabled]="canClick">Trigger alert message</button>

*ngIf类似于vue中v-if
用法：当为true时采用div原本模板，当为false时采用else后编号的ng-template模板
<div *ngIf="canEdit; else noEdit">
    <p>You can edit the following paragraph.</p>
</div>
<ng-template #noEdit>
    <p>The following paragraph is read only. Try clicking the button!</p>
</ng-template>

依赖注入
例：
//注册一个可注入方法logger.service.ts
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
export class HelloWorldDependencyInjectionComponent  {
  count = 0;

  constructor(private logger: Logger) {
  }

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }
}

在angular项目中，component需要在module中注册引用后才可在其他组件中引用

angular生命周期函数 onchanges可监听变化

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
{path：/**/ component：NOT_FOUND}//路径错误时采用本路径模板

引入angular material的知识点
1.在material V9及以上版本时需按需引入组件module
2.引入是写在app.module.ts内，按需import之后在
@NgModule({imports:[

]})内写入，引入到核心module
3.在需要使用该组件时直接使用对应的组件名

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





