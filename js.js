if (window.location.search == "?cardapio"){
	document.querySelector("body").classList.add("só_cardapio");
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

function clicou_dinheiro(){
	document.querySelector('#cardapio').classList.add("mostrar_preços");
}