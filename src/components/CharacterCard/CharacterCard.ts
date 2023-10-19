import Component from "../Main-component/Main-component.js";
import type { CharacterData } from "../../types/types.js";

class CharacterCard extends Component {
  constructor(
    parentElement: Element,
    private readonly character: CharacterData,
  ) {
    super(parentElement, "ul", "characters-list");
  }

  populate() {
    this.element.innerHTML = `
      <li class="col">
        <article class="character">
          <div class="card character__card">
            <img src="${this.character.imageSource}" alt="Character's Name and family" class="character__picture card-img-top" />
            <div class="card-body">
              <h2 class="character__name card-title h4">${this.character.name}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Age: ${this.character.age} yrs</li>
                  <li>
                    State:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </li>`;
  }
}

export default CharacterCard;
