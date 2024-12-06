import { LangLocalization } from './Language';

export default class hi_in implements LangLocalization {
  name: string = 'हिंदी';
  localization = 'hi_in';
  translations: Record<string, string> = {
    'game.title': 'आय सिम्युलेटर',
    'game.money': 'पैसा: ₹{0}',
    'game.currency': '₹{0}',

    'screen.money': "पैसा",
    'screen.upgrades': "अपग्रेड",
    'screen.modifiers': "मॉडीफायर्स",
    'screen.statistics': "आँकड़े",
    'screen.casino': 'कैसीनो',
    'screen.prestige': 'प्रतिष्ठा',
    'screen.settings': 'सेटिंग्स',

    'screen.money.income': "आय: ₹{0}",
    'screen.money.infinity': "अनंत",
    'screen.money.earn': "कमाएं",
    'screen.money.extra': "अतिरिक्त क्लिक:",
    'screen.money.extra.amount': '{0} (+{1} / क्लिक)',
    'screen.money.extra.use': 'उपयोग',

    'screen.upgrades.locked': 'यह अपग्रेड अब तक अनलॉक नहीं हुआ है...',
    'screen.upgrades.unlock': 'अनलॉक करें',
    'screen.upgrades.unlocked': 'अनलॉक किया गया है!',
    'screen.upgrades.bonus': 'आय + {0}',

    'screen.modifiers.incomeBonus': 'आय बोनस',
    'screen.modifiers.incomeBonus.description': 'आपकी आय को 10% बढ़ाता है।',
    'screen.modifiers.extraClicks': 'अतिरिक्त क्लिक्स',
    'screen.modifiers.extraClicks.description': 'प्रति क्लिक को अतिरिक्त क्लिक्स से 0.1 बढ़ाता है।',
    'screen.modifiers.buy': 'खरीदें',
    'screen.modifiers.maxed': 'मैक्स!',

    'screen.statistics.money': 'पैसा',
    'screen.statistics.allTime': 'सभी समय कमाई: ₹{0}',
    'screen.statistics.allTimeSpent': 'सभी समय खर्च: ₹{0}',
    'screen.statistics.income': 'आय',
    'screen.statistics.incomeBonus': 'आय बोनस: {0} (+{1}%)',
    'screen.statistics.prestigePoints': 'प्रतिष्ठा अंक: {0} (+{1}%)',
    'screen.statistics.upgrades': 'अपग्रेड: {0} / {1} (आय + {2})',

    'screen.casino.gamble': 'जुआ!',
    'screen.casino.allIn': 'सब कुछ!',
    'screen.casino.spin': 'जीतने के लिए घूमें!',
    'screen.casino.win.lose': 'तुम हार गए! अगली बार भाग्य आजमाएं...',
    'screen.casino.win.small': 'छोटी जीत! आपने अपनी बोली का 3 गुणा जीता है!',
    'screen.casino.win.medium': 'मध्यम जीत! आपने अपनी बोली का 8 गुणा जीता है!',
    'screen.casino.win.large': 'बड़ी जीत! आपने अपनी बोली का 15 गुणा जीता है!',
    'screen.casino.win.jackpot': 'जैकपॉट! आपने अपनी बोली का 25 गुणा जीता है!',
    'screen.casino.win.goldrush': 'गोल्ड रश! आपने अपनी बोली का 50 गुणा जीता है!',
    'screen.casino.help': 'कैसीनो सहायता',
    'screen.casino.help.close': 'बंद करें',
    'screen.casino.help.description': 'कैसीनो एक जगह है जहां आप अपने पैसे बढ़ाने के लिए जुआ लगा सकते हैं। आप जितना भी पैसा रखते हैं, उसकी कोई भी राशि के लिए आपको एक मौका होगा। आप जो पुरस्कार जीतेंगे, वह आपको मिलेगा और यह आपके मिलने वाले प्रतीकों पर निर्भर करेगा।',
    'screen.casino.help.symbols': 'कुल {0} प्रतीक हैं। प्रत्येक प्रतीक का बराबरी का अवसर होता है। प्रतीक निम्नलिखित हैं:',
    'screen.casino.help.symbols.symbol': 'प्रतीक',
    'screen.casino.help.symbols.status': 'प्रकार',
    'screen.casino.help.symbols.status.matching': 'मैचिंग',
    'screen.casino.help.symbols.status.dice': 'डाइस',
    'screen.casino.help.symbols.status.seven': '7',
    'screen.casino.help.symbols.status.unknown': 'अज्ञात',
    'screen.casino.help.symbols.types': 'तीन प्रकार के प्रतीक हैं: मैचिंग, डाइस, और 7। आप जो प्रतीक प्राप्त करते हैं, उसके अनुसार आप एक विभिन्न पुरस्कार जीतेंगे। पुरस्कार निम्नलिखित हैं:',
    'screen.casino.help.symbols.types.none': 'कोई मैचिंग प्रतीक नहीं = हार',
    'screen.casino.help.symbols.types.small': '2 मैचिंग प्रतीक = छोटी जीत (3 गुणा बोली)',
    'screen.casino.help.symbols.types.small2': '2 विभिन्न डाइस = छोटी जीत (3 गुणा बोली)',
    'screen.casino.help.symbols.types.medium': '1 7 = मध्यम जीत (8 गुणा बोली)',
    'screen.casino.help.symbols.types.medium2': '2 मैचिंग डाइस = मध्यम जीत (8 गुणा बोली)',
    'screen.casino.help.symbols.types.large': '3 मैचिंग प्रतीक = बड़ी जीत (15 गुणा बोली)',
    'screen.casino.help.symbols.types.large2': '3 विभिन्न डाइस = बड़ी जीत (15 गुणा बोली)',
    'screen.casino.help.symbols.types.jackpot': '2 7s = जैकपॉट (25 गुणा बोली)',
    'screen.casino.help.symbols.types.jackpot2': '3 मैचिंग डाइस = जैकपॉट (25 गुणा बोली)',
    'screen.casino.help.symbols.types.goldrush': '3 7s = गोल्ड रश (50 गुणा बोली)',

    'screen.prestige.prestige': 'प्रतिष्ठा अंक: {0} (+{1}%)',
    'screen.prestige.description': 'प्रतिष्ठा अंक आपकी आय को बढ़ाने का एक तरीका है। प्रतिष्ठा अंक पैसा कमाकर एकत्र किए जाते हैं। जितना अधिक पैसा आप कमाते हैं, उतने अधिक प्रतिष्ठा अंक आपको मिलते हैं। प्रतिष्ठा अंक को एकत्र करने पर प्रतिष्ठा अंक से आपकी आय में 50% की वृद्धि होती है।',
    'screen.prestige.description2': 'आपको प्रतिष्ठा नहीं मिल सकते हैं जब तक आप प्रतिष्ठा नहीं करते हैं। यह आपके पैसे और अपग्रेड को रीसेट करता है, लेकिन प्रतिष्ठा अंक कमाता है। यह उपयोगी हो सकता है अगर आप फंसे हुए हैं और रीसेट करने की आवश्यकता है।',
    'screen.prestige.button': 'अब प्रतिष्ठा करें और कमाएं:',
    'screen.prestige.button2': '{0} प्रतिष्ठा अंक',

    'screen.settings.language': 'भाषा',
    'screen.settings.export': 'सेव निर्यात करें',
    'screen.settings.import': 'सेव आयात करें',
    'screen.settings.reset': 'सेव रीसेट करें',
    'screen.settings.parseError': 'सेव लोड नहीं की जा सकी!',

    'wealthmessage.homeless': 'आप बेघर हैं',
    'wealthmessage.broke': 'आप बंदूक हैं',
    'wealthmessage.tipi': 'आप एक टिपी में रहते हैं',
    'wealthmessage.shack': 'आप एक झोपड़ी में रहते हैं',
    'wealthmessage.mrbreast': 'आपने एक MrBreast (MrBeast की कॉपी) चैलेंज जीता है!',
    'wealthmessage.minimumWage': 'आपने न्यूनतम मजदूरी कमाई है!',
    'wealthmessage.taxes': 'आप अब कर भी देते हैं!',
    'wealthmessage.cheapApartment': 'आप एक सस्ते अपार्टमेंट में रहते हैं',
    'wealthmessage.mrbeast': 'आपने एक MrBeast चैलेंज जीता है!',
    'wealthmessage.rent': 'आप अब अपने क्षेत्र में किराया देने में सक्षम हैं!',
    'wealthmessage.apple': 'आपने एक Apple उत्पाद खरीदा है!',
    'wealthmessage.house': 'आप अब एक घर में रहते हैं!',
    'wealthmessage.mansion': 'आप अब एक मैनशन में रहते हैं!',
    'wealthmessage.taylorswift': 'आपने Eras टूर के लिए फ्रंट रो पर टिकट प्राप्त किया है!',
    'wealthmessage.rollsroyce': 'आपने एक Rolls-Royce Boat Tail खरीदा है!',
    'wealthmessage.beverlyhills': 'आप अब Beverly Hills में रहते हैं!',
    'wealthmessage.yacht': 'आपने एक यॉट खरीदा है!',
    'wealthmessage.squidgames': 'आपने Squid Games जीते हैं!',
    'wealthmessage.monaLisa': 'आपने Mona Lisa खरीद ली हैं!',
    'wealthmessage.grass': 'आपको कुछ घास छूनी चाहिए!',
    'wealthmessage.africa': 'आपने अफ्रीका को गरीबी से बाहर निकाल दिया है!',
    'wealthmessage.racism': 'आपने जातिवाद को समाप्त कर दिया है!',
    'wealthmessage.earth': 'आपका पृथ्वी पर हक है!',
    'wealthmessage.wtf': 'तुम्हें क्या हुआ है?',
    'wealthmessage.mars': 'आपने मंगल ग्रह को अब अपने पास!',
    'wealthmessage.solarSystem': 'आपने सोलर सिस्टम को अपने पास!',
    'wealthmessage.zeros': 'यह बहुत बड़ी संख्याएँ हैं...',
    'wealthmessage.universe': 'आपने यूनिवर्स को अपने पास!',
    'wealthmessage.number': 'क्या यह एक संख्या है?!',
    'wealthmessage.intlimit': 'आपने पृथ्वी के व्यास की गुणा गिने से अधिक बार पूर्णांक सीमा को पार किया है!',
    'wealthmessage.money': 'अब सिर्फ तुम और तुम्हारे पैसे हैं...',

    'upgrade.water_bottle': 'पानी की बोतल',
    'upgrade.backpack': 'बैकपैक',
    'upgrade.cart': 'कार्ट',
    'upgrade.bicycle': 'साइकिल',
    'upgrade.smartphone': 'स्मार्टफोन',
    'upgrade.laptop': 'लैपटॉप',
    'upgrade.plasma_tv': "प्लाज़्मा टीवी",
    'upgrade.motorcycle': 'मोटरसाइकिल',
    'upgrade.car': 'कार',
    'upgrade.porche_cayenne': 'पोर्श कयेन',
    'upgrade.condo': 'कॉन्डो',
    'upgrade.house': 'घर',
    'upgrade.mansion': 'बड़ा मैंशन',
    'upgrade.rolls_royce': 'रोल्स-रॉयस बोट टेल',
    'upgrade.boeing': 'बोइंग 737 मैक्स',
    'upgrade.rocket': 'रॉकेट',
    'upgrade.space_shuttle': 'स्पेस शटल',
    'upgrade.saturn_v': 'सैटर्न V',
    'upgrade.cloudflare': 'क्लाउडफ्लेयर',
    'upgrade.walmart': 'वॉलमार्ट',
    'upgrade.tesla': 'टेस्ला',
    'upgrade.moon_landing': 'चंद्रमा अवतरण',
    'upgrade.google': "गूगल",
    'upgrade.microsoft': 'माइक्रोसॉफ्ट',
    'upgrade.apple': 'एप्पल',
    'upgrade.mars': 'मंगल ग्रह',
    'upgrade.solar_system': 'सौरमंडल',
    'upgrade.universe': 'ब्रह्मांड',
    'upgrade.multiverse': 'मल्टीवर्स',
    "upgrade.multiversal_portal": "मल्टीवर्सल पोर्टल",
    "upgrade.idleverse": "आइडलवर्स",
    'upgrade.cortex_earning': "कॉर्टेक्स अर्निंग",
    "upgrade.reality_console": "रियलिटी कंसोल",
    "upgrade.clones": "क्लोन्स",
    "upgrade.the_player": "आप",
    'upgrade.error': "WnWlar(x 收益e euc текс=n"
  };
}
