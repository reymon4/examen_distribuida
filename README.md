#### KUBERNETES
Considerar que cada deployment es un pod. 

#### Configuración conexión a base de datos del host desde el deployment
1. Ir a la ruta C:\Program Files\PostgreSQL\17\data y abrir el archivo pg_hba.conf
2. Agregar la siguiente línea al final del archivo para permitir las conexiones sin cifrado desde el host:
```
host    distribuida    postgres    192.168.1.55/32    trust
```
3. Reiniciar el servicio de postgresql. Escribiendo los siguientes comandos en la terminal de windows:
```bash
net stop postgresql-x64-17
net start postgresql-x64-17