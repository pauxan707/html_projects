/*
# Ejercicio 02.

Implementar la función que toma una lista de datos de países como los del
archivo `americas.json` y retorna los códigos CCA2 de los países que usan una
moneda dada. Por ejemplo:

```js
import americas from "./americas.json";

countriesForCurrency(americas, "EUR") // Euro
```

debería devolver:

```js
["BL", "GF", "MF", "GP", "PM", "MQ"]
```

Si un elemento no tiene alguna de las propiedades requeridas, se debe arrojar un
error.
*/

import americas from "./americas.json" with { type: "json" };
export function countriesForCurrency(data, currency) {
  if (data===undefined || data=== null){
        throw new Error();
    }

    if (currency===undefined || currency=== null){
        return [];
    }

    if (!Array.isArray(data)){
        throw new Error();
    }

  return data.filter(america=> currency in america.currencies).map(america=> america.cca2)
}

countriesForCurrency(americas, "EUR");

