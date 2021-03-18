---
title: ローディングアイコンを追加
date: 2021-03-18
tags: ["material-ui", "React"]
---

[参考](https://material-ui.com/components/progress/)

ボタンの横にローディング用のアイコンを表示するようにした  
ローディング用の状態を保持して、非同期通信の開始と終わりで状態を切り替えてローディングアイコンをオンオフする

```JavaScript
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    /// 何らかの非同期処理
    setLoading(false)
})

  return (
    <div>
      <IconButton>
        <AddCircleOutline />
      </IconButton>
      {loading && <CircularProgress size={24} />}
    </div>
  )
}

```
