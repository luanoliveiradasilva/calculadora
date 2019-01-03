//variáveis globais.
let valorUm;
let valorDois;
let operacao;
let valorNum;
let operadorSinal;

//Função para os números.
function num(valor) {
        valorNum = valor;
        /*
        Concatenando os valores ao clicar no botão. Executando get do valor mais ele mesmo, como se 
        fosse, valorA+=valorB;
        */
        document.getElementById("valor").value += valorNum;
        //O segundo valor que está sendo inserido, está sendo valor a parte.

}

function transformaValor(){
        document.getElementById("valor").value = parseInt(valorNum * -1);        
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
                document.getElementById("valor").value -= valorNum;//Incluir botão para limpar o ultimo valor, ao invés de apagar tudo.    
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