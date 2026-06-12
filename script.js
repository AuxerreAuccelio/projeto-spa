const botoes = document.querySelectorAll("aside nav button");
const secoes = document.querySelectorAll("section");

let moeda1 = document.querySelector("#moedas #dolar_real");
let moeda2 = document.querySelector("#moedas #real_dolar");
const btn_dolar_real = document.querySelector("#btn_dolar_real");
const btn_real_dolar = document.querySelector("#btn_real_dolar");
const entrada1 = document.querySelector("form #entrada_dolar_real");
const entrada2 = document.querySelector("form #entrada_real_dolar");

let icon = document.querySelector("img");
const main = document.querySelector("main");

function alterarModo() {
  icon.addEventListener("click", (event) => {
    event.preventDefault();
    main.classList.toggle("tema_dark");
    console.log(main.classList.value);

    if (main.classList.contains("tema_dark")) {
      icon.src = "./sun-regular.png";
    } else {
      icon.src = "./moon-solid.png";
    }
    //sconsole.log(document.main.classList.value);
  });
}

alterarModo();

botoes.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    botoes.forEach((b) => b.setAttribute("aria-selected", "false"));
    btn.setAttribute("aria-selected", "true");

    secoes.forEach((s) => (s.hidden = true));

    secoes[i].hidden = false;
  });
});

