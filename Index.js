
function calling(){
    let email=document.getElementById("in1").value;
    let password=document.getElementById("in2").value;
    if(email==="shiva"&&password==="sh"){
       window.location="Actors.html"
    }else{
     window.location="Index.html"
     alert("invalid username and password")
    }


}

document.getElementById("form").onclick=()=>{
    calling()
}