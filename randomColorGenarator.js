//target all card-id div
const cardId1 = document.getElementById('card-id-1')
const cardId2 = document.getElementById('card-id-2')
const cardId3 = document.getElementById('card-id-3')
const cardId4 = document.getElementById('card-id-4')
const cardId5 = document.getElementById('card-id-5')
const cardId6 = document.getElementById('card-id-6')

/* add event  */
function colorRandom(id){
    let rgbColor = Math.floor(Math.random()*1000000);
    let bgColor = '#' + rgbColor;
    id.style.background = '' + bgColor
}

//set mouse over event for all card
cardId1.addEventListener('mouseover', ()=>{
    colorRandom(cardId1)
})

cardId2.addEventListener('mouseover', ()=>{
   colorRandom(cardId2)
})
cardId3.addEventListener('mouseover', ()=>{
   colorRandom(cardId3)
})
cardId4.addEventListener('mouseover', ()=>{
   colorRandom(cardId4)
})
cardId5.addEventListener('mouseover', ()=>{
   colorRandom(cardId5)
})
cardId6.addEventListener('mouseover', ()=>{
   colorRandom(cardId6)
})