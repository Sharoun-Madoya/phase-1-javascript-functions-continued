// code your solution her
function saturdayFun (action ) {
    switch (action) {
        case "bathe my dog":
            return "This Saturday, I want to bathe my dog!";
            break;
            default:
        return "This Saturday, I want to roller-skate!";
    }
}
function mondayWork (action){
    switch (action) {
        case "work from home":
            return "This Monday, I will work from home.";
            break;
            default:
        return "This Monday, I will go to the office.";
    }
}
// function wrapAdjective (visualFlair) { 
//     if (visualFlair = "*")
//  return function (adjective= "special"){
//     return `You are ${visualFlair}${adjective} ${visualFlair}`
//  }
// }

function wrapAdjective(flair = "*"){
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
}
 