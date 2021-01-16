---
title: Amplify + DynamoDB + AWS AppSync + Reactの導入
date: 2021-01-16
tags: ["Amplify", "react", "AWS AppSync"]
---

1. DynamoDB でテーブルを作成
   DynamoDB のページから手順に沿って進める
2. 作成したテーブルを対象に AWS AppSync で API を作成
   AWS AppSync のページから手順に沿って進める
3. API を作成すると画面遷移し、「新しい API へようこそ! このページを使用して、クエリを実行して API をテストします。 次に、アプリと統合する方法について学習します」のようなメッセージが出てくるのでメッセージのリンク先に飛ぶ
4. 「アプリと統合する」の項目のコマンドを実行する
5. [connect-frontend-to-api](https://docs.amplify.aws/start/getting-started/data-model/q/integration/react#connect-frontend-to-api)の
   ページを参考に自分のソースに GraphQL 呼び出しを加える
   一応下記のような内容があれば GraphQL でデータが呼び出せるはず

```js
import React, { useState, useEffect } from "react"
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { listTriggerMasters } from "./graphql/queries"
import awsExports from "./aws-exports"

Amplify.configure(awsExports)
const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTriggerMasters))
      const todos = todoData.data
      setData(todos)
    } catch (err) {
      console.log("error fetching todos")
    }
  }

  return <div />
}
```
