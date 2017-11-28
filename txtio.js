document.write("<p id='txtio' style='font-family:monospace;font:outline;font-size:30px;width:100%;height:100%;position:absolute;top:0;left:10;'>Txt I/O Terminal<br></p>");
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
document.getElementById("txtio").style.fontSize=size+"px";
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
 
