import Character from "../Character/Character";
import type CharacterData from "../../types/types";

export class Advisor extends Character {
  advises;

  constructor(characterData: CharacterData, advises: Character) {
    super(characterData);

    if (advises instanceof Character) {
      this.advises = advises;
    }
  }

  communicate() {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}
