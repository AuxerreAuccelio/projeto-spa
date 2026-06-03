const botoes = document.querySelectorAll("aside nav button");
const secoes = document.querySelectorAll("section");

let moeda1 = document.querySelector('#moedas #dolar_real');
let moeda2 = document.querySelector('#moedas #real_dolar');
const btn_dolar_real = document.querySelector('#btn_dolar_real');
const btn_real_dolar = document.querySelector('#btn_real_dolar');
const entrada1 = document.querySelector('form #entrada_dolar_real');
const entrada2 = document.querySelector('form #entrada_real_dolar');




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
    btn_dolar_real.addEventListener('click', (e) => {
    e.preventDefault();

    let valor = Number(entrada1.value); 
    // console.log(valor);


    let resultado = valor * Number(moeda_para_converter);
    resultado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: "BRL"});
    moeda1.innerText = resultado;
    console.log(moeda1);
    entrada1.value = "";
    });




    btn_real_dolar.addEventListener('click', (e) => {
    e.preventDefault();

    let valor = Number(entrada2.value); 
    // console.log(valor);


    let resultado = valor / Number(moeda_para_converter);
    resultado = resultado.toLocaleString('en-US', { style: 'currency', currency: "USD"});
    moeda2.innerText = resultado;
    console.log(moeda2);
    entrada2.value = "";
    });

}







const dadosIMC = {
    peso: 0,
    altura: 0,
    genero: "",
    resultado_imc: 0,
    form_imc: "",
};    






function setarValores(){   
    
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const opcaoSelecionada = document.querySelector('input[name="genero"]:checked');
    const resultado_imc = document.querySelector('#resultado_imc');
    
    dadosIMC.peso = parseFloat(peso.value);
    dadosIMC.altura = parseFloat(altura.value);
    dadosIMC.genero = opcaoSelecionada ? opcaoSelecionada.value : "";
       
}




    function validarValores(){ 
        try{
            
            if(dadosIMC.altura === 0){
                throw new Error('Divisão por 0 não permitida !');
            }

            
        }
        catch (e){
            console.log('Erro ao tentar dividir por 0 !');
        }


    }



    function calcularIMC(){
        dadosIMC.altura = dadosIMC.altura * dadosIMC.altura;
        dadosIMC.resultado_imc = dadosIMC.peso / dadosIMC.altura ;

    // console.log(dadosIMC.peso);
    // console.log(dadosIMC.altura);
    // console.log(dadosIMC.genero);
    // console.log(dadosIMC.resultado_imc);
    }





    function classificarIMC(){
        
        
    }


    function gerenciarFuncoes(){
        setarValores();
        validarValores();
        calcularIMC();
        classificarIMC();
        //renderiza o resultado na tela
    }

const form_imc = document.querySelector('#formulario_imc');


form_imc.addEventListener('submit', (e) => {
    e.preventDefault();
    gerenciarFuncoes();

} );