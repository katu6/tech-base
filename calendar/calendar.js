var date = new Date () ;

var year = date.getFullYear() ;
var month = date.getMonth() + 1 ;
var day = date.getDate() ;

var first = new Date (year, month-1, 1);
var firstday = first.getDay();
var final = new Date (year, month, 0);
var finaldate = final.getDate()
var lastmonth = new Date (year, month-1, 0);
var lastmonthdate = lastmonth.getDate();

var calendar = document.getElementById("calendar");
var title = document.getElementById("title");
title.innerText = year + "年" + month + "月";

for(i = 1; i < 7; i++){
    for(j = 0; j < 7; j++){
        k = ((i - 1) * 7) + (j + 1) - firstday;
        if(k<1){
            calendar.rows[i].cells[j].innerText = lastmonthdate + k;
            calendar.rows[i].cells[j].style.color = "#808080";
            calendar.rows[i].cells[j].style.backgroundColor = "#DCDCDC";
        }else if(k <= finaldate){
            calendar.rows[i].cells[j].innerText = k;
            calendar.rows[i].cells[j].style.backgroundColor = "#FFFFFF";
            if(k == day){
                calendar.rows[i].cells[j].style.fontWeight = "bold";
            }
        }else{
            calendar.rows[i].cells[j].innerText = k - finaldate;
            calendar.rows[i].cells[j].style.color = "#808080";
            calendar.rows[i].cells[j].style.backgroundColor = "#DCDCDC";
        }
    }
}

function back(){
    date = new Date(date.getFullYear(), date.getMonth()-1, date.getDate());
    var backyear = date.getFullYear() ;
    var backmonth = date.getMonth() + 1 ;
    var first = new Date (backyear, backmonth-1, 1);
    var firstday = first.getDay();
    var final = new Date (backyear, backmonth, 0);
    var finaldate = final.getDate()
    var lastmonth = new Date (backyear, backmonth-1, 0);
    var lastmonthdate = lastmonth.getDate();
    
    calendar = document.getElementById("calendar");
    title = document.getElementById("title");
    title.innerText = backyear + "年" + backmonth + "月";
    
    for(i = 1; i < 7; i++){
        for(j = 0; j < 7; j++){
            k = ((i - 1) * 7) + (j + 1) - firstday;
            calendar.rows[i].cells[j].style.fontWeight = "normal";
            if(k<1){
                calendar.rows[i].cells[j].innerText = lastmonthdate + k;
                calendar.rows[i].cells[j].style.color = "#808080";
                calendar.rows[i].cells[j].style.backgroundColor = "#DCDCDC";
            }else if(k <= finaldate){
                if(j == 0){
                    calendar.rows[i].cells[j].style.color = "red";
                }else if(j == 6){
                    calendar.rows[i].cells[j].style.color = "blue";
                }else{
                    calendar.rows[i].cells[j].style.color = "black";
                }
                calendar.rows[i].cells[j].innerText = k;
                calendar.rows[i].cells[j].style.backgroundColor = "#FFFFFF";
                if(k == day && backyear == year && backmonth == month){
                    calendar.rows[i].cells[j].style.fontWeight = "bold";
                }
            }else{
                calendar.rows[i].cells[j].innerText = k - finaldate;
                calendar.rows[i].cells[j].style.color = "#808080";
                calendar.rows[i].cells[j].style.backgroundColor = "#DCDCDC";
            }
        }
    }
}

function today(){
    date = new Date () ;

    calendar = document.getElementById("calendar");
    title = document.getElementById("title");
    title.innerText = year + "年" + month + "月";

    for(i = 1; i < 7; i++){
        for(j = 0; j < 7; j++){
            k = ((i - 1) * 7) + (j + 1) - firstday;
            if(k<1){
                calendar.rows[i].cells[j].innerText = lastmonthdate + k;
                calendar.rows[i].cells[j].style.color = "#808080";
                calendar.rows[i].cells[j].style.backgroundColor = "#DCDCDC";
            }else if(k <= finaldate){
                if(j == 0){
                    calendar.rows[i].cells[j].style.color = "red";
                }else if(j == 6){
                    calendar.rows[i].cells[j].style.color = "blue";
                }else{
                    calendar.rows[i].cells[j].style.color = "black";
                }
                calendar.rows[i].cells[j].innerText = k;
                calendar.rows[i].cells[j].style.backgroundColor = "#FFFFFF";
                if(k == day){
                    calendar.rows[i].cells[j].style.fontWeight = "bold";
                }
            }else{
                calendar.rows[i].cells[j].innerText = k - finaldate;
                calendar.rows[i].cells[j].style.color = "#808080";
                calendar.rows[i].cells[j].style.backgroundColor = "#DCDCDC";
            }
        }
    }
}

function forward(){
    date = new Date(date.getFullYear(), date.getMonth()+1, date.getDate());
    var forwardyear = date.getFullYear() ;
    var forwardmonth = date.getMonth() + 1 ;
    var first = new Date (forwardyear, forwardmonth-1, 1);
    var firstday = first.getDay();
    var final = new Date (forwardyear, forwardmonth, 0);
    var finaldate = final.getDate()
    var lastmonth = new Date (forwardyear, forwardmonth-1, 0);
    var lastmonthdate = lastmonth.getDate();
    
    var calendar = document.getElementById("calendar");
    var title = document.getElementById("title");
    title.innerText = forwardyear + "年" + forwardmonth + "月";
    
    for(i = 1; i < 7; i++){
        for(j = 0; j < 7; j++){
            k = ((i - 1) * 7) + (j + 1) - firstday;
            calendar.rows[i].cells[j].style.fontWeight = "normal";
            if(k<1){
                calendar.rows[i].cells[j].innerText = lastmonthdate + k;
                calendar.rows[i].cells[j].style.color = "#808080";
                calendar.rows[i].cells[j].style.backgroundColor = "#DCDCDC";;
            }else if(k <= finaldate){
                if(j == 0){
                    calendar.rows[i].cells[j].style.color = "red";
                }else if(j == 6){
                    calendar.rows[i].cells[j].style.color = "blue";
                }else{
                    calendar.rows[i].cells[j].style.color = "black";
                }
                calendar.rows[i].cells[j].innerText = k;
                calendar.rows[i].cells[j].style.backgroundColor = "#FFFFFF";
                if(k == day && forwardyear == year && forwardmonth == month){
                    calendar.rows[i].cells[j].style.fontWeight = "bold";
                }
            }else{
                calendar.rows[i].cells[j].innerText = k - finaldate;
                calendar.rows[i].cells[j].style.color = "#808080";
                calendar.rows[i].cells[j].style.backgroundColor = "#DCDCDC";;
            }
        }
    }
}