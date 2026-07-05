// Lumo content database
// Plain data — no backend needed. Add more entries per level to grow the app.
// pa_script  = Punjabi (Gurmukhi) translation
// pa_translit = Romanised phonetic transliteration, for learners still reading Gurmukhi slowly

const LUMO_CONTENT = {
  beginner: {
    label: "Beginner",
    description: "Everyday greetings and simple sentences",
    phrases: [
      { en: "Hello, how are you?", pa_script: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ?", pa_translit: "Sat sri akal, tussi kiven ho?" },
      { en: "My name is Simran.", pa_script: "ਮੇਰਾ ਨਾਮ ਸਿਮਰਨ ਹੈ।", pa_translit: "Mera naam Simran hai." },
      { en: "Nice to meet you.", pa_script: "ਤੁਹਾਨੂੰ ਮਿਲ ਕੇ ਖੁਸ਼ੀ ਹੋਈ।", pa_translit: "Tuhanu mil ke khushi hoi." },
      { en: "What is your name?", pa_script: "ਤੁਹਾਡਾ ਨਾਮ ਕੀ ਹੈ?", pa_translit: "Tuhada naam ki hai?" },
      { en: "I am fine, thank you.", pa_script: "ਮੈਂ ਠੀਕ ਹਾਂ, ਧੰਨਵਾਦ।", pa_translit: "Main theek haan, dhanvaad." },
      { en: "Where are you from?", pa_script: "ਤੁਸੀਂ ਕਿੱਥੋਂ ਹੋ?", pa_translit: "Tussi kithon ho?" },
      { en: "I am from Punjab.", pa_script: "ਮੈਂ ਪੰਜਾਬ ਤੋਂ ਹਾਂ।", pa_translit: "Main Punjab ton haan." },
      { en: "See you later.", pa_script: "ਫੇਰ ਮਿਲਾਂਗੇ।", pa_translit: "Fer milange." },
      { en: "Thank you very much.", pa_script: "ਬਹੁਤ ਬਹੁਤ ਧੰਨਵਾਦ।", pa_translit: "Bahut bahut dhanvaad." },
      { en: "Have a good day.", pa_script: "ਤੁਹਾਡਾ ਦਿਨ ਚੰਗਾ ਲੰਘੇ।", pa_translit: "Tuhada din changa langhe." }
    ]
  },
  intermediate: {
    label: "Intermediate",
    description: "Short, practical everyday conversation",
    phrases: [
      { en: "Can you help me, please?", pa_script: "ਕੀ ਤੁਸੀਂ ਮੇਰੀ ਮਦਦ ਕਰ ਸਕਦੇ ਹੋ?", pa_translit: "Ki tussi meri madad kar sakde ho?" },
      { en: "I would like a cup of tea.", pa_script: "ਮੈਨੂੰ ਇੱਕ ਕੱਪ ਚਾਹ ਚਾਹੀਦੀ ਹੈ।", pa_translit: "Mainu ik cup chah chahidi hai." },
      { en: "How much does this cost?", pa_script: "ਇਹ ਕਿੰਨੇ ਦਾ ਹੈ?", pa_translit: "Eh kinne da hai?" },
      { en: "I am learning English.", pa_script: "ਮੈਂ ਅੰਗਰੇਜ਼ੀ ਸਿੱਖ ਰਿਹਾ ਹਾਂ।", pa_translit: "Main angrezi sikh riha haan." },
      { en: "What time is it now?", pa_script: "ਹੁਣ ਕਿੰਨਾ ਵਜਿਆ ਹੈ?", pa_translit: "Hun kinna vajiya hai?" },
      { en: "I need to go to work.", pa_script: "ਮੈਨੂੰ ਕੰਮ 'ਤੇ ਜਾਣਾ ਹੈ।", pa_translit: "Mainu kamm te jana hai." },
      { en: "Could you speak more slowly?", pa_script: "ਕੀ ਤੁਸੀਂ ਹੌਲੀ ਬੋਲ ਸਕਦੇ ਹੋ?", pa_translit: "Ki tussi hauli bol sakde ho?" },
      { en: "I did not understand that.", pa_script: "ਮੈਨੂੰ ਇਹ ਸਮਝ ਨਹੀਂ ਆਇਆ।", pa_translit: "Mainu eh samajh nahi aya." }
    ]
  },
  advanced: {
    label: "Advanced",
    description: "Longer, more natural sentences",
    phrases: [
      { en: "I have been practising English every day.", pa_script: "ਮੈਂ ਹਰ ਰੋਜ਼ ਅੰਗਰੇਜ਼ੀ ਦਾ ਅਭਿਆਸ ਕਰ ਰਿਹਾ ਹਾਂ।", pa_translit: "Main har roz angrezi da abhyaas kar riha haan." },
      { en: "Could you please explain that again?", pa_script: "ਕੀ ਤੁਸੀਂ ਇਹ ਦੁਬਾਰਾ ਸਮਝਾ ਸਕਦੇ ਹੋ?", pa_translit: "Ki tussi eh dubara samjha sakde ho?" },
      { en: "I believe we can solve this problem together.", pa_script: "ਮੈਨੂੰ ਲੱਗਦਾ ਹੈ ਕਿ ਅਸੀਂ ਇਹ ਸਮੱਸਿਆ ਮਿਲ ਕੇ ਹੱਲ ਕਰ ਸਕਦੇ ਹਾਂ।", pa_translit: "Mainu lagda hai ki asi eh samasya mil ke hal kar sakde haan." },
      { en: "It was a pleasure working with you.", pa_script: "ਤੁਹਾਡੇ ਨਾਲ ਕੰਮ ਕਰਕੇ ਖੁਸ਼ੀ ਹੋਈ।", pa_translit: "Tuhade naal kamm karke khushi hoi." },
      { en: "I would appreciate your feedback.", pa_script: "ਮੈਂ ਤੁਹਾਡੀ ਰਾਏ ਦੀ ਕਦਰ ਕਰਾਂਗਾ।", pa_translit: "Main tuhadi raay di kadar karanga." },
      { en: "Let's schedule a meeting for tomorrow.", pa_script: "ਆਓ ਕੱਲ੍ਹ ਲਈ ਮੀਟਿੰਗ ਤੈਅ ਕਰੀਏ।", pa_translit: "Aao kal lai meeting taiy karie." }
    ]
  }
};