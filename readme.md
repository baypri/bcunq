# Blockchain Implementation

Proyecto BPTech con implementacion de un contrato de storage en solidy 6.0

## Instalación

Usar npm para instalar las librerias despues de haber clonado el repo

```bash
npm install
```
## Compilación y deploy del contrato

Para compilar el contrato:

```bash
truffle compile
```

Para deployar el contrato:

```bash
truffle migrate --network development
```

## Ejecución

```bash
nodemon app.js
```

## Prueba en Postman

### Probar método registraHash

En la URL ingresar: http://localhost:4000/api/registraHash

En sección headers agregar el header: Content-Type con valor: application/json

En sección Body seleccionar tipo raw y agregar el siguiente json de prueba:

```json
{
    "iduser":1,
    "hash":"0xe5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa"
}
```

#### Resultado de la prueba

La respuesta en Postman debe ser algo como:

```json
[
    {
        "result": "OK - Registro creado",
        "tx_hash": "0xf595232a5ca9c142e6f08c029c06a6720368c257ae67b383624bf02a791d03a6"
    }
]
```

el dato mostrado en tx_hash cambiará de acuerdo a cada nueva transacción de Blockchain en la que se incluya la transacción.


### Probar método getHash

En la URL ingresar: http://localhost:4000/api/getHash

En sección headers agregar el header: Content-Type con valor: application/json

En sección Body seleccionar tipo raw y agregar el siguiente json de prueba:

```json
{
    "iduser":1
}
```

#### Resultado de la prueba

La respuesta en Postman debe ser algo como:

```json
[
    {
        "result": "Success",
        "data": "0xe5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa"
    }
]
```

el dato mostrado en data debe ser el mismo hash registrado en el método registrar, no confundir con el TXhash, este data es lo que se almacenó en el smart contract independientemente del txhash.