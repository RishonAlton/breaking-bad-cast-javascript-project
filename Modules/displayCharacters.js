const displayCharacters = (data) => {

    const container = document.querySelector(".character-grid")

    container.innerHTML = data.map(item => {
        const { name, nickname, img, status, birthday, portrayed } = item
        return (`
            <article class="character">
                <img src="${img}" alt="${name}">
                <div class="character-info">
                    <h3 class="name">${name}</h3>
                    <ul class="details">
                        <li>
                            <strong>Actor Name: </strong>
                            ${portrayed}
                        </li>
                        <li>
                            <strong>Nickname: </strong>
                            ${nickname}
                        </li>
                        <li>
                            <strong>Birthday: </strong>
                            ${birthday}
                        </li>
                        <li>
                            <strong>Status: </strong>
                            ${status}
                        </li>
                    </ul>
                </div>
            </article>
        `)
    }).join(" ")

}


export default displayCharacters