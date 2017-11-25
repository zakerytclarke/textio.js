document.write("<p id='txtio'><h1>Txt I/O Terminal</h1><br></p>");
function textio(){
alert("Text I/O\nCreated by Zakery Clarke\nMIT License 11/25/2017\n");
}
function cls(){
document.getElementById("txtio").innerHTML="<h1>Txt I/O Terminal</h1><br>";
}
function print(txt){
document.getElementById("txtio").innerHTML+=txt;
}
function println(txt){
document.getElementById("txtio").innerHTML+=txt+"<br>";
}
function textsize(size){

}
function textcolor(color){

}
