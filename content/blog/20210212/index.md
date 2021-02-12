---
title: create react app で作成したアプリをGithub Pagesで公開
date: 2021-02-12
tags: ["Gatsby", "Emotion"]
---

[参考(実行手順：英語)](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)
[参考(公開されないのを解決)](https://qiita.com/yuitnnn/items/11375ea29ec023d19fdf)

### 前提

- 無料版では Publish のみ公開可能。Private の場合は[この手順](https://qiita.com/HyunwookPark/items/1d24972dd71612eb81c9)で変更できる

1. gh-pages パッケージをインストール
   npm install gh-pages --save-dev

2. package.json に homepage 要素を加える
   "homepage":"http://{username}.github.io/{repo-name}"

- username は自分の github の登録名
- repo-name は公開対象のリポジトリ名

3. package.json の script 内に下記要素を追加する

"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}

4. github にリモートリポジトリを作成していなければ作成する
5. 作成したリポジトリを github 上で開き、Settings - GitHub Pages を確認する。source が指定されていない場合は gh-pages を指定する
6. 下記コマンドを実行し、Github Pages 用にデプロイする
   npm run deploy

7. コミット・プッシュする
