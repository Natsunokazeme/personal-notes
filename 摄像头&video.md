//先确认浏览器是否支持该调用
//尝试调用浏览器的摄像头并弹出确认窗口，确认返回流，拒绝用catch捕捉
navigator.mediaDevices
        .getUserMedia(config)
        .then((straem) => {
          //将流用video标签展示出来
          video.current.srcObject = straem
          video.current.play()          
        })
        .catch(function (err) {
          console.log('error', err)
        })
浏览器支持不同的video格式，所以拍摄视频前先确认浏览器是否支持该格式
主要有webm，mp4，ogg三个大类mimeType
MediaRecorder.isTypeSupported(mimeType)
let recorder = new MediaRecorder
recorder.start(); recorder.stop();