let contents = document.getElementsByClassName("character")
let talks= document.getElementsByClassName("talk")
let iH = window.innerHeight

window.scrollTo({top:0, behavior:'smooth'})

var1 = window.innerWidth > 540 ? 100: iH*0.3;
let posArray = []
for(let i=1; i<talks.length; i++){
    posArray.push(talks[i].getBoundingClientRect().y)
}

function addEvent() {
    window.addEventListener("scroll",() => {
        let scrY = window.scrollY
        let idx = posArray.findIndex(e => {return iH+scrY >= e-100 && scrY <= e-iH+var1})
        console.log(scrY+iH-var1, posArray)
        if(idx > -1){
            talks[idx+1].classList.add('slideIn')
            setTimeout(() => {
                contents[idx].classList.add('slideIn')
            },200)
        }
    })
}

addEvent()