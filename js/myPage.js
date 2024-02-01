const cardsItem = document.querySelector('.cards_item')
const URL = 'https://jsonplaceholder.typicode.com/posts'
const cardsRequest = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        data.forEach(data => {
            const card = document.createElement('div')
            card.classList.add('card')
            card.innerHTML = `
                  <div class="item">
                    <div class="item_image">
                        <img src="https://berita.yodu.id/wp-content/uploads/2021/12/1-solo-leveling_res.jpg" alt="high-rise-invasion">
                    </div>
                    <h4>${data.title}</h4>
                    <p>${data.body}</p>
                </div>
            `
            cardsItem.append(card)
        })
    }catch (error){
        console.log(error)
    }
}
cardsRequest(URL)