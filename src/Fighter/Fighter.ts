import Character from "../Character/Character";
import type CharacterData from "../types/types";

export class Fighter extends Character {
  weapon: string;
  dexterity: number;

  constructor(characterData: CharacterData, weapon: string, dexterity: number) {
    super(characterData);
    this.weapon = weapon;
    this.dexterity = this.filterDexterity(dexterity);
  }

  protected communicate(): string {
    return `${super.communicate()}First I hit and then I ask`;
  }

  protected filterDexterity(dexterity: number) {
    if (dexterity < 0) {
      return 0;
    }

    if (dexterity > 10) {
      return 10;
    }

    return dexterity;
  }
}
