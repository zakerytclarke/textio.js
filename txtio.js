document.write("<p id='txtio' style='font-family:monospace;font:outline;font-size:30px;width:100%;height:100%;position:absolute;padding:30px;top:-20px;left:-20px;'>Txt I/O Terminal<br>Created by Zakery Clarke<br>MIT License 11/25/17<br></p>");
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
function txtiohelp(){
cls();
println("Text I/O");
println("Created by Zakery Clarke");
println("MIT License 11/25/2017");
println("<a href='https://github.com/zakerytclarke/txtio.js'>Github</a>"); 
println("Commands:");
println("cls() clears the screen");
println("print(text) prints text to the screen");
println("println(text) print text to the screen followed by a new line char");
println("var name=input(msg) inputs a string from a dialog");
println("toast(msg) shows an alert message");
println("textcolor(color) sets the text color");
println("textbgcolor(color) sets the bg color");
println("textsize(size) sets the text size"); 
}
