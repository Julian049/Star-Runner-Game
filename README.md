# Star Runner Game

Bienvenido a **Star Runner Game**, un juego en 2D desarrollado con **Node.js**, **Kaboom.js** y gestionado con **Vite** como herramienta de construcción.  
El proyecto incorpora principios de diseño de software y patrones como **Adapter** y **Facade**, además de aplicar prácticas de trabajo colaborativo con Git

## Requisitos

- Node.js y NPM instalados en la máquina
- Navegador web moderno

## Descripcion

El proyecto fue desarrollado en equipo como práctica de:

- Uso de **Kaboom.js** para crear juegos en 2D.
- **Patrones de diseño (Adapter y Facade)** para abstraer la complejidad interna del juego.
- **Principios SOLID**, especialmente responsabilidad única e inversión de dependencias.
- Gestión de repositorio con ramas, _features_ y _Pull Requests_.

## Ejecucion

1. Instalar dependencias:
   -bash
   npm install kaboom
2. Ejecutar en modo desarrollador:
   -bash
   npm run dev
3. Abrir en el navegador la dirección mostrada en la terminal (generalmente http://localhost:xxxx).

## Funcionalidades

- Movimiento del personaje: desplazamiento lateral y saltos.

- Obstáculos y flechas: generación aleatoria en diferentes niveles del mapa.

- Monedas: aparecen en posiciones aleatorias; al recolectarlas incrementan un contador.

- Colisiones: detección contra obstáculos, flechas y monedas.

- Puntuación en tiempo real: se muestra en pantalla durante la partida.

- Escenas: inicio, juego y game over.

- Pantalla de game over: muestra puntaje final, monedas recolectadas y Top 10 puntuaciones.

- Persistencia: guardado de puntajes en archivo JSON.

- UI básica: botones de inicio y reinicio.

- Principios SOLID aplicados: refactorización para mejorar responsabilidad única e inversión de dependencias.

## Patrones de Diseño

### Facade

La fachada se implemento en la clase `GameFacade` donde su proposito es controlar y ocultar la complejidad de las demas clases del modelo, con el fin de que el usuario ejecute el sistema sin la necesidad de conocer todo lo que hay detras, es decir, clases como `Coin.js`,`Player.js`, `Obstacle`.

### Adapter

Se incorporó el patrón Adapter en conjunto con el Principio de inversion de dependencias (DIP) con el fin de desacoplar la lógica del juego de la fuente de entrada. Para ello se definio la clase abstracta `InputAdapter`, encargada de establecer el contrato para el manejo de controles, y una implementación concreta `KeyboardAdapter`, que asocia las teclas del teclado con las acciones del jugador. Gracias a este diseño, las clases `Game` y `GameFacade` dependen de la abstracción en lugar de una implementación especifica.

## Integrantes y Contribuciones

**Diego Gil**

- Configuración inicial del proyecto: repositorio, package.json, integración de Kaboom.js.

- Movimiento del personaje (lateral y saltos).

- Adapter para entradas (entradas de teclado).

- Gestión de ramas: feature/movement, feature/adapter.

- Documentación sobre configuración inicial y Adapter.

**Julian Bocanegra**

- Generación aleatoria de obstáculos y monedas.

- Detección de colisiones.

- Implementación del patrón Facade.

- Pruebas manuales de colisiones y métodos del Facade.

- Gestión de ramas: feature/obstacles, feature/collisions, feature/facade.

- Documentación sobre colisiones y Facade.

**William González**

- Creación de escenas: inicio, juego y game over.

- Interfaz de usuario (UI) con botones de inicio y reinicio.

- Lógica de guardado de puntuaciones en archivo JSON.

- Refactorización aplicando principios SOLID.

- Gestión de ramas: feature/scenes, feature/ui, feature/scores.

- Documentación sobre la UI y principios SOLID.

**Jorge González**

- Diseño del personaje y animaciones.

- Implementación de puntuación en tiempo real.

- Top 10 puntuaciones en pantalla de game over.

- Creación de diagrama UML con PlantUML, mostrando Adapter, Facade y estructura de clases.

- Gestión de ramas: feature/character, feature/score-display, feature/top-scores.

- Documentación sobre el sistema de puntuaciones y UML.

## Diagrama UML

Se utilizó PlantUML para documentar la arquitectura del proyecto, incluyendo la implementación de Adapter y Facade, así como la relación entre las clases principales.

## Conclusiones

Star Runner Game demuestra cómo es posible combinar desarrollo de videojuegos en 2D con buenas prácticas de ingeniería de software, aplicando patrones de diseño, principios SOLID y un flujo de trabajo colaborativo con Git.
