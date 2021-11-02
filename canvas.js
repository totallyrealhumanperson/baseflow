
//MAIN CANVAS OBJECT
var canvas = document.querySelector("canvas");
var extraBoundries = 2000;
canvas.width = window.innerWidth + extraBoundries;
canvas.height = window.innerHeight + extraBoundries;
var c = canvas.getContext('2d');

var activeActionCards = [];
var userProjectsObj = [];

var activeProject;
var activeCard;


// TO DO: FIREBASE AUTH SHOULD PROVIDE THIS
var userObj = {
    name : "bob",
    email : "bob@gmail.com",
    subscriptionStatus : "Trial",
}


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

    // create fake init data.
    // TO DO: FIRESTORE SHOULD UPDATE THIS ARRAY
    for (let index = 0; index < 4; index++) {
        var x = Math.floor(Math.random() * (innerWidth  - 200 * 2) + 200);
        var y = Math.floor(Math.random() * (innerHeight - 200 * 2) + 200);
        var newCardObj = new Card(x, y, "asdf", )

        var newProj = new Project("ABVWRwgve" + index, "My Cool Proj #" + index, [newCardObj])
        userProjectsObj.push(newProj)
    }


    // UPDATE USER PROFILE INFO WITH USER OBJECT
    document.getElementById("userNameLabel").innerHTML = userObj.name;
    document.getElementById("userEmailLabel").innerHTML = userObj.email;
    document.getElementById("userSubscriptionStatusLabel").innerHTML = userObj.subscriptionStatus;
    
    // SELECT THE FIRST PROJECT TO GET USER STARTED 
    selectProject(0)
    
    // UPDATE DROPDOWN PROJECT LIST
    updateListOfProjectsInDropdown()

    

}


function animate() {

    requestAnimationFrame(animate);

    // CLEAR CANVAS
    c.clearRect(0, 0, innerWidth + extraBoundries, innerHeight + extraBoundries);

    // UPDATE ALL CARDS
    for (let index = 0; index < activeActionCards.length; index++) {
        activeActionCards[index].draw(activeActionCards);
    }
    
}


init();
animate();










