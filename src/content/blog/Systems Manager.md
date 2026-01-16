---
title: AWS Systems Manager (SSM)
date: 2026-01-16
tags: AWS, DevSecOps, Liderazgo
summary: La seguridad no se negocia! Por qué eliminé el puerto 22 (SSH) en mi Laboratorio SOC.
image: "../../assets/images/blog/SSM.png"
---

Al diseñar el Laboratorio SOC para KAVACON, me enfrenté a un dilema crítico de seguridad: ¿Cómo permite un DevSecOps administrar instancias en una subred privada sin comprometer la postura de seguridad? Tradicionalmente, usaríamos SSH (Puerto 22), pero eso implica gestionar llaves .pem (que se pierden o filtran) y abrir puertos que los atacantes escanean constantemente.

Elegí AWS Systems Manager (SSM) / Session Manager porque elimina la necesidad de exponer puertos públicos, No requiere gestión de llaves SSH y nos ofrece auditoría completa (Todo lo que el usuario hace en la terminal queda registrado en CloudWatch)

Para garantizar que la gestión de mis instancias sea 100% segura y privada, estructuré la implementación en tres pilares fundamentales: 

Por un lado tenemos el perfil de Instancia IAM, que no basta con que el servidor exista, sino que AWS necesita tener permiso para comunicarse con el servicio de Systems Manager. Esto se logra creando un Rol de IAM con la Politica gestionada AmazonSSMManagedInstanceCore. El objetivo es claro, otorgar los permisos necesarios para que el agente de SSM pueda registrar la instancia, enviar logs y recibir comandos de forma segura. Sin este perfil, la consola de AWS no podria ver la instancia. 

Por otro lado, la pieza clave para la privacidad VPC Endepoints (AWS PrivateLink). Normalmente, el trafico de gestion viaja por internet, pero aqui decidi privarlo de su libertad. Para ello se implementan tres interfaces Endepoints (ssm, ssmmessages y ec2messages) directamente en las subredes de la VPC.
El objetivo: Forzar que todo el tráfico de administración viaje por la red interna de AWS. Al activar Private DNS, las instancias se comunican con AWS usando IPs privadas. Esto elimina la necesidad de abrir el puerto 22 (SSH) y evita que el tráfico toque la internet pública, reduciendo drásticamente la superficie de ataque.


Por ultimo para que el servidor responda, el "interlocutor" (el Agente de SSM) debe estar activo y corriendo.Aunque en muchas AMIs de Amazon Linux viene preinstalado, en Ubuntu aseguramos su estado mediante el user_data o verificando su instalación, con esto garantizamos que, desde el segundo uno del despliegue, la instancia establezca el túnel con el endpoint. Esto permite que el equipo de DevSecOps tome el control total de la instancia desde la consola de AWS (Session Manager) sin haber configurado ni una sola llave SSH (.pem).


¿Qué logre implementando esta solucion? El analista SOC accede a Wazuh vía Nginx, pero el DevSecOps (yo) accede a la instancia del servidor directamente desde la consola de AWS o CLI, sin puertos abiertos. Logré una arquitectura Zero Trust a nivel de administración. 


Los invito a implementar SSM para lograr una infraestructura segura en cuestion de minutos y obtener todos los beneficios de este servicio. 



