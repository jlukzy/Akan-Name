var DD = parseInt(document.getElementById(DD)).value
if (DD<=0 || DD >31){
    alert("Invalid Day,Please Enter A Valid Day")
    }else {
    }
var MM = parseInt(document.getElementById(MM)).value
if (MM<=0 || MM >12){
    alert("Invalid Month,Please Enter A Valid Month")
    }
var year = parseInt(document.getElementById(year)).value
if (year>1000){
}else {
alert("PLease Enter A Valid Year")
}
var gender= document.getElementById(gender).value
function calculateDayValue(){
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("MM").value);
    DD = parseInt(document.getElementById("DD").value);
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    console.log(d);
    return (Math.floor(d));
    alert(d)
  }
var D=Math.round(d)
if(D=0){
    var DayOfWeek="Sunday"
}else if(D=1){
    var DayOfWeek="Monday"
}else if(D=2){
    var DayOfWeek="Tuesday"
}else if(D=3){
    var DayOfWeek="Wednesday"
}else if(D=4){
    var DayOfWeek="Thursday"
}else if(D=5){
    var DayOfWeek="Friday"
}else{
    var DayOfWeek="Saturday"
}
alert(DayOfWeek)

if (Dayofweek===Sunday && gender===male){
var Day=Sunday 
var AkanName=Kwasi
}else if(Dayofweek===Sunday && gender===female){
var Day=Sunday
var AkanName=Akosua
}else if (Dayofweek===Monday && gender===male){
var Day=Monday 
var AkanName=Kwadwo
}else if(Dayofweek===Monday && gender===female){
var Day=Monday
var AkanName=Adwoa
}else if (Dayofweek===Tuesday && gender===male){
var Day=Tuesday 
var AkanName=KWabena
}else if(Dayofweek===Tuesday && gender===female){
var Day=Tuesday
var AkanName=Abenaa
}else if (Dayofweek===Wednesday && gender===male){
var Day=Wednesday 
var AkanName=Kwaku
}else if(Dayofweek===Wednesday && gender===female){
var Day=Wednesday
var AkanName=Akua
}else if (Dayofweek===Thursday && gender===male){
var Day=Thursday
var AkanName=Yaw
}else if(Dayofweek===Thursday && gender===female){
var Day=Thursday
var AkanName=Yaa
}else if (Dayofweek===Friday && gender===male){
var Day=Friday
var AkanName=Kofi
}else if(Dayofweek===Friday && gender===female){
var Day=Friday
var AkanName=Afua
}else if (Dayofweek===Saturday && gender===male){
var Day=Saturday 
var AkanName=Kwame
}else{
var Day=Saturday
var AkanName=Ama
}
alert(Day)
alert(AkanName)

