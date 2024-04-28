# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## バッチ実行

batch/load_contents.tx
ブログの前読み込み

- output
  - 2015
  - ・・・
  - 2024
    - 01
      - 各記事
      - 各記事
    - 02
      - 各記事
      - 各記事

node20 系では ts-node ではなく以下のコマンド

```
npx tsx ファイルパス
```

## mongo で user 作成

docker 起動時に自動的に読み込まれて下記のユーザーが作成されている

```
   // 管理者権限
  {
    _id: 'admin.admin',
    userId: UUID('xxxxxx'),
    user: 'admin',
    db: 'admin',
    credentials: {
      'SCRAM-SHA-1': {
        ・・・・
      },
      'SCRAM-SHA-256': {
        ・・・・
      }
    },
    roles: [ { role: 'userAdminAnyDatabase', db: 'admin' } ]
  },
  // ユーザー権限
  {
    _id: 'blog.bloguser',
    userId: UUID('xxxxx'),
    user: 'bloguser',
    db: 'blog',
    credentials: {
      'SCRAM-SHA-1': {
        ・・・・
      },
      'SCRAM-SHA-256': {
        ・・・・
      }
    },
    roles: [ { role: 'readWrite', db: 'blog' } ]
  }
]
```

ログイン時には下記

```
mongosh -u bloguser -p blogpass --authenticationDatabase "blog"
```

mongo どうやら最初は認証ロジックが効いていない模様・・・
