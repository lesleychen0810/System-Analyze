<template>


  <div class="hello">
     <img alt="Vue logo" src="../assets/logo.png">
    <h1>註冊介面</h1>
    <div class="b2">


3435

    </div>
   <!-- {{TwoWayBindingApp}}
  <div>
<a class="a1">54545</a>
  </div>-->


  </div>
</template>

<script>

/****************************************************************************/

/****************************************************************************/
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
  color:rgb(0, 0, 0)
  
}

.b2{
        
        margin-top: 50px;
        background: rgba(8, 109, 62, 0.404);
        border-radius: 30px;
        bottom: 80%;
        padding: 5px 15px;
        z-index: 10;
        width: 900px;
        height: 800px;
        align-content: center;
        position: absolute;
        top: 42%;
        left: 21%;
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
}

</style>
