1.geolocation(适用于浏览器，手机最佳)
通过navigator.geolocation这个API提供//首先确定浏览器是否支持该API
获取当前位置
navigator.geolocation.getCurrentPosition()
该函数是一个异步函数，第一个参数是定位成功时执行的回调函数，第二个参数是定位失败时执行的回调参数
定位成功时执行回调函数会传入一个position对象
position.coords.latitude表示当前纬度position.coords.longitude表示当前经度;
![avatar](/locationObject.png)
获取到经纬度后调用Google Geocoder或者Google Maps解析成城市等具体信息

2.调用百度/腾讯/google地图软件的API(需要地图软件为开发者提供的密钥)

3.GeoIp //获取用户ip进行定位，需调用第三方库解析ip
    3.1 发送get请求获取IP
        $.getJSON(url, function(data) {
            var ip = data.Ip;//获取用户IP
        });//根据ip地址可解析到归属地，进一步则需要插件处理

4.基站定位//手机端且SIM卡启用
5.wifi定位()

成熟开源项目
leaflet，通过geolocation获取经纬度再直接用leaflet显示地图