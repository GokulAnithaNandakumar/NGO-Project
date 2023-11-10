const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('div');
    const bTag = document.createElement('h1');
    const htag = document.createElement('h5');
    bTag.append(username)
    htag.append(tweet)
    newTweet.append(bTag);
    newTweet.append(htag)
    tweetsContainer.append(newTweet);
}
