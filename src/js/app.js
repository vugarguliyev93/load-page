// window.addEventListener("load", () => {
//     const loader = document.querySelector('.loader')

//     loader.classList.add("loader-hidden")
// })
// window.addEventListener("load", setTimeout(removeLoad, 5000))
const text = document.querySelector('#input-text');


window.onkeydown = function (e) {
    let key = e.code

    if (key == "Backspace") {
        e.preventDefault()
        text.value = text.value + " "
    }

    else if (key == "Space") {
        e.preventDefault();
        text.value = text.value.substr(0, text.value.length - 1)

    }
}

function removeLoad() {
    const loader = document.querySelector(".loader");
    document.body.removeChild(loader)
    document.getElementById('input-text').style.display = "flex"

}
window.addEventListener("load", setTimeout(removeLoad, 5000));


