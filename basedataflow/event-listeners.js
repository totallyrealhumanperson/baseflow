
// EVENT LISTENERS
addEventListener("mousemove", function(Event){
    // GET ACTUAL MOUSE LOCATION FOR WINDOW
    mouseActual.x = Event.clientX;
    mouseActual.y = Event.clientY;

    // UPDATE PRECIEVED MOUSE LOCATION FOR CANVAS
    mouse = {
        x: mouseActual.x + canvasScroll.xOffset,
        y: mouseActual.y + canvasScroll.yOffset
    };
});



addEventListener("mousedown", function() {
    
    var clickedCardIndex = checkIfCardClicked();

    if (clickedCardIndex.isClicked == true) {

        var clickedCard = clickedCardIndex.cardObjClicked;
        clickedCard.currentlyBeingMoved = true;
        
    } 
});


addEventListener("mouseup", function() {
        
    // UPDATE DB NEW LOCATION && STOP MOVING ALL CARDS (WHEN APPLICABLE)
    for (let index = 0; index < activeActionCards.length; index++) {
        // STOP MOVING CARD
        activeActionCards[index].currentlyBeingMoved = false;
    }

});



addEventListener("scroll", function() {
    
    // GET SCROLL PAGE OFFSET BY BROWSER
    canvasScroll.yOffset = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    canvasScroll.xOffset = window.pageXOffset || (document.documentElement || document.body.parentNode || document.body).scrollLeft;

    // UPDATE PRECIEVED MOUSE LOCATION
    mouse = {
        x: mouseActual.x + canvasScroll.xOffset,
        y: mouseActual.y + canvasScroll.yOffset
    };

});










