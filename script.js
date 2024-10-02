const list=document.querySelectorAll('button');
const ip=document.getElementById("input-box");

function isValid(expression){
    return /^[0-9+\-*/().]+$/.test(expression);

}
function btnOperation(event){
   

    if(event.target.value=="="){
        if(isValid(ip.value)){
            ip.value=eval(ip.value);
        }
        else{
            alert("Invalid expressions");
            ip.value="";
        }   
    }
    else if(event.target.value=="AC"){
        ip.value="";

    }
    else if(event.target.value=="DEL"){
        ip.value=ip.value.substring(0,ip.value.length-1);
    }
    else{
        ip.value+=event.target.value;

    }   
}
for(let i=0;i<list.length;i++){

    list[i].addEventListener("click",btnOperation);
}