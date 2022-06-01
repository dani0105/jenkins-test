# Redes 2022 - Laboratorio Capa de Aplicación

Para ejecutar el api es necesario crear un archivo de variables de entorno para el contenedor con los siguientes datos:
```
CONSUMER_KEY = <twitter consumer token>
CONSUMER_SECRET = <twitter consumer token>

ACCESS_TOKEN_KEY = <twitter access token>
ACCESS_TOKEN_SECRET = <twitter access token secret>

TIME= <tiempo entre tweets en milisegundo>
APP_NAME=Redes 2022
```

Una vez creado el archivo de congifuración ejecuté el contenedor con el siguiente comando:
```
  docker run -d --publish 8082:3000 --name Redes-lab --env-file ./enviroment.env dani0105/weather-api:latest
```
El contenedor se ejecutará en el puerto 8082

**Nota**:El contenedor solo puede ser ejecutado en una arquitectura ARM
