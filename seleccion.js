localStorage.setItem("Voto Dibujo 1", 0);
localStorage.setItem("Voto Dibujo 2", 0);
localStorage.setItem("Bloqueado", "0");
var titulo_dibujo1=localStorage.getItem("Voto Dibujo 1");
var titulo_dibujo2=localStorage.getItem("Voto Dibujo 2");
var id=localStorage.getItem("Bloqueado");
var check;

function verificacion(){
    check=0;
    for(var i=0;i<document.getElementsByName("dibujo").length;i++){
        if(document.getElementsByName("dibujo")[i].checked){
            check=document.getElementsByName("dibujo")[i].value;
        }
    }
    if(check==0){
        alert("Seleccione un dibujo");
    } else{
        window.location.replace("poll-finished.html");
        localStorage.setItem("Bloqueado", id);
        //console.log(id);
        switch(check){
            case "1":{
                titulo_dibujo1++;
                localStorage.setItem("Voto Dibujo 1", titulo_dibujo1);
                //console.log(localStorage.getItem("Voto Dibujo 1"));
                break;
            }
            case "2":{
                titulo_dibujo2++;
                localStorage.setItem("Voto Dibujo 2", titulo_dibujo2);
                //console.log(localStorage.getItem("Voto Dibujo 2"));
                break;
            }
        }
    }
}
function registro(block){
    if(localStorage.getItem("Bloqueado").indexOf(block)!=-1){
        window.location.replace("poll-error.html");
    }
}
