import Character from "../Character/Character";
import type CharacterData from "../../types/types";

export class King extends Character {
  yearsOfReign;

  constructor(characterData: CharacterData, yearsOfReign: number) {
    super(characterData);
    this.yearsOfReign = yearsOfReign;
  }

  communicate() {
    return `${super.communicate()}Everybody will die`;
  }
}

export default King;
