# Star Runner Game

Bienvenido al juego _Star Runner Game_ desarrollado bajo Node.js y usando la libreria de _Kaboomjs_

## Requisitos

- Node.js y NPM instalados en la maquina

## Descripcion

El proyecto esta creado con el entorno de ejecucion _Node.js_ junto a la libreria para juegos en 2D _Kaboomjs_, adicionalmente para el correcto funcionamiento de _Kaboomjs_ se decidio trabajar con la herramienta de construccion de proyectos _Vite_

## Ejecucion

Dentro de la carpeta del proyecto hay que instalar kaboom con el comando `npm install Kaboom`, esto instalara la liberia.
Posteriormente si se desea ejecutar en modo desarrollador, se abre la terminal y se ejecuta con el comando `npm run dev`, esto mostrarara la direccion en la que se esta ejecutando el proyecto, generalmente bajo el formato `localhost:xxxx`

## Implementacion Adapter y Facade

### Facade

La fachada se implemento en la clase `GameFacade` en donde su proposito es controlar y ocultar la complejidad de las demas clases del modelo, con el fin de que el usuario ejecute el sistema sin la necesidad de conocer todo lo que hay detras, como `Coin.js`,`Player.js`, `Obstacle`.

### Adapter

Se incorporó el patrón Adapter en conjunto con el Principio de inversion de dependencias (DIP) con el fin de desacoplar la lógica del juego de la fuente de entrada. Para ello se definio la clase abstracta `InputAdapter`, encargada de establecer el contrato para el manejo de controles, y una implementación concreta `KeyboardAdapter`, que asocia las teclas del teclado con las acciones del jugador. Gracias a este diseño, las clases `Game` y `GameFacade` dependen de la abstracción en lugar de una implementación especifica.
