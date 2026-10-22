# 🔄 Flujo de Trabajo (Workflow SDD)

Este es el corazón del taller. La transición de "pedir código" a "diseñar un sistema" pasa por este embudo:

1. **Idea (Lenguaje Natural):** Todo empieza con una frase vaga (ej. "Quiero un juego donde un fantasma esquive tubos").
2. **Requirements (El Qué):** Transformamos la idea en criterios testeables usando la sintaxis EARS (When... The system shall...). Aquí definimos los casos felices, los casos de error y los requisitos no funcionales.
3. **Design (El Cómo):** El agente analiza los requisitos y propone una arquitectura. Define los modelos de datos, los endpoints (si es web) o los estados del juego, y cómo se manejarán los errores.
4. **Tasks (El Orden):** El diseño se divide en tareas pequeñas y atómicas. Cada tarea debe tener un checkbox y referenciar a qué requisito está resolviendo (trazabilidad).
5. **Build (La Ejecución):** El agente escribe el código tarea por tarea. **Regla de oro:** El humano revisa el "diff" (los cambios) y aprueba.
6. **Validar (La Red de Seguridad):** Corremos los tests automáticos. Si fallan, volvemos al agente. Si pasan, marcamos la tarea como completada.

> **El artefacto clave:** Los 3 archivos Markdown (`requirements`, `design`, `tasks`) son la única fuente de verdad. Si el código falla, no parcheamos el código a ciegas; leemos la spec, la corregimos y regeneramos.