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
  channelSecret: '6f626872423aace575f5dc2a665e010a',
  channelAccessToken: 'g2s2BSvIX2PT6hjQkJMJkScpunFTIdm/bqumajeL/86yxp2Ier/aJaRgv66liIWgTAtcfDWngK+U7nI0PaXEq4Tvmv1aYa/azaqmvbp+psmyBop7IclDW1TYLyUVKL/XHsaxnYqud0UPcpoEDMaz0QdB04t89/1O/w1cDnyilFU='
});

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
