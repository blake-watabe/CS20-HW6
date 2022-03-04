
/* Functions */
function getFactors(number)
{
    let factors = [];
    let count = 0;
    for (var i = 0; i < number; i++) {
        if (number % i == 0) {
            factors[count] = i;
            count++;
        }
    }
    return factors;
}

function sumOfFactors(factors)
{
    var sum = 0;
    for (var i = 0; i < factors.length; i++) {
        sum += factors[i];
    }
    return sum;
}

function amicableNumberCheck(number1, number2, sum1, sum2)
{
    if ((number1 == sum2) && (number2 == sum1)) {
        document.getElementById("amicable").innerHTML = "The numbers " + number1 + " and " + number2 + " are AMICABLE";
    }
    else {
        document.getElementById("amicable").innerHTML = "The numbers " + number1 + " and " + number2 + " are NOT AMICABLE";
    }
}


/* Amicable Number Implementation */
document.getElementById('button').onclick = function driver() {
    /* get elements */
    var FirstNum = document.getElementById("number1").value;
    var SecondNum = document.getElementById("number2").value;
    console.log(FirstNum + SecondNum);

    /* get the factors */
    var firstNumFactors = getFactors(FirstNum);
    var secondNumFactors = getFactors(SecondNum);

    /*get the sums */
    var firstSum = sumOfFactors(firstNumFactors);
    var secondSum = sumOfFactors(secondNumFactors);

    /* check that the sum of factors equals other number */
    amicableNumberCheck(FirstNum, SecondNum, firstSum, secondSum);
}




