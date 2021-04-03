
let primeiroNumero = parseFloat(prompt("Informe o primeiro número"));

let operacao = parseInt(prompt("Digite 1 para soma, 2 para subtração, 3 para multiplicação e 4 para divisão"));

let segundoNumero = parseFloat(prompt("Informe o segundo número"));

if(operacao == 1){
    let resultado = primeiroNumero + segundoNumero;
    document.write("<h2>" + primeiroNumero + " + " + segundoNumero + " = " + resultado + "</h2>");
}else if(operacao == 2){
    let resultado = primeiroNumero - segundoNumero;
    document.write("<h2>" + primeiroNumero + " - " + segundoNumero + " = " + resultado + "</h2>");
}else if(operacao == 3){
    let resultado = primeiroNumero * segundoNumero;
    document.write("<h2>" + primeiroNumero + " x " + segundoNumero + " = " + resultado + "</h2>");
}else if(operacao == 4){
    let resultado = primeiroNumero / segundoNumero;
    document.write("<h2>" + primeiroNumero + " / " + segundoNumero + " = " + resultado + "</h2>");
}












/*
let PN = parseFloat(prompt("informe o primeiro numero"));
let OPRS = parseInt(prompt("1+  2-   3x  4/"));
let SN = parseFloat(prompt("informe o segundo numero"));

if(operaçao == 1){
    let resultado = PN + SN ;
    document.write("<h2>" + PN + "+" + SN + " = " + RST + "</h2>");
    }else if (OPRS == 2){
        let RST = PN - SN ;
    document.write("<h2>" + PN + "-" + SN + " = " + RST + "</h2>");
    }else if (OPRS == 3){
        let RST = PN - SN ;
    document.write("<h2>" + PN + "*" + SN + " = " + RST + "</h2>");
    }else if (OPRS == 4){
        let RST = PN - SN ;
    document.write("<h2>" + PN + "/" + SN + " = " + RST + "</h2>");
    }   