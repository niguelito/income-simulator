import { LangLocalization } from './Language';

export default class en_us implements LangLocalization {
  name: string = 'English';
  localization = 'en_us';
  translations: Record<string, string> = {
    'game.title': 'Income Simulator',
    'game.money': 'Money: ${0}',
    'game.currency': '${0}',
    
    'screen.money': "Money",
    'screen.upgrades': "Upgrades",
    'screen.modifiers': "Modifiers",
    'screen.statistics': "Statistics",
    'screen.casino': 'Casino',
    'screen.prestige': 'Prestige',
    'screen.settings': 'Settings',

    'screen.money.income': "Income: ${0}",
    'screen.money.infinity': "Infinity",
    'screen.money.earn': "Earn",
    'screen.money.extra': "Extra Clicks:",
    'screen.money.extra.amount': '{0} (+{1} / click)',
    'screen.money.extra.use': 'Use',

    'screen.upgrades.locked': 'This upgrade has not been unlocked yet...',
    'screen.upgrades.unlock': 'Unlock',
    'screen.upgrades.unlocked': 'Unlocked!',
    'screen.upgrades.bonus': 'Income + {0}',

    'screen.modifiers.incomeBonus': 'Income Bonus',
    'screen.modifiers.incomeBonus.description': 'Increases your income by 10%.',
    'screen.modifiers.extraClicks': 'Extra Clicks',
    'screen.modifiers.extraClicks.description': 'Increases the number of extra clicks you get per click by 0.1.',
    'screen.modifiers.buy': 'Buy',
    'screen.modifiers.maxed': 'Maxed!',

    'screen.statistics.money': 'Money',
    'screen.statistics.allTime': 'All Time Earnings: ${0}',
    'screen.statistics.allTimeSpent': 'All Time Spendings: ${0}',
    'screen.statistics.income': 'Income',
    'screen.statistics.incomeBonus': 'Income Bonus: {0} (+{1}%)',
    'screen.statistics.prestigePoints': 'Prestige Points: {0} (+{1}%)',
    'screen.statistics.upgrades': 'Upgrades: {0} / {1} (Income + {2})',

    'screen.casino.gamble': 'Gamble!',
    'screen.casino.allIn': 'All In!',
    'screen.casino.spin': 'Spin to Win!',
    'screen.casino.win.lose': 'You lost! Better luck next time...',
    'screen.casino.win.small': 'Small win! You won 3x your bid!',
    'screen.casino.win.medium': 'Medium win! You won 8x your bid!',
    'screen.casino.win.large': 'Big win! You won bid 15x your bid!',
    'screen.casino.win.jackpot': 'Jackpot! You won 25x your bid!',
    'screen.casino.win.goldrush': 'Gold Rush! You won 50x your bid!',
    'screen.casino.help': 'Casino Help',
    'screen.casino.help.close': 'Close',
    'screen.casino.help.description': 'The casino is a place where you can gamble your money to win more money. You can bid any amount of money you have, and you will have a chance to win a prize. The prize you win depends on the symbols you get.',
    'screen.casino.help.symbols': 'There are {0} symbols in total. Each symbol has an equal chance of appearing. The symbols are as follows:',
    'screen.casino.help.symbols.symbol': 'Symbol',
    'screen.casino.help.symbols.status': 'Type',
    'screen.casino.help.symbols.status.matching': 'Matching',
    'screen.casino.help.symbols.status.dice': 'Dice',
    'screen.casino.help.symbols.status.seven': '7',
    'screen.casino.help.symbols.status.unknown': 'Unknown',
    'screen.casino.help.symbols.types': 'There are 3 types of symbols: the matching, the dice, and the 7. Depending on the symbols you get, you will win a different prize. The prizes are as follows:',
    'screen.casino.help.symbols.types.none': 'No matching symbols = lose',
    'screen.casino.help.symbols.types.small': '2 matching symbols = small win (3x bid)',
    'screen.casino.help.symbols.types.small2': '2 differing dice = small win (3x bid)',
    'screen.casino.help.symbols.types.medium': '1 7 = medium win (8x bid)',
    'screen.casino.help.symbols.types.medium2': '2 matching dice = medium win (8x bid)',
    'screen.casino.help.symbols.types.large': '3 matching symbols = large win (15x bid)',
    'screen.casino.help.symbols.types.large2': '3 differing dice = large win (15x bid)',
    'screen.casino.help.symbols.types.jackpot': '2 7s = jackpot (25x bid)',
    'screen.casino.help.symbols.types.jackpot2': '3 matching dice = jackpot (25x bid)',
    'screen.casino.help.symbols.types.goldrush': '3 7s = gold rush (50x bid)',

    'screen.prestige.prestige': 'Prestige Points: {0} (+{1}%)',
    'screen.prestige.description': 'Prestige points are a way to increase your income. Prestige points are collected by earning money. The more money you earn, the more prestige points you earn. Each prestige point you collect adds a 50% increase to your income.',
    'screen.prestige.description2': 'You cannot collect prestige points until you prestige. This resets your money and upgrades, but earns prestige points. This can be useful if you are stuck and need to reset.',
    'screen.prestige.button': 'Prestige now and earn:',
    'screen.prestige.button2': '{0} PRESTIGE POINTS',

    'screen.settings.language': 'Language',
    'screen.settings.export': 'Export Save',
    'screen.settings.import': 'Import Save',
    'screen.settings.reset': 'Reset Save',
    'screen.settings.parseError': 'The save could not be loaded!',

    'wealthmessage.homeless': 'You are homeless',
    'wealthmessage.broke': 'You are broke',
    'wealthmessage.tipi': 'You live in a tipi',
    'wealthmessage.shack': 'You live in a shack',
    'wealthmessage.mrbreast': 'You won a MrBreast (ripoff MrBeast) challenge!',
    'wealthmessage.minimumWage': 'You earn minimum wage!',
    'wealthmessage.taxes': 'You now pay taxes!',
    'wealthmessage.cheapApartment': 'You live in a cheap apartment',
    'wealthmessage.mrbeast': 'You won a MrBeast challenge!',
    'wealthmessage.rent': 'You can now afford rent in your area!',
    'wealthmessage.apple': 'You bought an Apple product!',
    'wealthmessage.house': 'You now live in a house!',
    'wealthmessage.mansion': 'You now live in a mansion!',
    'wealthmessage.taylorswift': 'You got front row tickets to the Eras Tour!',
    'wealthmessage.rollsroyce': 'You bought a Rolls-Royce Boat Tail!',
    'wealthmessage.beverlyhills': 'You now live in Beverly Hills!',
    'wealthmessage.yacht': 'You bought a yacht!',
    'wealthmessage.squidgames': 'You won Squid Games!',
    'wealthmessage.monaLisa': 'You bought the Mona Lisa!',
    'wealthmessage.grass': 'You should go touch some grass!',
    'wealthmessage.africa': 'You brought Africa our of poverty!',
    'wealthmessage.racism': 'You ended racism!',
    'wealthmessage.earth': 'You own the Earth!',
    'wealthmessage.wtf': 'What is wrong with you?',
    'wealthmessage.mars': 'You own Mars!',
    'wealthmessage.solarSystem': 'You own the Solar System!',
    'wealthmessage.zeros': 'That is a lot of zeros...',
    'wealthmessage.universe': 'You own the Universe!',
    'wealthmessage.number': 'Is that even a number?!',
    'wealthmessage.intlimit': 'You have exceded the integer limit more times than the diameter of the earth in centimeters!',
    'wealthmessage.money': "It's only you and your money now...",

    'upgrade.water_bottle': 'Water Bottle',
    'upgrade.backpack': 'Backpack',
    'upgrade.cart': 'Cart',
    'upgrade.bicycle': 'Bicycle',
    'upgrade.smartphone': 'Smartphone',
    'upgrade.laptop': 'Laptop',
    'upgrade.plasma_tv': "Plasma TV",
    'upgrade.motorcycle': 'Motorcycle',
    'upgrade.car': 'Car',
    'upgrade.porche_cayenne': 'Porche Cayenne',
    'upgrade.condo': 'Condo',
    'upgrade.house': 'House',
    'upgrade.mansion': 'Large Mansion',
    'upgrade.rolls_royce': 'Rolls-Royce Boat Tail',
    'upgrade.boeing': 'Boeing 737 Max',
    'upgrade.rocket': 'Rocket',
    'upgrade.space_shuttle': 'Space Shuttle',
    'upgrade.saturn_v': 'Saturn V',
    'upgrade.cloudflare': 'Cloudflare',
    'upgrade.walmart': 'Walmart',
    'upgrade.tesla': 'Tesla',
    'upgrade.moon_landing': 'Moon Landing',
    'upgrade.google': "Google",
    'upgrade.microsoft': 'Microsoft',
    'upgrade.apple': 'Apple',
    'upgrade.mars': 'Mars',
    'upgrade.solar_system': 'The Solar System',
    'upgrade.universe': 'The Universe',
    'upgrade.multiverse': 'The Multiverse'
  };
}
