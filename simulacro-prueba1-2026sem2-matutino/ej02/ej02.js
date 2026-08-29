/*
# Ejercicio 02.

Implementar la función que toma una lista de datos de modelos de IA como los del
archivo `modelos.json` y retorna las siglas de los modelos que soportan una
capacidad dada. Por ejemplo:

```js
import modelos from "./modelos.json";

modelosPorCapacidad(modelos, "web") // Búsqueda web
```

debería devolver:

```js
["GPT", "GRK", "PPX"]
```

Si un elemento no tiene alguna de las propiedades requeridas, se debe arrojar un
error.
*/

import modelos from "./modelos.json"

export function modelosPorCapacidad(data, capacidad) {

}

modelosPorCapacidad(modelos, "web")
