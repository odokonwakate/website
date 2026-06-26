# 応用動物昆虫学会 若手の会 Website

応用動物昆虫学会 若手の会の公式ホームページ用リポジトリです。

公開ページ：  
https://odokonwakate.github.io/website/

---

## ディレクトリ構造

```text
website/
│
├── index.html
├── style.css
├── README.md
│
├── pages/
│   ├── news.html
│   ├── events.html
│   ├── activities.html
│   ├── members.html
│   └── contact.html
│
├── data/
│   ├── news.json
│   ├── events.json
│   ├── activities.json
│   └── members.json
│
├── js/
│   ├── load-news.js
│   ├── load-events.js
│   ├── load-activities.js
│   └── load-members.js
│
├── events/
│   └── 20260709_flash_talk.html
│
├── activities/
│   └── 2026/
│       ├── 20260328.html
│       └── 20260329.html
│
└── assets/
    ├── flyers/
    │   └── 2025_shoshukai.png
    │
    └── images/
        ├── common/
        │   ├── logo.png
        │   ├── icon.png
        │   ├── favicon.png
        │   └── ogp.png
        │
        ├── members/
        │   └── nanashi.png
        │
        ├── activities/
        │   └── 2026/
        │       ├── meeting01.png
        │       ├── meeting02.png
        │       ├── shoshukai_photo01.jpg
        │       ├── shoshukai_photo02.jpg
        │       ├── koryukai_photo01.jpg
        │       └── koryukai_photo02.jpg
        │
        └── events/
```

---

## 各ディレクトリ・ファイルの役割

### `index.html`

トップページです。

以下の内容を表示します。

- 若手の会について
- Slack参加登録フォームへのリンク
- 最新のお知らせ
- 主な活動
- 活動報告へのリンク

お知らせ部分は `data/news.json` から自動で読み込まれます。

---

### `style.css`

サイト全体のデザインを管理するCSSファイルです。

以下のデザインをまとめて管理しています。

- ヘッダー
- ナビゲーション
- ヒーローエリア
- お知らせ一覧
- イベント一覧
- 活動報告一覧
- メンバー一覧
- フッター
- スマートフォン表示

基本的にデザインを変更する場合は、このファイルを編集します。

---

## `pages/`

一覧ページ・固定ページを置くディレクトリです。

```text
pages/
├── news.html
├── events.html
├── activities.html
├── members.html
└── contact.html
```

### `pages/news.html`

お知らせ一覧ページです。

`data/news.json` を読み込み、年度ごとにお知らせを表示します。  
左側に年度リンク、右側に年度別のお知らせが表示されます。

### `pages/events.html`

イベント一覧ページです。

`data/events.json` を読み込み、イベント情報を一覧表示します。

### `pages/activities.html`

活動報告一覧ページです。

`data/activities.json` を読み込み、年度ごとに活動報告を表示します。  
左側に年度リンク、右側に年度別の活動報告が表示されます。

### `pages/members.html`

運営メンバー紹介ページです。

`data/members.json` を読み込み、現在の運営メンバーとAlumniを表示します。

### `pages/contact.html`

お問い合わせページです。

連絡先メールアドレスを掲載します。

---

## `data/`

サイト内で表示する情報を管理するJSONファイル群です。

HTMLを直接編集せず、JSONを更新することで一覧ページを更新できます。

```text
data/
├── news.json
├── events.json
├── activities.json
└── members.json
```

---

### `data/news.json`

お知らせを管理します。

例：

```json
[
  {
    "date": "2026.06.26",
    "title": "第1回 応動昆 若手の会 フラッシュトーク交流会を開催します。",
    "details": [
      "日時：2026年7月9日（木）18:30～",
      "形式：オンライン"
    ],
    "url": "/website/events/20260709_flash_talk.html"
  },
  {
    "date": "2026.06.26",
    "title": "応用動物昆虫学会 若手の会ホームページを公開しました。"
  }
]
```

#### 入力項目

| 項目 | 内容 |
|---|---|
| `date` | 掲載日 |
| `title` | お知らせ本文 |
| `details` | 補足情報。不要な場合は省略可 |
| `url` | 詳細ページへのリンク。不要な場合は省略可 |

トップページには最新5件が表示されます。  
お知らせ一覧ページには全件が年度別に表示されます。

---

### `data/events.json`

イベント情報を管理します。

例：

```json
[
  {
    "date": "2026.07.09",
    "title": "第1回 応動昆 若手の会 フラッシュトーク交流会",
    "details": [
      "日時：2026年7月9日（木）18:30～",
      "形式：オンライン"
    ],
    "url": "/website/events/20260709_flash_talk.html"
  }
]
```

#### 入力項目

| 項目 | 内容 |
|---|---|
| `date` | イベント日 |
| `title` | イベント名 |
| `details` | 日時・形式など |
| `url` | 詳細ページへのリンク。不要な場合は省略可 |

---

### `data/activities.json`

活動報告を管理します。

例：

```json
[
  {
    "year": "2026",
    "date": "2026.03.29",
    "title": "第70回日本応用動物昆虫学会大会にて若手交流会を開催しました",
    "summary": "学会期間中に若手交流会を開催しました。学生・若手研究者150名以上が参加し、研究紹介や情報交換を通じて活発な交流が行われました。",
    "image": "/website/assets/images/activities/2026/meeting02.png",
    "url": "/website/activities/2026/20260329.html"
  }
]
```

#### 入力項目

| 項目 | 内容 |
|---|---|
| `year` | 年度 |
| `date` | 活動日 |
| `title` | 活動報告タイトル |
| `summary` | 一覧ページに表示する要約 |
| `image` | 一覧ページに表示する画像 |
| `url` | 詳細ページへのリンク |

