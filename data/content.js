// Lumo content database
// Plain data — no backend needed. Add more entries to grow the app.
//
// Two shapes of deck:
//   type: "phrases"  -> a flat list of phrases, used directly for a practice session
//   type: "group"    -> a topic containing several categories, each with its own phrases
//
// pa_script / pa_translit are optional — Punjabi script + phonetic transliteration.
// Decks without them (like the NZ conversation set) simply show English only.

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
          { en: "Hi, how are you going today?" },
          { en: "Hey, it's good to see you again, how have you been?" },
          { en: "Good morning, hope you slept well and are ready for the day." },
          { en: "How's your day been so far? Anything interesting happening?" },
          { en: "Hi there, I don't think we've met before, I'm _____." },
          { en: "Lovely weather today, isn't it?" },
          { en: "How's everything going with your work or studies lately?" },
          { en: "It's been a while, we should catch up properly sometime." },
          { en: "Hope you're having a good week so far." },
          { en: "Take care, and I hope the rest of your day goes smoothly." }
        ]
      },
      {
        id: "introducing",
        label: "Introducing Yourself",
        phrases: [
          { en: "Hi, my name is _____, and I've just recently moved to New Zealand." },
          { en: "I'm originally from _____, and I'm still getting used to life here." },
          { en: "I'm currently working and trying to settle into a new routine." },
          { en: "I'm studying at the moment, mostly focusing on improving my English." },
          { en: "I've been here for a few months now and I'm really enjoying it." },
          { en: "I'm trying to learn more about Kiwi culture and how things work here." },
          { en: "I work in hospitality, so I usually deal with customers every day." },
          { en: "It's nice to meet you properly, I've heard a lot about you." },
          { en: "I'm still new here, so I might ask a lot of questions." },
          { en: "What about you, what do you usually do for work or study?" }
        ]
      },
      {
        id: "work",
        label: "At Work",
        phrases: [
          { en: "Hey, could you please show me again how this task is done?" },
          { en: "I'm still learning, so I might need a bit of help getting this right." },
          { en: "Just checking, do you want me to finish this before moving on to the next job?" },
          { en: "I'll start on this now and let you know once it's done." },
          { en: "Sorry, I didn't quite understand that, could you explain it a bit differently?" },
          { en: "I'll take a quick break and then come back to finish the rest." },
          { en: "Let me know if you need help with anything, I'm happy to help." },
          { en: "I think I've made a mistake here, can you help me fix it?" },
          { en: "I'll double-check everything before I submit it to make sure it's correct." },
          { en: "Thanks for your patience, I'm still getting used to the process." }
        ]
      },
      {
        id: "cafe",
        label: "Café / Ordering Food",
        phrases: [
          { en: "Hi, could I please get a flat white and a sandwich, thanks." },
          { en: "I'm just after a coffee to go, something strong if possible." },
          { en: "Can I please see the menu when you have a moment?" },
          { en: "Is this made fresh, or has it been sitting there for a while?" },
          { en: "I'll have the same as that person, it looks really good." },
          { en: "Could I get a bit more milk in my coffee, please?" },
          { en: "Is it okay if I sit here for a while after I finish?" },
          { en: "That was really nice, I'll definitely come back again." },
          { en: "Could I please get the bill when you're ready, thank you." },
          { en: "Cheers, have a good one, I really enjoyed that." }
        ]
      },
      {
        id: "shopping",
        label: "Shopping / Daily Errands",
        phrases: [
          { en: "Hi, I was just wondering how much this item costs?" },
          { en: "Do you happen to have this in a different size or colour?" },
          { en: "I'm not too sure what I need yet, I'm just having a look around." },
          { en: "Is there a discount on this at the moment or is it full price?" },
          { en: "Could you please help me find where the dairy section is?" },
          { en: "I'd like to return this because it doesn't fit properly." },
          { en: "Do you mind if I try this on before I decide to buy it?" },
          { en: "I think I'll take this one, it looks like the best option." },
          { en: "Can I pay by card, or do you only accept cash?" },
          { en: "Thanks for your help, I really appreciate it." }
        ]
      },
      {
        id: "directions",
        label: "Asking for Directions",
        phrases: [
          { en: "Excuse me, could you please tell me how to get to the city centre?" },
          { en: "I'm trying to find the nearest bus stop, do you know where it is?" },
          { en: "Is it far from here, or can I walk there easily?" },
          { en: "Could you show me on the map so I don't get lost?" },
          { en: "I'm not from around here, so I might need a bit of guidance." },
          { en: "Should I turn left at the next intersection or keep going straight?" },
          { en: "How long does it usually take to get there by bus?" },
          { en: "I think I might be heading the wrong way, can you confirm?" },
          { en: "Thank you for your help, I really appreciate it." },
          { en: "Have a great day, thanks again for the directions." }
        ]
      },
      {
        id: "transport",
        label: "Transport / Bus / Train",
        phrases: [
          { en: "Hi, does this bus go all the way into the city centre?" },
          { en: "Do you know when the next bus is coming? I've been waiting a while." },
          { en: "Is it okay if I sit here, or is this seat taken?" },
          { en: "Could you please let me know when we reach my stop?" },
          { en: "Thanks driver, have a good day and stay safe." },
          { en: "I think I missed my stop, what should I do now?" },
          { en: "Is this the right platform for the train to Auckland?" },
          { en: "How long is the ride going to take from here?" },
          { en: "Do I need to tap my card when I get off as well?" },
          { en: "Cheers, thanks for the information." }
        ]
      },
      {
        id: "friends",
        label: "Making Friends / Social Life",
        phrases: [
          { en: "So what do you usually like to do in your free time?" },
          { en: "That sounds really interesting, tell me more about it." },
          { en: "I've been looking for new friends since I moved here." },
          { en: "Would you be keen to grab a coffee sometime this week?" },
          { en: "I really enjoyed talking with you, we should catch up again soon." },
          { en: "I like your vibe, you seem really easy to talk to." },
          { en: "Do you know any good places to hang out around here?" },
          { en: "That's funny, I've had a similar experience before." },
          { en: "Let's stay in touch and plan something sometime." },
          { en: "Take care, and I'll see you around." }
        ]
      },
      {
        id: "home",
        label: "Home / Daily Life",
        phrases: [
          { en: "I'm just cooking dinner at home, nothing too fancy tonight." },
          { en: "I've had a long day, so I'm just going to relax for a bit." },
          { en: "I need to clean up the house before the weekend." },
          { en: "I think I'll go to bed early tonight because I'm really tired." },
          { en: "I'm doing laundry and trying to get everything organised." },
          { en: "I might watch a bit of TV before I sleep." },
          { en: "I forgot to buy groceries today, I'll go tomorrow." },
          { en: "I'm trying to save money, so I'm cooking at home more." },
          { en: "The house is finally starting to feel comfortable now." },
          { en: "I just want a quiet night to myself." }
        ]
      },
      {
        id: "polite",
        label: "Polite Everyday Expressions",
        phrases: [
          { en: "No worries at all, it's not a problem." },
          { en: "Yeah, that sounds good to me, I'm happy with that plan." },
          { en: "Sweet as, we can sort that out easily." },
          { en: "Cheers for that, I really appreciate your help." },
          { en: "That's all good, don't worry about it." },
          { en: "Good on you, that was a really good effort." },
          { en: "I totally understand, that makes sense." },
          { en: "We'll sort it out, no stress at all." },
          { en: "See you later, take it easy and look after yourself." },
          { en: "Have a safe trip, and let me know when you arrive." }
        ]
      }
    ]
  }
};
