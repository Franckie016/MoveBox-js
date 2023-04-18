const spanX = document.querySelector(".valueX span")
const spanY = document.querySelector(".valueY span")
const cursor = document.querySelector(".mouse div")


let x = 0
let y = 0

// Recuperation de la partie visible de la lageur du fenêtre de navigation
const windowWidth = window.innerWidth

// Recuperation de la partie visible de la hauteur du fenêtre de navigation
const windowHeight = window.innerHeight


function updatePosition(event) {
    x = event.pageX
    y = event.pageY

    x = Math.min(x, windowWidth - cursor.offsetWidth)
    y = Math.min(y, windowHeight - cursor.offsetHeight)

    spanX.textContent = x
    spanY.textContent = y

    cursor.style.left = x + "px"
}

window.addEventListener("mousemove", updatePosition)