---

### `data/members.json`

運営メンバー情報を管理します。

例：

```json
{
  "current": [
    {
      "name": "片岡 孝介",
      "affiliation": "東京農工大学",
      "role": "代表",
      "fields": "コオロギ / 休眠 / 行動追跡AI",
      "image": "kataoka.png",
      "profile_url": "https://researchmap.jp/kosuke_kataoka"
    }
  ],
  "alumni": [
    "松浦 輝尚"
  ]
}
```

#### current の入力項目

| 項目 | 内容 |
|---|---|
| `name` | 氏名 |
| `affiliation` | 所属 |
| `role` | 若手の会での役割 |
| `fields` | 専門分野。スラッシュ区切り |
| `image` | 顔写真ファイル名 |
| `profile_url` | Researchmap等へのリンク。不要な場合は省略可 |

#### alumni

卒業した運営メンバーの氏名を文字列として追加します。

---

## `js/`

JSONを読み込んでHTMLへ表示するJavaScriptファイルを置いています。

```text
js/
├── load-news.js
├── load-events.js
├── load-activities.js
└── load-members.js
```

### `load-news.js`

`data/news.json` を読み込みます。

- トップページ：最新5件を表示
- お知らせ一覧：年度別に全件表示

### `load-events.js`

`data/events.json` を読み込み、イベント一覧を生成します。

### `load-activities.js`

`data/activities.json` を読み込み、年度別の活動報告を生成します。

### `load-members.js`

`data/members.json` を読み込み、運営メンバーとAlumniを生成します。

---

## `events/`

イベント詳細ページを置くディレクトリです。

例：

```text
events/
└── 20260709_flash_talk.html
```

イベント一覧ページやお知らせからリンクされます。

---

## `activities/`

活動報告の詳細ページを置くディレクトリです。

年度ごとにフォルダを作成して管理します。

```text
activities/
└── 2026/
    ├── 20260328.html
    └── 20260329.html
```

### 命名ルール

```text
activities/YYYY/YYYYMMDD.html
```

例：

```text
activities/2026/20260329.html
```

---

## `assets/`

画像・チラシなどの素材を置くディレクトリです。

```text
assets/
├── flyers/
└── images/
```

---

### `assets/flyers/`

チラシ画像を置きます。

例：

```text
assets/flyers/2025_shoshukai.png
```

---

### `assets/images/common/`

サイト共通画像を置きます。

例：

```text
assets/images/common/logo.png
assets/images/common/icon.png
assets/images/common/favicon.png
assets/images/common/ogp.png
```

---

### `assets/images/members/`

運営メンバーの顔写真を置きます。

例：

```text
assets/images/members/kataoka.png
assets/images/members/mine.png
assets/images/members/nanashi.png
```

#### 注意

`_nanashi.png` のように、ファイル名の先頭に `_` を使うと GitHub Pages で公開されないことがあります。  
ファイル名の先頭に `_` は使わないでください。

推奨：

```text
nanashi.png
kataoka.png
mine.png
```

---

### `assets/images/activities/`

活動報告用の画像を置きます。

年度ごとにフォルダを作成します。

```text
assets/images/activities/
└── 2026/
    ├── meeting01.png
    ├── meeting02.png
    ├── shoshukai_photo01.jpg
    ├── shoshukai_photo02.jpg
    ├── koryukai_photo01.jpg
    └── koryukai_photo02.jpg
```

---

### `assets/images/events/`

イベント用の画像を置きます。

必要に応じて使用します。

---

## 更新手順

### お知らせを追加する

1. `data/news.json` を開く
2. 一番上に新しい項目を追加する
3. Commitする

トップページとお知らせ一覧に自動反映されます。

---

### イベントを追加する

1. `data/events.json` にイベント情報を追加する
2. 詳細ページが必要な場合は `events/` にHTMLを追加する
3. `url` に詳細ページのパスを書く

---

### 活動報告を追加する

1. `assets/images/activities/YYYY/` に画像を追加する
2. `activities/YYYY/YYYYMMDD.html` に詳細ページを追加する
3. `data/activities.json` に活動情報を追加する

---

### 運営メンバーを更新する

1. 顔写真を `assets/images/members/` に追加する
2. `data/members.json` を編集する
3. Alumniは `alumni` に氏名を追加する

---

## リンクパスの注意

GitHub Pages上では、内部リンクは `/website/` から始めると安全です。

例：

```text
/website/events/20260709_flash_talk.html
/website/activities/2026/20260329.html
/website/assets/images/activities/2026/meeting02.png
```

HTMLファイル内で相対パスを書く場合は、ファイルの階層に注意してください。

例：

```html
<link rel="stylesheet" href="../../style.css">
<img src="../../assets/images/common/logo.png">
```

---

## 反映されないとき

GitHubへCommitしてから、公開ページに反映されるまで1〜2分かかることがあります。

表示が古い場合は、ブラウザで強制再読み込みしてください。

- macOS：`Command + Shift + R`
- Windows：`Ctrl + F5`

---

## 運用上の注意

- 個人情報や機密情報はGitHub Pagesに置かないでください。
- パスワード付きページをJavaScriptだけで作っても安全ではありません。
- 運営専用資料はGoogle Drive、Slack、Notionなどアクセス制限できる場所で管理してください。
- 画像ファイル名は英数字・ハイフン・アンダースコアを使い、日本語やスペースは避けてください。
- ファイル名の先頭に `_` を付けないでください。

---

## 今後の拡張候補

- 活動報告のトップページ最新表示
- イベントの年度別表示
- 英語ページ
- OGP画像の整備
- ヘッダー・フッターの共通化
