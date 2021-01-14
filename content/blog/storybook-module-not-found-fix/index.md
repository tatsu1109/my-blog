---
title: Storybook + Chromatic をGitHub Action上で動かした際のエラー修正
date: 2021-01-14
tags: ["gatsby", "amplify", "GitHub Action"]
---

StoryBook チュートリアルの[デプロイ](https://www.learnstorybook.com/intro-to-storybook/react/ja/deploy/)の[Chromatic を使う]で下記のエラー発生

```
ERROR in ./.storybook/storybook-init-framework-entry.js
Module not found: Error: You attempted to import .../my-app/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
You can either move it inside src/, or add a symlink to it from project's node_modules/.
```

npx sb init で Storybook 用プロジェクトを作成すると詳細は分からないがプロジェクトが壊れるらしい  
`remove @storybook/preset-create-react-app` をを実行後、プッシュし直すと動作するようになる

[参考にした Issue](https://github.com/storybookjs/storybook/issues/13593#issue-782676377)
