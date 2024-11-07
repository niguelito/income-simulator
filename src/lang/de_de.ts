import { LangLocalization } from './Language';

export default class de_de implements LangLocalization {
  name: string = 'Deutsch';
  localization = 'de_de';
  translations: Record<string, string> = {
    'game.title': 'Einkommenssimulator',
    'game.money': 'Geld: {0} €',
    'game.currency': '{0} €',
        
    'screen.money': "Geld",
    'screen.upgrades': "Upgrades",
    'screen.modifiers': "Modifikatoren",
    'screen.statistics': "Statistik",
    'screen.casino': 'Casino',
    'screen.prestige': 'Prestige',
    'screen.settings': 'Einstellungen',

    'screen.money.income': "Einkommen: {0} €",
    'screen.money.infinity': "Unendlich",
    'screen.money.earn': "Verdienen",
    'screen.money.extra': "Zusätzliche Klicks:",
    'screen.money.extra.amount': '{0} (+{1} / Klick)',
    'screen.money.extra.use': 'Verwenden',

    'screen.upgrades.locked': 'Dieses Upgrade wurde noch nicht freigeschaltet...',
    'screen.upgrades.unlock': 'Entsperren',
    'screen.upgrades.unlocked': 'Entsperrt!',
    'screen.upgrades.bonus': 'Einkommen + {0}',

    'screen.modifiers.incomeBonus': 'Einkommensbonus',
    'screen.modifiers.incomeBonus.description': 'Erhöht Ihr Einkommen um 10 %.',
    'screen.modifiers.extraClicks': 'Zusätzliche Klicks',
    'screen.modifiers.extraClicks.description': 'Erhöht die Anzahl der zusätzlichen Klicks, die Sie pro Klick erhalten, um 0,1.',
    'screen.modifiers.buy': 'Kaufen',
    'screen.modifiers.maxed': 'Maxiert!',

    'screen.statistics.money': 'Geld',
    'screen.statistics.allTime': 'Verdienst aller Zeiten: ${0}',
    'screen.statistics.allTimeSpent': 'Alle Zeitausgaben: ${0}',
    'screen.statistics.income': 'Einkommen',
    'screen.statistics.incomeBonus': 'Einkommensbonus: {0} (+{1}%)',
    'screen.statistics.prestigePoints': 'Prestigepunkte: {0} (+{1}%)',
    'screen.statistics.upgrades': 'Upgrades: {0} / {1} (Einkommen + {2})',

    'screen.casino.gamble': 'Glücksspiel!',
    'screen.casino.allIn': 'Alles drin!',
    'screen.casino.spin': 'Drehen, um zu gewinnen!',
    'screen.casino.win.lose': 'Du hast verloren! Viel Glück beim nächsten Mal...',
    'screen.casino.win.small': 'Kleiner Gewinn! Sie haben das Dreifache Ihres Gebots gewonnen!',
    'screen.casino.win.medium': 'Mittlerer Gewinn! Sie haben das 8-fache Ihres Gebots gewonnen!',
    'screen.casino.win.large': 'Großer Gewinn! Sie haben das 15-fache Ihres Gebots gewonnen!',
    'screen.casino.win.jackpot': 'Jackpot! Sie haben das 25-fache Ihres Gebots gewonnen!',
    'screen.casino.win.goldrush': 'Goldrausch! Sie haben das 50-fache Ihres Gebots gewonnen!',
    'screen.casino.help': 'Casino-Hilfe',
    'screen.casino.help.close': 'Schließen',
    'screen.casino.help.description': 'Das Casino ist ein Ort, an dem Sie Ihr Geld einsetzen können, um mehr Geld zu gewinnen. Sie können einen beliebigen Geldbetrag bieten und haben die Chance, einen Preis zu gewinnen. Der Preis, den Sie gewinnen, hängt von den Symbolen ab, die Sie erhalten.',
    'screen.casino.help.symbols': 'Es gibt insgesamt {0} Symbole. Jedes Symbol hat die gleiche Chance, zu erscheinen. Die Symbole lauten wie folgt:',
    'screen.casino.help.symbols.symbol': 'Symbol',
    'screen.casino.help.symbols.status': 'Typ',
    'screen.casino.help.symbols.status.matching': 'Übereinstimmung',
    'screen.casino.help.symbols.status.dice': 'Würfel',
    'screen.casino.help.symbols.status.seven': '7',
    'screen.casino.help.symbols.status.unknown': 'Unbekannt',
    'screen.casino.help.symbols.types': 'Es gibt drei Arten von Symbolen: das passende Symbol, die Würfel und die 7. Abhängig von den Symbolen, die Sie erhalten, gewinnen Sie einen anderen Preis. Die Preise sind wie folgt:',
    'screen.casino.help.symbols.types.none': 'Keine passenden Symbole = verlieren',
    'screen.casino.help.symbols.types.small': '2 passende Symbole = kleiner Gewinn (3x Gebot)',
    'screen.casino.help.symbols.types.small2': '2 unterschiedliche Würfel = kleiner Gewinn (3x Gebot)',
    'screen.casino.help.symbols.types.medium': '1 7 = mittlerer Gewinn (8x Gebot)',
    'screen.casino.help.symbols.types.medium2': '2 passende Würfel = mittlerer Gewinn (8x Gebot)',
    'screen.casino.help.symbols.types.large': '3 übereinstimmende Symbole = großer Gewinn (15-faches Gebot)',
    'screen.casino.help.symbols.types.large2': '3 unterschiedliche Würfel = großer Gewinn (15-faches Gebot)',
    'screen.casino.help.symbols.types.jackpot': '2 7s = Jackpot (25x Gebot)',
    'screen.casino.help.symbols.types.jackpot2': '3 passende Würfel = Jackpot (25-faches Gebot)',
    'screen.casino.help.symbols.types.goldrush': '3 7er = Goldrausch (50-faches Gebot)',

    'screen.prestige.prestige': 'Prestigepunkte: {0} (+{1}%)',
    'screen.prestige.description': 'Prestigepunkte sind eine Möglichkeit, Ihr Einkommen zu steigern. Prestigepunkte werden durch Geldverdienen gesammelt. Je mehr Geld Sie verdienen, desto mehr Prestigepunkte erhalten Sie. Jeder gesammelte Prestigepunkt erhöht Ihr Einkommen um 50 %.',
    'screen.prestige.description2': 'Sie können keine Prestigepunkte sammeln, bis Sie Prestige erhalten. Dadurch werden Ihr Geld und Ihre Upgrades zurückgesetzt, Sie erhalten jedoch Prestigepunkte. Dies kann nützlich sein, wenn Sie nicht weiterkommen und einen Reset durchführen müssen.',
    'screen.prestige.button': 'Jetzt Prestige erwerben und verdienen:',
    'screen.prestige.button2': '{0} PRESTIGEPUNKTE',

    'screen.settings.sprache': 'Sprache',
    'screen.settings.export': 'Export Speichern',
    'screen.settings.import': 'Importieren speichern',
    'screen.settings.reset': 'Speichern zurücksetzen',
    'screen.settings.parseError': 'Der Speicherstand konnte nicht geladen werden!',

    'wealthmessage.homeless': 'Du bist obdachlos',
    'wealthmessage.broke': 'Du bist pleite',
    'wealthmessage.tipi': 'Du lebst in einem Tipi',
    'wealthmessage.shack': 'Du lebst in einer Hütte',
    'wealthmessage.mrbreast': 'Du hast eine MrBreast-Herausforderung (Abzocke MrBeast) gewonnen!',
    'wealthmessage.minimumWage': 'Sie verdienen den Mindestlohn!',
    'wealthmessage.taxes': 'Sie zahlen jetzt Steuern!',
    'wealthmessage.cheapApartment': 'Sie wohnen in einer günstigen Wohnung',
    'wealthmessage.mrbeast': 'Du hast eine MrBeast-Challenge gewonnen!',
    'wealthmessage.rent': 'Sie können sich jetzt die Miete in Ihrer Nähe leisten!',
    'wealthmessage.apple': 'Sie haben ein Apple-Produkt gekauft!',
    'wealthmessage.house': 'Du lebst jetzt in einem Haus!',
    'wealthmessage.mansion': 'Du lebst jetzt in einer Villa!',
    'wealthmessage.taylorswift': "Du hast Tickets für die erste Reihe für die Eras Tour!",
    'wealthmessage.rollsroyce': 'Sie haben einen Rolls-Royce Boat Tail gekauft!',
    'wealthmessage.beverlyhills': 'Sie leben jetzt in Beverly Hills!',
    'wealthmessage.yacht': 'Du hast eine Yacht gekauft!',
    'wealthmessage.squidgames': 'Du hast Squid Games gewonnen!',
    'wealthmessage.monaLisa': 'Du hast die Mona Lisa gekauft!',
    'wealthmessage.grass': 'Du solltest etwas Gras anfassen!',
    'wealthmessage.africa': 'Du hast Afrika aus der Armut befreit!',
    'wealthmessage.racism': 'Du hast Rassismus beendet!',
    'wealthmessage.earth': 'Dir gehört die Erde!',
    'wealthmessage.wtf': 'Was ist los mit dir?',
    'wealthmessage.mars': 'Dir gehört der Mars!',
    'wealthmessage.solarSystem': 'Das Sonnensystem gehört Ihnen!',
    'wealthmessage.zeros': 'Das sind viele Nullen...',
    'wealthmessage.universe': 'Das Universum gehört dir!',
    'wealthmessage.number': 'Ist das überhaupt eine Zahl?!',
    'wealthmessage.intlimit': 'Sie haben die Ganzzahlgrenze öfter als der Erddurchmesser in Zentimetern überschritten!',
    'wealthmessage.money': "Jetzt sind es nur noch Sie und Ihr Geld ...",

    'upgrade.water_bottle': 'Wasserflasche',
    'upgrade.backpack': 'Rucksack',
    'upgrade.cart': 'Warenkorb',
    'upgrade.bicycle': 'Fahrrad',
    'upgrade.smartphone': 'Smartphone',
    'upgrade.laptop': 'Laptop',
    'upgrade.plasma_tv': "Plasma-TV",
    'upgrade.motorcycle': 'Motorrad',
    'upgrade.car': 'Auto',
    'upgrade.porche_cayenne': 'Porche Cayenne',
    'upgrade.condo': 'Eigentumswohnung',
    'upgrade.house': 'Haus',
    'upgrade.mansion': 'Großes Herrenhaus',
    'upgrade.rolls_royce': 'Rolls-Royce Bootsheck',
    'upgrade.boeing': 'Boeing 737 Max',
    'upgrade.rocket': 'Rakete',
    'upgrade.space_shuttle': 'Space Shuttle',
    'upgrade.saturn_v': 'Saturn V',
    'upgrade.cloudflare': 'Cloudflare',
    'upgrade.walmart': 'Walmart',
    'upgrade.tesla': 'Tesla',
    'upgrade.moon_landing': 'Mondlandung',
    'upgrade.google': "Google",
    'upgrade.microsoft': 'Microsoft',
    'upgrade.apple': 'Apple',
    'upgrade.mars': 'Mars',
    'upgrade.solar_system': 'Das Sonnensystem',
    'upgrade.universe': 'Das Universum',
  };
}