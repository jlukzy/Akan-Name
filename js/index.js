/* var DD= parseInt(prompt("Enter day"))
if (DD<=0 || DD >31){
    alert("Invalid Day,Please Enter A Valid Day")
}else {
}
var MM=parseInt(prompt("Enter month"))
if (MM<=0 || MM >12){
    alert("Invalid Month,Please Enter A Valid Month")
}
var year=parseInt(prompt("Enter year"))
if (year<1000){
alert("Invalid Year,PLease Enter A Valid Year")
}
var gender=prompt("Enter gender") */

var Dayofweek=function(CC, YY, MM, DD,year){
    return ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    }
    var input = parseInt(prompt("Enter The Year You Were Born"))
    var data = new Date(input);
    var YY = data.getFullYear();
    var year=[""]
    var CC = (YY/100)+1;
    console.log(CC);
    var MM = parseInt(prompt("Enter The Month You Were Born"))
    var DD = parseInt(prompt("Enter The Day You Were Born "))
    var gender = prompt("Enter your Gender")
    var d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7
    console.log(d)
    var Dayofweek= Math.round(d)
    console.log(Dayofweek)
    var Day=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"]
    var AkanName=["Kwasi", "Akosua", "Kwandwo", "Adwoa", "Kwabena", "Abenaa", "Kwaku", "AKua", "Yaw", "Yaa", "Kofi", "Afua", "Kwame", "Ama" ]
    if (Dayofweek===0 && gender==="male"){
    var Day=Sunday 
    var AkanName=Kwasi
    }else if(Dayofweek===0 && gender==="female"){
    var Day="Sunday"
    var AkanName="Akosua"
    }else if (Dayofweek===1 && gender==="male"){
    var Day="Monday" 
    var AkanName="Kwadwo"
    }else if(Dayofweek===1 && gender==="female"){
    var Day="Monday"
    var AkanName="Adwoa"
    }else if (Dayofweek===2 && gender==="male"){
    var Day="Tuesday" 
    var AkanName="KWabena"
    }else if(Dayofweek===2 && gender==="female"){
    var Day="Tuesday"
    var AkanName="Abenaa"
    }else if (Dayofweek===3 && gender==="male"){
    var Day="Wednesday" 
    var AkanName="Kwaku"
    }else if(Dayofweek===3 && gender==="female"){
    var Day="Wednesday"
    var AkanName="Akua"
    }else if (Dayofweek===4 && gender==="male"){
    var Day="Thursday"
    var AkanName="Yaw"
    }else if(Dayofweek===4 && gender==="female"){
    var Day="Thursday"
    var AkanName="Yaa"
    }else if (Dayofweek===5 && gender==="male"){
    var Day="Friday"
    var AkanName="Kofi"
    }else if(Dayofweek===5 && gender==="female"){
    var Day="Friday"
    var AkanName="Afua"
    }else if (Dayofweek>=6 && gender==="male"){
    var Day="Saturday" 
    var AkanName="Kwame"
    }else{
    var Day="Saturday"
    var AkanName="Ama"
    }
    alert(Day)
    alert(AkanName)
    
    document.getElementById("output").innerHTML=compare(Day,AkanName);    