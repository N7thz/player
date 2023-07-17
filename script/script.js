//Variaveis
let progress = document.getElementById('progress')
let song = document.querySelector('audio')
let ctrlIcon = document.getElementById('ctrlIcon')
let calibre = document.getElementById('volume')
let hearth = document.getElementById('hearth')

//Eventos
ctrlIcon.addEventListener('click',() => {
    btnPausePlay()
})

hearth.addEventListener('click',() => {
    btnHearth()
})

calibre.addEventListener('click',() => {
    btnMute()
})

progress.addEventListener('change', () => {
    song.play()
    song.currentTime = progress.value
    ctrlIcon.classList.remove('fa-play')
    ctrlIcon.classList.add('fa-pause')
})

//Functions
function btnPausePlay() {
    if (ctrlIcon.classList.contains('fa-play')) {
        song.play()
        ctrlIcon.classList.remove('fa-play')
        ctrlIcon.classList.add('fa-pause')
    } else {
        song.pause()
        ctrlIcon.classList.add('fa-play')
        ctrlIcon.classList.remove('fa-pause')
    }
}

function btnMute() {
    if (calibre.classList.contains('fa-volume-high')) {
        (calibre.classList.remove('fa-volume-high'))
        (calibre.classList.add('fa-volume-xmark'))
    } else {
        (calibre.classList.remove('fa-volume-xmark'))
        (calibre.classList.add('fa-volume-high'))
    }
}

function btnHearth() {
    if (hearth.classList.contains('hearth')) {
        hearth.classList.remove('hearth')
    } else {
        hearth.classList.add('hearth')
    }
}

if (song.play()) {
    setInterval(() =>{
        progress.value = song.currentTime
    },500)
}

