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