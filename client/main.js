const characterDisplay = document.getElementById("character-display")
const newTeam = document.getElementById('team-display')

const handleDisplay = arr => {
    while(characterDisplay.childNodes.length > 0){
        characterDisplay.removeChild(characterDisplay.lastChild)
    }
    for(let i = 0; i < arr.length; i++) {
        displayChar(arr[i])
    }
    
}

const displayChar = (char) => {
    console.log('DM', char.id);
    
    let characterContainer = document.createElement("div")
    characterContainer.className = 'char-container'
    characterContainer.innerHTML = `<h3>${char.Name}</h3> <img id="charpic" src="${char.iconPic}"/>
    <button id='add-team-${char.id}'>add</button>`
    

    characterDisplay.appendChild(characterContainer)
    
    document.getElementById(`add-team-${char.id}`).addEventListener("click",e => {
       
        addTeam(char)
    })
}
const addTeam = (char) => {


    console.log(char);
    axios
    .post(`http://localHost:4545/api/team`,char)
    .then(res => {
        displayteam(char)
            })
    .catch(err => console.log(err))
            
}
const displayteam = (char) => {

    console.log('char recived');
    let addchar = document.createElement("p")
    addchar.id = char.id
    addchar.className = 'team-comp'
    addchar.innerHTML =`<h2>${char.Name}<img id="teampic" src="${char.iconPic}"/><h2/><button id="delete-${char.id}">Delete</button>
    <p>Inputs:<img id="inputPic" src="${char.inputImg}"</p>`
    
    newTeam.appendChild(addchar)

    document.getElementById(`delete-${char.id}`).addEventListener(`click`,() => {
         deleteChar(char.id)
         addchar.remove()
    })
}

const getChar = () => {
    axios
    .get("http://localHost:4545/api/character")
    .then(res => {
        handleDisplay(res.data)
    })
    .catch(err => console.log(err))
}
const deleteChar = (id) => {
    console.log(id)
    axios
    .delete(`http://localHost:4545/api/team/${id}`)
    .then(res => {
        console.log(res);

    })
    .catch(err => console.log(err))
}
getChar()