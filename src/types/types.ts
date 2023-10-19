export interface CharacterData {
  name: string;
  family: string;
  age: number;
  imageSource: string;
}

export interface King extends CharacterData {
  yearsOfReing: number;
}

export interface Fighter extends CharacterData {
  weapon: string;
  dexterity: number;
}

export interface Advisor extends CharacterData {
  advises: King | Advisor | Fighter | Squire;
}

export interface Squire extends CharacterData {
  kissAssLevel: number;
  serves: Fighter;
}
