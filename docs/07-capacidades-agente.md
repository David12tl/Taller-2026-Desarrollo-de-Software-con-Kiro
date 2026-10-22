# Capacidades del Agente (Darle "Superpoderes")

Un agente sin herramientas es solo un chat. Para que pueda ejecutar la Spec, necesita las siguientes capacidades:

### Tools (Herramientas Básicas)
Son las acciones atómicas que el agente puede hacer en tu máquina: `read_file`, `write_file`, `run_command`, `search_web`. Dependiendo del IDE, tendrá acceso a unas u otras. 
*Regla de seguridad: mínimo privilegio.*

### MCP (Model Context Protocol)
El estándar que conecta al agente con el "mundo real". Evita que el agente alucine (invente) APIs.
*Ejemplo:* Al conectar el MCP de AWS Docs, cuando el agente diseñe la arquitectura en `design.md`, consultará la documentación oficial en vivo de AWS en lugar de usar memoria vieja, garantizando que el código funcione a la primera.

### Skills (Habilidades Procedimentales)
Son "recetas" o manuales de instrucciones que el agente carga solo cuando las necesita (divulgación progresiva).
*Ejemplo:* Una skill llamada `ears-spec-writer` que le dice al agente: "Cuando escribas requisitos, usa la plantilla EARS, pon casos negativos y no uses palabras vagas como 'rápido'".

### Hooks (Gatillos Automatizados)
Son automatizaciones basadas en eventos del IDE. Ayudan a validar el trabajo sin intervención humana.
*Ejemplo 1 (PostFileSave):* Cada vez que el agente guarda un archivo `.py`, se ejecuta automáticamente un linter y un formateador.
*Ejemplo 2 (Agent Stop):* Cuando el agente termina de escribir código, se dispara un script que busca contraseñas o API keys hardcodeadas (Secret Scanner) antes de que puedas hacer commit.