module.exports.config = {
name: "সেহরি",
  version: "",
  permssion: 2,
  credits: "farhan",
  description: "",
  category: "সেহরি",
  usages: "sehri",
  prefix: true,
  cooldowns: 5,
  dependencies: "",
};
module.exports.run = function ({ event, api }) {
    const u = Date.parse("March 10, 2024 22:39:00") - Date.parse(new Date());
    const seconds = Math.floor( (u/1000) % 60 );
    const minutes = Math.floor( (u/1000/60) % 60 );
    const hours = Math.floor( (u/(1000*60*60)) % 24 );
    const days = Math.floor( u/(1000*60*60*24) );

    return api.sendMessage(`🌙𝙍𝙖𝙢𝙖𝙙𝙖𝙣 𝙈𝙪𝙗𝙖𝙧𝙖𝙠 📿🤲 \n\nআজকের সেহরির সময় শেষ হতে আর বাকি আছে ❤ 🥰\n» ${days} দিন ${hours} ঘণ্টা ${minutes} মিনিট ${seconds} সেকেন্ড«\n💗সেহরি ঢাকার সময় অনুযায়ী সিলেক্ট করা \n*•.¸♡ \nসেহরির দোয়া\n\nنَوَيْتُ اَنْ اُصُوْمَ غَدًا مِّنْ شَهْرِ رَمْضَانَ الْمُبَارَكِ فَرْضَ لَكَ يَا اللهُ فَتَقَبَّل مِنِّى اِنَّكَ اَنْتَ السَّمِيْعُ الْعَلِيْم \n\nউচ্চারণ: নাওয়াইতু আন আছুম্মা গাদাম মিন্ শাহরি রমাজানাল মুবারাকি ফারদাল্লাকা, ইয়া আল্লাহু ফাতাকাব্বাল মিন্নি ইন্নিকা আনতাস্ সামিউল আলিম। \n\nঅর্থ: হে আল্লাহ! আমি আগামীকাল পবিত্র মাহে রমজানের নির্ধারিত ফরজ রোজা রাখার নিয়ত করলাম। অতএব তুমি আমার রোযা তথা পানাহার থেকে বিরত থাকাকে কবুল কর, নিশ্চয়ই তুমি সর্বশ্রোতা ও সর্বজ্ঞানী।♡¸.•*\n\n𝗖𝗼𝗱𝗲 𝗕𝘆:\n≼≽𝗙𝗔𝗥𝗛𝗔𝗡 𝗜𝗦𝗟𝗔𝗠≼≽`, event.threadID, event.messageID);
}
