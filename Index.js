
function calling(){
    let email=document.getElementById("in1").value;
    let password=document.getElementById("in2").value;
    if(email==="shiva.gade.129@gmail.com"&&password==="shiva123"){
        window.open("Actors.html")
    }


}

document.getElementById("form").onclick=()=>{
    calling()
}