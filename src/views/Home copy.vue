<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>註冊個人資料</h1>

    <div class="b3">
      <div class="pic1">
        <img alt="Vue logo" src="../assets/girl.png" />
        <img alt="Vue logo" src="../assets/man.png" />
      </div>

      <form>
        <div class="name">
          姓名：<input type="text" name="欄位名稱" /> <br /><br />
          原始姓名：<input type="text" name="欄位名稱" /><br /><br />
          身分證/護照/居留證：<input
            type="text"
            name="欄位名稱"
            onkeyup="value=value.replace([\w]/g.'')"
            maxlength="13"
          />
          <br /><br />
          <!--限制英文數字13字元-->
          健保卡：<input
            type="text"
            name="欄位名稱"
            onkeyup="this.value=this.value.replace(/\D/g,'')"
            maxlength="12"
          />
          <br /><br />
          <!--限制數字12字元-->
          地址：<input type="text" name="欄位名稱" /> <br /><br />
          聯絡地址：<input type="text" name="欄位名稱" /> <br /><br />
          聯絡電話：<input type="text" name="欄位名稱" /> <br /><br />
          電子郵件：<input type="text" name="欄位名稱" /> <br /><br />
          工作就職地點：<input type="text" name="欄位名稱" /> <br /><br />
          關係人姓名：<input type="text" name="欄位名稱" /> <br /><br />
          關係人電話：<input
            type="text"
            name="欄位名稱"
            onkeyup="this.value=this.value.replace(/\D/g,'')"
          />
          <br /><br />
          <!--限制數字-->
          在台關係人身分證：<input
            type="text"
            name="欄位名稱"
            onkeyup="value=value.replace([\w]/g.'')"
            maxlength="13"
          />
          <br /><br />
          <!--限制英文數字13字元-->
        </div>

        <div class="QQ">
          <router-link :to="{ path: '/' }">取消</router-link>
          &emsp;&emsp;&emsp;

          <router-link :to="{ path: '/register' }">確認</router-link>
        </div>

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
    const TwoWayBindingApp = "Hello Vue!";

    return { TwoWayBindingApp };
  },
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

.a1 {
  color: black;
}
</style>

<style>
a {
  color: black;
}

form {
  padding: 100px;
  font-size: 25px;
  color: rgb(7, 7, 7);
  font-weight: bold; /*加粗 */
}

.name {
  text-align: left;
  color: rgb(11, 40, 95);
  font-size: 20px;
  font-weight: bold; /*加粗 */
}
.b3 {
  margin-top: 50px;
  background: rgba(64, 153, 212, 0.404);
  border-radius: 30px;
  bottom: 80%;
  padding: 5px 15px;
  z-index: 10;
  width: 700px;
  height: 1300px; /*綠框框的高 */
  align-content: center;
  position: absolute;
  top: 42%;
  left: 31%;
}

.a01 {
  font-size: 15px;
}

input {
  padding: 10px;
  border: none;
  border: solid 1px #ccc;
  border-radius: 500px;
  color: rgb(6, 20, 102);
  font-size: 20px;
}

.pic1 img {
  margin-top: 50px;
  width: 20%;
  height: 20%;
}

.QQ {
  text-align: center;
}
</style>