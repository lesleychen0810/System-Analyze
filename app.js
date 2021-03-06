const express = require('express')

const app = express()

app.post('/webhook', (req, res) => {
  app.json({})
})

app.listen(8080)

// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '1656782189',
  channelSecret: 'dfca1b5f7fa0a4bd1ae97707248040fd',
  channelAccessToken: '+Cc5kz6L2hvil43yCN+WnnvJdryC9AXDMGAx0gqX5ktAmVyoCHQBggQZ0onJ+BIvTAtcfDWngK+U7nI0PaXEq4Tvmv1aYa/azaqmvbp+psmgKJHKdiBWo6mPY31CEByPxGTAEUAQvc5ZfbkkTQL33wdB04t89/1O/w1cDnyilFU='
});

//在這個資料夾做一下firebase hosting的教程 你們用錯地方了 先這樣 有問題再問 謝謝

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(event.message.text).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});
