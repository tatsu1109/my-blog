---
title: AWS Web Services 基礎からのネットワーク＆サーバー構築 Chapter2
date: 2021-01-28
tags: ["AWS"]
---

[Kindle](AWS Web Services 基礎からのネットワーク＆サーバー構築)

## Chapter2 ネットワークを構築する

1. ネットワークで用いる IP アドレス範囲を定める

- インターネットで使用する IP アドレスは「ICANN」が管理している
- インターネット上で使われる IP アドレス=パブリック(グローバル)IP アドレス
- インターネット上では使われない IP アドレス=プライベート IP アドレス
- IP アドレスの範囲は 2 の n 乗個で区切る
- IP アドレスの前半部分をネットワーク部、後半部分をホスト部と呼ぶ
- ネットワーク部は同じネットワークに属する限りは同じ値が入り、ホスト部はそれぞれの機器やサーバーごとに割り当てられる
- IP アドレスの範囲の表現はそのまま記載すると長いため、CIDR 表記、もしくはサブネットマスク表記が使われる
  - CIDR 表記…IP アドレスを 2 進数で表記した時、「ネットワーク部のビット長」を「/ビット長」で示す方法。このビット長のことをプレフィックスと呼ぶ  
    「192.168.1.0 ~ 192.168.1.255」の場合、「192.168.1.0/24」となる
  - サブネットマスク表記…プレフィックスのビット数だけ 2 進数の 1 を並べ、残りは 0 を表記した記述  
    「192.168.1.0 ~ 192.168.1.255」の場合、「192.168.1.0/255.255.255.0」となる

2. 実験用の VPC を作成する
3. VPC をサブネットに分割する

- 実際の運用では割り当てられた CIDR ブロックをそのまま使わず、さらに細分化することが多い(/16 で割り当てられたブロックを更に/24 の大きさに分けるなど)。これをサブネットという
- サブネットに分割する理由
  1. 物理的な隔離…1 階と 2 階でサブネットをわけ、障害など発生した場合の影響が出にくくなるようにする
  2. セキュリティ上の理由…「経理部のネットワーク」など他の部署からアクセスさせたくない場合

4. インターネット回線とルーティング

- ネットワークにデータを流すためにはルーティング情報と呼ばれる設定が必要
- TCP/IP ではデータを細切れにしたパケットという単位でデータが送受信される
- パケットは様々なヘッダー情報とデータの実態を含んでいて、ヘッダーには宛先 IP アドレスが含まれている
- ルーターがこの宛先 IP アドレスを参照し、最も宛先 IP アドレスに近い方のネットワークへパケットを送信していき、最終目的地までパケットを届かせる
- ルーターがどちらのネットワークがルーターに近いか知らなければ、パケットが相手に届かない場合もある
- これを解決するため、「宛先 IP アドレスの値が、いくつの時には、どのネットワークに流すべきか」という設定がルートテーブル(ルーティング情報の設定)となっている
- 「0.0.0.0/0」に対する転送先の設定は全ての IP アドレス範囲の設定であり、何も転送先が設定されていない場合のデフォルトの転送先の設定となる。この設定をデフォルトゲートウェイと呼ぶ
