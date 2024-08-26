
const digitado = document.querySelector(".heart__inserir");
const textaresult = document.querySelector(".blood__textarea-result");
const visibilidadeMens = document.querySelector(".blood__vis");
const bntCopiar = document.querySelector(".blood__btn-copia");
const bntCriptografar = document.querySelector(".btn-conjunto__criptografar");
const bntDescriptografar = document.querySelector(".btn-conjunto__descriptografar");
const msgErro = document.querySelector(".heart__msg-error");
const bntOk = document.querySelector(".heart__btn-error");
digitado.focus();
textaresult.style.display = "none";
bntCopiar.style.display = "none";


function vis() {
    visibilidadeMens.style.display = "none";
    textaresult.style.display = "block";
    bntCopiar.style.display = "block";
}

function criptografar() {
    let criptografar = digitado.value;
    
    criptografar = criptografar.replaceAll("e", "enter")
                                .replaceAll("i", "imes")
                                .replaceAll("a", "ai")
                                .replaceAll("o", "ober")
                                .replaceAll("u", "ufat");
    textaresult.textContent = criptografar;
}
function descriptografar() {
    let descriptografar = digitado.value;
    
    descriptografar = descriptografar.replaceAll("enter", "e")
                                    .replaceAll("imes", "i")
                                    .replaceAll("ai", "a")
                                    .replaceAll("ober", "o")
                                    .replaceAll("ufat", "u");
    textaresult.textContent = descriptografar;
}

const regex = /^([a-z]|\s)+$/;

bntCriptografar.onclick = function() {
    if (digitado.value.match(regex)) {
        vis();
        criptografar();
    } else {
        msgErro.showModal();
    }
}

bntDescriptografar.onclick = function() {
    if (digitado.value.match(regex)) {
        vis();
        descriptografar();
    } else {
        msgErro.showModal();
    }
}

bntOk.onclick = function() {
    msgErro.close();
}

bntCopiar.onclick = function() {
    textaresult.select();
    document.execCommand('copy');
    
    bntCopiar.textContent = "Copiado!";
    bntCopiar.style.backgroundColor = "#0A3871";
    bntCopiar.style.color = "white";  
    
    setTimeout(() => {
        bntCopiar.textContent = "Copiar";
        bntCopiar.style.backgroundColor = "white";
        bntCopiar.style.color = "#0A3871";
    }, 3000);
}