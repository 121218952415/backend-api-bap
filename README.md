# backend-api-bap
post 
Crear una tarea nueva :

 {
  "titulo": "Nueva tarea ",
  "description": "la descripcion de la tarea ",
  "completionStatus": false,
  "deliveryDate": "2023-04-20",
  "comments": "Vamor por otra",
  "tags": [ "Tag1", "Tag2"]
}

Get buscar tarea especifica 
buscar tarea por get con id :

http://localhost:4000/task/c0b5bcf5-1085-4964-ab1c-07e4c1a6292b


PUT 

editar tarea:
http://localhost:4000/taskedit/a2842817-6d8b-4011-b6f4-47beaa5bc50f 

envio de json :

 {"titulo": "Nueva tarea de andres ",
  "description": "la descripcion de la tarea ",
  "completionStatus": false,
  "deliveryDate": "2023-04-20",
  "comments": "Vamor por otra",
  "tags": [ "Tag1", "Tag2"]
 }