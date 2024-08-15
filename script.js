texto = document.getElementById("texto"); // textarea a encriptar o desencriptar
resultado = document.getElementById("texto-resultado");

function botonEncriptar() {
    textoEncriptado = encriptar(texto.value.toLowerCase())
    document.querySelector(".img-munieco").style.display = "none";
    document.querySelector("h3").style.display = "none";
    document.querySelector(".mensaje-inicio").style.display = "none";
    resultado.value = textoEncriptado;
    document.getElementById("texto-resultado").style.display = "block";
    document.querySelector(".texto-resultado-contenedor").style.display = "flex";
    document.getElementById("copiar").style.display = "block";
    texto.value = "";
}

function botonDesencriptar() {
    textoDesencriptado = desencriptar(texto.value.toLowerCase())
    document.querySelector(".img-munieco").style.display = "none";
    document.querySelector("h3").style.display = "none";
    document.querySelector(".mensaje-inicio").style.display = "none";
    resultado.value = textoDesencriptado;
    document.getElementById("texto-resultado").style.display = "block";
    document.querySelector(".texto-resultado-contenedor").style.display = "flex";
    document.getElementById("copiar").style.display = "block";
    texto.value = "";
}

function encriptar(textoAEncriptar) {
    let llaves = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    for (let index = 0; index < llaves.length; index++) {
        if (textoAEncriptar.includes(llaves[index][0])) {
            textoAEncriptar = textoAEncriptar.replaceAll(llaves[index][0], llaves[index][1])
        }

    }
    return textoAEncriptar;
}

function desencriptar(textoADesencriptar) {
    let llaves = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    for (let index = 0; index < llaves.length; index++) {
        if (textoADesencriptar.includes(llaves[index][1])) {
            textoADesencriptar = textoADesencriptar.replaceAll(llaves[index][1], llaves[index][0])
        }
    }
    return textoADesencriptar;
}

function botonCopiar() {
    // Seleccionar el elemento textarea
    let textoACopiar = document.getElementById("texto-resultado");

    // Seleccionar el texto dentro del textarea
    textoACopiar.select();
    textoACopiar.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(textoACopiar.value)
        .then(() => {
            alert("Texto copiado con éxito");
        })
}
