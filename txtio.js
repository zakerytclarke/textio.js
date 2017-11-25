document.write("<h1 id='txtiotitle'>Txt I/O Terminal</h1><p id='txtio' style='font-family: monospace;font: outline;font-size:25px;'></p>");
function textio(){
alert("Text I/O\nCreated by Zakery Clarke\nMIT License 11/25/2017\n");
}
function cls(){
document.getElementById("txtio").innerHTML="";
}
function print(txt){
document.getElementById("txtio").innerHTML+=txt;
}
function println(txt){
document.getElementById("txtio").innerHTML+=txt+"<br>";
}
function textsize(size){
document.getElementById("txtio").style.fontSize=size+"%";
}
function textcolor(color){
document.getElementById("txtio").style.color=color;
}
function textbgcolor(color){
document.getElementById("txtio").style.backgroundColor=color;
}
function toast(txt){
alert(txt);  
}
function input(msg){
return prompt(msg);  
}
