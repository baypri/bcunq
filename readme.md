# Blockchain Implementation

Proyecto BPTech con implementacion de un contrato de storage en solidy 6.0

# Instalación

Usar npm para instalar las librerias despues de haber clonado el repo

```bash
npm install
```

# Ejecución

```bash
nodemon app.js
```

# Prueba en Postman

En sección headers agregar el header: Content-Type con valor: application/json

En sección Body seleccionar tipo raw y agregar el siguiente json de prueba:

```json
{
    "iduser":1,
    "hash":"0xe5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa"
}
```
