---
title: AWS Lambda + API GatewayのAPIに対してaxiousでリクエストする際のメモ
date: 2021-03-06
tags: ["AWS", "Amazon Translate", "AWS Lambda", "API Gateway"]
---

- lambda の event には json 型で値が渡される
- event 内の body にリクエストボディが格納される
- body は base64 エンコードされている
- base64 デコードしたあと JSON パースする。下記のような例でリクエストボディをそのまま取得できる

```javaScript
    let payload = JSON.parse(Buffer.from(event.body, 'base64').toString('utf8'));
```
