let posArray = []
let contents = document.getElementsByClassName("character")
let talks= document.getElementsByClassName("talk")

window.scrollTo({top:0, behavior:'smooth'})


function addEvent() {
    window.addEventListener("scroll",() => {
        let posArray = []
        for(let i=1; i<talks.length; i++){
            posArray.push(talks[i].getBoundingClientRect().top)
        }
        let iH = window.innerHeight
        let idx = posArray.findIndex(e => {return iH >= e && e>300})

        if(idx > -1){
            talks[idx+1].classList.add('slideIn')
            setTimeout(() => {
                contents[idx].classList.add('slideIn')
            },200)
        }
    })
}

addEvent()