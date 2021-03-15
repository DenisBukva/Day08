function localScope() {
    var myVariable = "I am here!";
    console.log(myVariable);
}
localScope("I am here!");
console.log(myVariable);
if (typeof myVariable != "undefind") {
    console.log('outside localScope', myVariable)
} else {
    console.log('outside localScope UNDEFINED!!!')
}
module.exports = localScope;