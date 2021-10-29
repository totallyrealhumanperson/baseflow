
function createNewCard() {

    var width = 250;
    var height = 200;
    var x = Math.floor(Math.random() * (innerWidth  - width * 2) + width);
    var y = Math.floor(Math.random() * (innerHeight - height * 2) + height);

    var newCardObj = new Card(x, y, width, height, "asdf",)
    activeActionCards.push(newCardObj)
    // TO DO: ADD TO FIRESTORE


}


function checkIfCardClicked() {
  
    var isClicked = false
    var whereClicked = "none"
    var cardObjClicked;

    for (let index = 0; index < activeActionCards.length; index++) {

        var currentCard = activeActionCards[index];
        
        //check if its clicked in the card
        if (mouse.x > currentCard.x && mouse.x < (currentCard.x + currentCard.width) && mouse.y > currentCard.y && mouse.y < (currentCard.y + currentCard.height)) {

            isClicked = true;
            cardObjClicked = currentCard;
            whereClicked = "generally"
            // GLOBAL SET ACTIVE CARD
            activeCard = currentCard;
            
        }
    }

    return {isClicked: isClicked,  whereClicked: whereClicked, cardObjClicked: cardObjClicked};

}

