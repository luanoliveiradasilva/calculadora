//variáveis globais.
let valorUm;
let valorDois;
let operacao;
let valorNum;
let operadorSinal;

//Função para os números. inserir os valores.
function num(valor) {
        valorNum = valor;
        document.getElementById("valor").value += valorNum;//Inserir mais de um valor no mesmo texto.
}

//Valor positivo é alterado para negativo.
function transformaValor(){
        
        valorUm = document.getElementById("valor").value;
        document.getElementById("valor").value = innerHTML =- valorUm;//valorNum * -1;
}

//Limpar os dados, valores digitados.
function cleanDados(limpar) {
        var limpa = limpar;
        if(limpa == "clean"){
                document.getElementById("valor").value = innerHTML = "";
                document.getElementById("res").innerHTML = "";
        }else if(limpa == "CancelE"){
                document.getElementById("valor").value = innerHTML = "";
        }else{
                valorUm = document.getElementById("valor").value;
                document.getElementById("valor").value = innerHTML = valorUm.slice(0, -1);
                /*O método slice () retorna os elementos selecionados em uma matriz, 
                como um novo objeto de matriz.
                O método slice () seleciona os elementos que começam no argumento de início fornecido e termina em,
                mas não inclui , o argumento de fim especificado .*/        
        }
} 

//Operações básicas
function soma(oper, operSinal) {
        operacao = oper;//Recebe o valor passado por parâmetro
        operadorSinal = operSinal;
        valorUm = document.getElementById("valor").value;
        document.getElementById("valor").value = innerHTML = "";
        document.getElementById("res").innerHTML = valorUm + operadorSinal;
}

function subtrair(oper, operSinal) {        
        operacao = oper;//Recebe o valor passado por parâmetro
        operadorSinal = operSinal;
        valorUm = document.getElementById("valor").value;
        document.getElementById("valor").value = innerHTML = "";
        document.getElementById("res").innerHTML = valorUm + operadorSinal;
        
}

function multiplicar(oper, operSinal) {
        operacao = oper;//Recebe o valor passado por parâmetro
        operadorSinal = operSinal;
        valorUm = document.getElementById("valor").value;
        document.getElementById("valor").value = innerHTML = "";
        document.getElementById("res").innerHTML = valorUm + operadorSinal;
}

function dividir(oper, operSinal){
        operacao = oper;//Recebe o valor passado por parâmetro
        operadorSinal = operSinal;
        valorUm = document.getElementById("valor").value;         
        document.getElementById("valor").value = innerHTML = "";
        document.getElementById("res").innerHTML = valorUm + operadorSinal; 
}

//Botão de igual
function igualdade() {
        valorDois = document.getElementById("valor").value;

        //Estrutura de decisão, para saber qual operação será executada.
        switch (operacao) {
                case "Somar":
                        var soma = parseInt(valorUm)+parseInt(valorDois);
                        document.getElementById("res").innerHTML = soma;
                        break;

                case "Subtrair":
                        var subtrair = parseInt(valorUm) - parseInt(valorDois);
                        document.getElementById("res").innerHTML = subtrair;
                        break;

                case "Multiplicar":
                        var multiplicar = parseInt(valorUm)*parseInt(valorDois);
                        document.getElementById("res").innerHTML = multiplicar;
                        break;

                case "Dividir":
                        var dividir = parseFloat(valorUm) / parseFloat(valorDois);
                        document.getElementById("res").innerHTML = dividir;
                        break;
        
                default:
                        alert("Operação Invalida!");
                        break;
        }


}