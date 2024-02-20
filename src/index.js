import data from '/src/data.js'
import { addImageToggleListener, toggleImageSource } from './toggle.js';
import { drop1 } from './dropdown.js';


//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

// // Create pet -> list of pet? This can be used to dynamically generate HTML content based on the properties of the pet object
// const createPet = (pet) =>
// {
    
//     return `<li>${pet.name}</li>`
// }


// const createAllPets = (petlist) =>
// {
//     return petlist.map(p => createPet(p))
// }

// // What is line code does is: 
// // document.getElementsByClassName('cards')[0]: Select tge first element in the document class `cards`
// // innerHTML: This sets or returns the HTML content of an element
// // createAllPets(data): Call function -> generates HTML list item string for each pet
// // .join(''):  The empty string '' passed as an argument to join specifies that no separator should be inserted between the list items.
// document.getElementsByClassName('cards')[0].innerHTML = createAllPets(data).join('')


//drop1()

// Making single pokemon card: 
const createPokemonCard = (pokemon, index) => {
    return ` 
    <li class="card id="card-${index}">
  <h2 class="card--title">${pokemon.name}</h2>
  <img
    width="256"
    class="card--img"
    src="${pokemon.sprites.other["official-artwork"].front_default}"
  />

  <!-- This is the text: -->
  <ul class="card--text">
    <li>HP: ${pokemon.stats[0].base_stat}</li>
    <li>ATTACK: ${pokemon.stats[1].base_stat}</li>
    <li>DEFENSE: ${pokemon.stats[2].base_stat}</li>
    <li>SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}</li>
    <li>SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}</li>
    <li>SPEED: ${pokemon.stats[5].base_stat}</li>
  </ul>

  </div>
  <!-- Dropdown box -->
        <div class="dropdown">
            <button class="dropdown-btn">Show Games</button>
            <div class="dropdown-content">
                ${pokemon.game_indices.map((game) => `<p>${game.version.name}</p>`).join('')}
        </div>

</div>
</li>
    `
}

// Render a single pokemoncard:
createPokemonCard(data[0])
//document.getElementsByClassName('cards')[0].innerHTML = createPokemonCard(data[4])
// OR:
// document.querySelector('.cards')


// Function to append Pokemon cards to the ul element with the class "cards"
const renderPokemonCards = (pokemonList) => {
  
    // const cardsContainer = document.getElementsByClassName('cards)[0]
    const cardsContainer = document.querySelector('.cards')
    const cardsHTML = pokemonList.map((pokemon, index) => { return createPokemonCard(pokemon, index)}).join('');
    cardsContainer.innerHTML = cardsHTML

    // Add even listeners to each card's image element
    const cardImages = document.querySelectorAll('.card--img')
    cardImages.forEach((imgElement, index) => {     
        addImageToggleListener(imgElement, pokemonList[index])
    })

    //BUTTON:
    drop1()



  }
  
  

//   // THIS IS JUST A TEST:*******************************
//   // CLICK on card:
//   // Get all cards:
//   const cards = document.querySelectorAll('.cards')
//   cards.forEach(card => {
//       card.addEventListener('click', () => {
//           // Perform action:
//           card.classList.toggle('active');
//           console.log('CARD clicked!')
//         })
//     })
//     //****************************************************


    // Call the function to render Pokemon cards passing the data array
    renderPokemonCards(data);