# API de Gestión de Usuarios

Esta API permite gestionar usuarios, incluyendo la creación, actualización, eliminación y obtención de detalles. Además, proporciona funcionalidad adicional como obtener la reputación de un usuario, recomendaciones de otros usuarios y registrar actividades.

## Endpoints

### 1. Crear un usuario
- **Endpoint:** `POST /apiV1/users`
- **Descripción:** Crea un nuevo usuario.
- **Cuerpo de la solicitud (JSON):**
    ```json
    {
      "nombre": "Carlos",
      "correo": "daniel22@example.com",
      "edad": "19",
      "esAdministrador": false,
      "intereses": [],
      "direccion": {
        "calle": "Articulo 2",
        "ciudad": "Tepic",
        "pais": "México"
      },
      "actividad": [],
      "fechaRegistro": "2025-03-13T03:14:50.132Z"
    }
    ```
- **Respuesta (200):**
    ```json
    {
      "id": "tv6mTQIMWj94wxUvgJA0",
      "nombre": "Carlos",
      "correo": "daniel22@example.com",
      "edad": "19",
      "esAdministrador": false,
      "intereses": [],
      "direccion": {
        "calle": "Articulo 2",
        "ciudad": "Tepic",
        "pais": "México"
      },
      "actividad": [],
      "fechaRegistro": "2025-03-13T03:14:50.132Z"
    }
    ```

### 2. Obtener todos los usuarios
- **Endpoint:** `GET /apiV1/users`
- **Descripción:** Obtiene la lista de todos los usuarios.
- **Respuesta (200):**
    ```json
    [
      {
        "id": "tv6mTQIMWj94wxUvgJA0",
        "nombre": "Carlos",
        "correo": "daniel22@example.com",
        "edad": "19",
        "esAdministrador": false,
        "intereses": [],
        "direccion": {
          "calle": "Articulo 2",
          "ciudad": "Tepic",
          "pais": "México"
        },
        "actividad": [],
        "fechaRegistro": "2025-03-13T03:14:50.132Z"
      }
    ]
    ```

### 3. Obtener un usuario por ID
- **Endpoint:** `GET /apiV1/users/:id`
- **Descripción:** Obtiene los detalles de un usuario específico por su ID.
- **Parámetros:**
    - `id`: ID del usuario.
- **Respuesta (200):**
    ```json
    {
      "id": "tv6mTQIMWj94wxUvgJA0",
      "nombre": "Carlos",
      "correo": "daniel22@example.com",
      "edad": "19",
      "esAdministrador": false,
      "intereses": [],
      "direccion": {
        "calle": "Articulo 2",
        "ciudad": "Tepic",
        "pais": "México"
      },
      "actividad": [],
      "fechaRegistro": "2025-03-13T03:14:50.132Z"
    }
    ```

### 4. Actualizar un usuario
- **Endpoint:** `PUT /apiV1/users/:id`
- **Descripción:** Actualiza la información de un usuario.
- **Parámetros:**
    - `id`: ID del usuario.
- **Cuerpo de la solicitud (JSON):**
    ```json
    {
      "nombre": "Juan Pérez",
      "correo": "juan@example.com",
      "edad": 26,
      "esAdministrador": true,
      "intereses": ["Música", "Deportes"],
      "direccion": {
        "calle": "Av. Central 456",
        "ciudad": "Morelos",
        "pais": "México"
      },
      "actividad": []
    }
    ```
- **Respuesta (200):** Detalles del usuario actualizado.

### 5. Eliminar un usuario
- **Endpoint:** `DELETE /apiV1/users/:id`
- **Descripción:** Elimina un usuario específico por su ID.
- **Parámetros:**
    - `id`: ID del usuario.
- **Respuesta (200):**
    ```json
    {
      "message": "Usuario eliminado exitosamente"
    }
    ```

### 6. Obtener la reputación de un usuario
- **Endpoint:** `GET /apiV1/users/reputation/:id`
- **Descripción:** Obtiene la reputación de un usuario específico por su ID.
- **Parámetros:**
    - `id`: ID del usuario.
- **Respuesta (200):**
    ```json
    {
      "reputacion": 4.5
    }
    ```

### 7. Obtener recomendaciones para un usuario
- **Endpoint:** `GET /apiV1/users/recommend/:id`
- **Descripción:** Obtiene recomendaciones de usuarios relacionados para un usuario específico por su ID.
- **Parámetros:**
    - `id`: ID del usuario.
- **Respuesta (200):**
    ```json
    [
      {
        "id": "tv6mTQIMWj94wxUvgJA1",
        "nombre": "Juan Pérez",
        "correo": "juan@example.com"
      }
    ]
    ```

### 8. Agregar actividad a un usuario
- **Endpoint:** `POST /apiV1/users/:id/activity`
- **Descripción:** Registra una nueva actividad para un usuario.
- **Parámetros:**
    - `id`: ID del usuario.
- **Cuerpo de la solicitud (JSON):**
    ```json
    {
      "accion": "Inició sesión"
    }
    ```
- **Respuesta (200):**
    ```json
    {
      "id": "tv6mTQIMWj94wxUvgJA0",
      "actividad": [
        {
          "accion": "Inició sesión",
          "fecha": "2025-03-13T10:00:00Z"
        }
      ]
    }
    ```

## Requisitos

- Node.js 14.x o superior.

## Cómo ejecutar el proyecto

1. Clona este repositorio

2. Accede al directorio del proyecto:
    ```bash
    cd <directorio del proyecto>
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Ejecuta el servidor:
    ```bash
    npm start
    ```

La API ahora estará disponible en el puerto especificado.

## Autor

- Jorge Vargas
