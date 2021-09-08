import showCharacters from "./Modules/showCharacters.js"
import "./Modules/search.js"


const url = "https://www.breakingbadapi.com/api/characters"


window.addEventListener("load", () => showCharacters(url))