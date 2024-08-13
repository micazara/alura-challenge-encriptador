texto = document.getElementById("texto"); // textarea a encriptar o desencriptar
resultado = document.getElementById("texto-resultado");

function botonEncriptar() {
    textoEncriptado = encriptar(texto.value.toLowerCase())
    document.querySelector(".img-munieco").style.display = "none";
    document.querySelector("h3").style.display = "none";
    document.querySelector(".mensaje-inicio").style.display = "none";
    // mostrar el textarea
    resultado.value = textoEncriptado;
    document.getElementById("texto-resultado").style.display = "block";
    document.querySelector(".texto-resultado-contenedor").style.display="flex";
    document.getElementById("copiar").style.display="block";
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

