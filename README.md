（デザイントークン管理案 お試し環境）

## Figma, Style Dictionary, Tailwind, Storybook 検証

### 目的

- デザイントークンの命名規則を統一し、管理しやすくする。
- Style Dictionary の設定をカスタマイズし、プロジェクトに合わせた形式でトークンを変換。
- Storybook を活用してデザイントークンを可視化し、開発者との連携を強化。
- デザイントークンの変更を迅速かつ安全に反映できる仕組みを構築。

### 1\. Figma でデザイントークンを定義

- Figma の Local Variables または Tokens Studio プラグインを活用して、カラートークン、タイポグラフィトークン、スペーシングトークンなどを。
- トークン名は、開発側でも理解しやすい命名規則 (例: `color-primary-500`, `font-size-md`, `spacing-lg`) に統一。
- 必要に応じて、トークンに説明文やカテゴリーを追加し、管理しやすくする。

### 2\. デザイントークンを JSON 形式でエクスポート

- Figma で定義したデザイントークンを JSON 形式でエクスポート。
- Tokens Studio プラグインを使用している場合は、GitHub と連携して自動で JSON ファイルを push する設定も可能らしいが使うかは検討。

### 3\. Style Dictionary で各種プラットフォームに対応した形式に変換

- Style Dictionary を導入し、JSON 形式のデザイントークンを CSS Variables (カスタムプロパティ)、JavaScript のオブジェクト、iOS や Android の形式など、必要な形式に変換。
- 変換設定 (`config.js`) を記述し、トークンの命名規則や出力形式をカスタマイズ。
- Style Dictionary の設定で Tailwind の設定ファイル (`tailwind.config.js`) を生成。

### 4\. Storybook でデザイントークンを Story として表示

- Storybook にデザイントークンを Story として表示する仕組みを導入。
- これにより、デザイントークンの一覧を Storybook 上で確認でき、開発者との共有やデザインレビューに役立つ。
- Storybook の Addon-designs プラグインを使用すると、Figma のデザインと Storybook のコンポーネントを並べて表示でき、デザインと実装の乖離を防ぐ。

### 5\. Tailwind CSS でデザイントークンを適用

- Style Dictionary で生成した Tailwind の設定ファイルを Tailwind プロジェクトに読み込む。
- Figma で定義したデザイントークンを Tailwind のユーティリティクラスとして使用し、コンポーネントにスタイルを適用。
  - 例: `<div className="bg-color-primary-500 text-font-size-md">こんにちは</div>`

### 6\. デザイントークンの変更を反映

- Figma でデザイントークンを変更した場合、JSON ファイルをエクスポートし、Style Dictionary を実行して各種形式に変換。
- Storybook を更新し、変更内容を確認。
- Tailwind プロジェクトで Tailwind CSS を再構築し、変更内容をコンポーネントに反映。

### 参考情報

- Style Dictionary のドキュメント: [https://github.com/amzn/style-dictionary](https://www.google.com/url?sa=E&source=gmail&q=https://github.com/amzn/style-dictionary)
- Tokens Studio のドキュメント: [https://tokens.studio/](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=https://tokens.studio/)
- Storybook のドキュメント: [https://storybook.js.org/](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=https://storybook.js.org/)
- Tailwind CSS のドキュメント: [https://tailwindui.com/](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=https://tailwindui.com/)
