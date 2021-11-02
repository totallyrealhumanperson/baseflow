
// OBJECTS
class Card {
    constructor(x, y, projectId) {

        // IDENTIFICATION
        cardIdIncrementor += 1;
        this.id = cardIdIncrementor;
        // TO DO: ADD PROJECT ID FROM FIREBASE
        this.projectId = projectId
        // TO DO: ADD DBID FROM FIREBASE (SO ITS UNIQUE)
        this.guid = ""
        this.type = "";
        this.x = x;
        this.y = y;
        // TO DO: STORE THESE AS FIELDS IN CARDS COLLECTION

        // PROBALY NOT STORED
        this.currentlyBeingMoved = false;
        this.width = 200;
        this.height = 200;
       


        // DRAW
        this.draw = function () {

            // UPDATE CARD LOCATION IF BEING MOVED
            if (this.currentlyBeingMoved == true) {
                this.x = mouse.x ;
                this.y = mouse.y;                
            }

            // DRAW CARD
            c.beginPath();
            c.rect(this.x, this.y + 20, this.width, this.height);
            c.fillStyle = "white";
            c.shadowColor = "#B9B9B9";
            c.shadowBlur = 15;
            c.lineWidth = 3;
            c.stroke();
            c.fill();

            // DRAW TEXT ON CARD
            c.fillStyle = "black"
            c.fillText("Card: " + this.id , this.x, this.y)
            c.fillText("ID: " + this.id , this.x + 20, this.y + 50)
            c.fillText("Location: " + this.x + " , " + this.y , this.x + 20, this.y + 100)
        
        };

        
        this.update = function () {

            this.draw();
            
        };
    }
}


class Project {
    constructor(id, name, cardsList){
        this.id = id;
        this.name = name;
        this.cards = cardsList; 

    }
}

