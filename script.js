const $ = selector => document.querySelector(selector);
const root = $('#root');

const lyrics = ['Hi!', 'I\'m a lyric!', 'I\'m here just for you! ❤️', 'How are you?', 'Me? I\'m fine! 😉', 'Goodbye!'];

lyrics.map((value) => {
    const lyric = document.createElement('p');
    lyric.append(value);
    root.appendChild(lyric);
});