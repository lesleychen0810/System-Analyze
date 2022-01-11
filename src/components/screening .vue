<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="main">
      <div class="quarter-div blue">
        <div class="innerborder">
          <div>
            <p class="a">PCR檢測日期:</p>
            <p class="b">PCR檢測結果:</p>
            <p class="c">
              是否為確診者: <input type="radio" name="covid-119" value="y" /> 是
              <input type="radio" name="covid-119" value="n" /> 否
            </p>
          </div>
        </div>
      </div>
      <div class="quarter-div green">
        <h1 class="tt">檢測資料</h1>
        <div class="pf">
          <img alt="Vue logo" src="../assets/man.png" />
          <p class="p">姓名:</p>
        </div>
        <div class="personal">
          <p>身分證:</p>
          <p>居留證:</p>
          <p>護照:</p>
          <p>健保卡:</p>
        </div>
      </div>
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

<style type="text/css">
* {
  margin: 0;
  padding: 0;
}

.main {
  width: 70%;
  height: 90%;
  position: absolute;
  left: 10%;
  margin: 5%;
}

.quarter-div {
  width: 50%;
  height: 50%;
  float: left;
}

.blue {
  background-color: #dfc741b7;
  height: 100%;
}

.green {
  background-color: #dfc741b7;
  height: 100%;
}
</style>

    <style >
.outerbox {
  border-width: 3px;
  border-style: dashed;
  border-color: #ffac55;
  padding: 5px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1;
}

.thewrap {
  margin-top: 16px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.quarter-div {
  width: 50%;
  box-sizing: border-box;
  float: left;
  overflow: auto;
  border-style: solid;
}
.innerborder {
  border-width: 8px;
  border-style: dashed;

  padding: 5px;
  height: 86%;
  margin: 10%;
  background: rgba(17, 129, 204, 0.582);
  border-radius: 5%;
}
.tt {
  position: relative;
  left: 4%;
  top: 10%;
  color: rgb(27, 16, 2);
}

.pf img {
  position: relative;
  height: 30%;
  width: 30%;
  margin-top: 20%;
  margin-left: -50%;
}
.p {
  position: relative;
  left: 0%;
  margin-top: -24%;
  font-weight: bold; /*加粗 */
  font-size: 30px;
  color: rgb(27, 16, 2);
}

.personal {
  position: relative;
  margin-left: -50%;
  margin-top: 36%;
}

.personal p {
  font-size: 25px;
  font-weight: bold; /*加粗 */
  line-height: 1.5cm;
  color: rgb(27, 16, 2);
}
.a {
  position: relative;
  margin-top: 40%;
  margin-left: -40%;
  color: rgb(27, 16, 2);
  font-weight: bold; /*加粗 */
  font-size: 20px;
  line-height: 5cm;
}

.b {
  position: relative;
  margin-left: -40%;
  color: rgb(27, 16, 2);
  font-weight: bold; /*加粗 */
  font-size: 20px;
}
.c {
  position: relative;
  align-content: center;
  margin-top: 36%;

  color: rgb(27, 16, 2);
  font-weight: bold; /*加粗 */
  font-size: 25px;
}
</style>



