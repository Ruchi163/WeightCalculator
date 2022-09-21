function cal(){
    
    var weight=document.getElementById("weight").value;
    var planet=document.getElementById("planets").value;
    console.log(weight);
    console.log(planet);
    var cal;
    hide();
    switch(planet){
        case "Mercury":
            cal=weight*0.38;
            console.log(cal);
            break;
        case "Venus":
            cal=weight*0.91;
            console.log(cal);
            break;
        case "Moon":
            cal=weight*0.166;
            console.log(cal);
            break;
        case "Mars":
            cal=weight*0.38;
            console.log(cal);
            break;
        case "Jupiter":
            cal=weight*	2.34;
            console.log(cal);
            break;
        case "Saturn":
            cal=weight*1.06;
            console.log(cal);
            break;
        case "Uranus":
            cal=weight*0.92;
            console.log(cal);
            break;
        case "Neptune":
            cal=weight*1.19;
            console.log(cal);
            break;
    }
    document.getElementById(planet).style.display='block';
    document.getElementById('ans').innerHTML="Weight on "+planet +" is "+cal;
    document.getElementById('inputbox').style.display='none';
    
}   
function done(){
    var planet=document.getElementById("planets").value;
    document.getElementById(planet).style.display='none';
    document.getElementById('ans').innerHTML="";
    document.getElementById('inputbox').style.display='block';
    var x = document.getElementById("imgbox");
    x.style.display='block';
}

function hide() {
    var x = document.getElementById("imgbox");
    x.style.display='none';
    var y = document.getElementById("answer");
    y.style.display='block';
  }