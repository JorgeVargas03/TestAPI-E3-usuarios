// Importamos la librería axios para realizar solicitudes HTTP
const axios = require('axios');

/**
 * Función para obtener todos los usuarios de la API.
 * Se envía una solicitud GET a la API para obtener todos los usuarios.
 */
async function getAllUsers() {
    try {
        // Realizamos una solicitud GET a la API para obtener todos los usuarios
        const response = await axios.get('https://api-usuarios-perfiles.onrender.com/apiV1/users');

        // Imprimimos la respuesta de la API en formato JSON
        console.log("Lista de usuarios:", JSON.stringify(response.data, null, 2));
    } catch (error) {
        // Capturamos y mostramos errores en caso de que falle la petición
        console.error('Error al hacer la petición:', error.message);
    }
}

// Llamamos a la función para ejecutarla
getAllUsers();
