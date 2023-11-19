var number1 = 0;
var number2 = 0;
var middle;
var message1 = "数字を入力してください";
var message2 = "値が不正です";
var calculate = plus;
function AC(){
    middle = document.getElementById("middle");
    middle.innerText = "　";
    document.getElementById("result").value = "";
    number1 = 0;
    number2 = 0;
    calculate = plus;
}
function percent(){
    var result = document.getElementById("result").value
    document.getElementById("result").value = result/100;
}
function CE(){
    var result = document.getElementById("result").value
    result = result.slice(0, -1);
    document.getElementById("result").value = result;
}
function enterp(){
    const judge = document.getElementById("result").value;
    const result = judge.includes('.');
    if(result == false){
        document.getElementById("result").value += ".";
    }
}
function enter0(){
    document.getElementById("result").value += "0";
}
function enter00(){
    document.getElementById("result").value += "00";
}

function enter1(){
    document.getElementById("result").value += "1";
}
function enter2(){
    document.getElementById("result").value += "2";
}
function enter3(){
    document.getElementById("result").value += "3";
}
function enter4(){
    document.getElementById("result").value += "4";
}
function enter5(){
    document.getElementById("result").value += "5";
}
function enter6(){
    document.getElementById("result").value += "6";
}
function enter7(){
    document.getElementById("result").value += "7";
}
function enter8(){
    document.getElementById("result").value += "8";
}
function enter9(){
    document.getElementById("result").value += "9";
}
function plus(){
    number2 = document.getElementById("result").value
    if(isNaN(number2) == true || number2 == ""){
        alert(message1);
    }else{
        if(number2 == 0 && calculate == division){
            alert(message2);
        }else{
            if(calculate == plus){
                number1 = Number(number1) + Number(number2)
            }else if(calculate == minus){
                number1 = Number(number1) - Number(number2)
            }else if(calculate == times){
                number1 = Number(number1) * Number(number2)
            }else{
                number1 = Number(number1) / Number(number2)
            }
            middle = document.getElementById("middle");
            middle.innerText = number1 + "+";
            calculate = plus;
        }
    }
    document.getElementById("result").value = "";
}
function minus(){
    number2 = document.getElementById("result").value
    if(isNaN(number2) == true || number2 == ""){
        alert(message1);
    }else{
        if(number2 == 0 && calculate == division){
            alert(message2);
        }else{
            if(calculate == plus){
                number1 = Number(number1) + Number(number2)
            }else if(calculate == minus){
                number1 = Number(number1) - Number(number2)
            }else if(calculate == times){
                number1 = Number(number1) * Number(number2)
            }else{
                number1 = Number(number1) / Number(number2)
            }
            middle = document.getElementById("middle");
            middle.innerText = number1 + "-";
            calculate = minus;
        }
    }
    document.getElementById("result").value = "";
}
function times(){
    number2 = document.getElementById("result").value
    if(isNaN(number2) == true || number2 == ""){
        alert(message1);
    }else{
        if(number2 == 0 && calculate == division){
            alert(message2);
        }else{
            if(calculate == plus){
                number1 = Number(number1) + Number(number2)
            }else if(calculate == minus){
                number1 = Number(number1) - Number(number2)
            }else if(calculate == times){
                number1 = Number(number1) * Number(number2)
            }else{
                number1 = Number(number1) / Number(number2)
            }
            middle = document.getElementById("middle");
            middle.innerText = number1 + "×";
            calculate = times;
        }
    }
    document.getElementById("result").value = "";
}
function division(){
    number2 = document.getElementById("result").value
    if(isNaN(number2) == true || number2 == ""){
        alert(message1);
    }else{
        if(number2 == 0 && calculate == division){
            alert(message2);
        }else{
            if(calculate == plus){
                number1 = Number(number1) + Number(number2)
            }else if(calculate == minus){
                number1 = Number(number1) - Number(number2)
            }else if(calculate == times){
                number1 = Number(number1) * Number(number2)
            }else{
                number1 = Number(number1) / Number(number2)
            }
            middle = document.getElementById("middle");
            middle.innerText = number1 + "÷";
            calculate = division;
        }
    }
    document.getElementById("result").value = "";
}
function equal(){
    number2 = document.getElementById("result").value
    if(isNaN(number2) == true || number2 == ""){
        alert(message1);
        document.getElementById("result").value = "";
    }else{
        if(number2 == 0 && calculate == division){
            alert(message2);
            document.getElementById("result").value = "";
        }else{
            if(calculate == plus){
                number1 = Number(number1) + Number(number2)
            }else if(calculate == minus){
                number1 = Number(number1) - Number(number2)
            }else if(calculate == times){
                number1 = Number(number1) * Number(number2)
            }else{
                number1 = Number(number1) / Number(number2)
            }
            number1 = Math.floor( number1  * Math.pow(10, 16) ) / Math.pow(10, 16) ;
            document.getElementById("result").value = number1;
            middle = document.getElementById("middle");
            middle.innerText = "　";
            number1 = 0;
            calculate = plus;
        }
    }
}