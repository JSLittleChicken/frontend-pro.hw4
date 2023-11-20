let x = +prompt("Введіть перше число");
let y = +prompt("Введіть друге число");
let sumResult = "• " + String(x) + "+" + String(y) + "=" + String(x+y) + "\n";
let subsResult = "• " + String(x) + "-" + String(y) + "=" + String(x-y) + "\n";
let multiplyResult = "• " + String(x) + "*" + String(y) + "=" + String(x*y) + "\n";
let divideResult = "• " + String(x) + "/" + String(y) + "=" + String(x/y);
let result = sumResult + subsResult + multiplyResult + divideResult;
alert(result)