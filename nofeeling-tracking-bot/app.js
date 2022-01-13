// index.js
const line = require('@line/bot-sdk');
var express = require('express');
const config = {
    channelAccessToken: '+Cc5kz6L2hvil43yCN+WnnvJdryC9AXDMGAx0gqX5ktAmVyoCHQBggQZ0onJ+BIvTAtcfDWngK+U7nI0PaXEq4Tvmv1aYa/azaqmvbp+psmgKJHKdiBWo6mPY31CEByPxGTAEUAQvc5ZfbkkTQL33wdB04t89/1O/w1cDnyilFU=',
    channelSecret: 'dfca1b5f7fa0a4bd1ae97707248040fd'
};
// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: <https://expressjs.com/>

const message = {

    "type": "bubble",
    "hero": {
        "type": "image",
        "url": "https://ps.w.org/ultimate-member/assets/icon-256x256.png?rev=2143339",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
            "type": "uri",
            "uri": "http://linecorp.com/"
        }
    },
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {
                "type": "text",
                "text": "歡迎加入member官方帳號",
                "weight": "bold",
                "size": "lg"
            },
            {
                "type": "box",
                "layout": "vertical",
                "margin": "lg",
                "spacing": "sm",
                "contents": [
                    {
                        "type": "box",
                        "layout": "baseline",
                        "spacing": "none",
                        "contents": [
                            {
                                "type": "text",
                                "text": "歡迎加入住民SA系統，請填寫你的詳細資料。",
                                "wrap": true,
                                "color": "#666666",
                                "size": "sm",
                                "flex": 5
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
            {
                "type": "button",
                "style": "link",
                "height": "sm",
                "action": {
                    "type": "uri",
                    "label": "填寫我的詳細資料",
                    "uri": "https://linecorp.com"
                }
            },
            {
                "type": "spacer",
                "size": "sm"
            }
        ],
        "flex": 0
    }
}
const app = express();
// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
    console.log(req, res)
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result))
        .catch((err) => {
            console.error(err);
            res.status(500).end();
        });
});
// event handler
function handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
        // ignore non-text-message event
        return Promise.resolve(null);
    }
    // create a echoing text message
    const echo = { type: 'text', text: event.message.text };
    // use reply API
    return client.replyMessage(event.replyToken, echo);
}
// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});