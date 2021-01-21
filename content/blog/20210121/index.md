---
title: React Hooksで制御されたコンポーネントを用いたバリデーション
date: 2021-01-21
tags: ["React", "validation"]
---

[この辺り](https://ja.reactjs.org/docs/forms.html)の select 部分を参照
import 等無いので動かないが下記のようなコードで作成
複数プルダウンリストを作成し、それぞれに同じ値が入った場合エラーを alert で表示し、値を None の状態に戻したかった
子コンポーネントに自身の状態を配置し、それの Setter を onChange 時の関数に引数として渡して親で値をセットすることでこの状態を書き換え再レンダリングさせた。状態を個々のコンポーネントと親コンポーネントの両方で持ってしまっているのでもっと良いやり方がありそう

```js
// 親コンポーネント
export default function FormGroupWithLabel({
  label,
  data,
  listCount,
  noneData,
}) {
  const classes = useStyles()
  const [selectedList, setSelectedList] = useState(new Map())

  const handleChange = (data, index, setter) => {
    for (const value of selectedList.values()) {
      if (value === data) {
        alert("同じ項目は選択できません")
        setSelectedList(selectedList.set(index, noneData))
        setter(noneData)
        return
      }
    }
    setSelectedList(selectedList.set(index, data))
    setter(data)
  }

  return (
    <FormGroup className={classes.area}>
      <div className={classes.area__label}>{label}</div>
      {[...Array(listCount)].map((_, index) => (
        <CategoryList
          handleChange={(value, setter) => handleChange(value, index, setter)}
          key={index}
          data={data}
          noneData={noneData}
        />
      ))}
    </FormGroup>
  )
}

// 子コンポーネント
export default function CategoryList({ data, noneData, handleChange }) {
  const classes = useStyles()
  const [selected, setSelected] = useState(noneData)

  return (
    <FormControl className={classes.formControl}>
      <Select
        native
        id="grouped-select"
        onChange={event => handleChange(event.target.value, setSelected)}
        value={selected}
      >
        <option value={noneData}>{noneData}</option>
        {data.map(item => {
          return (
            <optgroup key={item.category} label={item.category}>
              {item.itemList.map(detailItem => (
                <option key={detailItem} value={detailItem}>
                  {detailItem}
                </option>
              ))}
            </optgroup>
          )
        })}
      </Select>
    </FormControl>
  )
}
```
