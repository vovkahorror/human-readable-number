module.exports = function toReadable(number) {
    const toString = String(number);

    const single = (number) => {
        switch (number) {
            case 0:
                return "zero";
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
        }
    };

    const double = (number) => {
        if (number === 10) {
            return "ten";
        } else if (number === 11) {
            return "eleven";
        } else if (number === 12) {
            return "twelve";
        } else if (number === 13) {
            return "thirteen";
        } else if (number === 14) {
            return "fourteen";
        } else if (number === 15) {
            return "fifteen";
        } else if (number === 16) {
            return "sixteen";
        } else if (number === 17) {
            return "seventeen";
        } else if (number === 18) {
            return "eighteen";
        } else if (number === 19) {
            return "nineteen";
        } else if (number === 20) {
            return "twenty";
        } else if (number === 30) {
            return "thirty";
        } else if (number === 40) {
            return "forty";
        } else if (number === 50) {
            return "fifty";
        } else if (number === 60) {
            return "sixty";
        } else if (number === 70) {
            return "seventy";
        } else if (number === 80) {
            return "eighty";
        } else if (number === 90) {
            return "ninety";
        } else {
            const toStringElse = String(number);
            return `${double(Number(toStringElse[0] + "0"))} ${single(
                Number(toStringElse[1])
            )}`;
        }
    };

    if (toString.length == 1) {
        return single(number);
    } else if (toString.length == 2) {
        return double(number);
    } else if (toString[1] === "0" && toString[2] === "0") {
        return `${single(Number(toString[0]))} hundred`;
    } else if (toString[1] === "0" && Number(toString[2]) <= 9) {
        return `${single(Number(toString[0]))} hundred ${single(
            Number(toString[2])
        )}`;
    } else {
        return `${single(Number(toString[0]))} hundred ${double(
            Number(toString.slice(1))
        )}`;
    }
};
