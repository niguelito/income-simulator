import { LangLocalization } from './Language';

export default class ru_ru implements LangLocalization {
  name: string = 'Русский';
  localization = 'ru_ru';
  translations: Record<string, string> = {
    'game.title': 'Симулятор Дохода',
    'game.money': 'Деньги: {0}₽',
    'game.currency': '{0}₽',

    'screen.money': "Деньги",
    'screen.upgrades': "Улучшения",
    'screen.modifiers': "Модификаторы",
    'screen.statistics': "Статистика",
    'screen.casino': 'Казино',
    'screen.prestige': 'Престиж',
    'screen.settings': 'Настройки',

    'screen.money.income': "Доход: {0}₽",
    'screen.money.infinity': "Бесконечность",
    'screen.money.earn': "Заработать",
    'screen.money.extra': "Дополнительные клики:",
    'screen.money.extra.amount': '{0} (+{1} / клик)',
    'screen.money.extra.use': 'Использовать',
    
    'screen.upgrades.locked': 'Это улучшение еще не разблокировано...',
    'screen.upgrades.unlock': 'Разблокировать',
    'screen.upgrades.unlocked': 'Разблокировано!',
    'screen.upgrades.bonus': 'Доход + {0}',
    
    'screen.modifiers.incomeBonus': 'Бонус к доходу',
    'screen.modifiers.incomeBonus.description': 'Увеличивает ваш доход на 10%.',
    'screen.modifiers.extraClicks': 'Дополнительные клики',
    'screen.modifiers.extraClicks.description': 'Увеличивает количество дополнительных кликов за клик на 0.1.',
    'screen.modifiers.buy': 'Купить',
    'screen.modifiers.maxed': 'Максимально!',    

    'screen.statistics.money': 'Деньги',
    'screen.statistics.allTime': 'Всего заработано: ${0}',
    'screen.statistics.allTimeSpent': 'Всего потрачено: ${0}',
    'screen.statistics.income': 'Доход',
    'screen.statistics.incomeBonus': 'Бонус к доходу: {0} (+{1}%)',
    'screen.statistics.prestigePoints': 'Очки престижа: {0} (+{1}%)',
    'screen.statistics.upgrades': 'Улучшения: {0} / {1} (Доход + {2})',

    'screen.casino.gamble': 'Играть!',
    'screen.casino.allIn': 'Всё!',
    'screen.casino.half': 'Половина!',
    'screen.casino.spin': 'Крутить, чтобы выиграть!',
    'screen.casino.win.lose': 'Вы проиграли! Удачи в следующий раз...',
    'screen.casino.win.small': 'Маленький выигрыш! Вы выиграли 3 раза свою ставку!',
    'screen.casino.win.medium': 'Средний выигрыш! Вы выиграли 8 раз свою ставку!',
    'screen.casino.win.large': 'Большой выигрыш! Вы выиграли 15 раз свою ставку!',
    'screen.casino.win.jackpot': 'Джекпот! Вы выиграли 25 раз свою ставку!',
    'screen.casino.win.goldrush': 'Золотая лихорадка! Вы выиграли 50 раз свою ставку!',
    'screen.casino.help': 'Помощь по казино',
    'screen.casino.help.close': 'Закрыть',
    'screen.casino.help.description': 'Казино - это место, где вы можете азартно играть своими деньгами, чтобы выиграть больше. Вы можете сделать ставку на любую сумму денег, которую у вас есть, и у вас будет шанс выиграть приз. Приз, который вы выиграете, зависит от символов, которые вы получите.',
    'screen.casino.help.symbols': 'Всего {0} символов. Каждый символ имеет равные шансы появления. Символы следующие:',
    'screen.casino.help.symbols.symbol': 'Символ',
    'screen.casino.help.symbols.status': 'Тип',
    'screen.casino.help.symbols.status.matching': 'Совпадение',
    'screen.casino.help.symbols.status.dice': 'Кубики',
    'screen.casino.help.symbols.status.seven': '7',
    'screen.casino.help.symbols.status.unknown': 'Неизвестно',
    'screen.casino.help.symbols.types': 'Есть 3 типа символов: совпадение, кубики и 7. В зависимости от символов, которые вы получите, вы выиграете разные призы. Призы следующие:',
    'screen.casino.help.symbols.types.none': 'Нет совпадающих символов = проигрыш',
    'screen.casino.help.symbols.types.small': '2 совпадающих символа = маленький выигрыш (3 раза ставка)',
    'screen.casino.help.symbols.types.small2': '2 различных кубика = маленький выигрыш (3 раза ставка)',
    'screen.casino.help.symbols.types.medium': '1 семёрка = средний выигрыш (8 раз ставка)',
    'screen.casino.help.symbols.types.medium2': '2 совпадающих кубика = средний выигрыш (8 раз ставка)',
    'screen.casino.help.symbols.types.large': '3 совпадающих символа = большой выигрыш (15 раз ставка)',
    'screen.casino.help.symbols.types.large2': '3 различных кубика = большой выигрыш (15 раз ставка)',
    'screen.casino.help.symbols.types.jackpot': '2 семёрки = джекпот (25 раз ставка)',
    'screen.casino.help.symbols.types.jackpot2': '3 совпадающих кубика = джекпот (25 раз ставка)',
    'screen.casino.help.symbols.types.goldrush': '3 семёрки = золотая лихорадка (50 раз ставка)',

    'screen.prestige.prestige': 'Очки престижа: {0} (+{1}%)',
    'screen.prestige.description': 'Очки престижа - это способ увеличить ваш доход. Очки престижа собираются при заработке денег. Чем больше денег вы зарабатываете, тем больше очков престижа вы получаете. Каждое очко престижа, которое вы собираете, добавляет 50% увеличение к вашему доходу.',
    'screen.prestige.description2': 'Вы не можете собирать очки престижа, пока не пройдете престиж. Это сбрасывает ваши деньги и улучшения, но зарабатывает очки престижа. Это может быть полезно, если вы застряли и вам нужно сброситься.',
    'screen.prestige.button': 'Пройти престиж сейчас и заработать:',
    'screen.prestige.button2': '{0} ОЧКОВ ПРЕСТИЖА',

    'screen.settings.language': 'Язык',
    'screen.settings.export': 'Экспорт сохранения',
    'screen.settings.import': 'Импорт сохранения',
    'screen.settings.reset': 'Сбросить сохранение',
    'screen.settings.parseError': 'Не удалось загрузить сохранение!',

    'wealthmessage.homeless': 'Вы бездомны',
    'wealthmessage.broke': 'У вас нет денег',
    'wealthmessage.tipi': 'Вы живете в типи',
    'wealthmessage.shack': 'Вы живете в лачуге',
    'wealthmessage.mrbreast': 'Вы победили в челлендже Мистера Груди (подражание Мистеру Бист)!',
    'wealthmessage.minimumWage': 'Вы зарабатываете минимальную зарплату!',
    'wealthmessage.taxes': 'Теперь вы платите налоги!',
    'wealthmessage.cheapApartment': 'Вы живете в дешевой квартире',
    'wealthmessage.mrbeast': 'Вы победили в челлендже Мистера Биста!',
    'wealthmessage.rent': 'Теперь у вас есть возможность себе позволить аренду в вашем районе!',
    'wealthmessage.apple': 'Вы купили продукт Apple!',
    'wealthmessage.house': 'Теперь вы живете в доме!',
    'wealthmessage.mansion': 'Теперь вы живете в особняке!',
    'wealthmessage.taylorswift': 'Вы получили билеты в первом ряду на тур Eras от Тейлор Свифт!',
    'wealthmessage.rollsroyce': 'Вы купили автомобиль Rolls-Royce Boat Tail!',
    'wealthmessage.beverlyhills': 'Теперь вы живете в Беверли-Хиллз!',
    'wealthmessage.yacht': 'Вы купили яхту!',
    'wealthmessage.squidgames': 'Вы выиграли в Играх Кальмара!',
    'wealthmessage.monaLisa': 'Вы купили картину Моны Лизы!',
    'wealthmessage.grass': 'Вам следует потрогать немного травы!',
    'wealthmessage.africa': 'Вы вывели Африку из бедности!',
    'wealthmessage.racism': 'Вы покончили с расизмом!',
    'wealthmessage.earth': 'Теперь вы владеете Землей!',
    'wealthmessage.wtf': 'Что не так с вами?',
    'wealthmessage.mars': 'Теперь вы владеете Марсом!',
    'wealthmessage.solarSystem': 'Теперь вы владеете Солнечной системой!',
    'wealthmessage.zeros': 'Это много нулей...',
    'wealthmessage.universe': 'Теперь вы владеете Вселенной!',
    'wealthmessage.number': 'Это вообще число?!',
    'wealthmessage.intlimit': 'Вы превысили лимит целых чисел больше раз, чем диаметр Земли в сантиметрах!',
    'wealthmessage.money': 'Теперь это только вы и ваши деньги...',

    'upgrade.water_bottle': 'Бутылка воды',
    'upgrade.backpack': 'Рюкзак',
    'upgrade.cart': 'Тележка',
    'upgrade.bicycle': 'Велосипед',
    'upgrade.smartphone': 'Смартфон',
    'upgrade.laptop': 'Ноутбук',
    'upgrade.plasma_tv': 'Плазменный телевизор',
    'upgrade.motorcycle': 'Мотоцикл',
    'upgrade.car': 'Автомобиль',
    'upgrade.porche_cayenne': 'Porsche Cayenne',
    'upgrade.condo': 'Кондоминиум',
    'upgrade.house': 'Дом',
    'upgrade.mansion': 'Большой особняк',
    'upgrade.rolls_royce': 'Rolls-Royce Boat Tail',
    'upgrade.boeing': 'Boeing 737 Max',
    'upgrade.rocket': 'Ракета',
    'upgrade.space_shuttle': 'Космический шаттл',
    'upgrade.saturn_v': 'Сатурн V',
    'upgrade.cloudflare': 'Cloudflare',
    'upgrade.walmart': 'Walmart',
    'upgrade.tesla': 'Tesla',
    'upgrade.moon_landing': 'Посадка на Луну',
    'upgrade.google': 'Google',
    'upgrade.microsoft': 'Microsoft',
    'upgrade.apple': 'Apple',
    'upgrade.mars': 'Марс',
    'upgrade.solar_system': 'Солнечная система',
    'upgrade.universe': 'Вселенная',
    'upgrade.multiverse': 'Мультивселенная',
    "upgrade.multiversal_portal": "Мультиверсальный портал",
    "upgrade.idleverse": "Праздновселенная",
    'upgrade.cortex_earning': "Кортекс Заработок",
    "upgrade.reality_console": "Консоль реальности",
    "upgrade.clones": "Клоны",
    "upgrade.the_player": "ТЫ",
    'upgrade.error': "WnWlar(x 收益e euc текс=n",
    'upgrade.unachievable': "Недостижимо"
  };
}
