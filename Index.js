
function calling(){
    let email=document.getElementById("in1").value;
    let password=document.getElementById("in2").value;
    if(email==="shiva"&&password==="sh"){
       window.location="Actors.html"
    }else{
     alert("Invalid Username and Password")
    }


}

document.getElementById("form").onclick=()=>{
    calling()
}