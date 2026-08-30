
const people = [
{
name: "Carly",
yearOfBirth: 1942,
yearOfDeath: 1970,
},
{
name: "Ray",
yearOfBirth: 1962,
yearOfDeath: 2011,
},
{
name: "Jane",
yearOfBirth: 1912,
yearOfDeath: 1941,
},
]

function findTheOldest(people){
    let viejo = people;
    for (const persona of people){
        const edadAct = persona.yearOFDeath-persona.yearOfBirth;
        const edadViejo = viejo.yearOfDeath-viejo.yearOFBirth
        if(edadAct>=edadViejo){
            viejo=persona;
        }
    }
    return viejo;
}