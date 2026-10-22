## 2. El Lado Oscuro: La "Resaca" del Vibe Coding
La promesa de velocidad de la IA tiene un costo. La práctica de dar instrucciones vagas a un agente y aceptar lo que devuelve, conocida como **"Vibe Coding"**, es excelente para prototipos, pero **falla estrepitosamente en entornos empresariales**.

Los datos son contundentes:
*   **Seguridad:** El **45% del código generado por IA contiene vulnerabilidades** de seguridad (como las del OWASP Top 10). En el caso de Java, la tasa de fallo en pruebas de seguridad supera el 70%.
*   **Estabilidad:** Un estudio de DORA encontró que tras la adopción de IA, hubo una **disminución del 7.2% en la estabilidad de las entregas**.
*   **Falta de contexto:** Cada sesión de chat opera de forma aislada, sin memoria de decisiones arquitectónicas previas. El código puede compilar y pasar tests, pero estar completamente desalineado con la intención del negocio.

El problema no es que los agentes escriban mal código, sino que el "vibe coding" **carece de auditabilidad, reproducibilidad y gobernanza**.