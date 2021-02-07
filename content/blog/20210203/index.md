---
title: AWS Web Services 基礎からのネットワーク＆サーバー構築 Chapter6～7
date: 2021-02-03
tags: ["AWS"]
---

[Kindle](AWS Web Services 基礎からのネットワーク＆サーバー構築)

## Chapter6 プライベートサブネットを構築する

1. プライベートサブネットの利点

- プライベートサブネット = インターネットから直接接続できない、インターネットからサーバーなどを隠すことができるサブネット

2. プライベートサブネットを作る

- アベイラビリティーゾーンはパブリックサブネットと同じ
- ルートテーブルはデフォルトの自身のネットワーク向きのもののみ

3. プライベートサブネットにサーバーを構築する

- パブリックサブネットにサーバーを作成した際とほぼ同様の手法でプライベートサブネットにサーバーを作成する。異なる内容は下記の内容
  - 自動割り当てパブリック IP は無効化を選択

4. 踏み台サーバーを経由して SSH で接続する

- DB サーバーソフトをインストールするため、Web サーバー →DB サーバーという流れで SSH でアクセスする
- ログインはできたが、DB サーバー → インターネットの接続はできないため、次の章で NAT という仕組みを用いてインターネットに接続する

## Chapter7 プライベートサブネットを構築する

1. NAT の用途と必要性

- NAT(Network Address Translation)
- NAT は IP アドレスを変換する装置で 2 つのネットワークインターフェースを持つ
- 片側のインターフェースには一般にパブリック IP アドレスを設定し、もう片側はプライベート IP アドレスを設定する
- プライベートサブネットに存在するホストがインターネットにパケットを送信しようとした時、NAT によってパブリック IP アドレスに変換して接続される
- 応答パケットも NAT に戻ってくるが、元のプライベートサブネットに存在するホストの IP アドレスに変換して転送してくれる
- NAT の場合、インターネットからプライベートサブネットに接続することはできない
- AWS では NAT ゲートウェイという機能を用いて NAT を利用することができる

2. NAT ゲートウェイを構築する

- NAT ゲートウェイとパブリックサブネットを結びつけ、Elastic IP アドレスを付与する
- インターネット接続時のルートテーブルの向き先を NAT ゲートウェイに変更する