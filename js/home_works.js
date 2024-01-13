const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')
const exp = /^[a-zA-Z0-9_%+-]+([a-zA-Z]@gmail.com)$/

gmailButton.onclick = () => {
    if (exp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'ok'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'error'
        gmailResult.style.color = 'red'
    }
}

let count = 0
const childBlock = document.querySelector('.child_block')
let positionX = 0
let positionY = 0
 const moveBlock = () => {

     childBlock.style.left = `${positionX}px`
     childBlock.style.top = `${positionY}px`
     if (positionX < 448 && positionY === 0){
        positionX++
        setTimeout(moveBlock, 3 )
    }else if (positionX === 448 && positionY < 448) {
        positionY++
        setTimeout(moveBlock, 3 )
    }else if (positionY === 448 && positionX !== 0) {
        positionX--
        setTimeout(moveBlock, 3 )
    }else if (positionX === 0 && positionY !== 0) {
        positionY--
        setTimeout(moveBlock, 3 )
    }

}
moveBlock()
const start = document.querySelector( '#start')
const stop = document.querySelector( '#stop')
const reset = document.querySelector( '#reset')
const seconds = document.querySelector('#seconds')
let timeInterval
let run = false
let counter = 0
const timerChange = () => {
    counter++
    seconds.textContent = counter
}
const timerRun = () => {
    if (!run) {
        timeInterval = setInterval(timerChange,1000)
        run = true
    }
}
start.onclick = timerRun
const timerStop = () => {
    clearInterval(timeInterval)
    run = false
}
stop.onclick = timerStop
const timerReset = () => {
    clearInterval(timeInterval)
    counter = 0
    seconds.textContent = counter
    run = false
}
reset.onclick = timerReset