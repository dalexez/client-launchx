# Practica 4 Cliente-Servidor
## Descripcion
Para esta practica se nos pide implementar una nueva Feature Fullstack en una app legada, para poner en practica lo aprendido. Haremos uso de una practica anterior
en la cual creamos una conexion a una base de datos y lo proporcionado en esta.
Revisemos los requerimientos:

## Nuevo Feature Fullstack

`missionCommander`
| Campo | Tipo |
|---|---|
| id | Integer (autogenerado) |
| name | String |
| username | String |
| mainStack | String |
| currentEnrollment | Boolean |
| hasAzureCertification | Boolean |

1. Crea la tabla nueva anterior. Agrega unos registros por medio de los seeds.
2. Crea un CRUD expuesto en un API en el `server.js` (métodos GET, POST, PUT, DELETE, recuerda que el método GET deberá tener 2 endpoints, uno para traer todos los registros y otro para consultar solo el registro por ID).
3. En la pantalla inicial del front, consulta todos los registros en esta tabla y muéstralos. Tú decides el diseño.
4. Agrega la posibilidad de agregar uno nuevo.
5. Agrega la posibilidad de editar el `mainStack`.
6. Agrega la posibilidad de eliminar el registro.

## Inicio de proyecto
Inicie por analizar la app legada para entender su funcionamiento y planear como empezar, realize un diagrama de como entiendo su funcionamiento general, para despues
entrar en detalle a cada elemento

## Diagrama de app y conceptos en general
![express (3)](https://user-images.githubusercontent.com/62618610/167317622-1e1aa9cf-9452-4109-836b-b8f376087e5d.png)

En terminos muy generales el diagrama de arriba explica como funciona la app, iniciaremos con el punto 1 del feature
Crearemos la nueva tabla por medio de **Prisma** y la iniciaremos generando algunos registros con el archivo **seed** todo esto lo realizaremos en el codigo de la
practica anterior de la cual dejare el link 

https://github.com/dalexez/Cliente_Servidor.git

## Modelo de Prisma para crear la tabla
![image](https://user-images.githubusercontent.com/62618610/167318609-a966e14f-59a0-441c-ad33-87299b55e0db.png)

## Seed para registros iniciales
![image](https://user-images.githubusercontent.com/62618610/167319163-1dd51258-1c77-4aef-9f60-62e8920e1401.png)

## Requerimiento 2
Creamos el CRUD solicitado para las consultas a la base de datos, quedaria de la siguiente manera:
![image](https://user-images.githubusercontent.com/62618610/167319277-78350b6b-3658-4f57-93d8-b4e0754c0801.png)

Esto seria practicamente todo lo que se necesitaria hacer en el backend, pasamos al Frontend para los siguientes requerimientos

## Requerimiento 3
Para este requerimiento fue de gran importancia entender el funcionamiento del Framework en este caso VUE, iniciaremos por mencionar el **Router** este elemento de 
VUE nos sirve para especificar que **Componente** mostrar dependiendo el direccionamiento de la barra del navegador:
![Router](https://user-images.githubusercontent.com/62618610/167319613-d28d31a8-c74f-4477-b494-3d2422c18ce9.png)

Los **Componentes** son un paquete: codigo html que vendria siendo el **Template** y codigo javascript,  nos ayuda para poder modular nuestra app.
Creamos el **Componente** para moestrar los Mission Commander asi como el **Servicio** que usaremos en todos los componentes Mission Commander

Los **Servicios** en este caso, son los encargados de hacer las peticiones HTTP que se le haran al Backend, para esto usaremos  **AXIOS**

## Requerimiento 4
Creamos el componente **addMissionCommander** 

![image](https://user-images.githubusercontent.com/62618610/167320185-c9c74f91-c4b1-4a88-8500-d99308d0244a.png)

