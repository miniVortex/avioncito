document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usuario = document.getElementById('usuario').value;
    const clave = document.getElementById('clave').value;
    const errorMsg = document.getElementById('errorMsg');

    const userCodificado = btoa(usuario);
    const claveCodificada = btoa(clave);
    
    /**
     * 6JAJAJAJJAJA pensabbas que iba ser tan fácil? Nos vienen enseñaando desde ssiempre la importancia dee la seguridad en internet!
     * lo minimo que podias pretender era que las encriptara
     * Uff, q jodido no? Con que carajo lo habre hecho?4
     * Eu quizá hay algun mensaje oculto por aca, ¿no te parece?
     * Y una vez que lo tengas, debería haber algo a descifrar (guiño guiño) por acá, no?
    **/

    if (userCodificado === "YW1vcmVfbWlv" && claveCodificada === "YXZpb25jaXRv") {
    
    const destinoCodificado = "Z2FsYWdhLmh0bWw=";
    const destino = atob(destinoCodificado);
    window.location.href = destino;
    } else {
    // Mostrar mensaje de error
    errorMsg.textContent = 'Usuario o contraseña incorrectos';
    errorMsg.style.display = 'block';
    
    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
        errorMsg.style.display = 'none';
    }, 3000);
    }
});
