module.exports = function toReadable (number) {
  const arr1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const arr2 = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  //const remainder1 = number % 10;

  if (number < 20)
    return arr1[number];
  else if (number < 100)
    return arr2[Math.floor(number / 10) - 2] + (number % 10 ? " " + arr1[number % 10] : "");
  else if (number < 1000)
    return arr1[Math.floor(number / 100)] + " hundred" + (number % 100 ? " " + toReadable(number % 100) : "")
}
