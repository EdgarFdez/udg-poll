var tabla=document.createElement("table");
var thead=document.createElement("thead");
var tbody=document.createElement("tbody");
var titulos=document.createElement("tr");
var titulod1=document.createElement("th");
var titulod2=document.createElement("th");
var votos=document.createElement("tr");
var votod1=document.createElement("td");
var votod2=document.createElement("td");

tabla.appendChild(thead);
tabla.appendChild(tbody);
titulod1.innerHTML="Titulo Dibujo 1";
titulod2.innerHTML="Titulo Dibujo 2";
titulos.appendChild(titulod1);
titulos.appendChild(titulod2);
thead.appendChild(titulos);
votod1.innerHTML=localStorage.getItem("Voto Dibujo 1");
votod2.innerHTML=localStorage.getItem("Voto Dibujo 2");
votos.appendChild(votod1);
votos.appendChild(votod2);
tbody.appendChild(votos);

document.getElementById('nav').appendChild(tabla);
