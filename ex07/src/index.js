var sum = 0;
function addThree() {
    sum = sum + 3;
    console.log(sum);
    return sum;
}
function addFive() {
    sum = sum +5;
    console.log(sum);
    return sum;
}
addThree();
addFive();
module.exports = {
    addThree,
    addFive
};

