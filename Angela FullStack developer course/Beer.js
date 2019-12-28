    var numOfBottles = 99;

function beer(){
while (numOfBottles >= 1) {
    console.log(numOfBottles + " bottles of beer on the wall, " + numOfBottles + " bottles of beer. Take one down and pass it around, " + (numOfBottles - 1) + " bottles of beer on the wall. \n")
    numOfBottles--;
}
}

//Angela solution gramatically correct con bottle singular and plural
    // var numberOfBottles = 99
    // while (numberOfBottles >= 0) {
    //     var bottleWord = "bottle";
    //     if (numberOfBottles === 1) {
    //         bottleWord = "bottles";
    //     } 
    //     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    //     console.log(numberOfBottles + " " + bottleWord + " of beer,");
    //     console.log("Take one down, pass it around,");
    // 	numberOfBottles--;
    //     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    // }