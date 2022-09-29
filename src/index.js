const URL = 'http://localhost:3000/characters';
const form = document.getElementById('votes-form');
form.addEventListener('submit', newVoteForm)

fetch(URL)
    .then(res => res.json())
    .then(renderChars)

function renderChars(chars) {
    chars.forEach(renderChar);
}

function renderChar(char) {
    const CharBarDiv = document.getElementById('character-bar');
    const charNameSpan = document.createElement('span');
    charNameSpan.textContent = char.name;
    CharBarDiv.append(charNameSpan);
    
    charNameSpan.addEventListener('click', e => renderDetails(char));
}

function renderDetails(char) {
    const nameDisplay = document.getElementById('name');
    const imgDisplay = document.getElementById('image');
    const voteDisplay = document.getElementById('vote-count');

    nameDisplay.textContent = char.name;
    imgDisplay.src = char.image;
    voteDisplay.textContent = char.votes;
}

function newVoteForm(e) {
    e.preventDefault();
    const votes = e.target.votes.value;
    const voteDisplay = document.getElementById('vote-count');
    voteDisplay.textContent = parseInt(voteDisplay.textContent) + parseInt(votes);
    form.reset();
}