// We define the root element
const root = document.querySelector('#root');

// We define the lyrics
const lyrics = [
    'Hi!',
    'I\'m a lyric!',
    'I\'m here just for you! ❤️',
    'How are you?',
    'Me? I\'m fine! 😉',
    'Goodbye!'
];

lyrics.map((value) => {
    // We create a paragraph where the lyric be
    const lyric = document.createElement('p');
    // We append the value to the "lyric" child
    lyric.append(value);
    // We append the lyric to the root element
    root.appendChild(lyric);
});