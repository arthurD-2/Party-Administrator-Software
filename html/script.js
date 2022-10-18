let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
  console.log("Calculando...");

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;


    let TotalSalgados =
    SalgadosPP(duracao) * adultos + (criancas / 2 * SalgadosPP(duracao)) ;
    let TotalRefri =
    RefriPP(duracao) * adultos + (criancas / 2 * RefriPP(duracao)) ;
    let TotalCerveja =
    CervejaPP(duracao) * adultos;
    let TotalBatata =
    BatataPP(duracao) * adultos + (criancas / 2 * BatataPP(duracao)) ;
    let TotalCalabresa =
    CalabresaPP(duracao) * adultos + (criancas / 2 * CalabresaPP(duracao)) ;

    resultado.innerHTML = `<p> ${Math.ceil(TotalSalgados/10)} Salgadinhos </p>`;
    resultado.innerHTML += `<p> ${Math.ceil(TotalRefri/2000)} Garrafas de Refrigerante </p>`;
    resultado.innerHTML += `<p> ${Math.ceil(TotalCerveja /355)} Latas de Cerveja</p>`;
    resultado.innerHTML += `<p> ${Math.ceil(TotalBatata/1000)} Kg de Batata </p>`;
    resultado.innerHTML += `<p> ${Math.ceil(TotalCalabresa/1000)} Kg de Calabresa </p>`;



    console.log(TotalSalgados,TotalRefri,TotalCerveja);


}

function SalgadosPP(duracao){
  if (duracao >= 6){
    return 600;
  } 
  else {
    return 400;
  }
}
function RefriPP(duracao){
    if (duracao >= 6){
      return 700;
    } 
    else {
      return 500;
    }
  }
  function CervejaPP(duracao){
    if (duracao >= 6){
      return 2000;
    } 
    else {
      return 1500;
    }
  }

  function BatataPP(duracao){
    if (duracao >= 6){
      return 600;
    } 
    else {
      return 400;
    }
  }
  function CalabresaPP(duracao){
    if (duracao >= 6){
      return 600;
    } 
    else {
      return 400;
    }
  }