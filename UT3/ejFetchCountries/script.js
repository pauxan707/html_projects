async function paisesAmericanos() {
            const paises = document.getElementsById("paises");
    try{

        const response = await fetch('https://countries.dev/region/Aepmericas');
        if(!response.ok) throw new Error ("se produjo un error")
            const paises = await response.json();

        lista.innerHTML="";
        paises.forEach(pais) => {
            const 
        });
    
        paises.appendChild();
    }
    catch{}
}

paisesAmericanos();