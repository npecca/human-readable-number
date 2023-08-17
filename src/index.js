function toReadable(number) {
    const onesArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine","ten", "eleven", 
    "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen","eighteen", "nineteen"];

    const tensArr = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number < 20){
        return onesArr[number]
    } else if (number < 100){
        const tens = Math.floor(number /10);
        const ones = number % 10;
        return tensArr[tens] + ((ones === 0) ? "" : " "+ onesArr[ones]);
    } else if (number < 1000){
        const hundreds = Math.floor(number /100);
        const remains = number % 100;
        return onesArr[hundreds] + " hundred" +  ((remains !== 0) ? " "+ toReadable(remains) : "");
    }
}

module.exports = toReadable;
