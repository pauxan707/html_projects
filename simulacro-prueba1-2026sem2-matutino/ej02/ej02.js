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

npx c8 node ej02/ej02.test.js
import modelos from "./modelos.json" with { type: "json" };

export function modelosPorCapacidad(data, capacidad){
    if (data===undefined || data=== null){
        throw new Error();
    }

    if (capacidad===undefined || capacidad=== null){
        return [];
    }

    if (!Array.isArray(data)){
        throw new Error();
    }

    return data.filter(modelo => modelo.capacidades.includes(capacidad)).map(modelo=>modelo.sigla)
}
modelosPorCapacidad(modelos, "web");


/*
export function modelosPorCapacidad(data, capacidad) {
  // 1. CONTROL DE ERRORES:
  // Usamos un mensaje simple para que Node.js no se confunda con el texto de la prueba
  if (data === undefined || data === null) {
    throw new Error("data_null_or_undefined");
  }

  if (!Array.isArray(data)) {
    throw new Error("data_must_be_array");
  }

  // 2. CASO ESPECIAL:
  if (capacidad === undefined || capacidad === null) {
    return [];
  }

  const resultado = [];

  // 3. RECORRIDO Y VALIDACIÓN DE DATOS
  for (const item of data) {
    if (typeof item !== "object" || item === null) {
      throw new Error("item_must_be_object");
    }
    
    // Si falta la sigla o las capacidades, tiramos un error simple
    if (typeof item.sigla !== "string" || !Array.isArray(item.capacidades)) {
      throw new Error("invalid_item_format");
    }

    // 4. FILTRADO:
    if (item.capacidades.includes(capacidad)) {
      resultado.push(item.sigla);
    }
  }

  return resultado;
}

// Ejecución de prueba inicial
modelosPorCapacidad(modelos, "web");*/