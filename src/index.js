module.exports = function getZerosCount(number) {
    let res = 0;
    while(number > 0) {
        number = div(number,5);
        res += number;
    }
    return res;
};
function div(x, y){
    return (x - x % y) / y;
}
