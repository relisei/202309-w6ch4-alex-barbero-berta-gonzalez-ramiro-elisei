import type { CharacterData } from "../types/types";

abstract class Character {
  public isAlive = true;
  series = "Game of Thrones";
  characterData;

  constructor(characterData: CharacterData) {
    this.characterData = characterData;
  }

  protected communicate() {
    return `${this.characterData.name} says: `;
  }

  protected die(): void {
    this.isAlive = false;
  }
}

export default Character;
