module.exports = function reverse (n) {
    let str = String(Math.abs(n)),
    result = 0;
for (i=str.length-1; i >=0 ;i--) {
result = result + str[i];
}
return +result;
}
