// Importamos la librería axios para realizar solicitudes HTTP
const axios = require('axios');

/**
 * Función para actualizar la información de un usuario.
 * Se envía una solicitud PATCH a la API para actualizar los datos del usuario con un ID específico.
 */
async function patchUser() {
    try {
        // Realizamos una solicitud PATCH a la API para actualizar el usuario con el ID '6RgswAsggEszsbW09y6e'
        const response = await axios.patch('https://api-usuarios-perfiles.onrender.com/apiV1/users/6RgswAsggEszsbW09y6e', {
            // Actualizamos el campo 'esAdministrador' y los 'intereses' del usuario
            esAdministrador: true,
            intereses: ["Actriz", "Cantante", "Musica"],
        });
        
        // Imprimimos la respuesta de la API en formato JSON
        console.log("Usuario actualizado:", JSON.stringify(response.data, null, 2));
    } catch (error) {
        // Capturamos y mostramos errores en caso de que falle la petición
        console.error('Error al hacer la petición:', error.message);
    }
}

// Llamamos a la función para ejecutarla
patchUser();
