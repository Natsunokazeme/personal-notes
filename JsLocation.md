1.geolocation(适用于手机)
通过navigator.geolocation这个API提供//首先确定浏览器是否支持该API
获取当前位置
navigator.geolocation.getCurrentPosition()
该函数是一个异步函数，第一个参数是定位成功时执行的回调函数，第二个参数是定位失败时执行的回调参数
定位成功时执行回调函数会传入一个position对象
position.coords.latitude表示当前纬度position.coords.longitude表示当前经度;
![avatar](/locationObject.png)

2.调用地图软件的API(需要地图软件为开发者提供的密钥)