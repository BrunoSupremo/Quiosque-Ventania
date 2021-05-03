function toggle_visibility(){
	this.classList.toggle("visible");
}

let items_cardapio = document.querySelectorAll('#cardapio div');
for (let i = 0; i < items_cardapio.length; i++) {
	items_cardapio[i].onclick = toggle_visibility;
}

let imagens_cardapio = document.querySelectorAll('#cardapio div img');
for (let i = 0; i < imagens_cardapio.length; i++) {
	if (imagens_cardapio[i].complete){
		imagens_cardapio[i].classList.toggle("visible");
	}else{
		imagens_cardapio[i].onload = function(){
			this.classList.toggle("visible");
		};
	}
}