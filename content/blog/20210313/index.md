---
title: IndexedDB(Dexie) + React でローカルにデータ保存
date: 2021-03-13
tags: ["Dexie", "React"]
---

[参考]https://qiita.com/haduki1208/items/10505925ed08cbca86d6)
[参考 2](https://www.codit.work/notes/25ykyi18blgmi8fkfi66/)
[参考 3](<https://dexie.org/docs/dexie-react-hooks/useLiveQuery()>)

ブラウザ単位でデータを永続化したかったので IndexedDB か localStorage を検討。今回はキーバリュー型のデータだったので IndexedDB を利用する

1. 下記のパッケージをインストール 　
   npm install dexie-react-hooks
   npm install dexie@v3.1.0-alpha.8
2. TypeScript なので IndexedDB のテーブル用の定義を作成

```typeScript

interface WordList {
  word: string;
  meaning: string;
}

```

3. Dexie を継承したクラスを作成

```typeScript
import Dexie, { Table } from "dexie";
class WordListDB extends Dexie {
  wordList!: Table<WordList, string>;

  constructor() {
    super("wordListDB");
    this.version(1).stores({
      wordList: `
        word,
        meaning`,
    });
  }
}
```

4. 下記のように Dexie の Table に実装されているメソッドを使ってデータを操作する(useLiveQuery はカスタムフック)

```typeScript
import { useLiveQuery } from "dexie-react-hooks";
const wordList = useLiveQuery(() => db.wordList.toArray();
db.wordList?.add({ word: target, meaning: res.data.message });
db.wordList.delete(row.word);

```

詰まった点

- delete 時にキー項目を指定する必要があったが、Table クラスを実装する際の第二引数に型を入れておらず、型不一致エラーが出ていた
- Dexie の Table クラスは配列では無いので、React 上で操作するためには toArray で配列化する必要があった
- 本来は Dexie を継承して作成したクラス内で操作系メソッドを実装した方が良さそう
