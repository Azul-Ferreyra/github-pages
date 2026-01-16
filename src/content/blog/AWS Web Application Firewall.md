---
title: AWS Web Application Firewall
date: 2026-01-17
tags: AWS, DevSecOps, Liderazgo
summary: La vulnerabilidad en el borde.
image: "../../assets/images/blog/WAF.png"
---

Al desplegar mi aplicación sobre AWS, identifiqué un riesgo crítico: la exposición a ataques de nivel 7 (capa de aplicación). A través de un formulario o de una URL lograrían ejecutar comandos maliciosos en mi base de datos. Necesitaba una barrera que inspeccionara el tráfico antes de que tocara mis servidores.

¿Por qué AWS WAF y no una solución en el servidor?

Podría haber configurado filtros directamente en el código de la aplicación o en el servidor web, pero elegí Web Application Firewall por su integración nativa. Al asociarlo directamente a mi Application Load Balancer (ALB), logré que el tráfico malicioso se bloquee en el borde, sin consumir recursos de mis instancias EC2.

Además utilicé las reglas de AWS para ataques comunes sin tener que escribir expresiones regulares complejas desde cero. Por último logramos una visibilidad inmediata, viendo en tiempo real qué IPs están intentando atacar mi infraestructura.

La implementación se basó en vincular un Web ACL al balanceador de carga. Configuré reglas específicas para detectar patrones de SQL Injection.

Para validar la seguridad, realicé una prueba de concepto inyectando una cadena de comandos SQL directamente en la URL de la aplicación. El resultado fue inmediato: el WAF interceptó la petición maliciosa y devolvió un Error 403 Forbidden, demostrando que el intento de acceso no autorizado ni siquiera llegó a procesarse en mi backend.

De esta forma logré una solución sencilla pero extremadamente efectiva. He reducido drásticamente la superficie de ataque, asegurando que mi base de datos permanezca íntegra frente a ataques automatizados y manuales de inyección.

¿Qué te parece este tipo de soluciones? Te invito a implementarla para obtener todas las ventajas.
