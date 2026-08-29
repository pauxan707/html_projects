/*
# Ejercicio 03.

Reemplazar este código con lo necesario para implementar lo solicitado en el
ejercicio.
*/

const PROMPTS = [
  "Explicame flexbox como si tuviera 5 años",
  "Escribí un mensaje para pedir prórroga del parcial",
  "Generá un plan de estudio para la prueba de DWYM",
  "¿Por qué mi CSS funciona en mi máquina y en la tuya no?",
  "Resumí este PDF de 300 páginas en un tweet",
  "Convertí este for anidado en algo que no dé vergüenza",
];

const MODELOS = [
  { nombre: "ChatGPT", emoji: "🤖" },
  { nombre: "Claude", emoji: "🧠" },
  { nombre: "Gemini", emoji: "✨" },
  { nombre: "Copilot", emoji: "💻" },
  { nombre: "Llama", emoji: "🦙" },
  { nombre: "DeepSeek", emoji: "🔍" },
];

function dueloIA (lista1, lista2){
  const contenido = document.getElementById("duelo");
  contenido.innerHTML= "";

  lista1.forEach(prompt =>{
    const span = document.createElement("span");
    span.innerHTML= `<span class="duelo-prompt">${prompt}
    </span><span class="duelo-resultado">${MODELOS.emoji} ${MODELOS.nombre}</span>`
  contenido.appendChild(span);
  });
}
dueloIA(PROMPTS, MODELOS);