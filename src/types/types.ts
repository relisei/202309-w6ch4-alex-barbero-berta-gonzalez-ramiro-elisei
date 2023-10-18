import type Character from "../Character/Character.js";
import { type Fighter } from "../Fighter/Fighter.js";

export interface CharacterData {
  name: string;
  family: string;
  age: number;
  imageSource: string;
}

export interface KingData extends CharacterData {
  yearsOfReign: number;
}

export interface FighterData extends CharacterData {
  weapon: string;
  dexterity: number;
}

export interface SquireData extends CharacterData {
  kissAssLevel: number;
  serves: Fighter;
}

export interface AdvisorData extends CharacterData {
  advises: Character;
}
