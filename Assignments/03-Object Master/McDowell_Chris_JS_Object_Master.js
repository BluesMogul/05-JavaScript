// let numbers = [1, 2, 3, 4, 5];
// let square = (num) => num * num;
// let squaredNumbers = numbers.map(square); // = each number in array multiplied by itself (squared).
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// let numbersList = [1, 2, 3, 4, 5];
// let isEven = (number) => {
// 	return number % 2 === 0; //returns [2, 4]
// };
// let evenNumbers = numbersList.filter(isEven); //filters only even numbers in numbers array.
// console.log(evenNumbers); // Output: [2, 4]

// let numbers = [1, 2, 3, 4, 5];
// let isEven = (number) => number % 2 === 0; //is
// let evenNumber = numbers.find(isEven); // .find finds the FIRST number in an array to meet the criteria.
// console.log(evenNumber)

const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

//PROBLEM 10: An array with all pokemon and for pokemon id: 35 replacing "normal" with "fairy".
const update35 = pokemon.map(pokemon => {
    if (pokemon.id == 35) {
        return { ...pokemon, types: ["fairy"] }
    }
    else {
        return pokemon
    }
})
console.log(update35)



//PROBLEM 9: An array with all pokemon except the pokemon with the id of 148.
const except148 = pokemon.filter(pokemon => pokemon.id !== 148)
console.log(except148)


//PROBLEM 8: A count of the number of pokémon that are "normal" type.
const normalTypes = pokemon.filter(pokemon => pokemon.types == "normal")
const count = normalTypes.length
console.log(normalTypes)
console.log("The number of Pokemon that are 'normal' types is", count)

//PROBLEM 7: An array containing just the first type of all the pokémon whose second type is "flying".
const pokemonTypes = pokemon.map(pokemon => pokemon.types)
const pokemonFlying = pokemon.filter(pokemon => pokemon.types[1] == "flying")
const pokemonFirstType = pokemonFlying.map(pokemon => pokemon.types[0])
console.log(pokemonFlying)
console.log(pokemonFirstType)


//PROBLEM 6: An array with just the names of the pokémon whose only type is poison.
const namesTypes = pokemon.map(pokemon => ({ name: pokemon.name, types: pokemon.types }))
const oneTypes = namesTypes.filter(pokemon => pokemon.types.length < 2)
const fireOnly = oneTypes.filter(pokemon => pokemon.types == "poison")
console.log(fireOnly)

//PROBLEM 5: An array with just the names of pokémon with an id greater than 99.
const id99 = pokemon.filter(pokemon => pokemon.id > 99)
console.log(id99)


//PROBLEM 4: An array with just the names of each pokémon.
const nameOnly = pokemon.map(pokemon => pokemon.name)
console.log(nameOnly)

//PROBLEM 3: An array of pokémon objects that have more than one type.
const multTypes = pokemon.filter(pokemon => pokemon.types.length > 1)
console.log(multTypes);

//PROBLEM 2: An array of pokémon objects that are "fire" type.
const fireTypes = pokemon.filter(pokemon => pokemon.types == "fire")
console.log(fireTypes);

//PROBLEM 1: An array of pokémon objects where the id is evenly divisible by 3.
const divideBy3 = pokemon.filter(pokemon => pokemon.id % 3 == 0)
console.log(divideBy3);