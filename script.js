const botoes = document.querySelectorAll("aside nav button");
const secoes = document.querySelectorAll("section");

let moeda = document.querySelector('#moedas p');
const btn_form = document.querySelector('#btn_converter');
const entrada = document.querySelector('form #entrada');



botoes.forEach(
    (btn, i) => {
        btn.addEventListener('click', () =>
        {
            botoes.forEach(
                b => b.setAttribute('aria-selected', 'false')
            );
            btn.setAttribute('aria-selected', 'true');

            secoes.forEach(
                s => s.hidden = true
            );

            secoes[i].hidden = false;
        }
    );
    }
);


async function lerConversorMoedasAPI(){
    const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
    // console.log(url);
    const dados = await fetch(url);
    // console.log(dados);
    const response = await dados.json();
    // console.log(response);
    let moeda_para_converter = parseFloat(`${response.USDBRL.bid}`);
    calcularValor(moeda_para_converter);
}


lerConversorMoedasAPI();


function calcularValor(moeda_para_converter){
    btn_form.addEventListener('click', (e) => {
    e.preventDefault();

    let valor = Number(entrada.value); 
    // console.log(valor);


    let resultado = valor * Number(moeda_para_converter);
    resultado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: "BRL"});
    moeda.innerText = resultado;
    console.log(moeda);
    entrada.value = "";
    });
    
}

