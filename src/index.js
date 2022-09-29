const URL = 'http://localhost:3000/characters';

const form = document.getElementById('votes-form');
form.addEventListener('submit', newVoteForm)

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', resetVoteDisplay)

const newCharForm = document.getElementById('character-form');
newCharForm.addEventListener('submit', createNewChar);

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

function resetVoteDisplay(e) {
    const voteDisplay = document.getElementById('vote-count');
    voteDisplay.textContent = 0;
}

function createNewChar(e) {
    e.preventDefault();
    const newChar = {
        name: e.target.name.value,
        image: e.target['image-url'].value,
        votes: 0
    }

    const nameDisplay = document.getElementById('name');
    const imgDisplay = document.getElementById('image');
    const voteDisplay = document.getElementById('vote-count');

    nameDisplay.textContent = newChar.name;
    imgDisplay.src = newChar.image;
    voteDisplay.textContent = newChar.votes;

    renderChar(newChar);
    newCharForm.reset();
}