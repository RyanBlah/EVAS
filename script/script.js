const botao = document.querySelectorAll(".botao");
const item = document.querySelectorAll(".secao_item");

for (let i = 0; i < botao.length; i++) {
    botao[i].onclick = function () {

        for (let j = 0; j < botao.length; j++) {
            botao[j].classList.remove("ativo");
            item[j].classList.remove("ativo");

            
        }

        botao[i].classList.add("ativo");
        item[i].classList.add("ativo");


    }
}