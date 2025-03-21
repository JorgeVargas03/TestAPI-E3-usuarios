// Importamos la librería axios para hacer solicitudes HTTP
const axios = require('axios');

/**
 * Función para registrar una actividad en el perfil de un usuario específico.
 * En este caso, se registra la acción de "Inició sesión".
 */
async function createTask() {
    try {
        // Realizamos una solicitud POST a la API para agregar una actividad al usuario con ID "6RgswAsggEszsbW09y6e"
        const response = await axios.post(
            'https://api-usuarios-perfiles.onrender.com/apiV1/users/6RgswAsggEszsbW09y6e/activity',
            {
                "accion": "Inició sesión" // Datos que se envían en el cuerpo de la solicitud
            }
        );

        // Imprimimos la respuesta en formato JSON de manera legible
        console.log(JSON.stringify(response.data, null, 2));
    } catch (error) {
        // Capturamos y mostramos errores en caso de que falle la petición
        console.error('Error al hacer la petición:', error.message);
    }
}

// Llamamos a la función para ejecutarla
createTask();
