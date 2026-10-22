# Taller: Desarrollo de Software con Agentes de IA y Spec-Driven Development

## 🎯 1. Bienvenida y Agenda (Los Primeros 10 Minutos)

**El Espejo de la Industria:** 
El 45% del código generado por IA tiene fallas de seguridad (Veracode 2025). El "Vibe Coding" es genial para prototipos, pero falla estrepitosamente al escalar. Hoy aprenderemos a usar **Spec-Driven Development (SDD)** para recuperar el control.



---

## 🧠 2. Fundamentos: De LLMs a Agentes Autónomos

### ¿Qué es un LLM? (Large Language Model)
Un LLM es un modelo entrenado con enormes cantidades de texto para predecir la palabra más lógica. Es un **conocimiento pasivo**: sabe mucho y responde dudas como un super bibliotecario, pero **no puede realizar acciones en el mundo real por sí solo**.

### ¿Qué es un Agente de IA?
Es un LLM equipado con **capacidad de acción** (manos y herramientas digitales). Ejecuta tareas autónomas usando internet, aplicaciones o APIs (como comprar boletos, enviar correos o gestionar bases de datos).
*   **Interacción con el Entorno:** Modifica bases de datos, envía solicitudes y ejecuta comandos en tiempo real.
*   **Ejecución Autónoma:** Planifica y resuelve tareas paso a paso guiado por objetivos.

### La Gran Evolución (3 Fases)
1.  **Fase 1: Autocompletado (≈2021):** Herramientas como GitHub Copilot predecían la siguiente línea. El humano seguía planificando y probando.
2.  **Fase 2: Asistencia por Chat (2023-2024):** Dinámica reactiva. El humano preguntaba y ejecutaba.
3.  **Fase 3: Codificación Agéntica (2025-2026):** El sistema acepta un objetivo y trabaja de forma semiautónoma: **planifica, escribe, ejecuta verificaciones e itera** cuando algo falla.

> **Dato clave:** Según Gartner, el 40% de las aplicaciones empresariales incluirán agentes de IA para finales de 2026 (un salto enorme desde el 5% en 2025).

---

## 🌪️ 3. El Lado Oscuro: El Fenómeno del Vibe Coding

La práctica de dar instrucciones vagas a un agente y aceptar lo que devuelve es excelente para prototipos, pero **falla estrepitosamente en entornos empresariales**.

*   **¿Qué ES?:** Generación masiva de código basada en instrucciones generales, delegando el flujo a la iteración acelerada por IA.
*   **¿Qué NO ES?:** **No sustituye** la ingeniería de software, el diseño de arquitectura, la evaluación de seguridad ni el mantenimiento del sistema.

### Los datos son contundentes:
*   **Seguridad:** El **45% del código generado por IA contiene vulnerabilidades** (OWASP Top 10). En Java, la tasa de fallo supera el 70%.
*   **Estabilidad:** Un estudio de DORA encontró una **disminución del 7.2% en la estabilidad de las entregas**.
*   **Falta de contexto:** Cada sesión de chat opera de forma aislada. El código compila, pero está desalineado del negocio.

### El Costo del Contexto Perdido
1.  **Ausencia de Mapa Mental:** Falta de documentación sobre la estructura lógica interna.
2.  **Fricción en el Diagnóstico:** Incapacidad para rastrear fallos o refactorizar cuando la app escala.

### ✅ Escenarios Válidos para Vibe Coding
No todo está mal. Es útil en:
1.  **Prototipeo y MVPs:** Validación acelerada de conceptos.
2.  **Código Experimental:** Scripts desechables aislados de producción.
3.  **Exploración Tecnológica:** Evaluación rápida de librerías.
4.  **Hackathons & Demos:** Entornos donde prima la velocidad.

---

## 🛡️ 4. La Solución: Spec-Driven Development (SDD)

La respuesta al Vibe Coding no es escribir mejores prompts, sino un cambio de filosofía. En SDD, la relación se invierte: **el código sirve a las especificaciones**.

*   **Especificaciones ejecutables:** La spec (el "qué" y el "porqué") es el artefacto principal. Si algo cambia, no se parchea el código; se corrige la spec y se regenera.
*   **Cierre de la brecha de intención:** Al dar un plano detallado (requisitos, criterios de aceptación) se elimina la brecha entre lo pedido y lo implementado.
*   **Colaboración Humano-IA:** Los desarrolladores usan IA en el 60% de su trabajo, pero solo delegan totalmente el **20%**. La supervisión humana es insustituible.

### El Futuro del Rol: Ingeniero de Contexto
El valor del desarrollador ya no está en memorizar sintaxis, sino en **diseñar el contexto perfecto** para que los agentes trabajen seguros. Herramientas como Kiro leen reglas desde archivos de **Steering**, mientras que Cursor lo hace desde `.cursor/rules/` o Claude Code desde `CLAUDE.md`.

> **Metodologías Estructuradas de soporte:**
> *   **RFC / SDD:** Planos arquitectónicos y especificaciones.
> *   **TDD / BDD:** Pruebas automatizadas previas al código.
> *   **Generación Guiada:** IA acotada al cumplimiento de especificaciones.

