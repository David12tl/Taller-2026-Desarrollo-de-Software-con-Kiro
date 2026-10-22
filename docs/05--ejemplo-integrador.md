# Ejemplo Integrador del Día (Kiro)

El objetivo de tener un ejemplo único durante todo el taller es que el alumno vea la **evolución completa** de un proyecto, desde que es una idea vaga hasta que es una aplicación funcionando con tests.

### El Proyecto
Un juego retro tipo Flappy Bird (que llamaremos **"Flappy Ghost"**) o una API de gestión de tareas (**"Mis Tareas de Estudio"**).

### ¿Por qué este ejemplo?
- Tiene lógica (física, colisiones, validaciones).
- Tiene UI/UX (interfaz, pantallas de inicio, fin de juego).
- Tiene persistencia (guardar el récord o las tareas en una BD local).
- Es fácil de validar visualmente por los alumnos.

### El Rol de Kiro
Utilizaremos Kiro como el **"arquitecto ejecutor"**. Le pediremos que genere el `requirements.md` (EARS), que proponga el `design.md` (arquitectura del juego/app), y que ejecute el `tasks.md` paso a paso, mostrando cómo nosotros revisamos el diff antes de aceptar cada cambio.