function blue() {
    document.getElementById("name").style.backgroundColor = "blue";
}
function blue2(){
	document.getElementById("email").style.backgroundColor = "blue";
}
function blue3(){
	document.getElementById("phone").style.backgroundColor = "blue";
}
function blue4(){
	document.getElementById("comment").style.backgroundColor = "blue";
}
function green(){
document.getElementById("name").style.backgroundColor = "green";
}
function green2(){
document.getElementById("comment").style.backgroundColor = "green";
}
function validate(){
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(document.getElementById("email").value.match(mailformat))
{document.getElementById("email").style.backgroundColor = "green";}
else{document.getElementById("email").style.backgroundColor = "red";}
}
function validate2(){
var number = /^[0-9]+$/;
if(document.getElementById("phone").value.match(number))
{document.getElementById("phone").style.backgroundColor = "green";}
else{document.getElementById("phone").style.backgroundColor = "red";}
}
