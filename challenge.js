let input = ["5 5","1 2 N", "LMLMLMLMM","3 3 E", "MMRMMRMRRM", "5 3 N", "MMMMRMMM"]

init = () => {
    // removes the dimensions of the terrain since they will not be used
    input.shift()
    // we run the funcion as long as there are rovers left 
    while(data.numberOfRovers > 0){
    // extracts the data from the input
        data.extractData(input)
        func.setUpCounter(data.actualDirection);
        func.moveRover();
        func.solution();
    // removes the data regarding the old rover
        input.shift()
        input.shift()
    // updates the number of rover left to move 
        data.numberOfRovers -=1;
    }

}

const data = {
    extractData (input) {
        this.numberOfRovers  = ((input.length)/2);
        this.xCoordinate     = Number(input[0].slice(0, 1));
        this.yCoordinate     = Number(input[0].slice(2, 3));
        this.actualDirection = input[0].slice(4, 5);
        this.path            = input[1].split("");
    },
    // gets the x and y coordinates and transforms them to a number
    numberOfRovers: 1,
    xCoordinate:     null,
    yCoordinate:     null,
    // gets the direction 
    actualDirection: null,
    // gets the path to be explored 
    path:             null,
    // array descriebing all posible directions 
    directions:       ["N", "E", "S", "W"],
    // keeps track of the actual direction 
    counter:           0,
}


const func = {
    
    // gives the counter the corresponding initail value
    setUpCounter (dir) {
        if (dir === "E") { data.counter = 1 }
        if (dir === "S") { data.counter = 2 }
        if (dir === "W") { data.counter = 3 }
    },
    // moves the rover and saves the coordinates
    moveRover () {
        data.path.forEach(c => {
            if(c === "L" || c === "R"){
                this.updateDirection(c)
            }
            if(c === "M"){
                if(data.actualDirection === "N") {
                    data.yCoordinate += 1;
                }
                if(data.actualDirection === "E") {
                    data.xCoordinate += 1;
                }
                if(data.actualDirection === "S") {
                    data.yCoordinate -= 1;
                }
                if(data.actualDirection === "W") {
                    data.xCoordinate -= 1 
                }
            }
        })
    },
    
    // moves the counter to correspond to turning 
    updateDirection (leftOrRight) {
        leftOrRight === "L" ? data.counter -= 1 : data.counter += 1;
        // makes the counter cycle around the directions array
        if (data.counter === -1) {data.counter = 3}
        if (data.counter ===  4) {data.counter = 0}
        data.actualDirection = data.directions[data.counter]
    },
    
    // creates final string 
    solution () {
        console.log(data.xCoordinate + " " + data.yCoordinate + " " + data.actualDirection)
    }
}

init()





