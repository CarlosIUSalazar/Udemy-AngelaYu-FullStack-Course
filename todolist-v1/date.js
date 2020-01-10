
//module.exports.getDate = function() {  YOU DONT NEED TO WRITE MODULE.EXPORTS JUST EXPORTS
exports.getDate = function() {
    const today = new Date();
    // let currentDay = today.getDay();
    // let day = "";
    const options = {   //https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    let day = today.toLocaleDateString("en-US", options);
    return day;
};

// OROGINAL ABOVE FUNCTION BEFORE REFACTORING IT INTO A VARIABLE FUNCTION
// function getDate() {
//     let today = new Date();
//     // let currentDay = today.getDay();
//     // let day = "";
//     let options = {   //https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
//         weekday: "long",
//         day: "numeric",
//         month: "long",
//     };
//     let day = today.toLocaleDateString("en-US", options);
//     return day;
// };


module.exports.getDay = getDay;  //No parenthesis otherwise you call the function

function getDay() {
    const today = new Date();
    // let currentDay = today.getDay();
    // let day = "";
    const options = {   //https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
        weekday: "long",
    };
    return today.toLocaleDateString("en-US", options);  //smaller refactored version compared to above where let day and then return day was used
    
};