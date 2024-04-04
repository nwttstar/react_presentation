type pageType = {
  heading: string,
  body: string|React.ReactNode,
};

const pages:pageType[] = [
  {
    heading: '私の経歴',
    body:
      <>
        <p>
          UIやWebデザインなどのデザインに興味があり、大学はデザイン学部に進学いたしました。<br />
          卒業後は2年ほど福祉業界で働き、それから独学でWebアプリケーションなどを制作し、それをポートフォリオとしてIT業界に転職しました。<br />
        </p>
        <p>
          IT業界に転身後、1年ほどWeb制作会社様の方でフロントエンドエンジニアとしてWeb制作に携わっておりました。
        </p>
        <p>
          現職では3年ほどWebエンジニアを務めております。
          こちらでは主にLaravelとVue.jsを用いたWebアプリケーションを制作しております。フロントエンド・バックエンド双方を一貫して手がけております。
        </p>
      </>,
  },
  {
    heading: '私のスキルセット',
    body:
      <>
        <p>
          左に行くほど実務経験があり、慣れているものになります。
        </p>
        <h3>
          言語
        </h3>
        <p>
          JavaScript, PHP, HTML, CSS, TypeScript
        </p>
        <h3>
          フレームワーク・ライブラリ
        </h3>
        <p>
          Vue.js, Laravel, Nuxt.js, Vuetify, Tailwind, React.js, Next.js
        </p>
        <h3>
        DB
        </h3>
        <p>
          PostgreSQL, MySQL
        </p>
        <h3>
          その他
        </h3>
        <p>
          GitHub, Webpack, Docker
        </p>
      </>,
  },
  {
    heading: 'フロントエンドエンジニアとしての強み',
    body:
      <>
        <h2>
          Web開発における幅広い知見
        </h2>
        <ul>
          <li>
            大学でデザインを勉強したことと、Web制作会社にいたことでUIやWebデザインに関する知見がある
          </li>
          <li>
            Web制作会社にて、HTMLとCSSを丁寧に書いていた
          </li>
          <li>
            フロントが扱うWebAPIを実際に自分の手で実装していた
          </li>
          <li>
            自己研鑽としていくつかWebアプリケーションを制作してきた。企画から技術選定、プロジェクト作成、デザイン・フロント・バックエンドの実装、デプロイまで全て1人で行う
          </li>
        </ul>
        <p>
          ⇨ 以上のWebに関する広い知見を持つことで、フロントエンド開発において、保守性に優れた設計に活かすことができます。デザイン変更に耐えられたり、柔軟性のあるコンポーネント設計に繋がると考えます。
        </p>
      </>,
  },
  {
    heading: 'フロントエンドエンジニアとしての強み',
    body:
      <>
        <h2>
          バックエンドをしっかりと経験していること
        </h2>
        <ul>
          <li>
            リレーショナルデータベースでデータベースを構築
          </li>
          <li>
            実際にデータベースからデータを取得してフロントエンドにWebAPIとして渡す
          </li>
          <li>
            単体テストや結合テストを書きながらAPIを実装する
          </li>
          <li>
            docker、ユーザー認証、メールなどの周辺技術を経験、Laravelという大きなフレームワークを扱った経験
          </li>
        </ul>
        <p>
          ⇨ 以上の経験から、Webエンジニアとしての技術が磨かれました。
        </p>
      </>,
  },
  {
    heading: 'フロントエンドエンジニアとしての強み',
    body:
      <>
        <h2>
          自走力
        </h2>
        <ul>
          <li>
            大学はデザイン学部で、新卒では福祉業界に入った。それまでITから離れた場所にいた。完全未経験から独学で勉強をしてエンジニアになった
          </li>
          <li>
            自己研鑽においても、スクールやメンターには頼らず、自分の手でアプリケーションを作りながら学んできた。躓いたところがあっても、解決するまで粘り強く向き合ってきた
          </li>
          <li>
            業務においても同じで、すべて未経験のものをやってきた。既存のソースコードを読み込んだり、公式ドキュメントを使いながら、自分の力で取り組んできた
          </li>
        </ul>
        <p>
          現在の会社では、バックエンドは実務未経験で入社しました。<br />
          入社すぐからLaravelを用いたフロント・バックエンド実装を任されて、初めこそ苦労したものの、今では裁量のある実装を任されるようになりました。
        </p>
        <p>
          具体的には、基本設計以外のほとんどを一任されています。
        </p>
      </>,
  },
  {
    heading: '私の目標',
    body:
      <>
        <p>
          今後もフロントエンドエンジニアとしてスキルアップをして、アプリケーション開発に貢献していきたいと考えております。<br />
          自分が開発に携わったアプリケーションをユーザーに触っていただいて、喜んで欲しいです。
        </p>
        <p>
          その先にあるものとして、制作したアプリケーションができることを通して、社会貢献ができればと思います。<br />
          例えば医療系のアプリケーションなら、そのアプリケーション開発に携わることで、医療の助けになれると思います。
        </p>
        <p>
          目の前のユーザーだけでなく、様々な人の助けになれるような、自分を誇れるような仕事につきたいと考えております。
        </p>
      </>,
  },
];

export default pages