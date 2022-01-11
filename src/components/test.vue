<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="b1">


     <form>
      
      請輸入帳號：<input type="text" name="欄位名稱"> <br><br>
       請輸入密碼：<input type="text" name="欄位名稱"><br><br><br><br>

       <router-link :to="{path: '/login'}">登入</router-link>
             &emsp;&emsp;


           <router-link :to="{path: '/register'}">註冊</router-link>



          <!--<input v-model="message" />-->
     </form>

    </div>
   <!-- {{TwoWayBindingApp}}
  <div>
<a class="a1">54545</a>
  </div>-->


  </div>


</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    //<script>
    const TwoWayBindingApp = "Hello Vue!"
    
    
    
    return { TwoWayBindingApp };
    
  }
};

</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 100px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #3c8363;
}

table {
  align-content: center;
}

.a1{
color: black;
}
</style>

<style>

a{
  color: black;
}

form{
  padding: 100px;
  font-size: 25px;
  color:rgb(0, 0, 0);
  
}

.b1{
        
        margin-top: 50px;
        background: rgba(8, 109, 62, 0.404);
        border-radius: 30px;
        bottom: 80%;
        padding: 5px 15px;
        z-index: 10;
        width: 700px;
        height: 350px;
        align-content: center;
        position: absolute;
        top: 42%;
        left: 31%;
        
}

.a01{
font-size: 15px;
}

input{
  padding: 10px;
  border: none; 
  border:solid 1px #ccc;
  border-radius: 50px;
  color: rgb(6, 102, 38);
  font-size: 20px;
  font-family:"DFKai-sb";
}

</style>
