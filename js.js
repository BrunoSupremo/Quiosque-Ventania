function toggle_visibility(){
	this.classList.toggle("visible");
}

var items_cardapio = document.querySelectorAll('#cardapio div');
for (var i = 0; i < items_cardapio.length; i++) {
	items_cardapio[i].onclick = toggle_visibility;
}