async function lerConversorMoedasAPI() {
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

function calcularValor(moeda_para_converter) {
  btn_dolar_real.addEventListener("click", (e) => {
    e.preventDefault();

    let valor = Number(entrada1.value);
    // console.log(valor);

    let resultado = valor * Number(moeda_para_converter);
    resultado = resultado.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    moeda1.innerText = resultado;
    console.log(moeda1);
    entrada1.value = "";
  });

  btn_real_dolar.addEventListener("click", (e) => {
    e.preventDefault();

    let valor = Number(entrada2.value);
    // console.log(valor);

    let resultado = valor / Number(moeda_para_converter);
    resultado = resultado.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    moeda2.innerText = resultado;
    console.log(moeda2);
    entrada2.value = "";
  });
}















const dadosIMC = {
  peso: 0,
  altura: 0,
  genero_masculino: "",
  genero_feminino: "",
  genero_escolhido: "",
  resultado_imc: 0,
  form_imc: "",
};

function setarValores() {
  const peso = document.querySelector("#peso");
  const altura = document.querySelector("#altura");
  const genero_masculino = document.querySelector("#masculino");
  const genero_feminino = document.querySelector("#feminino");
  const resultado_imc = document.querySelector("#resultado_imc");

  dadosIMC.peso = parseFloat(peso.value);
  dadosIMC.altura = parseFloat(altura.value);
  dadosIMC.genero_masculino = genero_masculino ? genero_masculino : "";
  dadosIMC.genero_feminino = genero_feminino ? genero_feminino : "";
}

function validarValores() {
  if (dadosIMC.genero_masculino.checked == true) {
    dadosIMC.genero_escolhido = dadosIMC.genero_masculino.value;
  } else if (dadosIMC.genero_feminino.checked == true) {
    dadosIMC.genero_escolhido = dadosIMC.genero_feminino.value;
  } else {
    alert("Escolha uma opção de gênero !");
  }

  // console.log(dadosIMC.altura);

  if (dadosIMC.altura === 0) {
    alert("Erro ao tentar dividir por 0 !");
    return 0;
  }
  //Colocar um comando para matar o programa aqui, pois ele ainda dá continuidade
}

function calcularIMC() {
  dadosIMC.altura = dadosIMC.altura * dadosIMC.altura;
  dadosIMC.resultado_imc = dadosIMC.peso / dadosIMC.altura;
}

function classificarIMC() {
  if (dadosIMC.genero_masculino.checked == true) {
    if (dadosIMC.resultado_imc > 29.99) {
      alert("Obesidade");
    } else if (dadosIMC.resultado_imc > 24.99) {
      alert("Sobrepeso");
    } else if (dadosIMC.resultado_imc > 18.49) {
      alert("Normal");
    } else alert("Abaixo do Peso");
    dadosIMC.genero_escolhido = dadosIMC.genero_masculino.value;
    resultado_imc.innerText = `O IMC respectivo é : ${dadosIMC.resultado_imc}`;
  } else if (dadosIMC.genero_feminino.checked == true) {
    if (dadosIMC.resultado_imc > 28.99) {
      alert("Obesidade");
    } else if (dadosIMC.resultado_imc > 23.99) {
      alert("Sobrepeso");
    } else if (dadosIMC.resultado_imc > 18.49) {
      alert("Normal");
    } else alert("Abaixo do Peso");
    dadosIMC.genero_escolhido = dadosIMC.genero_feminino.value;
  } else {
    alert("Escolha uma opção de gênero !");
  }

  // console.log(dadosIMC.peso);
  // console.log(dadosIMC.altura);
  console.log(dadosIMC.resultado_imc);
  // console.log(dadosIMC.resultado_imc);
}

function gerenciarFuncoes() {
  setarValores();
  let retorno = validarValores();
  if (retorno !== 0) {
    calcularIMC();
    classificarIMC();
  } else {
    return;
  }
  //renderiza o resultado na tela
}

const form_imc = document.querySelector("#formulario_imc");

form_imc.addEventListener("submit", (e) => {
  e.preventDefault();
  gerenciarFuncoes();
});








let var1 = document.querySelector('#var1');
let var2 = document.querySelector('#var2');
let var3 = document.querySelector('#var3');
let var4 = document.querySelector('#var4');
const formulario_regra3 = document.querySelector("#formulario_regra3");
let resultado_regra3 = document.querySelector("#resultado_regra3");

 function regra3(){
    formulario_regra3.addEventListener('submit', (e) => {
        e.preventDefault();    
        var1 = parseFloat(var1.value);  

        if(var1 === 0){
          // console.log(typeof(var1));
          alert('Não é possível dividir por 0 !');
          return;
        }

        /* console.log(var1.value); console.log(var2.value); console.log(var3.value); */
        let res = parseFloat((var2.value)) * parseFloat(var3.value);
        res = res / parseFloat(var1.value);
        resultado_regra3.innerText = `O resultado eh: ${res.toLocaleString( "pt-BR", {
        style: "currency", 
        currency: "BRL",
        })
        }`;
    });
}



regra3();










const formulario_temperatura = document.querySelector("#form_temperatura");
const resultado_temperatura = document.querySelector("#resultado_temperatura");

function temperatura() {
  formulario_temperatura.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = parseFloat(document.querySelector("#entrada_temp").value);
    // console.log(valor);


    const direcao = document.querySelector('input[name="temp_direcao"]:checked');
    // console.log(direcao.value);

    if (!direcao) {
      alert("Selecione a direção da conversão !");
      return;
    }

    if (direcao.value === "f_c") {
    let celsius = parseFloat(((valor - 32 ) / 1.8 ).toFixed(2));
    resultado_temperatura.innerText = `${celsius} °C = ${valor} °F`; 
    } else {
    let farenheit = parseFloat(((valor * 1.8 ) + 32 ).toFixed(2));
    resultado_temperatura.innerText = `${valor} °C = ${farenheit} °F`; 
  }
  }
);
}

temperatura();





//Fator: 1 km/h = 0.621371 mph
const formulario_velocidade = document.querySelector("#form_velocidade");
const resultado_velocidade = document.querySelector("#resultado_velocidade");

function velocidade() {
  formulario_velocidade.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = parseFloat(document.querySelector("#entrada_velocidade").value);
    const direcao = document.querySelector('input[name="vel_direcao"]:checked');

    if (!direcao) {
      alert("Selecione a direção da conversão !");
      return;
    }

    if (direcao.value === "km_para_mph") {
      resultado_velocidade.innerText = `${valor} km/h = ${(valor * 0.621371).toFixed(2)} mph`;
    } else {
      resultado_velocidade.innerText = `${valor} mph = ${(valor / 0.621371).toFixed(2)} km/h`;
    }
  });
}

velocidade();


















