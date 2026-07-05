// Lumo content database
// Plain data — no backend needed. Add more entries to grow the app.
//
// Two shapes of deck:
//   type: "phrases"  -> a flat list of phrases, used directly for a practice session
//   type: "group"    -> a topic containing several categories, each with its own phrases
//
// pa_script / pa_translit = Punjabi (Gurmukhi) translation + phonetic transliteration.

const LUMO_CONTENT = {
  beginner: {
    type: "phrases",
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
    type: "phrases",
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
    type: "phrases",
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
  },

  daily: {
    type: "group",
    label: "Day to Day Conversation",
    description: "Real, natural phrases for everyday situations",
    categories: [
      {
        id: "greetings",
        label: "Greetings & Small Talk",
        phrases: [
          { en: "Hi, how are you going today?", pa_script: "ਹੈਲੋ, ਅੱਜ ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ?", pa_translit: "Hello, ajj tussi kiven ho?" },
          { en: "Hey, it's good to see you again, how have you been?", pa_script: "ਹੈ, ਤੁਹਾਨੂੰ ਦੁਬਾਰਾ ਦੇਖ ਕੇ ਚੰਗਾ ਲੱਗਿਆ, ਤੁਸੀਂ ਕਿਵੇਂ ਰਹੇ?", pa_translit: "Hey, tuhanu dubara dekh ke changa lagiya, tussi kiven rahe?" },
          { en: "Good morning, hope you slept well and are ready for the day.", pa_script: "ਸ਼ੁਭ ਸਵੇਰ, ਉਮੀਦ ਹੈ ਤੁਸੀਂ ਚੰਗੀ ਨੀਂਦ ਲਈ ਅਤੇ ਦਿਨ ਲਈ ਤਿਆਰ ਹੋ।", pa_translit: "Shubh sawer, umeed hai tussi changi neend layi ate din layi tiyar ho." },
          { en: "How's your day been so far? Anything interesting happening?", pa_script: "ਤੁਹਾਡਾ ਦਿਨ ਹੁਣ ਤੱਕ ਕਿਵੇਂ ਰਿਹਾ? ਕੁਝ ਦਿਲਚਸਪ ਹੋ ਰਿਹਾ ਹੈ?", pa_translit: "Tuhada din hun tak kiven riha? Kujh dilchasp ho riha hai?" },
          { en: "Hi there, I don't think we've met before, I'm _____.", pa_script: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਮੈਨੂੰ ਲੱਗਦਾ ਹੈ ਅਸੀਂ ਪਹਿਲਾਂ ਨਹੀਂ ਮਿਲੇ, ਮੈਂ _____ ਹਾਂ।", pa_translit: "Sat sri akal, mainu lagda hai asi pehlan nahi mile, main _____ haan." },
          { en: "Lovely weather today, isn't it?", pa_script: "ਅੱਜ ਮੌਸਮ ਬਹੁਤ ਵਧੀਆ ਹੈ, ਹੈ ਨਾ?", pa_translit: "Ajj mausam bahut vadhiya hai, hai na?" },
          { en: "How's everything going with your work or studies lately?", pa_script: "ਹਾਲ ਹੀ ਵਿੱਚ ਤੁਹਾਡੇ ਕੰਮ ਜਾਂ ਪੜ੍ਹਾਈ ਨਾਲ ਸਭ ਕੁਝ ਕਿਵੇਂ ਚੱਲ ਰਿਹਾ ਹੈ?", pa_translit: "Haal hi vich tuhade kamm jaan padhai naal sab kujh kiven chal riha hai?" },
          { en: "It's been a while, we should catch up properly sometime.", pa_script: "ਬਹੁਤ ਸਮਾਂ ਹੋ ਗਿਆ ਹੈ, ਸਾਨੂੰ ਕਦੇ ਚੰਗੀ ਤਰ੍ਹਾਂ ਮਿਲਣਾ ਚਾਹੀਦਾ ਹੈ।", pa_translit: "Bahut samaan ho gaya hai, sanu kade changi tarah milna chahida hai." },
          { en: "Hope you're having a good week so far.", pa_script: "ਉਮੀਦ ਹੈ ਤੁਹਾਡਾ ਹਫ਼ਤਾ ਹੁਣ ਤੱਕ ਵਧੀਆ ਜਾ ਰਿਹਾ ਹੈ।", pa_translit: "Umeed hai tuhada hafta hun tak vadhiya ja riha hai." },
          { en: "Take care, and I hope the rest of your day goes smoothly.", pa_script: "ਆਪਣਾ ਖਿਆਲ ਰੱਖਣਾ, ਅਤੇ ਉਮੀਦ ਹੈ ਤੁਹਾਡਾ ਬਾਕੀ ਦਿਨ ਵਧੀਆ ਲੰਘੇ।", pa_translit: "Apna khiyal rakhna, ate umeed hai tuhada baki din vadhiya langhe." }
        ]
      },
      {
        id: "introducing",
        label: "Introducing Yourself",
        phrases: [
          { en: "Hi, my name is _____, and I've just recently moved to New Zealand.", pa_script: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਮੇਰਾ ਨਾਮ _____ ਹੈ, ਅਤੇ ਮੈਂ ਹੁਣੇ ਹੀ ਨਿਊਜ਼ੀਲੈਂਡ ਆਇਆ ਹਾਂ।", pa_translit: "Sat sri akal, mera naam _____ hai, ate main hune hi New Zealand aya haan." },
          { en: "I'm originally from _____, and I'm still getting used to life here.", pa_script: "ਮੈਂ ਅਸਲ ਵਿੱਚ _____ ਤੋਂ ਹਾਂ, ਅਤੇ ਮੈਂ ਹਾਲੇ ਵੀ ਇੱਥੋਂ ਦੀ ਜ਼ਿੰਦਗੀ ਦਾ ਆਦੀ ਹੋ ਰਿਹਾ ਹਾਂ।", pa_translit: "Main asal vich _____ ton haan, ate main haale vi ithon di zindagi da aadi ho riha haan." },
          { en: "I'm currently working and trying to settle into a new routine.", pa_script: "ਮੈਂ ਇਸ ਵੇਲੇ ਕੰਮ ਕਰ ਰਿਹਾ ਹਾਂ ਅਤੇ ਇੱਕ ਨਵੀਂ ਰੁਟੀਨ ਵਿੱਚ ਸੈਟਲ ਹੋਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰ ਰਿਹਾ ਹਾਂ।", pa_translit: "Main is vele kamm kar riha haan ate ik navin routine vich settle hon di koshish kar riha haan." },
          { en: "I'm studying at the moment, mostly focusing on improving my English.", pa_script: "ਮੈਂ ਇਸ ਵੇਲੇ ਪੜ੍ਹ ਰਿਹਾ ਹਾਂ, ਜ਼ਿਆਦਾਤਰ ਆਪਣੀ ਅੰਗਰੇਜ਼ੀ ਸੁਧਾਰਨ 'ਤੇ ਧਿਆਨ ਦੇ ਰਿਹਾ ਹਾਂ।", pa_translit: "Main is vele padh riha haan, ziyadatar apni angrezi sudharan te dhyan de riha haan." },
          { en: "I've been here for a few months now and I'm really enjoying it.", pa_script: "ਮੈਨੂੰ ਇੱਥੇ ਆਏ ਕੁਝ ਮਹੀਨੇ ਹੋ ਗਏ ਹਨ ਅਤੇ ਮੈਨੂੰ ਇਹ ਬਹੁਤ ਪਸੰਦ ਆ ਰਿਹਾ ਹੈ।", pa_translit: "Mainu ithe aaye kujh maheene ho gaye han ate mainu eh bahut pasand aa riha hai." },
          { en: "I'm trying to learn more about Kiwi culture and how things work here.", pa_script: "ਮੈਂ ਕੀਵੀ ਸੱਭਿਆਚਾਰ ਅਤੇ ਇੱਥੇ ਚੀਜ਼ਾਂ ਕਿਵੇਂ ਚੱਲਦੀਆਂ ਹਨ ਬਾਰੇ ਹੋਰ ਸਿੱਖਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰ ਰਿਹਾ ਹਾਂ।", pa_translit: "Main Kiwi sabhiyachar ate ithe cheezan kiven chaldiyan han bare hor sikhan di koshish kar riha haan." },
          { en: "I work in hospitality, so I usually deal with customers every day.", pa_script: "ਮੈਂ ਹਾਸਪਿਟੈਲਿਟੀ ਵਿੱਚ ਕੰਮ ਕਰਦਾ ਹਾਂ, ਇਸ ਲਈ ਮੈਂ ਆਮ ਤੌਰ 'ਤੇ ਹਰ ਰੋਜ਼ ਗਾਹਕਾਂ ਨਾਲ ਗੱਲ ਕਰਦਾ ਹਾਂ।", pa_translit: "Main hospitality vich kamm karda haan, is layi main aam taur te har roz gahkan naal gal karda haan." },
          { en: "It's nice to meet you properly, I've heard a lot about you.", pa_script: "ਤੁਹਾਨੂੰ ਚੰਗੀ ਤਰ੍ਹਾਂ ਮਿਲ ਕੇ ਖੁਸ਼ੀ ਹੋਈ, ਮੈਂ ਤੁਹਾਡੇ ਬਾਰੇ ਬਹੁਤ ਕੁਝ ਸੁਣਿਆ ਹੈ।", pa_translit: "Tuhanu changi tarah mil ke khushi hoi, main tuhade bare bahut kujh sunya hai." },
          { en: "I'm still new here, so I might ask a lot of questions.", pa_script: "ਮੈਂ ਇੱਥੇ ਹਾਲੇ ਨਵਾਂ ਹਾਂ, ਇਸ ਲਈ ਮੈਂ ਬਹੁਤ ਸਾਰੇ ਸਵਾਲ ਪੁੱਛ ਸਕਦਾ ਹਾਂ।", pa_translit: "Main ithe haale navan haan, is layi main bahut saare sawaal puchh sakda haan." },
          { en: "What about you, what do you usually do for work or study?", pa_script: "ਤੁਹਾਡੇ ਬਾਰੇ ਕੀ, ਤੁਸੀਂ ਆਮ ਤੌਰ 'ਤੇ ਕੰਮ ਜਾਂ ਪੜ੍ਹਾਈ ਲਈ ਕੀ ਕਰਦੇ ਹੋ?", pa_translit: "Tuhade bare ki, tussi aam taur te kamm jaan padhai layi ki karde ho?" }
        ]
      },
      {
        id: "work",
        label: "At Work",
        phrases: [
          { en: "Hey, could you please show me again how this task is done?", pa_script: "ਹੈ, ਕੀ ਤੁਸੀਂ ਮੈਨੂੰ ਦੁਬਾਰਾ ਦਿਖਾ ਸਕਦੇ ਹੋ ਕਿ ਇਹ ਕੰਮ ਕਿਵੇਂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ?", pa_translit: "Hey, ki tussi mainu dubara dikha sakde ho ki eh kamm kiven kita janda hai?" },
          { en: "I'm still learning, so I might need a bit of help getting this right.", pa_script: "ਮੈਂ ਹਾਲੇ ਸਿੱਖ ਰਿਹਾ ਹਾਂ, ਇਸ ਲਈ ਮੈਨੂੰ ਇਹ ਸਹੀ ਕਰਨ ਲਈ ਥੋੜੀ ਮਦਦ ਚਾਹੀਦੀ ਹੋ ਸਕਦੀ ਹੈ।", pa_translit: "Main haale sikh riha haan, is layi mainu eh sahi karan layi thodi madad chahidi ho sakdi hai." },
          { en: "Just checking, do you want me to finish this before moving on to the next job?", pa_script: "ਬਸ ਪੁੱਛ ਰਿਹਾ ਹਾਂ, ਕੀ ਤੁਸੀਂ ਚਾਹੁੰਦੇ ਹੋ ਕਿ ਮੈਂ ਅਗਲੇ ਕੰਮ 'ਤੇ ਜਾਣ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਖਤਮ ਕਰਾਂ?", pa_translit: "Bas puchh riha haan, ki tussi chahunde ho ki main agle kamm te jaan ton pehlan eh khatam karan?" },
          { en: "I'll start on this now and let you know once it's done.", pa_script: "ਮੈਂ ਹੁਣੇ ਇਹ ਸ਼ੁਰੂ ਕਰਾਂਗਾ ਅਤੇ ਹੋ ਜਾਣ 'ਤੇ ਤੁਹਾਨੂੰ ਦੱਸ ਦਿਆਂਗਾ।", pa_translit: "Main hune eh shuru karanga ate ho jaan te tuhanu dass dianga." },
          { en: "Sorry, I didn't quite understand that, could you explain it a bit differently?", pa_script: "ਮਾਫ਼ ਕਰਨਾ, ਮੈਨੂੰ ਇਹ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਮਝ ਨਹੀਂ ਆਇਆ, ਕੀ ਤੁਸੀਂ ਇਸਨੂੰ ਥੋੜਾ ਵੱਖਰੇ ਤਰੀਕੇ ਨਾਲ ਸਮਝਾ ਸਕਦੇ ਹੋ?", pa_translit: "Maaf karna, mainu eh puri tarah samajh nahi aya, ki tussi isnu thoda vakhre tarike naal samjha sakde ho?" },
          { en: "I'll take a quick break and then come back to finish the rest.", pa_script: "ਮੈਂ ਥੋੜੀ ਦੇਰ ਬ੍ਰੇਕ ਲਵਾਂਗਾ ਅਤੇ ਫੇਰ ਬਾਕੀ ਖਤਮ ਕਰਨ ਲਈ ਵਾਪਸ ਆਵਾਂਗਾ।", pa_translit: "Main thodi der break lavanga ate fer baki khatam karan layi vapas avanga." },
          { en: "Let me know if you need help with anything, I'm happy to help.", pa_script: "ਜੇ ਤੁਹਾਨੂੰ ਕਿਸੇ ਚੀਜ਼ ਵਿੱਚ ਮਦਦ ਚਾਹੀਦੀ ਹੈ ਤਾਂ ਦੱਸਣਾ, ਮੈਨੂੰ ਮਦਦ ਕਰਕੇ ਖੁਸ਼ੀ ਹੋਵੇਗੀ।", pa_translit: "Je tuhanu kise cheez vich madad chahidi hai taan dassna, mainu madad karke khushi hovegi." },
          { en: "I think I've made a mistake here, can you help me fix it?", pa_script: "ਮੈਨੂੰ ਲੱਗਦਾ ਹੈ ਮੈਥੋਂ ਇੱਥੇ ਗਲਤੀ ਹੋ ਗਈ ਹੈ, ਕੀ ਤੁਸੀਂ ਇਸਨੂੰ ਠੀਕ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੇ ਹੋ?", pa_translit: "Mainu lagda hai maithon ithe galti ho gayi hai, ki tussi isnu theek karan vich madad kar sakde ho?" },
          { en: "I'll double-check everything before I submit it to make sure it's correct.", pa_script: "ਮੈਂ ਇਸਨੂੰ ਜਮ੍ਹਾਂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸਭ ਕੁਝ ਦੁਬਾਰਾ ਚੈੱਕ ਕਰਾਂਗਾ ਤਾਂ ਜੋ ਇਹ ਯਕੀਨੀ ਬਣਾਇਆ ਜਾ ਸਕੇ ਕਿ ਇਹ ਸਹੀ ਹੈ।", pa_translit: "Main isnu jamaan karan ton pehlan sab kujh dubara check karanga taan jo eh yakini banaya ja sake ki eh sahi hai." },
          { en: "Thanks for your patience, I'm still getting used to the process.", pa_script: "ਤੁਹਾਡੇ ਸਬਰ ਲਈ ਧੰਨਵਾਦ, ਮੈਂ ਹਾਲੇ ਇਸ ਪ੍ਰਕਿਰਿਆ ਦਾ ਆਦੀ ਹੋ ਰਿਹਾ ਹਾਂ।", pa_translit: "Tuhade sabar layi dhanvaad, main haale is prakriya da aadi ho riha haan." }
        ]
      },
      {
        id: "cafe",
        label: "Café / Ordering Food",
        phrases: [
          { en: "Hi, could I please get a flat white and a sandwich, thanks.", pa_script: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਕੀ ਮੈਨੂੰ ਇੱਕ ਫਲੈਟ ਵਾਈਟ ਅਤੇ ਇੱਕ ਸੈਂਡਵਿਚ ਮਿਲ ਸਕਦਾ ਹੈ, ਧੰਨਵਾਦ।", pa_translit: "Sat sri akal, ki mainu ik flat white ate ik sandwich mil sakda hai, dhanvaad." },
          { en: "I'm just after a coffee to go, something strong if possible.", pa_script: "ਮੈਨੂੰ ਬਸ ਲੈ ਕੇ ਜਾਣ ਵਾਲੀ ਕੌਫੀ ਚਾਹੀਦੀ ਹੈ, ਜੇ ਹੋ ਸਕੇ ਤਾਂ ਕੁਝ ਸਖ਼ਤ।", pa_translit: "Mainu bas lai ke jaan wali coffee chahidi hai, je ho sake taan kujh sakht." },
          { en: "Can I please see the menu when you have a moment?", pa_script: "ਕੀ ਮੈਂ ਮੀਨੂ ਦੇਖ ਸਕਦਾ ਹਾਂ ਜਦੋਂ ਤੁਹਾਡੇ ਕੋਲ ਸਮਾਂ ਹੋਵੇ?", pa_translit: "Ki main menu dekh sakda haan jadon tuhade kol samaan hove?" },
          { en: "Is this made fresh, or has it been sitting there for a while?", pa_script: "ਕੀ ਇਹ ਤਾਜ਼ਾ ਬਣਿਆ ਹੈ, ਜਾਂ ਇਹ ਕਾਫੀ ਦੇਰ ਤੋਂ ਪਿਆ ਹੈ?", pa_translit: "Ki eh taaza baniya hai, jaan eh kaafi der ton piya hai?" },
          { en: "I'll have the same as that person, it looks really good.", pa_script: "ਮੈਨੂੰ ਵੀ ਉਹੀ ਦੇ ਦਿਓ ਜੋ ਉਸ ਬੰਦੇ ਕੋਲ ਹੈ, ਇਹ ਬਹੁਤ ਵਧੀਆ ਲੱਗ ਰਿਹਾ ਹੈ।", pa_translit: "Mainu vi uhi de dio jo us bande kol hai, eh bahut vadhiya lag riha hai." },
          { en: "Could I get a bit more milk in my coffee, please?", pa_script: "ਕੀ ਮੈਨੂੰ ਮੇਰੀ ਕੌਫੀ ਵਿੱਚ ਥੋੜਾ ਹੋਰ ਦੁੱਧ ਮਿਲ ਸਕਦਾ ਹੈ, ਕਿਰਪਾ ਕਰਕੇ?", pa_translit: "Ki mainu meri coffee vich thoda hor dudh mil sakda hai, kirpa karke?" },
          { en: "Is it okay if I sit here for a while after I finish?", pa_script: "ਕੀ ਇਹ ਠੀਕ ਹੈ ਜੇ ਮੈਂ ਖਤਮ ਕਰਨ ਤੋਂ ਬਾਅਦ ਇੱਥੇ ਥੋੜੀ ਦੇਰ ਬੈਠਾਂ?", pa_translit: "Ki eh theek hai je main khatam karan ton baad ithe thodi der baithan?" },
          { en: "That was really nice, I'll definitely come back again.", pa_script: "ਇਹ ਸੱਚਮੁੱਚ ਵਧੀਆ ਸੀ, ਮੈਂ ਜ਼ਰੂਰ ਦੁਬਾਰਾ ਆਵਾਂਗਾ।", pa_translit: "Eh sachmuch vadhiya si, main zaroor dubara avanga." },
          { en: "Could I please get the bill when you're ready, thank you.", pa_script: "ਕੀ ਮੈਨੂੰ ਬਿੱਲ ਮਿਲ ਸਕਦਾ ਹੈ ਜਦੋਂ ਤੁਸੀਂ ਤਿਆਰ ਹੋਵੋ, ਧੰਨਵਾਦ।", pa_translit: "Ki mainu bill mil sakda hai jadon tussi tiyar hovo, dhanvaad." },
          { en: "Cheers, have a good one, I really enjoyed that.", pa_script: "ਧੰਨਵਾਦ, ਵਧੀਆ ਦਿਨ ਹੋਵੇ, ਮੈਨੂੰ ਇਹ ਸੱਚਮੁੱਚ ਪਸੰਦ ਆਇਆ।", pa_translit: "Dhanvaad, vadhiya din hove, mainu eh sachmuch pasand aya." }
        ]
      },
      {
        id: "shopping",
        label: "Shopping / Daily Errands",
        phrases: [
          { en: "Hi, I was just wondering how much this item costs?", pa_script: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਮੈਂ ਬਸ ਸੋਚ ਰਿਹਾ ਸੀ ਕਿ ਇਸ ਚੀਜ਼ ਦੀ ਕੀਮਤ ਕਿੰਨੀ ਹੈ?", pa_translit: "Sat sri akal, main bas soch riha si ki is cheez di keemat kinni hai?" },
          { en: "Do you happen to have this in a different size or colour?", pa_script: "ਕੀ ਤੁਹਾਡੇ ਕੋਲ ਇਹ ਕਿਸੇ ਹੋਰ ਸਾਈਜ਼ ਜਾਂ ਰੰਗ ਵਿੱਚ ਹੈ?", pa_translit: "Ki tuhade kol eh kise hor size jaan rang vich hai?" },
          { en: "I'm not too sure what I need yet, I'm just having a look around.", pa_script: "ਮੈਨੂੰ ਹਾਲੇ ਪੂਰਾ ਪਤਾ ਨਹੀਂ ਕਿ ਮੈਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ, ਮੈਂ ਬਸ ਦੇਖ ਰਿਹਾ ਹਾਂ।", pa_translit: "Mainu haale pura pata nahi ki mainu ki chahida hai, main bas dekh riha haan." },
          { en: "Is there a discount on this at the moment or is it full price?", pa_script: "ਕੀ ਇਸ ਵੇਲੇ ਇਸ 'ਤੇ ਕੋਈ ਛੋਟ ਹੈ ਜਾਂ ਇਹ ਪੂਰੀ ਕੀਮਤ 'ਤੇ ਹੈ?", pa_translit: "Ki is vele is te koi chhot hai jaan eh puri keemat te hai?" },
          { en: "Could you please help me find where the dairy section is?", pa_script: "ਕੀ ਤੁਸੀਂ ਮੈਨੂੰ ਇਹ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੇ ਹੋ ਕਿ ਡੇਅਰੀ ਸੈਕਸ਼ਨ ਕਿੱਥੇ ਹੈ?", pa_translit: "Ki tussi mainu eh labhan vich madad kar sakde ho ki dairy section kithe hai?" },
          { en: "I'd like to return this because it doesn't fit properly.", pa_script: "ਮੈਂ ਇਸਨੂੰ ਵਾਪਸ ਕਰਨਾ ਚਾਹੁੰਦਾ ਹਾਂ ਕਿਉਂਕਿ ਇਹ ਠੀਕ ਤਰ੍ਹਾਂ ਫਿੱਟ ਨਹੀਂ ਹੁੰਦਾ।", pa_translit: "Main isnu vapas karna chahunda haan kiunki eh theek tarah fit nahi hunda." },
          { en: "Do you mind if I try this on before I decide to buy it?", pa_script: "ਕੀ ਤੁਹਾਨੂੰ ਇਤਰਾਜ਼ ਹੈ ਜੇ ਮੈਂ ਖਰੀਦਣ ਦਾ ਫੈਸਲਾ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਸਨੂੰ ਪਾ ਕੇ ਦੇਖਾਂ?", pa_translit: "Ki tuhanu itraaz hai je main khareedan da faisla karan ton pehlan isnu pa ke dekhan?" },
          { en: "I think I'll take this one, it looks like the best option.", pa_script: "ਮੈਨੂੰ ਲੱਗਦਾ ਹੈ ਮੈਂ ਇਹ ਲਵਾਂਗਾ, ਇਹ ਸਭ ਤੋਂ ਵਧੀਆ ਬਦਲ ਲੱਗਦਾ ਹੈ।", pa_translit: "Mainu lagda hai main eh lavanga, eh sab ton vadhiya badal lagda hai." },
          { en: "Can I pay by card, or do you only accept cash?", pa_script: "ਕੀ ਮੈਂ ਕਾਰਡ ਨਾਲ ਭੁਗਤਾਨ ਕਰ ਸਕਦਾ ਹਾਂ, ਜਾਂ ਤੁਸੀਂ ਸਿਰਫ਼ ਨਕਦ ਲੈਂਦੇ ਹੋ?", pa_translit: "Ki main card naal bhugtaan kar sakda haan, jaan tussi sirf nakad lainde ho?" },
          { en: "Thanks for your help, I really appreciate it.", pa_script: "ਤੁਹਾਡੀ ਮਦਦ ਲਈ ਧੰਨਵਾਦ, ਮੈਂ ਇਸਦੀ ਸੱਚਮੁੱਚ ਕਦਰ ਕਰਦਾ ਹਾਂ।", pa_translit: "Tuhadi madad layi dhanvaad, main isdi sachmuch kadar karda haan." }
        ]
      },
      {
        id: "directions",
        label: "Asking for Directions",
        phrases: [
          { en: "Excuse me, could you please tell me how to get to the city centre?", pa_script: "ਮਾਫ਼ ਕਰਨਾ, ਕੀ ਤੁਸੀਂ ਮੈਨੂੰ ਦੱਸ ਸਕਦੇ ਹੋ ਕਿ ਸ਼ਹਿਰ ਦੇ ਕੇਂਦਰ ਤੱਕ ਕਿਵੇਂ ਜਾਣਾ ਹੈ?", pa_translit: "Maaf karna, ki tussi mainu dass sakde ho ki shehar de kendar tak kiven jana hai?" },
          { en: "I'm trying to find the nearest bus stop, do you know where it is?", pa_script: "ਮੈਂ ਸਭ ਤੋਂ ਨੇੜੇ ਦਾ ਬੱਸ ਸਟਾਪ ਲੱਭ ਰਿਹਾ ਹਾਂ, ਕੀ ਤੁਹਾਨੂੰ ਪਤਾ ਹੈ ਇਹ ਕਿੱਥੇ ਹੈ?", pa_translit: "Main sab ton nede da bus stop labh riha haan, ki tuhanu pata hai eh kithe hai?" },
          { en: "Is it far from here, or can I walk there easily?", pa_script: "ਕੀ ਇਹ ਇੱਥੋਂ ਦੂਰ ਹੈ, ਜਾਂ ਮੈਂ ਆਸਾਨੀ ਨਾਲ ਪੈਦਲ ਜਾ ਸਕਦਾ ਹਾਂ?", pa_translit: "Ki eh ithon door hai, jaan main aasani naal paidal ja sakda haan?" },
          { en: "Could you show me on the map so I don't get lost?", pa_script: "ਕੀ ਤੁਸੀਂ ਮੈਨੂੰ ਨਕਸ਼ੇ 'ਤੇ ਦਿਖਾ ਸਕਦੇ ਹੋ ਤਾਂ ਜੋ ਮੈਂ ਗੁਆਚ ਨਾ ਜਾਵਾਂ?", pa_translit: "Ki tussi mainu nakshe te dikha sakde ho taan jo main guaach na javan?" },
          { en: "I'm not from around here, so I might need a bit of guidance.", pa_script: "ਮੈਂ ਇੱਥੋਂ ਦਾ ਨਹੀਂ ਹਾਂ, ਇਸ ਲਈ ਮੈਨੂੰ ਥੋੜੀ ਮਦਦ ਦੀ ਲੋੜ ਹੋ ਸਕਦੀ ਹੈ।", pa_translit: "Main ithon da nahi haan, is layi mainu thodi madad di lod ho sakdi hai." },
          { en: "Should I turn left at the next intersection or keep going straight?", pa_script: "ਕੀ ਮੈਨੂੰ ਅਗਲੇ ਚੌਰਾਹੇ 'ਤੇ ਖੱਬੇ ਮੁੜਨਾ ਚਾਹੀਦਾ ਹੈ ਜਾਂ ਸਿੱਧਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ?", pa_translit: "Ki mainu agle chaurahe te khabbe murna chahida hai jaan sidha jana chahida hai?" },
          { en: "How long does it usually take to get there by bus?", pa_script: "ਬੱਸ ਦੁਆਰਾ ਉੱਥੇ ਪਹੁੰਚਣ ਵਿੱਚ ਆਮ ਤੌਰ 'ਤੇ ਕਿੰਨਾ ਸਮਾਂ ਲੱਗਦਾ ਹੈ?", pa_translit: "Bus duaara uthe pahunchan vich aam taur te kinna samaan lagda hai?" },
          { en: "I think I might be heading the wrong way, can you confirm?", pa_script: "ਮੈਨੂੰ ਲੱਗਦਾ ਹੈ ਮੈਂ ਗਲਤ ਰਸਤੇ 'ਤੇ ਜਾ ਰਿਹਾ ਹਾਂ, ਕੀ ਤੁਸੀਂ ਦੱਸ ਸਕਦੇ ਹੋ?", pa_translit: "Mainu lagda hai main galat raste te ja riha haan, ki tussi dass sakde ho?" },
          { en: "Thank you for your help, I really appreciate it.", pa_script: "ਤੁਹਾਡੀ ਮਦਦ ਲਈ ਧੰਨਵਾਦ, ਮੈਂ ਇਸਦੀ ਸੱਚਮੁੱਚ ਕਦਰ ਕਰਦਾ ਹਾਂ।", pa_translit: "Tuhadi madad layi dhanvaad, main isdi sachmuch kadar karda haan." },
          { en: "Have a great day, thanks again for the directions.", pa_script: "ਤੁਹਾਡਾ ਦਿਨ ਵਧੀਆ ਹੋਵੇ, ਰਸਤਾ ਦੱਸਣ ਲਈ ਦੁਬਾਰਾ ਧੰਨਵਾਦ।", pa_translit: "Tuhada din vadhiya hove, rasta dassan layi dubara dhanvaad." }
        ]
      },
      {
        id: "transport",
        label: "Transport / Bus / Train",
        phrases: [
          { en: "Hi, does this bus go all the way into the city centre?", pa_script: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਕੀ ਇਹ ਬੱਸ ਸ਼ਹਿਰ ਦੇ ਕੇਂਦਰ ਤੱਕ ਜਾਂਦੀ ਹੈ?", pa_translit: "Sat sri akal, ki eh bus shehar de kendar tak jaandi hai?" },
          { en: "Do you know when the next bus is coming? I've been waiting a while.", pa_script: "ਕੀ ਤੁਹਾਨੂੰ ਪਤਾ ਹੈ ਅਗਲੀ ਬੱਸ ਕਦੋਂ ਆਵੇਗੀ? ਮੈਂ ਕਾਫੀ ਦੇਰ ਤੋਂ ਉਡੀਕ ਰਿਹਾ ਹਾਂ।", pa_translit: "Ki tuhanu pata hai agli bus kadon avegi? Main kaafi der ton udeek riha haan." },
          { en: "Is it okay if I sit here, or is this seat taken?", pa_script: "ਕੀ ਇਹ ਠੀਕ ਹੈ ਜੇ ਮੈਂ ਇੱਥੇ ਬੈਠਾਂ, ਜਾਂ ਇਹ ਸੀਟ ਲਈ ਹੋਈ ਹੈ?", pa_translit: "Ki eh theek hai je main ithe baithan, jaan eh seat layi hoi hai?" },
          { en: "Could you please let me know when we reach my stop?", pa_script: "ਕੀ ਤੁਸੀਂ ਮੈਨੂੰ ਦੱਸ ਸਕਦੇ ਹੋ ਜਦੋਂ ਅਸੀਂ ਮੇਰੇ ਸਟਾਪ 'ਤੇ ਪਹੁੰਚੀਏ?", pa_translit: "Ki tussi mainu dass sakde ho jadon asi mere stop te pahunchie?" },
          { en: "Thanks driver, have a good day and stay safe.", pa_script: "ਧੰਨਵਾਦ ਡਰਾਈਵਰ ਜੀ, ਤੁਹਾਡਾ ਦਿਨ ਵਧੀਆ ਹੋਵੇ ਅਤੇ ਆਪਣਾ ਖਿਆਲ ਰੱਖਣਾ।", pa_translit: "Dhanvaad driver ji, tuhada din vadhiya hove ate apna khiyal rakhna." },
          { en: "I think I missed my stop, what should I do now?", pa_script: "ਮੈਨੂੰ ਲੱਗਦਾ ਹੈ ਮੇਰਾ ਸਟਾਪ ਲੰਘ ਗਿਆ, ਹੁਣ ਮੈਨੂੰ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?", pa_translit: "Mainu lagda hai mera stop langh gaya, hun mainu ki karna chahida hai?" },
          { en: "Is this the right platform for the train to Auckland?", pa_script: "ਕੀ ਇਹ ਔਕਲੈਂਡ ਜਾਣ ਵਾਲੀ ਰੇਲਗੱਡੀ ਲਈ ਸਹੀ ਪਲੇਟਫਾਰਮ ਹੈ?", pa_translit: "Ki eh Auckland jaan wali train layi sahi platform hai?" },
          { en: "How long is the ride going to take from here?", pa_script: "ਇੱਥੋਂ ਸਫ਼ਰ ਕਿੰਨਾ ਸਮਾਂ ਲਵੇਗਾ?", pa_translit: "Ithon safar kinna samaan lavega?" },
          { en: "Do I need to tap my card when I get off as well?", pa_script: "ਕੀ ਮੈਨੂੰ ਉਤਰਦੇ ਸਮੇਂ ਵੀ ਆਪਣਾ ਕਾਰਡ ਟੈਪ ਕਰਨ ਦੀ ਲੋੜ ਹੈ?", pa_translit: "Ki mainu utarde samein vi apna card tap karan di lod hai?" },
          { en: "Cheers, thanks for the information.", pa_script: "ਧੰਨਵਾਦ, ਜਾਣਕਾਰੀ ਲਈ ਸ਼ੁਕਰੀਆ।", pa_translit: "Dhanvaad, jankari layi shukriya." }
        ]
      },
      {
        id: "friends",
        label: "Making Friends / Social Life",
        phrases: [
          { en: "So what do you usually like to do in your free time?", pa_script: "ਤਾਂ ਤੁਸੀਂ ਆਮ ਤੌਰ 'ਤੇ ਆਪਣੇ ਖਾਲੀ ਸਮੇਂ ਵਿੱਚ ਕੀ ਕਰਨਾ ਪਸੰਦ ਕਰਦੇ ਹੋ?", pa_translit: "Taan tussi aam taur te apne khaali samein vich ki karna pasand karde ho?" },
          { en: "That sounds really interesting, tell me more about it.", pa_script: "ਇਹ ਸੱਚਮੁੱਚ ਦਿਲਚਸਪ ਲੱਗਦਾ ਹੈ, ਮੈਨੂੰ ਇਸ ਬਾਰੇ ਹੋਰ ਦੱਸੋ।", pa_translit: "Eh sachmuch dilchasp lagda hai, mainu is bare hor dasso." },
          { en: "I've been looking for new friends since I moved here.", pa_script: "ਮੈਂ ਇੱਥੇ ਆਉਣ ਤੋਂ ਬਾਅਦ ਤੋਂ ਨਵੇਂ ਦੋਸਤ ਲੱਭ ਰਿਹਾ ਹਾਂ।", pa_translit: "Main ithe aaun ton baad ton nave dost labh riha haan." },
          { en: "Would you be keen to grab a coffee sometime this week?", pa_script: "ਕੀ ਤੁਸੀਂ ਇਸ ਹਫ਼ਤੇ ਕਦੇ ਕੌਫੀ ਪੀਣ ਲਈ ਤਿਆਰ ਹੋਵੋਗੇ?", pa_translit: "Ki tussi is hafte kade coffee peen layi tiyar hovoge?" },
          { en: "I really enjoyed talking with you, we should catch up again soon.", pa_script: "ਮੈਨੂੰ ਤੁਹਾਡੇ ਨਾਲ ਗੱਲ ਕਰਕੇ ਸੱਚਮੁੱਚ ਖੁਸ਼ੀ ਹੋਈ, ਸਾਨੂੰ ਜਲਦੀ ਦੁਬਾਰਾ ਮਿਲਣਾ ਚਾਹੀਦਾ ਹੈ।", pa_translit: "Mainu tuhade naal gal karke sachmuch khushi hoi, sanu jaldi dubara milna chahida hai." },
          { en: "I like your vibe, you seem really easy to talk to.", pa_script: "ਮੈਨੂੰ ਤੁਹਾਡਾ ਸੁਭਾਅ ਪਸੰਦ ਹੈ, ਤੁਹਾਡੇ ਨਾਲ ਗੱਲ ਕਰਨਾ ਬਹੁਤ ਆਸਾਨ ਲੱਗਦਾ ਹੈ।", pa_translit: "Mainu tuhada subhaa pasand hai, tuhade naal gal karna bahut aasan lagda hai." },
          { en: "Do you know any good places to hang out around here?", pa_script: "ਕੀ ਤੁਹਾਨੂੰ ਇੱਥੇ ਆਸ ਪਾਸ ਘੁੰਮਣ ਲਈ ਕੋਈ ਚੰਗੀ ਜਗ੍ਹਾ ਪਤਾ ਹੈ?", pa_translit: "Ki tuhanu ithe aas paas ghumman layi koi changi jagah pata hai?" },
          { en: "That's funny, I've had a similar experience before.", pa_script: "ਇਹ ਮਜ਼ੇਦਾਰ ਹੈ, ਮੇਰੇ ਨਾਲ ਵੀ ਪਹਿਲਾਂ ਇਸ ਤਰ੍ਹਾਂ ਹੋ ਚੁੱਕਾ ਹੈ।", pa_translit: "Eh mazedaar hai, mere naal vi pehlan is tarah ho chukka hai." },
          { en: "Let's stay in touch and plan something sometime.", pa_script: "ਆਓ ਸੰਪਰਕ ਵਿੱਚ ਰਹੀਏ ਅਤੇ ਕਦੇ ਕੁਝ ਯੋਜਨਾ ਬਣਾਈਏ।", pa_translit: "Aao sampark vich rahiye ate kade kujh yojna banaiye." },
          { en: "Take care, and I'll see you around.", pa_script: "ਆਪਣਾ ਖਿਆਲ ਰੱਖਣਾ, ਫੇਰ ਮਿਲਾਂਗੇ।", pa_translit: "Apna khiyal rakhna, fer milange." }
        ]
      },
      {
        id: "home",
        label: "Home / Daily Life",
        phrases: [
          { en: "I'm just cooking dinner at home, nothing too fancy tonight.", pa_script: "ਮੈਂ ਬਸ ਘਰ 'ਤੇ ਰਾਤ ਦਾ ਖਾਣਾ ਬਣਾ ਰਿਹਾ ਹਾਂ, ਅੱਜ ਕੁਝ ਖਾਸ ਨਹੀਂ।", pa_translit: "Main bas ghar te raat da khana bana riha haan, ajj kujh khaas nahi." },
          { en: "I've had a long day, so I'm just going to relax for a bit.", pa_script: "ਮੇਰਾ ਦਿਨ ਲੰਬਾ ਰਿਹਾ ਹੈ, ਇਸ ਲਈ ਮੈਂ ਬਸ ਥੋੜਾ ਆਰਾਮ ਕਰਾਂਗਾ।", pa_translit: "Mera din lamba riha hai, is layi main bas thoda aaram karanga." },
          { en: "I need to clean up the house before the weekend.", pa_script: "ਮੈਨੂੰ ਵੀਕਐਂਡ ਤੋਂ ਪਹਿਲਾਂ ਘਰ ਸਾਫ਼ ਕਰਨਾ ਹੈ।", pa_translit: "Mainu weekend ton pehlan ghar saaf karna hai." },
          { en: "I think I'll go to bed early tonight because I'm really tired.", pa_script: "ਮੈਨੂੰ ਲੱਗਦਾ ਹੈ ਮੈਂ ਅੱਜ ਜਲਦੀ ਸੌਂ ਜਾਵਾਂਗਾ ਕਿਉਂਕਿ ਮੈਂ ਬਹੁਤ ਥੱਕਿਆ ਹੋਇਆ ਹਾਂ।", pa_translit: "Mainu lagda hai main ajj jaldi saun javanga kiunki main bahut thakiya hoya haan." },
          { en: "I'm doing laundry and trying to get everything organised.", pa_script: "ਮੈਂ ਕੱਪੜੇ ਧੋ ਰਿਹਾ ਹਾਂ ਅਤੇ ਸਭ ਕੁਝ ਵਿਵਸਥਿਤ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰ ਰਿਹਾ ਹਾਂ।", pa_translit: "Main kapde dho riha haan ate sab kujh vivasthit karan di koshish kar riha haan." },
          { en: "I might watch a bit of TV before I sleep.", pa_script: "ਸੌਣ ਤੋਂ ਪਹਿਲਾਂ ਮੈਂ ਥੋੜਾ ਟੀਵੀ ਦੇਖ ਸਕਦਾ ਹਾਂ।", pa_translit: "Saun ton pehlan main thoda TV dekh sakda haan." },
          { en: "I forgot to buy groceries today, I'll go tomorrow.", pa_script: "ਮੈਂ ਅੱਜ ਕਰਿਆਨਾ ਖਰੀਦਣਾ ਭੁੱਲ ਗਿਆ, ਮੈਂ ਕੱਲ੍ਹ ਜਾਵਾਂਗਾ।", pa_translit: "Main ajj kariyana khareedna bhul gaya, main kal javanga." },
          { en: "I'm trying to save money, so I'm cooking at home more.", pa_script: "ਮੈਂ ਪੈਸੇ ਬਚਾਉਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰ ਰਿਹਾ ਹਾਂ, ਇਸ ਲਈ ਮੈਂ ਘਰ 'ਤੇ ਜ਼ਿਆਦਾ ਖਾਣਾ ਬਣਾ ਰਿਹਾ ਹਾਂ।", pa_translit: "Main paise bachaun di koshish kar riha haan, is layi main ghar te ziyada khana bana riha haan." },
          { en: "The house is finally starting to feel comfortable now.", pa_script: "ਹੁਣ ਆਖਿਰਕਾਰ ਘਰ ਆਰਾਮਦਾਇਕ ਲੱਗਣ ਲੱਗ ਪਿਆ ਹੈ।", pa_translit: "Hun aakhirkar ghar aaramdayak lagan lag piya hai." },
          { en: "I just want a quiet night to myself.", pa_script: "ਮੈਨੂੰ ਬਸ ਆਪਣੇ ਲਈ ਇੱਕ ਸ਼ਾਂਤ ਰਾਤ ਚਾਹੀਦੀ ਹੈ।", pa_translit: "Mainu bas apne layi ik shaant raat chahidi hai." }
        ]
      },
      {
        id: "polite",
        label: "Polite Everyday Expressions",
        phrases: [
          { en: "No worries at all, it's not a problem.", pa_script: "ਕੋਈ ਗੱਲ ਨਹੀਂ, ਇਹ ਕੋਈ ਸਮੱਸਿਆ ਨਹੀਂ ਹੈ।", pa_translit: "Koi gal nahi, eh koi samasya nahi hai." },
          { en: "Yeah, that sounds good to me, I'm happy with that plan.", pa_script: "ਹਾਂ, ਇਹ ਮੈਨੂੰ ਠੀਕ ਲੱਗਦਾ ਹੈ, ਮੈਂ ਇਸ ਯੋਜਨਾ ਨਾਲ ਖੁਸ਼ ਹਾਂ।", pa_translit: "Haan, eh mainu theek lagda hai, main is yojna naal khush haan." },
          { en: "Sweet as, we can sort that out easily.", pa_script: "ਠੀਕ ਹੈ, ਅਸੀਂ ਇਸਨੂੰ ਆਸਾਨੀ ਨਾਲ ਸੁਲਝਾ ਸਕਦੇ ਹਾਂ।", pa_translit: "Theek hai, asi isnu aasani naal sulajha sakde haan." },
          { en: "Cheers for that, I really appreciate your help.", pa_script: "ਇਸਦੇ ਲਈ ਧੰਨਵਾਦ, ਮੈਂ ਤੁਹਾਡੀ ਮਦਦ ਦੀ ਸੱਚਮੁੱਚ ਕਦਰ ਕਰਦਾ ਹਾਂ।", pa_translit: "Isde layi dhanvaad, main tuhadi madad di sachmuch kadar karda haan." },
          { en: "That's all good, don't worry about it.", pa_script: "ਇਹ ਸਭ ਠੀਕ ਹੈ, ਇਸਦੀ ਚਿੰਤਾ ਨਾ ਕਰੋ।", pa_translit: "Eh sab theek hai, isdi chinta na karo." },
          { en: "Good on you, that was a really good effort.", pa_script: "ਸ਼ਾਬਾਸ਼, ਇਹ ਸੱਚਮੁੱਚ ਵਧੀਆ ਕੋਸ਼ਿਸ਼ ਸੀ।", pa_translit: "Shabaash, eh sachmuch vadhiya koshish si." },
          { en: "I totally understand, that makes sense.", pa_script: "ਮੈਂ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਮਝਦਾ ਹਾਂ, ਇਹ ਸਹੀ ਲੱਗਦਾ ਹੈ।", pa_translit: "Main puri tarah samajhda haan, eh sahi lagda hai." },
          { en: "We'll sort it out, no stress at all.", pa_script: "ਅਸੀਂ ਇਸਨੂੰ ਸੁਲਝਾ ਲਵਾਂਗੇ, ਕੋਈ ਟੈਂਸ਼ਨ ਨਹੀਂ।", pa_translit: "Asi isnu sulajha lavange, koi tension nahi." },
          { en: "See you later, take it easy and look after yourself.", pa_script: "ਫੇਰ ਮਿਲਾਂਗੇ, ਆਰਾਮ ਨਾਲ ਰਹਿਣਾ ਅਤੇ ਆਪਣਾ ਖਿਆਲ ਰੱਖਣਾ।", pa_translit: "Fer milange, aaram naal rehna ate apna khiyal rakhna." },
          { en: "Have a safe trip, and let me know when you arrive.", pa_script: "ਸਫ਼ਰ ਸੁਰੱਖਿਅਤ ਰਹੇ, ਅਤੇ ਪਹੁੰਚਣ 'ਤੇ ਦੱਸਣਾ।", pa_translit: "Safar surakhiyat rahe, ate pahunchan te dassna." }
        ]
      }
    ]
  }
};
