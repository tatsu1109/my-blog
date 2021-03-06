---
title: Clean Architectureの本 第4部
date: 2021-03-29
tags: ["Clean Architecture"]
---

[この本](https://www.amazon.co.jp/dp/B07FSBHS2V/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)

## 第 4 部 コンポーネントの原則

- SOLID 原則が煉瓦を組み合わせて壁や部屋を作るものだとすると、コンポーネントの原則は部屋を組み合わせて建物を作る方法

### 第 12 章 コンポーネント

- コンポーネントとはデプロイの最小単位のこと。システムの一部としデプロイできる最小の単位(Java であれば jar ファイルなど)
- 良くできたコンポーネントは常に個別にデプロイできる状態を保っている
- 動的にリンクされたファイルを実行時にプラグインできる(昔はプラグイン用のプログラムをメモリ上に置いておく余裕が無かったり、置けるようにメモリが増加しても呼び出し速度に問題が発生したりしていたが、近年やっと動的に呼び出せるようになってきた)

### 第 13 章 コンポーネントの凝集性

- どのクラスをどのコンポーネントに含めれば良いのかという原則
- 再利用・リリース等価の原則(REP)...再利用の単位とリリースの単位は等価になる  
  互換性を確認する意味でもリリース番号など付いていないとどのバージョンを使っているのかなど分からなくなってしまうので上手く再利用できない  
  コンポーネントには何かしらの一貫する目的やテーマがなければいけない  
  また、一つのコンポーネントを形成するクラスやモジュールはまとめてリリース可能でなければいけない  
  若干曖昧な原則であるため、他二つの原則ではこの内容を否定的な意味で扱っている
- 閉鎖性共通の原則(CCP)...同じ理由、同じタイミングで変更されるクラスをコンポーネントにまとめること。変更の理由やタイミングが異なるクラスは別のコンポーネントに分けること  
  これは単一責任の原則(SRP)をコンポーネント向けに言い換えたもの  
  オープンクローズドの原則とも密接に関連していて、閉鎖性とはクローズドと同じ意味  
  変更の種類が似ているクラスをひとつのコンポーネントにまとめておけば、要件変更があった際の変更箇所を最小限のコンポーネントに絞れる
- 全再利用の原則(CRP)...コンポーネントのユーザーに対して実際には使わないものへの依存を強要してはいけない  
  ひとつのクラスだけを再利用することはめったになく、他のクラスと組み合わせて再利用することは多い。そうしたクラスを同じコンポーネントにまとめるようにと書かれている  
  また、この原則ではどのクラスをひとまとめにすべきではないかということも伝えていて、コンポーネントに依存するのであればそのコンポーネントに含まれる全ての者へ依存するようにすべきであるとしている。使われないものが同じコンポーネントにあってはいけない  
  この原則はインターフェース分離の原則を一般化したものである
- これら 3 つの原則は相反するところがある  
  再利用・リリース等価の原則と閉鎖性共通の原則は包含関係にあり、コンポーネントを大きくするような原則で、全再利用の原則のコンポーネントを小さくしようとする性質と相反している
- これらの原則を現在のチームの懸念事項に見合った落としどころを見つけ利用することが大切
- また、懸念事項は開発が進むごとに変わっていくため、その時々で重要視する点を切り替えていく

### 第 14 章 コンポーネントの結合

- 非循環依存関係の原則(ADP)...コンポーネントの依存グラフに循環依存があってはいけない  
  前の日には動いていたが、他のコンポーネントなどに変更が加わり次の日には動かなく鳴ってしまった場合の例  
  この例を解決するために開発環境をリリース可能な単位に分割するという手法を扱う  
  ただし、この手法を正しく機能させるためにはコンポーネントの依存関係を管理し、循環依存が存在しないようにする必要がある  
  循環依存が発生すると元々対象としていたコンポーネントの範囲が循環依存しているコンポーネント全てに広がってしまい考慮しなければいけない内容が増え、対応が難しくなる  
  循環依存を取り除くためには依存関係逆転の原則を利用して、インターフェースを自分側に作成し、依存関係を逆転すればよい
- コンポーネントの構造をトップダウンで設計していくのは不可能であり、どんどん変化していくもの
- 安定依存の原則(SDP)...安定度の高い方向に依存すること。変動を想定したコンポーネントは変更しづらいコンポーネントから依存されてはいけない　　
  安定度が高いとは簡単には動かせないということ。ソフトウェアを変更しづらくするためには多数のソフトウェアコンポーネントから依存されるようにすればよい  
  他のコンポーネントから依存されているということは他のコンポーネントに対して責務を負っていると言う  
  他のコンポーネントに依存していないコンポーネントは外部要因で変更が必要になることはない独立コンポーネントと言う  
  逆に複数のコンポーネントに依存しているコンポーネントは複数の外部要因によって変更される可能性があり、従属コンポーネントと呼ぶ  
  コンポーネントの安定度を計測するためには依存している・されているコンポーネントの数を数えることで位置的なものは算出できる  
  全てのコンポーネントの安定度が高い場合、ソフトウェアへの変更はできなくなってしまうので高いものも低いものもあるようにしたい  
  この安定度を考えたコンポーネント同士の結びつきに対して安定依存の原則を適用し、安定度の低いコンポーネントに安定度の高いコンポーネントを依存させないようにする  
  もしこの原則に反している場合には依存関係逆転の法則で依存先のメソッドを宣言したインターフェースを作成し、依存先と依存元の両方をインターフェースに依存させる
- 安定度・抽象度等価の原則(SAP)...コンポーネントの抽象度はその安定度と同程度でなければいけない。安定度の高いコンポーネントは抽象度も高くあるべきで安定度の高さが拡張の妨げになってはいけない  
  コンポーネントの安定度を高くしようとすれば、拡張できるようにインターフェースと抽象クラスで構成すべき  
  安定度を低くしようとする場合は逆に具象クラスで構成する  
  安定度・抽象度等価の原則(SAP)と安定依存の原則(SDP)の組み合わせがコンポーネントバンの依存関係逆転の原則(DIP)に相当する。抽象度が高くなる方に依存すべき  
  ただし、依存関係逆転の法則はクラスの関係なので抽象クラスとそれ以外に分けきれるものの、コンポーネントの関係は安定度や抽象度が指標なのできちんと分けきれるものでは無い
  全てのコンポーネントを抽象度や安定度が理想的な状態とすることは不可能なので、作るべきではないコンポーネントの状態を調べていく
- 苦痛ゾーン...安定度が最高の具象コンポーネントはこの状態とされる。抽象度が低いため拡張することができず、安定度が高いため変更もしづらい。データベーススキーマはこのゾーンに属するため、変更に苦痛が伴う。  
  具象ユーティリティライブラリもここに属するが、変動制の低いコンポーネントであるため害はない
- 無駄ゾーン...最大限に抽象化されているが、それに依存するコンポーネントが存在しない。ゴミのようなもの
- 安定度と抽象度は依存入力・出力数やコンポーネント内の抽象・出力クラスの数で数値化でき、それを散布図化して苦痛ゾーン、無駄ーゾーンに近いものの再設計など検討することができる
