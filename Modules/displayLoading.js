const loading = document.querySelector(".page-loading")


const showLoading = () => {

    loading.classList.add("show-loading")

    loading.nextElementSibling.style.display = "none"
    loading.nextElementSibling.nextElementSibling.style.display = "none"

}


const hideLoading = () => {

    loading.classList.remove("show-loading")

    loading.nextElementSibling.style.display = "block"
    loading.nextElementSibling.nextElementSibling.style.display = "grid"

}


export { showLoading, hideLoading }