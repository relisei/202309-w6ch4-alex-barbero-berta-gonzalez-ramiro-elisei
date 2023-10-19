import Component from "../Main-component/Main-component.js";
import type { CharacterData } from "../../types/types.js";

class CharacterCard extends Component {
  state;
  constructor(
    parentElement: Element,
    private readonly character: CharacterData,
    state: boolean,
  ) {
    super(parentElement, "li", "col");
    this.state = state;
  }

  populate() {
    this.element.innerHTML = `
      <article class="character">
        <div class="card character__card">
          <img src="img/${this.character.imageSource}" alt="${this.character.name} and ${this.character.family}" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${this.character.name} & ${this.character.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age: ${this.character.age} yrs</li>
                <li>
                  State: ${
                    this.state 
                    ? `<i class="fas fa-thumbs-down"></i>`
                    : `<i class="fas fa-thumbs-up"></i>`
                  }
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      `;
  }
}

export default CharacterCard;
