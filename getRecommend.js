// Importamos la librería axios para realizar solicitudes HTTP
const axios = require('axios');

/**
 * Función para obtener recomendaciones para un usuario específico.
 * Se envía una solicitud GET a la API para obtener recomendaciones basadas en un usuario.
 */
async function getRecommend() {
    try {
        // Realizamos una solicitud GET a la API para obtener las recomendaciones para el usuario con ID '6RgswAsggEszsbW09y6e'
        const response = await axios.get('https://api-usuarios-perfiles.onrender.com/apiV1/users/recommend/6RgswAsggEszsbW09y6e');
        
        // Imprimimos la respuesta de la API en formato JSON
        console.log("Recomendaciones para el usuario:", JSON.stringify(response.data, null, 2));
    } catch (error) {
        // Capturamos y mostramos errores en caso de que falle la petición
        console.error('Error al hacer la petición:', error.message);
    }
}

// Llamamos a la función para ejecutarla
getRecommend();
