
const digitado = document.querySelector(".heart__inserir");
const textaresult = document.querySelector(".blood__textarea-result");
const visibilidadeMens = document.querySelector(".blood__vis");
const btnCopiar = document.querySelector(".blood__btn-copia");
const btnCriptografar = document.querySelector(".btn-conjunto__criptografar");
const btnDescriptografar = document.querySelector(".btn-conjunto__descriptografar");
const msgErro = document.querySelector(".heart__msg-error");
const btnOk = document.querySelector(".heart__btn-error");
digitado.focus();
textaresult.style.display = "none";
btnCopiar.style.display = "none";


function vis() {
    visibilidadeMens.style.display = "none";
    textaresult.style.display = "block";
    btnCopiar.style.display = "block";
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

btnCriptografar.onclick = function() {
    if (digitado.value.match(regex)) {
        vis();
        criptografar();
    } else {
        msgErro.showModal();
    }
}

btnDescriptografar.onclick = function() {
    if (digitado.value.match(regex)) {
        vis();
        descriptografar();
    } else {
        msgErro.showModal();
    }
}

btnOk.onclick = function() {
    msgErro.close();
}

btnCopiar.onclick = function() {
    textaresult.select();
    document.execCommand('copy');
    
    btnCopiar.textContent = "Copiado!";
    btnCopiar.style.backgroundColor = "#0A3871";
    btnCopiar.style.color = "white";  
    
    setTimeout(() => {
        bntCopiar.textContent = "Copiar";
        bntCopiar.style.backgroundColor = "white";
        bntCopiar.style.color = "#0A3871";
    }, 3000);
}
