async function paisesAmericanos() {
    const response = await fetch('https://countries.dev/region/americas');
    const paises = await response.json();
    return paises
}