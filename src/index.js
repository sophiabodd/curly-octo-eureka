// Your code here
console.log("harley")
const votesForm = document.getElementById("votes-form")
const voteCount = document.getElementById("votes-count")
const characters = document.getElementById("characters")
const CharacterBar = document.getElementById("charcaterbar")
const image = document.getElementById("image")
const votes = document.getElementById("votes")
const button = document.getElementById("button")
const detailedInfo = document.getElementById("detailedInfo")

console.log("voteCount")


const request = async () => {
    let req = await fetch("http://localhost:3000/characters/1")
    let res = await req.json()
    console.log("res")
    image.src = res.image
    characters.textcontent = res.characters
    characters.textcontent = res.characters
    votes.textcontent = res.votes
    function renderCharacters(characters) {
        characters.forEach(renderCharacter);
    }
    fetch(characters)
        .then((res) => res.json())
        .then(renderCharacters);
   function renderCharacter(character) {
        const characterSpan = document.createElement("span");
        characterSpan.innerText = character.name;
        CharacterBar.append(characterSpan);

        characterSpan.addEventListener("click", () => {
            currentCharacter = character;
            showInfo(character);
        });
    }

   
    votesForm.addEventListener("submit", (e) => {
        e.preventDefault();
        currentCharacter.votes += parseInt(e.target.votes.value);
        showInfo(currentCharacter);
    })

}
       
request()
