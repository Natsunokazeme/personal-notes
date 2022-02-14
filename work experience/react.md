components 分为 Functional component 和 class component

functional component 用法

Function Welcome(props){
return (

<h1>Hello, {props.name}</h1>
);
}

ReactDOM.render(
<Welcome name='Jeff'/>,document.getElementById('root')
);

注:props 为父层传入的属性，无法修改

class component 用法

classClockextendsReact.Component{
constructor(props){
super(props);
this.state ={date:newDate()};}
render(){
return(

<div>
<h1>Hello, world!</h1>
<h2>It is {this.props.date.toLocaleTimeString()}.</h2>
</div>
);
}
}
State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。

hook 用法
useState();
useEffect():
