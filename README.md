next.ts のプロジェクトの流れ

<!-- 随時テンプレを更新していく -->

# はじめに

next.ts での開発の流れを書いておけば、後々の個人開発や用務で役立つと思ったため

# 開発環境

使ったツール、コマンド、言語等の情報を記述。

# 解説

- プロジェクトスタート

```
npx create-next-app --example with-typescript app-name
npm install --save react react-dom next
```

- ESlint, Prettier の導入([こちらを参照](https://zenn.dev/hellorusk/articles/ceb6fee3da4991))

```
yarn add --dev eslint prettier eslint-plugin-react
yarn add --dev eslint-config-prettier eslint-plugin-prettier
yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

.eslintrc.js を作成

```
module.exports = {
    'env': {
        'browser': true,
        'es2020': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/essential',
        'plugin:@typescript-eslint/recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 11,
        'parser': '@typescript-eslint/parser',
        'sourceType': 'module'
    },
    'plugins': [
        'vue',
        '@typescript-eslint'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
```

- 必要なモジュールのインストール(プロジェクトごとに必要なインストールを行う)

```
yarn add @material-ui/core @material-ui/icons styled-components
```

```
npm i firebase
```

`src/lib/firebase.ts`を作成。中身は React の時と同様の書き方

これこれこういう意味である～

## 補足

解説した中でも、更に深く突っ込んで書きたいところがあれば書く。

## 最後に

書いてみての考察。
良かった点、悪かった点、次回への意気込み等。

##　参考リンク
[text](https://web-cheatsheet.com/)

##　その他よく使うマークダウン

- [] チェックリスト
- [x] チェックリスト

**太文字**

~~打ち消し線~~

- 水平線

---

- テーブル
  | left | right | center |
  |:-------|---------:|:--------:|
  | hoge | hoge | hoge |
  | foo | foo | foo |
  | bar | bar | bar |

- リンク
  [text](https://web-cheatsheet.com/)

- 画像
  ![alt](https://web-cheatsheet.com/icons/apple-touch-icon-114x114.png)
