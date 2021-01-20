---
title: React Hooksで子の状態を親で受け取るパターン
date: 2021-01-19
tags: ["javaScript"]
---

[この辺り](https://ja.reactjs.org/docs/lifting-state-up.html)を Hooks で書き直したようなパターン
親コンポーネントで Hooks の set 関数を含んだ関数を作成し、子コンポーネントの関数用の引数へ渡す
受け取った関数を子コンポーネントで実行する
下記の例で一応動くはず

```js
// 親コンポーネント
const Body = () => {
  const [data, setData] = useState()
  return (
    <div>
      {data}
      <Input
        handleChange={value => {
          setDate(value)
        }}
      />
    </div>
  )
}
// 子コンポーネント
const Input = handleChange => (
  <input onChange={event => handleChange(event.target.value)} />
)
```
