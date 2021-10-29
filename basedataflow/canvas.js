
//MAIN CANVAS OBJECT
var canvas = document.querySelector("canvas");
var extraBoundries = 2000;
canvas.width = window.innerWidth + extraBoundries;
canvas.height = window.innerHeight + extraBoundries;
var c = canvas.getContext('2d');

var activeActionCards = [];
var mainnCard;

var activeCard = "allCardsTable"; // so card can be blue and stays until something else is clicked // to do

var cardIdIncrementor = 0; // tracks number of cards in deck to allocate card IDs


let mouseActual = {
    x: 10,
    y: 10
};

let canvasScroll = {
    yOffset: 0,
    xOffset: 0
}

let mouse = {
    x: mouseActual.x + canvasScroll.xOffset,
    y: mouseActual.y + canvasScroll.yOffset
};



function init() {
    
    // CREATE AN EXAMPLE CARD
    var demoTestCard = new Card(300, 300, 300, 300, "asdf", [], [])
    // STORE IN CARDS ARRAY
    activeActionCards.push(demoTestCard)
    // TO DO: FIRESTORE SHOULD UPDATE THIS ARRAY

}


function animate() {

    requestAnimationFrame(animate);

    // CLEAR CANVAS
    c.clearRect(0, 0, innerWidth + extraBoundries, innerHeight + extraBoundries);

    // UPDATE ALL CARDS
    for (let index = 0; index < activeActionCards.length; index++) {
        activeActionCards[index].update(activeActionCards);
    }
    
}


init();
animate();










