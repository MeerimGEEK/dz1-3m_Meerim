const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContentBlocks.forEach(tabCard=> {
        tabCard.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}
const showTabContent = (tabIndex=0) => {
   tabContentBlocks[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent()
tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab,tabIndex) => {
            if (event.target === tab) {
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}
const tabsAuto = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContentBlocks.length - 1){
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}
tabsAuto()


const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const converter = (element, targetElement, targetElement2, current) => {
    element.oninput = async () => {
        try {
            const response = await fetch('../data/converter.json')
            const data = await response.json()

            switch (current) {
                case "som":
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    targetElement2.value = (element.value / data.eur).toFixed(2)
                    break
                case "usd":
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    targetElement2.value = (element.value * data.eur / data.usd).toFixed(2)
                    break
                case "eur":
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    targetElement2.value = (element.value * (data.usd / data.eur)).toFixed(2)
                    break
                default:
                    break
            }

            if (element.value === '' || targetElement.value === '') {
                targetElement.value = ''
                targetElement2.value = ''
            }
        } catch (error) {
            console.error('Error fetching converter data:', error)
        }
    };
};
converter(som, usd, eur, 'som')
converter(usd, som, eur, 'usd')
converter(eur, som, usd,'eur')

const cards = document.querySelector('.card') ,
    btnNext = document.querySelector('#btn-next'),
    btnPrev = document.querySelector('#btn-prev')

const card = document.getElementById('card')
let countCard = 1

const URL = 'https://jsonplaceholder.typicode.com/todos/'
const cardSwitcher = (id) => {
   fetch(`${URL}${id}`)
       .then(response =>response.json())
       .then((data)=>{
           cards.innerHTML = `
                   <p>${data.title}</p>
                   <p style="color: ${data.completed ?'green':'red'}">${data.completed}</p>
                   <span>${data.id}</span>
           `
       })
}

cardSwitcher(countCard)
btnNext.onclick =() => {
    countCard++
    if (countCard>200){
        countCard = 1
    }
    cardSwitcher(countCard)
}
btnPrev.onclick =() => {
    countCard--
    if (countCard<1){
        countCard = 200
    }
    cardSwitcher(countCard)
}
const fetchRequest = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then (response =>response.json())
        .then((data)=>{
            console.log(data)
        })
        .catch(error =>{
            console.error(error)
        })
}
fetchRequest()