const botoes = document.querySelectorAll("button");
const secoes = document.querySelectorAll("section");

let moeda = document.querySelector('#moedas p');
// console.log(moeda);

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
    moeda.innerText = moeda_para_converter.toLocaleString('pt-BR', { style: 'currency', currency: "BRL"});
    
    console.log(moeda);
}

lerConversorMoedasAPI();

