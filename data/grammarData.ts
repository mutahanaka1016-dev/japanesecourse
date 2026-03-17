export interface GrammarPoint {
  id: string;
  text: string;
}

export interface GrammarCategory {
  id: string;
  title: string;
  points: GrammarPoint[];
}

export interface LevelData {
  level: string;
  description: string;
  categories: GrammarCategory[];
}

export const grammarData: LevelData[] = [
  {
    level: "初級",
    description: "基礎を固めて、自分のことを話せるようになるステップです。",
    categories: [
      {
        id: "basic-1",
        title: "文字と挨拶",
        points: [
          { id: "hira-kata", text: "ひらがな・カタカナの習得" },
          { id: "greeting", text: "日常の挨拶と自己紹介" }
        ]
      },
      {
        id: "basic-2",
        title: "基本の文法",
        points: [
          { id: "desu-masu", text: "「〜です・〜ます」の形" },
          { id: "particles", text: "基本的な助詞（は・の・に・を）" }
        ]
      }
    ]
  },
  {
    level: "中級",
    description: "表現の幅を広げ、より自然なコミュニケーションを目指します。",
    categories: [
      {
        id: "int-1",
        title: "動詞の活用",
        points: [
          { id: "te-form", text: "て形・た形・辞書形の使い分け" },
          { id: "natural-exp", text: "カジュアルな話し言葉と敬語" }
        ]
      }
    ]
  },
  {
    level: "旅行活用",
    description: "日本旅行ですぐに使える実践的なフレーズ集です。",
    categories: [
      {
        id: "travel-1",
        title: "サバイバル日本語",
        points: [
          { id: "order", text: "レストランでの注文・会計" },
          { id: "direction", text: "駅や街中での行き方確認" }
        ]
      }
    ]
  }
];
