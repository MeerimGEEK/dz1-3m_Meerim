const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')
const exp = /^[a-zA-Z0-9_%+-]+([a-zA-Z]@gmail.com)$/

gmailButton.onclick = () => {
    if (exp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'ok'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'not ok'
        gmailResult.style.color = 'red'
    }
}

let count = 0
 const moveBlock = () => {
    const childBlock = document.querySelector('.child_block')
    childBlock.style.left =  `${count}px`
    count++
    if (count <= 448) {
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()