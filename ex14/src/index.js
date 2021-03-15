function convertStrToInt(str){
    var a = parseInt(str);
    return a
}
console.log(convertStrToInt("44"));
console.log(convertStrToInt("27"));
console.log(convertStrToInt("JeffBezos"));

module.exports = convertStrToInt;