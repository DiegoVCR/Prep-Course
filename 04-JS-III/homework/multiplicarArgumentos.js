function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    if (arguments.length === 0)
        return 0;
    var acc = 1;
    for (let i = 0; i < arguments.length; i++) {
        acc *= arguments[i];
    }
    return acc;
}