# Star Runner Game

Bienvenido al juego *Star Runner Game* desarrollado bajo Node.js y usando la libreria de *Kaboomjs* 

## Requisitos
- Node.js y NPM instalados en la maquina

## Descripcion
El proyecto esta creado con el entorno de ejecucion *Node.js* junto a la libreria para juegos en 2D *Kaboomjs*, adicionalmente para el correcto funcionamiento de *Kaboomjs* se decidio trabajar con la herramienta de construccion de proyectos *Vite*

## Ejecucion
Dentro de la carpeta del proyecto hay que instalar kaboom con el comando `npm install Kaboom`, esto instalara la liberia.
Posteriormente si se desea ejecutar en modo desarrollador, se abre la terminal y se ejecuta con el comando `npm run dev`, esto mostrarara la direccion en la que se esta ejecutando el proyecto, generalmente bajo el formato `localhost:xxxx`

## Implementacion Adapter y Facade
### Facade
La fachada se implemento en la clase `GameFacade` en donde su proposito es controlar y ocultar la complejidad de las demas clases del modelo, con el fin de que el usuario ejecute el sistema sin la necesidad de conocer todo lo que hay detras, como `Coin.js`,`Player.js`, `Obstacle`.