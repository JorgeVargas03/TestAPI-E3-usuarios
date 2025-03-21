// Importamos la librería axios para realizar solicitudes HTTP
const axios = require('axios');

/**
 * Función para obtener los datos de un usuario por su ID.
 * Se envía una solicitud GET a la API con el ID del usuario.
 */
async function getUserById() {
    try {
        // ID del usuario a obtener (debe ser un ID válido en la API)
        const userId = 'tv6mTQIMWj94wxUvgJA0';

        // Realizamos una solicitud GET a la API
        const response = await axios.get(
            `https://api-usuarios-perfiles.onrender.com/apiV1/users/${userId}`
        );

        // Imprimimos la respuesta de la API en formato JSON
        console.log("Datos del usuario:", JSON.stringify(response.data, null, 2));
    } catch (error) {
        // Capturamos y mostramos errores en caso de que falle la petición
        console.error('Error al hacer la petición:', error.message);
    }
}

// Llamamos a la función para ejecutarla
getUserById();
