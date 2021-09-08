import fetchCharacters from "./fetchCharacters.js"
import displayCharacters from "./displayCharacters.js"


const container = document.querySelector(".message-container")


const showCharacters = async (url) => {

    const characters = await fetchCharacters(url)
    displayCharacters(characters)

    if(characters.length === 0) {
        container.innerHTML = `<h3 class="message">No Character matched your Search</h3>`
    }
    
    else {
        container.innerHTML = null
    }

}


export default showCharacters