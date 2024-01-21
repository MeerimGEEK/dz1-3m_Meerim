const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalBumper = document.querySelector('.modal_close')
const openModal = () => {
    modal.style.display = 'block'
    document.body.overflow = 'hidden'
}
const closeModal = () => {
    modal.style.display = 'none'
    document.body.overflow = ''
}
modalTrigger.onclick = () => openModal()
closeModalBumper.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}
const bottom = () => {
    return window.innerHeight + window.scrollY >=document.documentElement.scrollHeight
}
const scrollEnd = () => {
    if (bottom()) {
        openModal()
        window.removeEventListener('scroll', scrollEnd)
    }
}
window.addEventListener('scroll', scrollEnd)
setTimeout(()=> openModal(), 10000)

scrollEnd()