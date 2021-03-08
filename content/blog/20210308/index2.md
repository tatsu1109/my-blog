---
title: useEffectとコンポーネントのイベントを同期させる
date: 2021-03-08
tags: ["React", "React Hooks"]
---

[参考](https://qiita.com/ossan-engineer/items/c3853315f59dc20bc9dc)

- useEffect の第二引数の配列に指定した変数が更新された際に useEffect 内の関数を再実行する
- input 要素の onChange 用変数の状態が変化した際に useEffect が再実行されるようにしていたが、文字が入力される度に再実行されてしまうため、別の useEffect 実行用の変数を設けて、そちらの変数をボタンクリック時に更新するようにして、そちらの変数を購読するようにした
- サンプルは[ここ](https://qiita.com/ossan-engineer/items/c3853315f59dc20bc9dc#%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%82%82%E3%81%97%E3%81%8F%E3%81%AF%E6%89%8B%E5%8B%95%E3%81%A7%E3%83%95%E3%83%83%E3%82%AF%E3%82%92%E3%83%88%E3%83%AA%E3%82%AC%E3%83%BC%E3%81%99%E3%82%8B%E3%81%AB%E3%81%AF)
