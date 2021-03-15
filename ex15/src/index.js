function convertToInt(str){
var a = parseInt(str, 16);
console.log(a);
return a;
}
convertToInt("BA");
convertToInt("F1");
convertToInt("JeffBezos");

module.exports = convertToInt;
