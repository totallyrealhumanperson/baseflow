
function createNewCard() {

    console.log("prompt user to select a file (two card creates)"); 
    // then file gets stored and details get writen back onto card

    var width = 250;
    var height = 200;
    var x = Math.floor(Math.random() * (innerWidth  - width * 2) + width);
    var y = Math.floor(Math.random() * (innerHeight - height * 2) + height);

    var newCardObj = new Card(x, y, activeProject.id)
    activeProject.cards.push(newCardObj)
    // TO DO: ADD TO FIRESTORE
    // UPDATE ACTIVE ACTION CARDS (WHICH GET DRAW)
    updateActiveCardsToDisplay(activeProject)

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


function selectProject(projectIndex) {
    // CLEAR AND REPOPULATE ACTIVE ACTION CARDS LIST WITH CARDS FROM NEW PROJECT
    // SET NEW ACTIVE PROJECT
    activeProject =  userProjectsObj[projectIndex];
    updateActiveCardsToDisplay(projectIndex);
    // CHANGE CURRENT PROJECT TITLE IN THE HEADER
    document.getElementById("currentProjectTitle").innerText = userProjectsObj[projectIndex].name;
}


function updateActiveCardsToDisplay (projectIndex) {
    // TO DO: CALL THIS AGAIN ON FIRESTORE DB SYNC

    // UPDATE ACTIVEACTIONCARDS LIST WITH THIS PROJECT'S CARDS
    // CLEAR ACITVE ACTION CARDS
    activeActionCards = [];
    // POPULATE ACTIVE ACTION CARDS WITH 
    for (let index = 0; index < activeProject.cards.length; index++) {
        // STORE IN ACTIVE ACTION CARDS ARRAY
        activeActionCards.push(activeProject.cards[index]); 
        
    }
}


function deleteProject() {

    for (let index = 0; index < userProjectsObj.length; index++) {
        if (userProjectsObj[index].name == activeProject.name) {
            userProjectsObj.splice(index,1);
            selectProject(userProjectsObj.length - 1)
            break
        }
    }
    
    // UPDATE PROJECT LIST DROPDOWN
    updateListOfProjectsInDropdown()

}


function createNewProject() {


    var newProj = new Project("ABVWRwgve" + userProjectsObj.length, "New Project " + userProjectsObj.length, [])
    userProjectsObj.push(newProj)

    // UPDATE PROJECT LIST DROPDOWN
    updateListOfProjectsInDropdown();

    selectProject(userProjectsObj.length - 1)

}


function updateListOfProjectsInDropdown() {

    console.log("handle if no proj. show in list, in loops that will break, etc");


    var headerItemStr = '<li  class="dropdown-header">Your Projects</li> ';
    var footerItemStr = ' \
    <li class="divider"></li> \
    <li style="text-align:center; color:blue;" onclick="createNewProject()"><a href="#">CREATE NEW PROEJCT</a></li> \
    ';

    var listStr = "";
    for (let index = 0; index < userProjectsObj.length; index++) {
        listStr += ' <li><a class="dropdown-item" href="#" onclick="selectProject('+ index +')" >' + userProjectsObj[index].name +'</a></li>'; 
    }

    document.getElementById("projectsList").innerHTML = headerItemStr + listStr + footerItemStr;
}