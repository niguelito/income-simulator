import { LangLocalization } from './Language';

export default class ar_sa implements LangLocalization {
  name: string = 'اللغة العربية';
  localization = 'ar_sa';
  translations: Record<string, string> = {
    'game.title': 'محاكي الدخل',
    'game.money': 'المال:{0} ريال سعودي',
    'game.currency': '{0} ريال سعودي',
        
    'screen.money': "مالي",
    'screen.upgrades': "ترقيات",
    'screen.modifiers': "المعدلات",
    'screen.statistics': "الإحصائيات",
    'screen.casino': 'كازينو',
    "screen.prestige": "هيبة",
    'screen.settings': 'الإعدادات',
    
    'screen.money.venue': "الدخل:{0} ريال سعودي",
    'screen.money.infinity': "ما لا نهاية",
    'screen.money.earn': "كسب",
    'screen.money.extra': "النقرات الإضافية:",
    'screen.money.extra.amount': '{0} (+{1} / نقرة)',
    'screen.money.extra.use': 'استخدام',
    
    'screen.upgrades.locked': 'لم يتم فتح هذه الترقية بعد...',
    'screen.upgrades.unlock': 'فتح القفل',
    'screen.upgrades.unlocked': 'مفتوحة!',
    'screen.upgrades.bonus': 'الدخل + {0}',
    
    'screen.modifiers. IncomeBonus': 'مكافأة الدخل',
    'screen.modifiers. IncomeBonus.description': 'يزيد دخلك بنسبة 10%.',
    'screen.modifiers.extraClicks': 'النقرات الإضافية',
    'screen.modifiers.extraClicks.description': 'يزيد عدد النقرات الإضافية التي تحصل عليها لكل نقرة بمقدار 0.1.',
    'screen.modifiers.buy': 'شراء',
    'screen.modifiers.maxed': 'بلغ الحد الأقصى!',
    
    'screen.statistics.money': 'مالي',
    'screen.statistics.allTime': 'الأرباح في كل الأوقات: ${0}',
    'screen.statistics.allTimeSpent': 'الإنفاق في كل الأوقات: ${0}',
    'screen.statistics.income': 'الدخل',
    'screen.statistics. IncomeBonus': 'مكافأة الدخل: {0} (+{1}%)',
    'screen.statistics.prestigePoints': 'نقاط الهيبة: {0} (+{1}%)',
    'screen.statistics.upgrades': 'الترقيات: {0} / {1} (الدخل + {2})',
    
    'screen.casino.gamble': 'مقامرة!',
    'screen.casino.allIn': 'الكل في!',
    'screen.casino.half': 'نصف!',
    'screen.casino.spin': 'دور لتفوز!',
    'screen.casino.win.lose': 'لقد خسرت! حظ أوفر في المرة القادمة...',
    'screen.casino.win.small': 'فوز صغير! لقد فزت بثلاثة أضعاف عرضك!',
    'screen.casino.win.medium': 'فوز متوسط! لقد ربحت 8 أضعاف عرضك!',
    'screen.casino.win.large': 'فوز كبير! لقد فزت بالمزايدة بمقدار 15 ضعف عرضك!',
    'screen.casino.win.jackpot': 'الجائزة الكبرى! لقد ربحت 25 ضعف عرضك!',
    'screen.casino.win.goldrush': 'حمى الذهب! لقد ربحت 50 ضعف عرضك!',
    'screen.casino.help': 'مساعدة الكازينو',
    'screen.casino.help. Close': 'إغلاق',
    'screen.casino.help.description': 'الكازينو هو المكان الذي يمكنك فيه المقامرة بأموالك لكسب المزيد من المال. يمكنك المزايدة بأي مبلغ من المال لديك, وسيكون لديك فرصة للفوز بالجائزة. تعتمد الجائزة التي تفوز بها على الرموز التي تحصل عليها.',
    'screen.casino.help.symbols': 'يوجد {0} رمزًا إجمالاً. كل رمز لديه فرصة متساوية للظهور. الرموز هي كما يلي:',
    'screen.casino.help.symbols.symbol': 'الرمز',
    'screen.casino.help.symbols.status': 'النوع',
    'screen.casino.help.symbols.status.matching': 'مطابقة',
    'screen.casino.help.symbols.status.dice': 'نرد',
    'screen.casino.help.symbols.status.seven': '7',
    'screen.casino.help.symbols.status.unknown': 'غير معروف',
    'screen.casino.help.symbols.types': 'هناك 3 أنواع من الرموز: المطابقة, والنرد, والرقم 7. اعتمادًا على الرموز التي تحصل عليها, سوف تفوز بجائزة مختلفة. الجوائز كالتالي:',
    'screen.casino.help.symbols.types.none': 'لا توجد رموز مطابقة = خسارة',
    'screen.casino.help.symbols.types.small': 'رمزان متطابقان = فوز صغير (عرض 3x)',
    'screen.casino.help.symbols.types.small2': '2 نرد مختلفين = ربح صغير (3x عرض)',
    'screen.casino.help.symbols.types.medium': '1 7 = فوز متوسط (8x عرض)',
    'screen.casino.help.symbols.types.medium2': '2 نرد متطابقين = فوز متوسط (8x عرض)',
    'screen.casino.help.symbols.types.large': '3 رموز متطابقة = ربح كبير (عرض 15x)',
    'screen.casino.help.symbols.types.large2': '3 أحجار نرد مختلفة = فوز كبير (عرض 15x)',
    'screen.casino.help.symbols.types.jackpot': '2 7ث = الجائزة الكبرى (عرض 25x)',
    'screen.casino.help.symbols.types.jackpot2': '3 نرد مطابق = الجائزة الكبرى (عرض 25x)',
    'screen.casino.help.symbols.types.goldrush': '3 7ث = اندفاع الذهب (عرض 50x)',
    
    'screen.prestige.prestige': 'نقاط الهيبة: {0} (+{1}%)',
    'screen.prestige.description': 'نقاط Prestige هي وسيلة لزيادة دخلك. يتم جمع نقاط الهيبة عن طريق كسب المال. كلما كسبت المزيد من المال, زادت نقاط الهيبة التي تكسبها. كل نقطة هيبة تجمعها تضيف زيادة بنسبة 50% إلى دخلك.',
    'screen.prestige.description2': 'لا يمكنك جمع نقاط الهيبة حتى تحصل على الهيبة. يؤدي هذا إلى إعادة تعيين أموالك وترقياتك, ولكنه يكسب نقاط الهيبة. يمكن أن يكون هذا مفيدًا إذا كنت عالقًا وتحتاج إلى إعادة التعيين.',
    'screen.prestige.button': 'الهيبة الآن واكسب:',
    'screen.prestige.button2': '{0} نقاط PRESTIGE',
    
    'screen.settings.language': 'اللغة',
    'screen.settings.export': 'تصدير الحفظ',
    'screen.settings.import': 'استيراد وحفظ',
    'screen.settings.reset': 'إعادة ضبط الحفظ',
    'screen.settings.parseError': 'تعذر تحميل الحفظ!',
    
    "wealthmessage.homeless": "أنت بلا مأوى",
    "wealthmessage.broke": "أنت مفلس",
    'wealthmessage.tipi': "أنت تعيش في تيبي",
    "wealthmessage.shack": "أنت تعيش في كوخ",
    'wealthmessage.mrbreast': 'لقد فزت بتحدي MrBreast (غش MrBeast)!',
    'wealthmessage.minimumWage': 'أنت تكسب الحد الأدنى للأجور!',
    'wealthmessage.taxes': 'أنت الآن تدفع الضرائب!',
    'wealthmessage.cheapApartment': 'أنت تعيش في شقة رخيصة',
    'wealthmessage.mrbeast': 'لقد فزت في تحدي MrBeast!',
    'wealthmessage.rent': 'يمكنك الآن تحمل تكاليف الإيجار في منطقتك!',
    'wealthmessage.apple': "لقد اشتريت أحد منتجات Apple!",
    'wealthmessage.house': 'أنت تعيش الآن في منزل!',
    'wealthmessage.mansion': 'أنت تعيش الآن في قصر!',
    'wealthmessage.taylorswift': 'لقد حصلت على تذاكر الصف الأول لجولة Eras!',
    'wealthmessage.rollsroyce': "لقد اشتريت سيارة Rolls-Royce Boat Tail!",
    'wealthmessage.beverlyhills': 'أنت تعيش الآن في بيفرلي هيلز!',
    'wealthmessage.yacht': 'لقد اشتريت يختًا!',
    'wealthmessage.squidgames': 'لقد فزت بألعاب Squid!',
    'wealthmessage.monaLisa': "لقد اشتريت الموناليزا!",
    'wealthmessage.grass': 'عليك أن تلمس بعض العشب!',
    'wealthmessage.africa': 'لقد جلبتم لأفريقيا الفقر!',
    "wealthmessage.racism": "لقد أنهيت العنصرية!",
    'wealthmessage.earth': "أنت تملك الأرض!",
    'wealthmessage.wtf': 'ما خطبك؟',
    'wealthmessage.mars': "أنت تمتلك المريخ!",
    "wealthmessage.solarSystem": "أنت تمتلك النظام الشمسي!",
    'wealthmessage.zeros': 'هذا كثير من الأصفار...',
    'wealthmessage.universe': 'أنت تملك الكون!',
    'wealthmessage.number': 'هل هذا رقم أصلًا؟!',
    'wealthmessage.intlimit': 'لقد تجاوزت الحد الصحيح مرات أكثر من قطر الأرض بالسنتيمتر!',
    'wealthmessage.money': "أنت وأموالك فقط الآن...",
    
    'upgrade.water_bottle': 'زجاجة ماء',
    'upgrade.backpack': 'حقيبة ظهر',
    'upgrade.cart': 'عربة التسوق',
    'upgrade.bicycle': 'دراجة',
    'upgrade.smartphone': 'الهاتف الذكي',
    'upgrade.laptop': 'كمبيوتر محمول',
    'upgrade.plasma_tv': "تلفزيون بلازما",
    'upgrade.motorcycle': 'دراجة نارية',
    'upgrade.car': 'سيارة',
    'upgrade.porche_cayenne': 'بورش كايين',
    'upgrade.condo': 'شقة',
    'upgrade.house': 'المنزل',
    'upgrade.mansion': 'القصر الكبير',
    'upgrade.rolls_royce': 'Rolls-Royce Boat Tail',
    'upgrade.boeing': 'بوينغ 737 ماكس',
    'upgrade.rocket': 'صاروخ',
    'upgrade.space_shuttle': 'مكوك الفضاء',
    'upgrade.saturn_v': 'زحل V',
    'upgrade.cloudflare': 'Cloudflare',
    'upgrade.walmart': 'وول مارت',
    'upgrade.tesla': 'تسلا',
    'upgrade.moon_landing': 'الهبوط على القمر',
    'upgrade.google': "جوجل",
    'upgrade.microsoft': 'مايكروسوفت',
    'upgrade.apple': 'أبل',
    "upgrade.mars": "المريخ",
    'upgrade.solar_system': 'النظام الشمسي',
    'upgrade.universe': 'الكون',
    'upgrade.multiverse': 'الكون المتعدد',
    'upgrade.multiversal_portal': 'بوابة متعددة الأكوان',
    'upgrade.idleverse': "ايدلفيرس",
    'upgrade.cortex_earning': "كسب المال من شركة كورتيكس",
    "upgrade.reality_console": "وحدة التحكم الواقعية",
    'upgrade.clones': "استنساخ",
    'upgrade.the_player': "أنت",
    'upgrade.error': "WnWlar(x 收益e euc текс=n",
    'upgrade.unachievable': "غير قابل للتحقيق"
  };
}
