const textArea = document.querySelector(".text-area");
const Mensaje = document.querySelector(".Mensaje");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    Mensaje.value = textoEncriptado
    textArea.value = "";
    Mensaje.style.backgroundImage = "none"
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    Mensaje.value = textoEncriptado
    textArea.value = "";
}

function copiarTexto(){
    var texto = Mensaje.value;
    navigator.clipboard.writeText(texto);
    Mensaje.style.backgroundImage = "none"
    Mensaje.value = "Texto Copiado";
}

function encriptar(stringEncriptada){
let matrizCodigo = [["e","enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
stringEncriptada = stringEncriptada.toLowerCase()

for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
}
return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copy() {

    var content = document.getElementById(Mensaje.value);
    
    content.select();
    document.execCommand('copy');

    alert("Copiado!");
}