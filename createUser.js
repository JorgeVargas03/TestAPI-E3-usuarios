// Importamos la librería axios para realizar solicitudes HTTP
const axios = require('axios');

/**
 * Función para crear un nuevo usuario en la API.
 * Se envía una solicitud POST con los datos del usuario.
 */
async function createUser() {
    try {
        // Realizamos una solicitud POST a la API para registrar un nuevo usuario
        const response = await axios.post(
            'https://api-usuarios-perfiles.onrender.com/apiV1/users',
            {
                nombre: "Paquita la del Barrio", // Nombre del usuario
                correo: "paquita12@gmail.com", // Correo electrónico del usuario
                edad: 77, // Edad del usuario
                esAdministrador: false, // Indica si el usuario es administrador
                intereses: ["Justicia", "Equidad de Género", "Música"], // Lista de intereses
                direccion: { // Información de la dirección del usuario
                    calle: "Av. Paraiso #12",
                    ciudad: "Morelos",
                    pais: "México"
                },
                actividad: [] // Lista vacía de actividad (se llenará más adelante)
            }
        );

        // Imprimimos la respuesta de la API en formato JSON
        console.log(JSON.stringify(response.data, null, 2));
    } catch (error) {
        // Capturamos y mostramos errores en caso de que falle la petición
        console.error('Error al hacer la petición:', error.message);
    }
}

// Llamamos a la función para ejecutarla
createUser();
