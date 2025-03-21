// Importamos la librería axios para realizar solicitudes HTTP
const axios = require('axios');

/**
 * Función para eliminar un usuario de la API.
 * Se envía una solicitud DELETE a la API con el ID del usuario a eliminar.
 */
async function deleteUser() {
    try {
        // ID del usuario a eliminar (debe ser un ID válido en la API)
        const userId = 't1p8kPdLzeFgyvb35cc4';

        // Realizamos una solicitud DELETE a la API
        const response = await axios.delete(
            `https://api-usuarios-perfiles.onrender.com/apiV1/users/${userId}`
        );

        // Imprimimos la respuesta de la API en formato JSON
        console.log("Usuario eliminado exitosamente:", JSON.stringify(response.data, null, 2));
    } catch (error) {
        // Capturamos y mostramos errores en caso de que falle la petición
        console.error('Error al hacer la petición:', error.message);
    }
}

// Llamamos a la función para ejecutarla
deleteUser();
