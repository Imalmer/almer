const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultsum = document.getElementById("sum");
const resultdif = document.getElementById("dif");
const resulprod = document.getElementById("prod");
const resultquo = document.getElementById("quo");



let sum = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        const num1 = parseFloat(num1Txt.value);
        const num2 = parseFloat(num2Txt.value);

        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultsum.innerHTML = sum;

        dif = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        resultdif.innerHTML = dif;

        prod = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        resultprod.innerHTML = prod;

        quo = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        resultquo.innerHTML = quo;
        resultsum.innerHTML = "";
        resultdif.innerHTML = "";
        resultprod.innerHTML = "";
        resultquo.innerHTML = "";
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultsum.innerHTML = "";
    resultdif.innerHTML = "";
    resultprod.innerHTML = "";
    resultquo.innerHTML = "";
    sum = 0;

}

