# backend-api-bap

Instrucciones e instalación 

Clone el repositorio en su máquina local usando el siguiente comando:

git clone https://github.com/121218952415/backend-api-bap


Navegue al directorio del proyecto y ejecute el siguiente comando para instalar todas las dependencias necesarias:

"npm install"



Para iniciar el servidor y permitir el levantamiento de la API, ejecute el siguiente comando:

"npm run start "



Endpoints:

POST http://localhost:4000/createtasks

GET http://localhost:4000/task/ nuevo ID 

PUT http://localhost:4000/taskedit/nuevo ID

DELETE http://localhost:4000/deletetask/ nuevo id 

GET http://localhost:4000/task/nuevo ID 

GET http://localhost:4000/filtrado?titulo= nuevo titulo 


POST http://localhost:4000/createuser


Ejemplo de endpoint para crear tarea:
http://localhost:4000/createtasks


Ejemplo de JSON para crear una tarea:

 {
  "titulo": "Nueva tarea ",
  "description": "la descripcion de la tarea ",
  "completionStatus": false,
  "deliveryDate": "2023-04-20",
  "comments": "Vamor por otra",
  "tags": [ "Tag1", "Tag2"]
}

Ejemplo de endpoint para buscar una tarea por ID: 

http://localhost:4000/task/ nuevo ID 




Ejemplo de JSON para editar una tarea:

http://localhost:4000/taskedit/nuevo ID  

envio de json :

 {"titulo": "Nueva tarea de andres ",
  "description": "la descripcion de la tarea ",
  "completionStatus": false,
  "deliveryDate": "2023-04-20",
  "comments": "Vamor por otra",
  "tags": [ "Tag1", "Tag2"]
 }





Ejemplo de endpoint para eliminar una tarea: 

 http://localhost:4000/deletetask/ nuevo id 





Ejemplo de endpoint para traer todas las tareas: 
http://localhost:4000/gettask 





Ejemplo de endpoint para traer tareas por ID  

http://localhost:4000/task/nuevo ID 



Ejemplo de endpoint para filtrar tareas por título
http://localhost:4000/filtrado?titulo= 





Ejemplo de endpoint para crear usuario 

http://localhost:4000/createuser

Ejemplo de JSON para crear un usuario: 

 {
 "name" : "alberto de la cruz",
 "email" : "alberto56_455@gmail.com",
 "password" : "alberto545895"
}



Nota: El hash de la contraseña del usuario se genera con bcrypt antes de guardar el usuario en la base de datos.


En este proyecto, he creado varios endpoints para manejar la información relacionada con tareas.

Para la función de borrado de tarea, he implementado una función que toma el ID como parámetro y elimina la información correspondiente de la base de datos. He utilizado middleware y manejo de información para garantizar que se elimine la tarea correcta de la base de datos.

Para la creación de tarea, he creado un endpoint en el que la información se envía en formato JSON a través del cuerpo de la solicitud. He creado middleware para garantizar el correcto manejo de la información y he creado la tarea en la base de datos, verificando que la información sea correcta.

Para la edición de tarea, he requerido el ID a través de los parámetros de la solicitud para identificar la tarea específica en la base de datos y he requerido el formato JSON a través del cuerpo de la solicitud para poder actualizar la información en la base de datos.

Para buscar una tarea por su ID, he creado un endpoint que toma el ID como parámetro y busca la tarea correspondiente en la base de datos.

Finalmente, he creado una ruta que devuelve todas las tareas del cliente o usuario, para que puedan ver y verificar sus tareas en curso o finalizadas. 