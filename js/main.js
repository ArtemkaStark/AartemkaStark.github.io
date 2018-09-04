// Modal Windows
var modal = document.getElementById("ModalWindowVideo");
var div = document.getElementById("videoModal");
var span = document.getElementsByClassName("close")[0];

div.onclick = function (){
	modal.style.display = "block";
}
span.onclick = function(){
	modal.style.display = "none";
}
window.onclick = function(event){
	if (event.target == modal){
		modal.style.display = "none";
	}
}
// // Modal Window

// burger