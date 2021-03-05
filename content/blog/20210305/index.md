---
title: Amazon Translate + AWS Lambda + API Gatewayで翻訳API作成
date: 2021-03-05
tags: ["AWS", "Amazon Translate", "AWS Lambda", "API Gateway"]
---

[参考](https://idealive.jp/blog/2019/10/16/amazon-translate-%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B/)
[API Gateway request](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html?icmpid=docs_lambda_console)
[HTTP API](https://qiita.com/Seimy-ns/items/4c806ad084dd217ed519)

- Google Translate API を使おうとしたが、Amason の方にも翻訳 API があるとのことだったので、既に使ったことのある AWS の方で試した

- 実施手順は下記の内容
  1. IAM ユーザとして Lambda 実行ロールと TranslateReadOnly を付与したユーザを作成
     [AWS Lambda 実行ロール](https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/lambda-intro-execution-role.html)
  2. Lambda を開き、翻訳用の関数を作成。参考のサイトの内容を参照し、リクエストを受け取る部分のみ body から取得し、さらに JSON で parse するように修正
  3. 作成した関数のトリガーを追加から API Gateway から呼び出せるように設定。HTTP API の方が単純な API として作れるのでそちらで作成
  4. 作成後、表示される URL からデータを取得できるようになっている
