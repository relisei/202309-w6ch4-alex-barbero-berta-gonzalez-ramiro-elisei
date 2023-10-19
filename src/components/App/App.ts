import { characters } from "../../data/characters.js";
import CharacterCard from "../CharacterCard/CharacterCard.js";
import Component from "../Main-component/Main-component.js";

class App extends Component {

  populate(): void {
    this.element.innerHTML = `
    <ul class="characters-list row list-unstyled"></ul>`

    const cardsList = document.querySelector('.characters-list')!;
    characters.forEach( (character) => {
      const card = new CharacterCard(cardsList, character.characterData, character.isAlive)
      card.render()
    })

  }

  

}

export default App;
