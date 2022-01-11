<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>跑馬燈</title>
    <!-- 引入vue.js文件-->
    <script src="../vue.js"></script>
 <style type="text/css">
  #app{
   padding: 20px;
  }
 </style>
</head>
<body>
<div id="app">
    <button @click="run">應援</button>
    <button @click="stop">暫停</button>
 <h3>{{msg}}</h3>
</div>
<script>
    new Vue({
        el:"#app",
        data:{
            msg:"朋友朋友我愛你，就像老鼠愛大米~~~!",
            timer:null //在data上定義定時器timer，默認為null
        },
        methods:{
            run(){
    // 如果timer已經賦值就返回
                if(this.timer){return};
                this.timer = setInterval(() => {
     // msg分割為數組
     var arr = this.msg.split('');
     // shift刪除並返回刪除的那個，push添加到最後
     // 把數組第一個元素放入到最後面
     arr.push(arr.shift());
     // arr.join('')吧數組連接為字符串復制給msg
     this.msg = arr.join('');
                },100)
            },
            stop(){
                //清除定時器
                clearInterval(this.timer);
                //清除定時器之後，需要重新將定時器置為null
                this.timer = null;
            }
        }
    })
</script>
</body>
</html>