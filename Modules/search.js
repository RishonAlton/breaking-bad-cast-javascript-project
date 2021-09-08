import showCharacters from "./showCharacters.js"


const url = "https://www.breakingbadapi.com/api/characters?name="

const form = document.querySelector(".form")
const inputForm = document.querySelector(".input-form")


form.addEventListener("keyup", (e) => {

    e.preventDefault()
    const value = inputForm.value

    showCharacters(url + value)

})