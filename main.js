 document.addEventListener('DOMContentLoaded',()=>{

    const cardArray = [
        {
            name:'one',
            img:'images/pic1.jpg'
        },
        {
            name:'one',
            img:'images/pic1.jpg'
        },
        {
            name:'two',
            img:'images/pic2.jpeg'
        },
        {
            name:'two',
            img:'images/pic2.jpeg'
        },
        {
            name:'three',
            img:'images/pic3.jpg'
        },
        {
            name:'three',
            img:'images/pic3.jpg'
        },
        {
            name:'four',
            img:'images/pic4.jpg'
        },
        {
            name:'four',
            img:'images/pic4.jpg'
        },
        {
            name:'five',
            img:'images/pic5.jpg'
        },
        {
            name:'five',
            img:'images/pic5.jpg'
        },
        {
            name:'six',
            img:'images/pic6.jpg'
        },
        {
            name:'six',
            img:'images/pic6.jpg'
        },
    ]


    cardArray.sort(()=> 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardWon = [];

    function createBoard(){
        for (let i = 0; i < cardArray.length ; i++){

            var card = document.createElement('img')

            card.setAttribute('src','images/blank.jpg')
            card.setAttribute('data-id',i)

            card.addEventListener('click', flipCard) 

            grid.appendChild(card)

        }
    }


    // check for match

    function checkForMatch(){
        var cards = document.querySelectorAll('img')

        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if(cardsChosen[0] === cardsChosen[1]){
            alert('you found a match')
            cards[optionOneId].setAttribute('src','images/white.jpg')
            cards[optionTwoId].setAttribute('src','images/white.jpg')
            cardWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src','images/blank.jpg')
            cards[optionTwoId].setAttribute('src','images/blank.jpg')
            alert('Sorry ,try again')
        }

        cardsChosen =[];
        cardsChosenId = [];

        resultDisplay.textContent = cardWon.length
        if (cardWon.length === cardArray.length/2){
            resultDisplay.textContent = ` congrats!!!!!  You've found them all'`
        }
    }


    // flip your card
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if(cardsChosen.length === 2){
            setTimeout(checkForMatch,500)
        }
    }

    createBoard()



})


  

