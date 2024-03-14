const { expect } = require('chai');
const fetch = require('node-fetch');


const urls = [
  'https://testcasinos.com/reviews/villento/',
  'https://testcasinos.com/erfahrungen/nitro/',
  'https://testcasinos.com/revues/villento/',
  'https://testcasinos.com/reviews/playamo/',
  'https://testcasinos.com/sports-betting/baseball/mlb/rookie-of-the-year/',
  'https://testcasinos.com/it/?post_type=maranello-casino&p=36199',
  'https://testcasinos.com/nj/',
  'https://testcasinos.com/sports-betting/football/ncaaf/',
  'https://testcasinos.com/erfahrungen/bet-n-spin/',
  'https://testcasinos.com/erfahrungen/planet-7/',
  'https://testcasinos.com/erfahrungen/vegasoo/',
  'https://testcasinos.com/free-spins/',
  'https://testcasinos.com/ca-fr/paiements/echeck-us-ca-fr/',
  'https://testcasinos.com/revues/yukon-gold/',
  'https://testcasinos.com/reviews/virgin-nj/',
  'https://testcasinos.com/no-deposit/free-spins/',
  'https://testcasinos.com/reviews/caxino/',
  'https://testcasinos.com/slots/lord-of-the-ocean/',
  'https://testcasinos.com/reviews/river-belle/',
  'https://testcasinos.com/erfahrungen/7bit/',
  'https://testcasinos.com/reviews/wow-vegas/',
  'https://testcasinos.com/ca-en/payment/pay-phone-bill/',
  'https://testcasinos.com/ca-en/reviews/evolution/',
  'https://testcasinos.com/erfahrungen/spin247/',
  'https://testcasinos.com/erfahrungen/conquer/',
  'https://testcasinos.com/reviews/playojo-nj/',
  'https://testcasinos.com/erfahrungen/captain-cooks/',
  'https://testcasinos.com/erfahrungen/la-fiesta/',
  'https://testcasinos.com/ca-fr/paiements/instadebit-at-ca-fr-2/',
  'https://testcasinos.com/ca-en/bonuses/300-deposit/',
  'https://testcasinos.com/kahnawake/',
  'https://testcasinos.com/no-deposit/',
  'https://testcasinos.com/ca-en/payment/prepaid-cards/',
  'https://testcasinos.com/erfahrungen/casiqo/',
  'https://testcasinos.com/new/',
  'https://testcasinos.com/privacy-policy/',
  'https://testcasinos.com/depot-20-dollars/',
  'https://testcasinos.com/low-deposit/',
  'https://testcasinos.com/news/chomu-zinchenko-ne-grae/',
  'https://testcasinos.com/alberta/',
  'https://testcasinos.com/sports-betting/basketball/march-madness/',
  'https://testcasinos.com/guides/vpn-for-gambling/',
  'https://testcasinos.com/erfahrungen/playouwin/',
  'https://testcasinos.com/blog/700k-into-300m/',
  'https://testcasinos.com/blog/roulette-strategie/',
  'https://testcasinos.com/reviews/luckyland-slots/',
  'https://testcasinos.com/depot-5-dollars/',
  'https://testcasinos.com/terms-and-conditions/',
  'https://testcasinos.com/best-payout/',
  'https://testcasinos.com/20-dollars-deposit/',
  'https://testcasinos.com/real-money/',
  'https://testcasinos.com/bonus/online-poker-nj/',
  'https://testcasinos.com/reviews/casino-kingdom/',
  'https://testcasinos.com/erfahrungen/shangri-la/',
  'https://testcasinos.com/erfahrungen/king-billy/',
  'https://testcasinos.com/sports-betting/basketball/',
  'https://testcasinos.com/software/',
  'https://testcasinos.com/reviews/mcluck/',
  'https://testcasinos.com/bonuses/low-wagering/',
  'https://testcasinos.com/erfahrungen/buffbet/',
  'https://testcasinos.com/reviews/casino-classic/',
  'https://testcasinos.com/bonus/ohne-einzahlung/',
  'https://testcasinos.com/politique-de-confidentialite/',
  'https://testcasinos.com/ca-en/payment/ilixium/',
  'https://testcasinos.com/revues/all-slots/',
  'https://testcasinos.com/erfahrungen/casino-mate/',
  'https://testcasinos.com/ca-en/trusted/',
  'https://testcasinos.com/slots/black-bull/',
  'https://testcasinos.com/ca-en/bonuses/400-deposit/',
  'https://testcasinos.com/sportsbook/draftkings-nj/',
  'https://testcasinos.com/erfahrungen/greenspin-bet/',
  'https://testcasinos.com/erfahrungen/yukon-gold/',
  'https://testcasinos.com/slots/gorilla-mayhem/',
  'https://testcasinos.com/ca-fr/license/mga/',
  'https://testcasinos.com/reviews/royal-vegas/',
  'https://testcasinos.com/handy/',
  'https://testcasinos.com/erfahrungen/slots-and-casino/',
  'https://testcasinos.com/contact-us/',
  'https://testcasinos.com/sports-betting/basketball/nba/',
  'https://testcasinos.com/baccarat-online/',
  'https://testcasinos.com/mi/',
  'https://testcasinos.com/toronto/',
  'https://testcasinos.com/payments/',
  'https://testcasinos.com/4-euro-einzahlung/',
  'https://testcasinos.com/bonus/pokerstars-nj/',
  'https://testcasinos.com/1-euro-einzahlung/',
  'https://testcasinos.com/reviews/zodiac/',
  'https://testcasinos.com/reviews/bluechip/',
  'https://testcasinos.com/reviews/n1/',
  'https://testcasinos.com/reviews/betway/',
  'https://testcasinos.com/bonus/600-prozent/',
  'https://testcasinos.com/reviews/platinum-play/',
  'https://testcasinos.com/revues/casino-classic/',
  'https://testcasinos.com/bonuses/first-deposit/',
  'https://testcasinos.com/sitemap/',
  'https://testcasinos.com/bonus/no-max-cashout/',
  'https://testcasinos.com/bonus/party-casino-nj/',
  'https://testcasinos.com/bonus/borgata-nj/',
  'https://testcasinos.com/no-deposit/free-bets/',
  'https://testcasinos.com/zahlungen/',
  //   'https://testcasinos.com/ca-en/online-craps/',
  'https://testcasinos.com/5-euro-einzahlung/',
  'https://testcasinos.com/erfahrungen/',
  'https://testcasinos.com/uber-uns/',
  'https://testcasinos.com/10-dollars-deposit/',
  'https://testcasinos.com/horse-racing/',
  'https://testcasinos.com/reviews/parx-nj/',
  'https://testcasinos.com/tours-gratuits/',
  'https://testcasinos.com/bonus/betmgm-nj/',
  'https://testcasinos.com/reviews/fanduel-nj/',
  'https://testcasinos.com/a-propos-de-nous/',
  'https://testcasinos.com/erfahrungen/skol/',
  //   'https://testcasinos.com/geschaftsbedingungen/',
  //   'https://testcasinos.com/sports-betting/football/super-bowl/',
  //   'https://testcasinos.com/3-dollars-deposit/',
  //   'https://testcasinos.com/depot-1-dollar/',
  //   'https://testcasinos.com/blackjack-en-ligne/',
  //   'https://testcasinos.com/erfahrungen/24k/',
  //   'https://testcasinos.com/sports-betting/nascar/',
  //   'https://testcasinos.com/poker-en-ligne/',
  //   'https://testcasinos.com/safe/',
  //   'https://testcasinos.com/free-spins/9-masks-of-fire/',
  'https://testcasinos.com/depot-10-dollars/',
  //   'https://testcasinos.com/erfahrungen/casinoisy/',
  //   'https://testcasinos.com/sports-betting/baseball/',
  //   'https://testcasinos.com/erfahrungen/woo/',
  //   'https://testcasinos.com/blog/taxes/',
  //   'https://testcasinos.com/echtgeld/',
  //   'https://testcasinos.com/spielbank/innsbruck/',
  //   'https://testcasinos.com/bonus/hard-rock-casino-nj/',
  //   'https://testcasinos.com/datenschutzerklarung/',
  //   'https://testcasinos.com/erfahrungen/24bettle/',
  //   'https://testcasinos.com/erfahrungen/oshi/',
  //   'https://testcasinos.com/sports-betting/hockey/nhl/',
  //   'https://testcasinos.com/verantwortungsvolles-spielen/',
  //   'https://testcasinos.com/spiele/',
  //   'https://testcasinos.com/sports-betting/',
  //   'https://testcasinos.com/erfahrungen/justspin/',
  //   'https://testcasinos.com/erfahrungen/wild-tokyo/',
  //   'https://testcasinos.com/online-roulette/',
  //   'https://testcasinos.com/guides/sportsbooks-need-ssn/',
  //   'https://testcasinos.com/legale/',
  //   'https://testcasinos.com/pa/',
  //   'https://testcasinos.com/schnelle-auszahlung/',
  //   'https://testcasinos.com/bonuses/reload/',
  //   'https://testcasinos.com/3-euro-einzahlung/',
  //   'https://testcasinos.com/casino-payant/',
  //   'https://testcasinos.com/faq/',
  //   'https://testcasinos.com/online-baccarat/',
  //   'https://testcasinos.com/free-spins/mega-moolah/',
  //   'https://testcasinos.com/revues/',
  //   'https://testcasinos.com/ontario/',
  //   'https://testcasinos.com/erfahrungen/wild-tornado/',
  //   'https://testcasinos.com/reviews/stardust-nj/',
  //   'https://testcasinos.com/quebec/',
  //   'https://testcasinos.com/bonuses/birthday/',
  //   'https://testcasinos.com/reviews/tropicana-nj/',
  //   'https://testcasinos.com/guides/troubleshooting-draftkings/',
  //   'https://testcasinos.com/erfahrungen/betamo/',
  //   'https://testcasinos.com/reviews/golden-nugget-nj/',
  //   'https://testcasinos.com/erfahrungen/yoju/',
  //   'https://testcasinos.com/bonus/caesars-nj/',
  //   'https://testcasinos.com/erfahrungen/casoo/',
  //   'https://testcasinos.com/how-we-rate/',
  //   'https://testcasinos.com/bonus/virgin-nj/',
  //   'https://testcasinos.com/bonuses/100-deposit-match/',
  //   'https://testcasinos.com/wie-wir-bewerten/',
  //   'https://testcasinos.com/bonuses/200-deposit-match/',
  //   'https://testcasinos.com/responsible-gambling/',
  //   'https://testcasinos.com/wettanbieter/',
  //   'https://testcasinos.com/bonus/nj-no-deposit/',
  //   'https://testcasinos.com/glucksspiel-online/',
  //   'https://testcasinos.com/bonus/golden-nugget-nj/',
  //   'https://testcasinos.com/vergleich/',
  //   'https://testcasinos.com/about-us/',
  //   'https://testcasinos.com/bonus/resorts-nj/',
  //   'https://testcasinos.com/minimum-deposit/',
  //   'https://testcasinos.com/nouveaux/',
  //   'https://testcasinos.com/legal/',
  //   'https://testcasinos.com/saskatchewan/',
  //   'https://testcasinos.com/10-euro-einzahlung/',
  //   'https://testcasinos.com/mobile/',
  //   'https://testcasinos.com/retrait-rapide/',
  //   'https://testcasinos.com/montreal/',
  //   'https://testcasinos.com/bonus/',
  //   'https://testcasinos.com/comment-nous-evaluons-les-casinos/',
  //   'https://testcasinos.com/games/',
  //   'https://testcasinos.com/machine-a-sous/',
  //   'https://testcasinos.com/gewinnchancen/',
  //   'https://testcasinos.com/sans-depot/',
  //   'https://testcasinos.com/erfahrungen/fortune-panda/',
  //   'https://testcasinos.com/baccara-en-ligne/',
  //   'https://testcasinos.com/erfahrungen/nordicasino/',
  //   'https://testcasinos.com/erfahrungen/slottojam/',
  //   'https://testcasinos.com/plan-de-site/',
  //   'https://testcasinos.com/fast-payout/',
  //   'https://testcasinos.com/reviews/unibet-nj/',
  //   'https://testcasinos.com/guides/troubleshooting-betmgm/',
  //   'https://testcasinos.com/online-poker/',
  //   'https://testcasinos.com/guides/why-wont-sportsbooks-let-me-parlay/',
  //   'https://testcasinos.com/slots/',
  //   'https://testcasinos.com/seitenverzeichnis/',
  //   'https://testcasinos.com/1-dollar-deposit/',
  //   'https://testcasinos.com/5-dollars-deposit/',
  //   'https://testcasinos.com/disclaimer-statement/',
  //   'https://testcasinos.com/2-euro-einzahlung/',
  //   'https://testcasinos.com/erfahrungen/casumo/',
  //   'https://testcasinos.com/neue/',
  //   'https://testcasinos.com/online-blackjack/',
  //   'https://testcasinos.com/erfahrungen/gslot/',
  //   'https://testcasinos.com/erfahrungen/playerz/',
  //   'https://testcasinos.com/reviews/pala-nj/',
  //   'https://testcasinos.com/erfahrungen/casino-kingdom/',
  //   'https://testcasinos.com/blog/atlantic-city-bars/',
  //   'https://testcasinos.com/guides/troubleshooting-fanduel/',
  //   'https://testcasinos.com/erfahrungen/orientxpress/',
  //   'https://testcasinos.com/erfahrungen/slotjoint/',
  //   'https://testcasinos.com/blog/nj-self-exclusion/',
  //   'https://testcasinos.com/news/bet365-boosts-new-customer-offers/',
  //   'https://testcasinos.com/erfahrungen/aurum-palace/',
  //   'https://testcasinos.com/guides/geolocation-issues/',
  //   'https://testcasinos.com/erfahrungen/zodiac/',
  //   'https://testcasinos.com/blog/nj-revenue/',
  //   'https://testcasinos.com/erfahrungen/casino-cruise/',
  //   'https://testcasinos.com/spielbank/linz/',
  //   'https://testcasinos.com/erfahrungen/evolve/',
  //   'https://testcasinos.com/spielbank/wien/',
  //   'https://testcasinos.com/erfahrungen/boo/',
  //   'https://testcasinos.com/reviews/playstar-nj/',
  //   'https://testcasinos.com/erfahrungen/n1/',
  //   'https://testcasinos.com/erfahrungen/cryptowild/',
  //   'https://testcasinos.com/erfahrungen/betrebels/',
  //   'https://testcasinos.com/erfahrungen/21-dukes/',
  //   'https://testcasinos.com/reviews/mohegan-sun-nj/',
  //   'https://testcasinos.com/erfahrungen/horus/',
  //   'https://testcasinos.com/reviews/betrivers-nj/',
  //   'https://testcasinos.com/erfahrungen/spintropolis/',
  //   'https://testcasinos.com/erfahrungen/go-wild/',
  //   'https://testcasinos.com/reviews/wynnbet-nj/',
  //   'https://testcasinos.com/erfahrungen/silver-oak/',
  //   'https://testcasinos.com/reviews/hard-rock-nj/',
  //   'https://testcasinos.com/erfahrungen/zet/',
  //   'https://testcasinos.com/erfahrungen/casino-x/',
  //   'https://testcasinos.com/erfahrungen/lucky-days/',
  //   'https://testcasinos.com/reviews/pokerstars-nj/',
  //   'https://testcasinos.com/erfahrungen/pokerstars/',
  //   'https://testcasinos.com/erfahrungen/casino-777/',
  //   'https://testcasinos.com/erfahrungen/rush/',
  //   'https://testcasinos.com/erfahrungen/casilando/',
  //   'https://testcasinos.com/erfahrungen/slottica/',
  //   'https://testcasinos.com/erfahrungen/spela/',
  //   'https://testcasinos.com/erfahrungen/paradise/',
  //   'https://testcasinos.com/erfahrungen/lucky-dreams/',
  //   'https://testcasinos.com/erfahrungen/getslots/',
  //   'https://testcasinos.com/erfahrungen/stelario/',
  //   'https://testcasinos.com/erfahrungen/masters/',
  //   'https://testcasinos.com/erfahrungen/sloty/',
  //   'https://testcasinos.com/erfahrungen/wunderino/',
  //   'https://testcasinos.com/reviews/resorts-nj/',
  //   'https://testcasinos.com/erfahrungen/eclipse/',
  //   'https://testcasinos.com/nj/online-poker/real-money/',
  //   'https://testcasinos.com/sports-betting/march-madness/',
  //   'https://testcasinos.com/de/?post_type=maranello-casino&p=44480',
  //   'https://testcasinos.com/ca-fr/?post_type=maranello-casino&p=35586',
  //   'https://testcasinos.com/ca-en/payment/neteller/',
  //   'https://testcasinos.com/ca-fr/?post_type=maranello-casino&p=34871',
  //   'https://testcasinos.com/author/bryant-baucom/',
  //   'https://testcasinos.com/ca-fr/?post_type=maranello-casino&p=35312',
  //   'https://testcasinos.com/ca-en/?post_type=maranello-casino&p=39302',
  //   'https://testcasinos.com/ge/?post_type=maranello-casino&p=34195',
  //   'https://testcasinos.com/ca-en/?page_id=36820',
  //   'https://testcasinos.com/ca-en/?post_type=maranello-casino&p=40466',
  //   'https://testcasinos.com/ca-en/?page_id=36802',
  //   'https://testcasinos.com/ca-fr/?page_id=35302',
  //   'https://testcasinos.com/ca-en/?post_type=maranello-casino&p=38201',
  //   'https://testcasinos.com/ca-en/?page_id=36891',
  //   'https://testcasinos.com/ca-fr/?page_id=35250',
  //   'https://testcasinos.com/ca-en/?page_id=36812',
  //   'https://testcasinos.com/ca-en/?page_id=36806',
  //   'https://testcasinos.com/ca-fr/?page_id=35074',
  //   'https://testcasinos.com/us/?page_id=34',
  //   'https://testcasinos.com/ca-en/payment/visa/',
  //   'https://testcasinos.com/ca-en/?post_type=maranello-game&p=39415',
  //   'https://testcasinos.com/ca-fr/?page_id=37892',
  //   'https://testcasinos.com/ca-en/?post_type=maranello-casino&p=38126',
  //   'https://testcasinos.com/ca-fr/?post_type=maranello-casino&p=35029',
  //   'https://testcasinos.com/ca-en/?post_type=maranello-casino&p=39807',
  //   'https://testcasinos.com/ca-en/?post_type=maranello-casino&p=38452',
  //   'https://testcasinos.com/ca-en/?page_id=36822',
  //   'https://testcasinos.com/ca-en/?post_type=maranello-casino&p=38366',
  //   'https://testcasinos.com/ua/author/maranello/',
  //   'https://testcasinos.com/ca-fr/?page_id=36808',
  //   'https://testcasinos.com/at/zahlungen/jeton-cash/',
  //   'https://testcasinos.com/at/zahlungen/postepay/',
  //   'https://testcasinos.com/ca-fr/?page_id=35360',
  //   'https://testcasinos.com/de/?page_id=41846',
  //   'https://testcasinos.com/soft/woohoo-games/',
  //   'https://testcasinos.com/at/zahlungen/pankki/',
  //   'https://testcasinos.com/ca-en/payment/bitcoin-ca-en/',
  //   'https://testcasinos.com/at/zahlungen/samsungpay/',
  //   'https://testcasinos.com/at/zahlungen/aktia/',
  //   'https://testcasinos.com/at/zahlungen/instant-eft/',
  //   'https://testcasinos.com/at/zahlungen/zcash/',
  //   'https://testcasinos.com/at/zahlungen/skrill-1-tap/',
  //   'https://testcasinos.com/at/zahlungen/netbanking/',
  //   'https://testcasinos.com/ca-en/?page_id=36786',
  //   'https://testcasinos.com/at/software/betsoft/',
  //   'https://testcasinos.com/ca-fr/?page_id=35307',
  //   'https://testcasinos.com/ca-en/soft/microgaming-ca-en/',
  //   'https://testcasinos.com/ca-en/soft/playtech/',
  //   'https://testcasinos.com/ca-en/payment/mastercard-ca-en/',
  //   'https://testcasinos.com/ca-en/payment/paypal-ca-en/',
  //   'https://testcasinos.com/ca-en/?post_type=maranello-casino&p=38202',
  //   'https://testcasinos.com/ca-en/?page_id=36838',
  //   'https://testcasinos.com/ca-fr/?post_type=maranello-casino&p=34989',
  //   'https://testcasinos.com/ca-en/?post_type=maranello-casino&p=38397',
  //   'https://testcasinos.com/soft/playtech/',
  //   'https://testcasinos.com/ca-en/?post_type=maranello-casino&p=38168',
  //   'https://testcasinos.com/soft/microgaming-4/',
  //   'https://testcasinos.com/at/zahlungen/envoy/',
  //   'https://testcasinos.com/at/zahlungen/sepa/',
  //   'https://testcasinos.com/at/zahlungen/mifinity/',
  //   'https://testcasinos.com/ca-en/payment/skrill-ca-en/',
  //   'https://testcasinos.com/at/zahlungen/pago-efectivo/',
  //   'https://testcasinos.com/at/zahlungen/busd/',
  //   'https://testcasinos.com/at/zahlungen/maestro/',
  //   'https://testcasinos.com/at/zahlungen/amazon-pay/',
  //   'https://testcasinos.com/at/zahlungen/safetypay/',
  //   'https://testcasinos.com/at/zahlungen/polkadot/',
  //   'https://testcasinos.com/at/license/costa-rica/',
  //   'https://testcasinos.com/at/software/n2-live/',
  //   'https://testcasinos.com/at/zahlungen/ecobank/',
  //   'https://testcasinos.com/at/zahlungen/rapid/',
  //   'https://testcasinos.com/at/zahlungen/bitshares/',
  //   'https://testcasinos.com/at/zahlungen/comepay/',
  //   'https://testcasinos.com/at/zahlungen/coinbase/',
  //   'https://testcasinos.com/at/zahlungen/check/',
  //   'https://testcasinos.com/at/zahlungen/bitpace/',
  //   'https://testcasinos.com/at/zahlungen/tether/',
  //   'https://testcasinos.com/at/zahlungen/entropay/',
  //   'https://testcasinos.com/soft/elk-2/',
  //   'https://testcasinos.com/us/reviews/tao-fortune/',
  //   'https://testcasinos.com/at/zahlungen/paytm/',
  //   'https://testcasinos.com/at/category/blog/',
  //   'https://testcasinos.com/at/zahlungen/entercash/',
  //   'https://testcasinos.com/at/zahlungen/caixa/',
  //   'https://testcasinos.com/ua/онлайн-казино/',
  //   'https://testcasinos.com/us/reviews/stake-us/',
  //   'https://testcasinos.com/at/zahlungen/inb/',
  //   'https://testcasinos.com/at/zahlungen/upi/',
  //   'https://testcasinos.com/at/zahlungen/mpesa/',
  //   'https://testcasinos.com/at/zahlungen/directa24/',
  //   'https://testcasinos.com/at/zahlungen/mobile-pay/',
  //   'https://testcasinos.com/at/zahlungen/airtm/',
  //   'https://testcasinos.com/at/zahlungen/elavon/',
  //   'https://testcasinos.com/at/zahlungen/pay-retailers/',
  //   'https://testcasinos.com/at/zahlungen/baco-bci/',
  //   'https://testcasinos.com/at/zahlungen/zimpler/',
  //   'https://testcasinos.com/at/zahlungen/tigo/',
  //   'https://testcasinos.com/at/zahlungen/ideal/',
  //   'https://testcasinos.com/at/zahlungen/digibyte/',
  //   'https://testcasinos.com/at/zahlungen/bitbay-pay/',
  //   'https://testcasinos.com/at/zahlungen/volt/',
  //   'https://testcasinos.com/at/zahlungen/webmoney/',
  //   'https://testcasinos.com/at/zahlungen/airtel/',
  //   'https://testcasinos.com/at/zahlungen/caja-municipal/',
  //   'https://testcasinos.com/at/zahlungen/globalmoney/',
  //   'https://testcasinos.com/at/zahlungen/astropay/',
  //   'https://testcasinos.com/at/zahlungen/hipercard/',
  //   'https://testcasinos.com/at/zahlungen/pix/',
  //   'https://testcasinos.com/at/zahlungen/sticpay/',
  //   'https://testcasinos.com/at/zahlungen/bank-wire/',
  //   'https://testcasinos.com/at/zahlungen/avant-money/',
  //   'https://testcasinos.com/soft/fortune-factory-studios/',
  //   'https://testcasinos.com/at/zahlungen/cashlib/',
  //   'https://testcasinos.com/at/zahlungen/shiba-inu/',
  //   'https://testcasinos.com/at/license/vereinigtes-koenigreich-united-kingdom-gambling-commission/',
  //   'https://testcasinos.com/at/license/curacao-curacao/',
  //   'https://testcasinos.com/at/zahlungen/itau/',
  //   'https://testcasinos.com/at/zahlungen/trustpay/',
  //   'https://testcasinos.com/at/zahlungen/phonepe/',
  //   'https://testcasinos.com/at/zahlungen/mobikwik/',
  //   'https://testcasinos.com/at/zahlungen/wire-transfer/',
  //   'https://testcasinos.com/at/zahlungen/multibanko/',
  //   'https://testcasinos.com/at/zahlungen/comdirect-bank/',
  //   'https://testcasinos.com/at/zahlungen/dogecoin/',
  //   'https://testcasinos.com/at/zahlungen/loterica/',
  //   'https://testcasinos.com/at/zahlungen/noda-pay/',
  //   'https://testcasinos.com/at/zahlungen/toncoin/',
  //   'https://testcasinos.com/at/zahlungen/american-express/',
  //   'https://testcasinos.com/at/zahlungen/vega-wallet-jp/',
  //   'https://testcasinos.com/at/zahlungen/ewallet/',
  //   'https://testcasinos.com/at/zahlungen/inovapay/',
  //   'https://testcasinos.com/at/zahlungen/cardano/',
  //   'https://testcasinos.com/at/zahlungen/eos/',
  //   'https://testcasinos.com/at/zahlungen/clic/',
  //   'https://testcasinos.com/at/zahlungen/usd-coin/',
  //   'https://testcasinos.com/at/zahlungen/bank-transfer/',
  //   'https://testcasinos.com/at/zahlungen/cep-bank/',
  //   'https://testcasinos.com/at/zahlungen/paybyphone/',
  //   'https://testcasinos.com/at/zahlungen/picpay/',
  //   'https://testcasinos.com/at/zahlungen/piastrix/',
  //   'https://testcasinos.com/at/software/lucky-streak/',
  //   'https://testcasinos.com/at/zahlungen/commerzbank/',
  //   'https://testcasinos.com/at/zahlungen/visa-debit/',
  //   'https://testcasinos.com/at/zahlungen/volksbank/',
  //   'https://testcasinos.com/at/zahlungen/an-post-bank/',
  //   'https://testcasinos.com/at/zahlungen/deutsche-bank/',
  //   'https://testcasinos.com/at/zahlungen/brite/',
  //   'https://testcasinos.com/at/zahlungen/banco-de-brasil/',
  //   'https://testcasinos.com/at/zahlungen/visa-credit/',
  //   'https://testcasinos.com/at/zahlungen/litecoin/',
  //   'https://testcasinos.com/at/zahlungen/webpay/',
  //   'https://testcasinos.com/at/zahlungen/ethereum-classic/',
  //   'https://testcasinos.com/soft/gameburger-sludios/',
  //   'https://testcasinos.com/at/zahlungen/flexepin/',
  //   'https://testcasinos.com/at/zahlungen/swift/',
  //   'https://testcasinos.com/at/zahlungen/handelsbanken/',
  //   'https://testcasinos.com/at/zahlungen/7-eleven/',
  //   'https://testcasinos.com/at/zahlungen/alandsbanken/',
  //   'https://testcasinos.com/at/zahlungen/oxxo/',
  //   'https://testcasinos.com/at/zahlungen/online-uberweisen/',
  //   'https://testcasinos.com/at/zahlungen/perfect-money/',
  //   'https://testcasinos.com/at/zahlungen/nem/',
  //   'https://testcasinos.com/at/zahlungen/halcash/',
  //   'https://testcasinos.com/at/zahlungen/paynpay/',
  //   'https://testcasinos.com/at/software/belatra/',
  //   'https://testcasinos.com/at/zahlungen/discover/',
  //   'https://testcasinos.com/at/zahlungen/coinspaid/',
  //   'https://testcasinos.com/at/software/habanero/',
  //   'https://testcasinos.com/at/zahlungen/eco/',
  //   'https://testcasinos.com/at/zahlungen/luna/',
  //   'https://testcasinos.com/at/zahlungen/euteller/',
  //   'https://testcasinos.com/at/zahlungen/transfer-online/',
  //   'https://testcasinos.com/at/zahlungen/todito-cash/',
  //   'https://testcasinos.com/at/zahlungen/jpay/',
  //   'https://testcasinos.com/at/zahlungen/paycos/',
  //   'https://testcasinos.com/at/zahlungen/visa-electron/',
  //   'https://testcasinos.com/at/zahlungen/luxon/',
  //   'https://testcasinos.com/at/zahlungen/omasp/',
  //   'https://testcasinos.com/at/software/push-gaming/',
  //   'https://testcasinos.com/at/zahlungen/siru/',
  //   'https://testcasinos.com/at/zahlungen/dash/',
  //   'https://testcasinos.com/at/zahlungen/basic-attention-coin/',
  //   'https://testcasinos.com/blog/how-many-games-in-a-premier-league-season/',
  //   'https://testcasinos.com/at/zahlungen/cuck-pay/',
  //   'https://testcasinos.com/at/zahlungen/lottomaticard/',
  //   'https://testcasinos.com/at/zahlungen/bradesco/',
  //   'https://testcasinos.com/at/zahlungen/norisbank/',
  //   'https://testcasinos.com/at/zahlungen/idebit/',
  //   'https://testcasinos.com/at/zahlungen/binance-smart-chain-bsc/',
  //   'https://testcasinos.com/at/zahlungen/bnp-paribas/',
  //   'https://testcasinos.com/at/zahlungen/ripple/',
  //   'https://testcasinos.com/at/zahlungen/gcash/',
  //   'https://testcasinos.com/at/zahlungen/paga/',
  //   'https://testcasinos.com/category/blog/',
  //   'https://testcasinos.com/at/zahlungen/payid/',
  //   'https://testcasinos.com/at/zahlungen/visa-voucher/',
  //   'https://testcasinos.com/at/zahlungen/poli/',
  //   'https://testcasinos.com/at/zahlungen/inpay/',
  //   'https://testcasinos.com/at/zahlungen/instant-payments/',
  //   'https://testcasinos.com/at/zahlungen/tron/',
  //   'https://testcasinos.com/at/zahlungen/cashtocode/',
  //   'https://testcasinos.com/at/zahlungen/kalibra/',
  //   'https://testcasinos.com/us/slot/wild-wolf/',
  //   'https://testcasinos.com/at/zahlungen/banco-estado/',
  //   'https://testcasinos.com/at/zahlungen/stellar/',
  //   'https://testcasinos.com/at/zahlungen/pago-facil/',
  //   'https://testcasinos.com/at/zahlungen/opbank/',
  //   'https://testcasinos.com/at/zahlungen/avalanche/',
  //   'https://testcasinos.com/at/zahlungen/online-bank-transfer/',
  //   'https://testcasinos.com/at/zahlungen/qtum/',
  //   'https://testcasinos.com/at/zahlungen/jio/',
  //   'https://testcasinos.com/at/zahlungen/echecks/',
  //   'https://testcasinos.com/at/zahlungen/jcb/',
  //   'https://testcasinos.com/at/zahlungen/caja-vecina/',
  //   'https://testcasinos.com/at/zahlungen/siirto/',
  //   'https://testcasinos.com/at/zahlungen/delta/',
  //   'https://testcasinos.com/at/zahlungen/santander/',
  //   'https://testcasinos.com/at/zahlungen/elo/',
  //   'https://testcasinos.com/at/zahlungen/instant-payments-by-citadel/',
  //   'https://testcasinos.com/at/software/authentic-gaming/',
  //   'https://testcasinos.com/at/zahlungen/diners-club/',
  //   'https://testcasinos.com/at/software/red-rake/',
  //   'https://testcasinos.com/at/zahlungen/pohjola/',
  //   'https://testcasinos.com/us/slot/kitty-glitter/',
  //   'https://testcasinos.com/at/zahlungen/commercial-banks/',
  //   'https://testcasinos.com/at/zahlungen/switch/',
  //   'https://testcasinos.com/at/zahlungen/senclilito/',
  //   'https://testcasinos.com/at/zahlungen/sporopay/',
  //   'https://testcasinos.com/at/zahlungen/cashu/',
  //   'https://testcasinos.com/author/jeffrey-scott/page/3/',
  //   'https://testcasinos.com/at/zahlungen/venuspoint/',
  //   'https://testcasinos.com/at/zahlungen/wechat-pay/',
  //   'https://testcasinos.com/at/zahlungen/unicredit-bank/',
  //   'https://testcasinos.com/at/software/pragmatic-play/',
  //   'https://testcasinos.com/at/zahlungen/instadebit/',
  //   'https://testcasinos.com/at/zahlungen/n26/',
  //   'https://testcasinos.com/at/zahlungen/ethereum/',
  //   'https://testcasinos.com/at/zahlungen/verge/',
  //   'https://testcasinos.com/at/zahlungen/pay4fun/',
  //   'https://testcasinos.com/at/software/asia-gaming/',
  //   'https://testcasinos.com/at/software/playngo/',
  //   'https://testcasinos.com/at/software/tom-horn/',
  //   'https://testcasinos.com/at/zahlungen/binance-coin-bnb/',
  //   'https://testcasinos.com/at/zahlungen/iwallet/',
  //   'https://testcasinos.com/at/category/spielbank/',
  //   'https://testcasinos.com/at/software/dreamgaming/',
  //   'https://testcasinos.com/at/zahlungen/binance-pay/',
  //   'https://testcasinos.com/at/zahlungen/qiwi/',
  //   'https://testcasinos.com/at/software/rival/',
  //   'https://testcasinos.com/at/software/1x2-gaming/',
  //   'https://testcasinos.com/at/software/iron-dog/',
  //   'https://testcasinos.com/at/zahlungen/sofort/',
  //   'https://testcasinos.com/at/zahlungen/ecovoucher/',
  //   'https://testcasinos.com/at/zahlungen/bawag/',
  //   'https://testcasinos.com/at/zahlungen/payu/',
  //   'https://testcasinos.com/at/zahlungen/boleto/',
  //   'https://testcasinos.com/at/software/medialive/',
  //   'https://testcasinos.com/at/zahlungen/monero/',
  //   'https://testcasinos.com/at/software/playson/',
  //   'https://testcasinos.com/at/zahlungen/sparkasse/',
  //   'https://testcasinos.com/at/software/sa-gaming/',
  //   'https://testcasinos.com/in/',
  //   'https://testcasinos.com/at/zahlungen/dai/',
  //   'https://testcasinos.com/at/zahlungen/ezeewallet/',
  //   'https://testcasinos.com/at/software/mrslotty/',
  //   'https://testcasinos.com/at/software/booongo/',
  //   'https://testcasinos.com/at/software/up-games/',
  //   'https://testcasinos.com/at/software/endorphina/',
  //   'https://testcasinos.com/at/software/7mojos/',
  //   'https://testcasinos.com/author/jeffrey-scott/page/2/',
  //   'https://testcasinos.com/at/software/provision-gaming/',
  //   'https://testcasinos.com/at/license/malta-malta-gaming-authority/',
  //   'https://testcasinos.com/at/software/genesis/',
  //   'https://testcasinos.com/at/zahlungen/mtn/',
  //   'https://testcasinos.com/at/software/absolute-live-gaming/',
  //   'https://testcasinos.com/at/zahlungen/verkkopankki/',
  //   'https://testcasinos.com/at/software/igrosoft/',
  //   'https://testcasinos.com/at/zahlungen/nordea/',
  //   'https://testcasinos.com/at/software/ezugi/',
  //   'https://testcasinos.com/at/zahlungen/chainlink/',
  //   'https://testcasinos.com/at/zahlungen/raiffeisen-bank/',
  //   'https://testcasinos.com/at/zahlungen/trueusd/',
  //   'https://testcasinos.com/at/zahlungen/express-connect/',
  //   'https://testcasinos.com/at/software/fazi/',
  //   'https://testcasinos.com/us/slot/jaguar-princess/',
  //   'https://testcasinos.com/at/software/red-tiger/',
  //   'https://testcasinos.com/at/zahlungen/interac/',
  //   'https://testcasinos.com/at/zahlungen/lobanet/',
  //   'https://testcasinos.com/at/zahlungen/solana/',
  //   'https://testcasinos.com/at/zahlungen/sparda-bank/',
  //   'https://testcasinos.com/at/zahlungen/jeton/',
  //   'https://testcasinos.com/at/zahlungen/rupay/',
  //   'https://testcasinos.com/at/zahlungen/postbank/',
  //   'https://testcasinos.com/at/software/pariplay/',
  //   'https://testcasinos.com/at/software/evolution/',
  //   'https://testcasinos.com/at/license/gibraltar-gla/',
  //   'https://testcasinos.com/at/zahlungen/rapyd/',
  //   'https://testcasinos.com/at/zahlungen/instant-banking/',
  //   'https://testcasinos.com/at/license/kahnawake-kahnawake-gaming-commission/',
  //   'https://testcasinos.com/at/zahlungen/bbva/',
  //   'https://testcasinos.com/at/software/super-spade-club/',
  //   'https://testcasinos.com/at/software/spinomenal/',
  //   'https://testcasinos.com/at/license/schweden-spelinspektionen/',
  //   'https://testcasinos.com/at/software/omi-gaming/',
  //   'https://testcasinos.com/at/zahlungen/unet/',
  //   'https://testcasinos.com/at/zahlungen/flykk/',
  //   'https://testcasinos.com/at/software/ho-gaming/',
  //   'https://testcasinos.com/at/license/ontario-igo/',
  //   'https://testcasinos.com/at/zahlungen/bitcoin-cash/',
  //   'https://testcasinos.com/at/zahlungen/ulster-bank/',
  //   'https://testcasinos.com/at/zahlungen/apple-pay/',
  //   'https://testcasinos.com/at/software/booming-games/',
  //   'https://testcasinos.com/at/software/multislot/',
  //   'https://testcasinos.com/at/zahlungen/hsbc-uk/',
  //   'https://testcasinos.com/at/zahlungen/payz/',
  //   'https://testcasinos.com/at/zahlungen/danskebank/',
  //   'https://testcasinos.com/at/zahlungen/papara/',
  //   'https://testcasinos.com/at/software/portomaso/',
  //   'https://testcasinos.com/at/software/arrows-edge/',
  //   'https://testcasinos.com/at/software/quickspin/',
  //   'https://testcasinos.com/at/software/yggdrasil/',
  //   'https://testcasinos.com/at/software/tvbet/',
  //   'https://testcasinos.com/at/software/evoplay/',
  //   'https://testcasinos.com/at/software/bgaming/',
  //   'https://testcasinos.com/at/software/thunderkick/',
  //   'https://testcasinos.com/soft/isoftbet/',
  //   'https://testcasinos.com/at/author/emmanuel-ifabiyi/',
  //   'https://testcasinos.com/soft/ainsworth/',
  //   'https://testcasinos.com/category/teams/nba/',
  //   'https://testcasinos.com/category/teams/nfl/',
  //   'https://testcasinos.com/soft/betixon/',
  //   'https://testcasinos.com/soft/gamesys/',
  //   'https://testcasinos.com/soft/everi/',
  //   'https://testcasinos.com/soft/nolimit-city-2/',
  //   'https://testcasinos.com/soft/mancala-gaming/',
  //   'https://testcasinos.com/soft/tom-horn-gaming/',
  //   'https://testcasinos.com/soft/igt/',
  //   'https://testcasinos.com/soft/ags/',
  //   'https://testcasinos.com/soft/spadegaming/',
  //   'https://testcasinos.com/soft/wazdan/',
  //   'https://testcasinos.com/soft/pascal-gaming/',
  //   'https://testcasinos.com/soft/wms/',
  //   'https://testcasinos.com/soft/high-5-games/',
  //   'https://testcasinos.com/category/teams/',
  //   'https://testcasinos.com/soft/tuko-productions/',
  //   'https://testcasinos.com/soft/pragmatic-play-2/',
  //   'https://testcasinos.com/game-type/slots/',
  //   'https://testcasinos.com/author/emmanuel-ifabiyi/',
  //   'https://testcasinos.com/soft/netent-2/',
  //   'https://testcasinos.com/category/uncategorized/',
  //   'https://testcasinos.com/us/slot/omg-kittens/',
  //   'https://testcasinos.com/us/slot/shadow-of-the-panther/',
  'https://testcasinos.com/us/online-slots/',
];
  
describe('Check URL status codes', () => {
  const failedUrls = [];
  
  for (const url of urls) {
    it(`should check the status code of ${url}`, async () => {
      const response = await fetch(url, { method: 'HEAD', redirect: 'manual' });
      const status = response.status;
      if (status === 301) {
        console.log('Status 301: Page is redirecting');
        console.log(`Redirect URL: ${response.headers.get('location')}`);
      } else {
        console.log('Status is not 301');
        failedUrls.push(url); // Додати невдалий URL до масиву failedUrls
      }
      expect(status).to.not.equal(410);
      expect(status).to.not.equal(404);
    });
  }
  
  // Після завершення всіх тестів можна вивести невдачі
  after(() => {
    if (failedUrls.length > 0) {
      console.log('Failed URLs:', failedUrls);
    } else {
      console.log('All URLs passed');
    }
  });
});

