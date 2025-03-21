// Importamos la librería axios para realizar solicitudes HTTP
const axios = require('axios');

/**
 * Función para obtener la reputación de un usuario específico.
 * Se envía una solicitud GET a la API para obtener la reputación basada en el ID de un usuario.
 */
async function getReputation() {
    try {
        // Realizamos una solicitud GET a la API para obtener la reputación del usuario con ID '6RgswAsggEszsbW09y6e'
        const response = await axios.get('https://api-usuarios-perfiles.onrender.com/apiV1/users/reputation/6RgswAsggEszsbW09y6e');
        
        // Imprimimos la respuesta de la API en formato JSON
        console.log("Reputación del usuario:", JSON.stringify(response.data, null, 2));
    } catch (error) {
        // Capturamos y mostramos errores en caso de que falle la petición
        console.error('Error al hacer la petición:', error.message);
    }
}

// Llamamos a la función para ejecutarla
getReputation();
