let navIcon = document.querySelector("nav i")
let list = document.querySelector("nav ul")
let settings = document.querySelector("#settings")
let iconSettings = settings.querySelector(".icon-settings")



// Random Backgrounds
let landing = document.querySelector(".landing")
let imgs = ['imgs/05.jpg', "imgs/04.jpg", "imgs/03.jpg"]
let i = 0
let time
function backg() {
    time = setInterval(() => {
        if (i > 2) {
            i = 0
        }
        landing.style.background = `url(${imgs[i++]})`
    }, 5000)
}
backg()
function stopBackg() {
    clearInterval(time)
}
// stop change random
let btnChange = document.querySelectorAll(".random-background  span")
if (localStorage.getItem("randomBg")) {
    let answer = localStorage.getItem("randomBg")
    document.querySelector(`[data-back= "${answer}"]`).style.opacity = "1"
    if (answer === "ok") { backg() }
    else {
        stopBackg()
    }
}
btnChange.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (e.target.classList.contains("yes")) {
            backg()
            btnChange.forEach(btn => {
                btn.style.opacity = ".5"
            })
            e.target.style.opacity = "1"
            localStorage.setItem("randomBg", "ok")
        }
        else {
            btnChange.forEach(btn => {
                btn.style.opacity = ".5"
            })
            e.target.style.opacity = "1"
            stopBackg()
            localStorage.setItem("randomBg", "no")
        }
    })
})

/////////////////


// hiden and show list
navIcon.addEventListener("click", () => {
    list.classList.toggle("show")
})
document.body.addEventListener("click", (e) => {
    if (e.target.tagName !== "I") {
        list.classList.remove("show")
    }
})

// show aside setting
iconSettings.addEventListener("click", () => {
    settings.classList.toggle("move")
})

// get color from localstorage
let spans = document.querySelectorAll(".colors span")

if (localStorage.getItem("color")) {
    let color = localStorage.getItem("color")
    document.documentElement.style.setProperty("--orange-color", color)
    spans.forEach(span => span.classList.remove("active"))
    document.querySelector(`[data-color="${color}"]`).classList.add("active")
}
// swap color by click
spans.forEach(span => {
    span.addEventListener("click", () => {
        document.documentElement.style.setProperty("--orange-color", span.dataset.color)
        spans.forEach(span => span.classList.remove("active"))
        span.classList.add("active")
        localStorage.setItem("color", span.dataset.color)
    })

})

//show or hidden bullet 
let bullets = document.querySelector(".bullet")
let btnbullet = document.querySelectorAll(".show-bullet span")
// onload
if (localStorage.getItem("bullet")) {
    let bullet = localStorage.getItem("bullet")
    document.querySelector(`[data-bullet="${bullet}"]`).style.opacity = "1"
    if (bullet !== "ok") {
        bullets.style.display = "none"
    }

}

btnbullet.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (e.target.classList.contains("yes")) {
            btnbullet.forEach(btn => {
                btn.style.opacity = ".5"
            })
            e.target.style.opacity = "1"
            bullets.style.display = "block"
            localStorage.setItem("bullet", "ok")
        }
        else {
            btnbullet.forEach(btn => {
                btn.style.opacity = ".5"
            })
            e.target.style.opacity = "1"
            bullets.style.display = "none"
            localStorage.setItem("bullet", "no")
        }
    })
})
//reset all options
let reset = document.querySelector(".reset")
reset.addEventListener("click", () => {
    localStorage.clear()
})

// footer time

let copyTime = document.querySelector(".time")
copyTime.textContent = new Date().getFullYear()