---

## 🔄 5. Anatomía del Flujo de Trabajo (Workflow SDD)

El corazón del taller. El embudo para pasar de "pedir código" a "diseñar un sistema":

1.  **Idea (Lenguaje Natural):** Todo empieza con una frase vaga.
2.  **Requirements (El Qué):** Transformamos la idea en criterios testeables usando la sintaxis **EARS**.
    *   *When (Cuando...)*: `WHEN el usuario guarda THE SYSTEM SHALL crear la tarea.`
    *   *If... Then (Si... Entonces)*: `IF falta el título THEN THE SYSTEM SHALL mostrar error.`
    *   *While (Mientras)*: `WHILE haya filtros activos THE SYSTEM SHALL mostrar solo coincidencias.`
    *   *Where (Donde)*: `WHERE el usuario es admin THE SYSTEM SHALL permitir borrar.`
    *   *Ubicuo*: `THE SYSTEM SHALL usar base de datos relacional.`
3.  **Design (El Cómo):** El agente propone la arquitectura (modelos de datos, endpoints, manejo de errores).
4.  **Tasks (El Orden):** El diseño se divide en tareas atómicas con checkbox, referenciando su `_Requirements:_`.
5.  **Build (Ejecución):** El agente escribe el código. **Regla de oro:** El humano revisa el diff y aprueba.
6.  **Validar (Red de Seguridad):** Corremos tests. Si fallan, volvemos al agente; si pasan, marcamos la tarea.

> **El artefacto clave:** Los 3 archivos Markdown (`requirements.md`, `design.md`, `tasks.md`) son la única fuente de verdad.

---

## 🧠 6. Ecosistema y Capacidades del Agente

### El Ecosistema de Herramientas
*   **IDEs Agénticos:** Kiro (AWS) diseñado nativamente para SDD. Alternativas: Cursor, GitHub Copilot, Claude Code.
*   **Control de Versiones:** Los 3 artefactos de la spec viven en Git junto al código. Los commits deben referenciar las tareas (`feat: POST /tareas - Task 3.1`).
*   **Testing Frameworks:** `pytest`, `Jest/Vitest`, y Property-Based Testing (`Hypothesis`, `fast-check`) para la red de seguridad.

### Dándole "Superpoderes" al Agente
Un agente sin herramientas es solo un chat. Para que pueda ejecutar la Spec, necesita:

*   **Tools (Herramientas Básicas):** Acciones atómicas como `read_file`, `run_command` o `search_web`. *Regla de seguridad: aplicar siempre el mínimo privilegio.*
*   **MCP (Model Context Protocol):** El estándar que conecta al agente con el "mundo real". Evita que alucine APIs. *Ejemplo: Conectar AWS Docs para que el agente consulte la documentación oficial en vivo mientras diseña.*

*   **Skills (Habilidades Procedimentales):**
    *   Son paquetes de conocimiento persistente que enseñan al agente *cómo* hacer las cosas a tu manera. Usan **divulgación progresiva**: el agente primero lee un resumen y, si la tarea lo requiere, carga las instrucciones completas.
    *   *¿Para qué sirven?* Para estandarizar el equipo sin repetir prompts. *Ejemplo: Una skill `ears-spec-writer` que obliga al agente a usar la plantilla EARS y prohibir palabras vagas al escribir requisitos.*

*   **Hooks (Automatizaciones por Eventos):**
    *   Son la "domótica" del IDE. Scripts que se disparan automáticamente ante eventos, sin que tú lo pidas.
    *   *Triggers comunes:* `PostFileSave` (al guardar), `Stop` (al terminar turno), `PreToolUse` (antes de ejecutar un comando peligroso).
    *   *Ejemplo 1 (Secret Scanner):* Un Hook en `Stop` que busca contraseñas hardcodeadas antes de que hagas commit.
    *   *Ejemplo 2 (Linter):* Un Hook en `PostFileSave` que ejecuta Prettier/Black automáticamente.

---

## 🎯 7. Ejemplo Integrador del Día: "Flappy Ghost"

El objetivo es ver la evolución completa de una idea vaga a una app con tests, usando **Kiro** como arquitecto ejecutor.

*   **El Proyecto:** Un juego retro tipo Flappy Bird (con física, UI/UX y persistencia de récord).
*   **El Rol de Kiro:** Le pediremos que genere `requirements.md`, `design.md` y `tasks.md`, mostrando cómo revisamos el diff antes de aceptar cada cambio.

---

## 🔒 8. Seguridad Cloud: Gestión de Secretos y Permisos

Al conectar agentes a la nube, debemos vigilar dos áreas críticas:

### Gestión de Secretos (Secrets)
*   ❌ **Hardcoding:** Inclusión de tokens en el código (peligro de filtración en Git).
*   ✅ **Almacenamiento Centralizado:** Uso de AWS Secrets Manager o SSM para inyección dinámica.

### Principio de Mínimo Privilegio (IAM)
*   ❌ **Uso de Comodines:** Políticas permisivas (`Action: *`).
*   ✅ **Permisos Específicos:** Asignación acotada exclusivamente a los recursos requeridos (Least Privilege).