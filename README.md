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

 Delete Tarea 

 http://localhost:4000/deletetask/ id
  cambiamos id de tarea a borrar 0ed82382-9654-4c3c-962e-7e6e123ab073

 Este seria el link completo 
http://localhost:4000/deletetask/0ed82382-9654-4c3c-962e-7e6e123ab073

Get 
Traer toda la data de la base de datos 
http://localhost:4000/gettask 

Get Tarea por id 

http://localhost:4000/task/2d0c64be-b8aa-4ba2-be15-286e50830837

Get filtro por query
http://localhost:4000/filtrado?titulo= 
