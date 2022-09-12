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
        document.getElementById('Dibujos').addEventListener('submit', function(e){
            e.preventDefault();
            var dibujos=new FormData(document.getElementById('Dibujos'));
        
            fetch('guardado.php', {
                method: 'POST',
                body: dibujos
            })
            .then(res => res.json())
            .then(data => {
                if(data=="true"){
                    alert("Los datos se guardaron correctamente");
                    window.location.replace("poll-finished.html");
                } else{
                    console.log(data);
                }
            });
        })
    }
}
function registro(block){
    fetch('consulta.php',{method:'POST'})
    .then(res=>res.json())
    .then(data=>{
        if(objeto.codigo===block){
            window.location.replace("poll-error.html");
        }
    });
}
