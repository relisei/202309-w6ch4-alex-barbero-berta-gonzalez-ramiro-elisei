import { Advisor } from "../Advisor/Advisor.js";
import { Fighter } from "../Fighter/Fighter.js";
import King from "../King/King.js";
import { Squire } from "../Squire/Squire.js";
import Component from "../components/Main-component/Main-component.js";

class Emoji extends Component {
  constructor(
    parentElement: Element,
    public character: King | Fighter | Squire | Advisor,
  ) {
    super(parentElement, "i", "emoji");
  }

  populate(): void {
    const emoji = document.querySelector(".emoji")!;

    if (this.character instanceof King) {
      emoji.textContent = "👑";
    }

    if (this.character instanceof Fighter) {
      emoji.textContent = "🗡";
    }

    if (this.character instanceof Squire) {
      emoji.textContent = "🛡️";
    }

    if (this.character instanceof Advisor) {
      emoji.textContent = " 🎓";
    }
  }
}

export default Emoji;
