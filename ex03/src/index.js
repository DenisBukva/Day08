var myGlobalVariable = 10
notGlobalVariable = 5

function function1() {
    var result = "";
    if (typeof myGlobalVariable != "undefined") {
        result += "myGlobalVariable: " + myGlobalVariable;
    }
    if (typeof notGlobalVariable != "undefined") {
        result += " notGlobalVariable: " + notGlobalVariable;
    }
    console.log(result);
}
function1();