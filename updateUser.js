// Importamos la librería axios para realizar solicitudes HTTP
const axios = require('axios');

/**
 * Función para actualizar la información de un usuario.
 * Se envía una solicitud PUT a la API para actualizar los datos del usuario con un ID específico.
 */
async function updateUser() {
    try {
        // Realizamos una solicitud PUT a la API para actualizar el usuario con el ID '6RgswAsggEszsbW09y6e'
        const response = await axios.put('https://api-usuarios-perfiles.onrender.com/apiV1/users/6RgswAsggEszsbW09y6e', {
            // Enviamos los datos que deseamos actualizar en el cuerpo de la solicitud
            nombre: "Paquita la del Barrio",
            correo: "paquita12@gmail.com",
            edad: 77,
            esAdministrador: false,
            intereses: ["Jusicia", "Cantante", "Musica"],
            direccion: {
                calle: "Av. Paraiso #12",
                ciudad: "Chihuahua",
                pais: "México"
            },
            actividad: []
        });
        
        // Imprimimos la respuesta de la API en formato JSON
        console.log("Usuario actualizado:", JSON.stringify(response.data, null, 2));
    } catch (error) {
        // Capturamos y mostramos errores en caso de que falle la petición
        console.error('Error al hacer la petición:', error.message);
    }
}

// Llamamos a la función para ejecutarla
updateUser();
