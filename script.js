
const mesElement = document.getElementById("mes");
const diasElement = document.getElementById("dias");
const horasElement = document.getElementById("horas");
const minutosElement = document.getElementById("minutos");
const segundosElement = document.getElementById("segundos");

const tempo = setInterval(function time(){

  const dataAtual = new Date();

  const dataReferencia = new Date(dataAtual.getFullYear()+1, 6, 2);


  const diferenca = dataReferencia - dataAtual;

  const totalMeses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30));
  const totalDias = Math.floor(diferenca / (1000 * 60 * 60 * 24)) % 30;
  const totalHoras = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
  const totalMinutos = Math.floor(diferenca / (1000 * 60)) % 60;
  const totalSegundos = Math.floor(diferenca / 1000) % 60;

  mesElement.textContent = totalMeses;
  diasElement.textContent = totalDias;
  horasElement.textContent = totalHoras;
  minutosElement.textContent = totalMinutos;
  segundosElement.textContent = totalSegundos;
}
)
