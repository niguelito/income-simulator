import { LangLocalization } from './Language';

export default class ja_jp implements LangLocalization {
  name: string = '日本語';
  localization = 'ja_jp';
  translations: Record<string, string> = {
    'game.title': '収入シミュレーター',
    'game.money': 'お金: ¥{0}',
    'game.currency': '¥{0}',
    
    'screen.money': "お金",
    'screen.upgrades': "アップグレード",
    'screen.modifiers': "修飾子",
    'screen.statistics': "統計",
    'screen.casino': 'カジノ',
    'screen.prestige': 'プレステージ',
    'screen.settings': '設定',

    'screen.money.income': "収入: ¥{0}",
    'screen.money.infinity': "無限",
    'screen.money.earn': "稼ぐ",
    'screen.money.extra': "追加クリック:",
    'screen.money.extra.amount': '{0} (+{1} / クリック)',
    'screen.money.extra.use': '使用',

    'screen.upgrades.locked': 'このアップグレードはまだ解除されていません...',
    'screen.upgrades.unlock': '解除',
    'screen.upgrades.unlocked': '解除済み！',
    'screen.upgrades.bonus': '収入 + {0}',

    'screen.modifiers.incomeBonus': '収入ボーナス',
    'screen.modifiers.incomeBonus.description': '収入を10%増加させます。',
    'screen.modifiers.extraClicks': '追加クリック',
    'screen.modifiers.extraClicks.description': 'クリックごとの追加クリック数を0.1増加させます。',
    'screen.modifiers.buy': '購入',
    'screen.modifiers.maxed': '最大レベル！',

    'screen.statistics.money': 'お金',
    'screen.statistics.allTime': '総収益: ¥{0}',
    'screen.statistics.allTimeSpent': '総支出: ¥{0}',
    'screen.statistics.income': '収入',
    'screen.statistics.incomeBonus': '収入ボーナス: {0} (+{1}%)',
    'screen.statistics.prestigePoints': 'プレステージポイント: {0} (+{1}%)',
    'screen.statistics.upgrades': 'アップグレード: {0} / {1} (収入 + {2})',

    'screen.casino.gamble': 'ギャンブル！',
    'screen.casino.allIn': 'すべてを賭ける！',
    'screen.casino.spin': 'スピンして勝利！',
    'screen.casino.win.lose': '負けました！次はがんばりましょう...',
    'screen.casino.win.small': '小さな勝利！賭け金の3倍の勝利！',
    'screen.casino.win.medium': '中規模の勝利！賭け金の8倍の勝利！',
    'screen.casino.win.large': '大きな勝利！賭け金の15倍の勝利！',
    'screen.casino.win.jackpot': 'ジャックポット！賭け金の25倍の勝利！',
    'screen.casino.win.goldrush': 'ゴールドラッシュ！賭け金の50倍の勝利！',
    'screen.casino.help': 'カジノヘルプ',
    'screen.casino.help.close': '閉じる',
    'screen.casino.help.description': 'カジノはお金を賭けてさらにお金を稼ぐことができる場所です。持っているお金の任意の額を賭けることができ、賞金を獲得するチャンスがあります。獲得できる賞金は取得したシンボルによって異なります。',
    'screen.casino.help.symbols': '合計{0}のシンボルがあります。各シンボルは同じ確率で表示されます。以下はシンボルの一覧です。',
    'screen.casino.help.symbols.symbol': 'シンボル',
    'screen.casino.help.symbols.status': 'タイプ',
    'screen.casino.help.symbols.status.matching': '一致',
    'screen.casino.help.symbols.status.dice': 'サイコロ',
    'screen.casino.help.symbols.status.seven': '7',
    'screen.casino.help.symbols.status.unknown': '不明',
    'screen.casino.help.symbols.types': '3つのタイプのシンボルがあります：一致、サイコロ、7。取得したシンボルによって、異なる賞品が獲得できます。以下は賞金の一覧です。',
    'screen.casino.help.symbols.types.none': '一致するシンボルがない = 敗北',
    'screen.casino.help.symbols.types.small': '2つの一致するシンボル = 小さな勝利（賭け金の3倍）',
    'screen.casino.help.symbols.types.small2': '2つの異なるサイコロ = 小さな勝利（賭け金の3倍）',
    'screen.casino.help.symbols.types.medium': '1つの7 = 中規模の勝利（賭け金の8倍）',
    'screen.casino.help.symbols.types.medium2': '2つの一致するサイコロ = 中規模の勝利（賭け金の8倍）',
    'screen.casino.help.symbols.types.large': '3つの一致するシンボル = 大きな勝利（賭け金の15倍）',
    'screen.casino.help.symbols.types.large2': '3つの異なるサイコロ = 大きな勝利（賭け金の15倍）',
    'screen.casino.help.symbols.types.jackpot': '2つの7 = ジャックポット（賭け金の25倍）',
    'screen.casino.help.symbols.types.jackpot2': '3つの一致するサイコロ = ジャックポット（賭け金の25倍）',
    'screen.casino.help.symbols.types.goldrush': '3つの7 = ゴールドラッシュ（賭け金の50倍）',

    'screen.prestige.prestige': 'プレステージポイント: {0} (+{1}%)',
    'screen.prestige.description': 'プレステージポイントは収入を増やす方法です。プレステージポイントはお金を稼いで集めます。稼ぐお金が多いほど、獲得するプレステージポイントも増えます。集めた各プレステージポイントは収入を50%増加させます。',
    'screen.prestige.description2': 'プレステージポイントはプレステージをするまで集めることができません。これにより、お金とアップグレードがリセットされますが、プレステージポイントが獲得されます。行き詰まっている場合やリセットが必要な場合に役立ちます。',
    'screen.prestige.button': '今すぐプレステージをし、獲得:',
    'screen.prestige.button2': '{0} プレステージポイント',

    'screen.settings.language': '言語',
    'screen.settings.export': '保存をエクスポートする',
    'screen.settings.import': '保存をインポートする',
    'screen.settings.reset': '保存をリセットする',
    'screen.settings.parseError': 'セーブデータをロードできませんでした。',

    'wealthmessage.homeless': 'あなたはホームレスです',
    'wealthmessage.broke': 'あなたは破産しました',
    'wealthmessage.tipi': 'あなたはティピーに住んでいます',
    'wealthmessage.shack': 'あなたは小屋に住んでいます',
    'wealthmessage.mrbreast': 'あなたはMrBreast（MrBeastの模倣）の挑戦に勝ちました！',
    'wealthmessage.minimumWage': 'あなたは最低賃金を稼いでいます！',
    'wealthmessage.taxes': 'あなたは今、税金を支払っています！',
    'wealthmessage.cheapApartment': 'あなたは安いアパートに住んでいます',
    'wealthmessage.mrbeast': 'あなたはMrBeastの挑戦に勝ちました！',
    'wealthmessage.rent': 'あなたは今、地域の家賃を支払うことができます！',
    'wealthmessage.apple': 'あなたはAppleの製品を買いました！',
    'wealthmessage.house': 'あなたは今、家に住んでいます！',
    'wealthmessage.mansion': 'あなたは今、大邸宅に住んでいます！',
    'wealthmessage.taylorswift': 'あなたはEras Tourの最前列チケットを手に入れました！',
    'wealthmessage.rollsroyce': 'あなたはRolls-Royce Boat Tailを買いました！',
    'wealthmessage.beverlyhills': 'あなたは今、ビバリーヒルズに住んでいます！',
    'wealthmessage.yacht': 'あなたはヨットを買いました！',
    'wealthmessage.squidgames': 'あなたはスクイドゲームを勝ちました！',
    'wealthmessage.monaLisa': 'あなたはモナリザを買いました！',
    'wealthmessage.grass': 'あなたは少し草に触れるべきです！',
    'wealthmessage.africa': 'あなたはアフリカを貧困から救いました！',
    'wealthmessage.racism': 'あなたは人種差別を終わらせました！',
    'wealthmessage.earth': 'あなたは地球を所有しています！',
    'wealthmessage.wtf': 'あなたは一体何をしているのですか？',
    'wealthmessage.mars': 'あなたは火星を所有しています！',
    'wealthmessage.solarSystem': 'あなたは太陽系を所有しています！',
    'wealthmessage.zeros': 'それは多くのゼロです...',
    'wealthmessage.universe': 'あなたは宇宙を所有しています！',
    'wealthmessage.number': 'それは本当に数字ですか？！',
    'wealthmessage.intlimit': 'あなたは地球の直径をセンチメートル単位で超える回数だけ整数制限を超えました！',
    'wealthmessage.money': 'これからはあなたとあなたのお金だけです...',

    'upgrade.water_bottle': '水筒',
    'upgrade.backpack': 'バックパック',
    'upgrade.cart': 'カート',
    'upgrade.bicycle': '自転車',
    'upgrade.smartphone': 'スマートフォン',
    'upgrade.laptop': 'ノートパソコン',
    'upgrade.plasma_tv': 'プラズマテレビ',
    'upgrade.motorcycle': 'バイク',
    'upgrade.car': '車',
    'upgrade.porche_cayenne': 'ポルシェ・カイエン',
    'upgrade.condo': 'コンドミニアム',
    'upgrade.house': '家',
    'upgrade.mansion': '大邸宅',
    'upgrade.rolls_royce': 'ロールス・ロイス ボートテイル',
    'upgrade.boeing': 'ボーイング 737 マックス',
    'upgrade.rocket': 'ロケット',
    'upgrade.space_shuttle': 'スペースシャトル',
    'upgrade.saturn_v': 'サターンV',
    'upgrade.cloudflare': 'Cloudflare',
    'upgrade.walmart': 'ウォルマート',
    'upgrade.tesla': 'テスラ',
    'upgrade.moon_landing': '月面着陸',
    'upgrade.google': 'Google',
    'upgrade.microsoft': 'マイクロソフト',
    'upgrade.apple': 'アップル',
    'upgrade.mars': '火星',
    'upgrade.solar_system': '太陽系',
    'upgrade.universe': '宇宙',
  };
}
