abstract class Component {
  protected readonly parentElement: Element;
  protected readonly element: Element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.parentElement = parentElement;
    this.element.className = className;
  }

  public render(): void {
    this.parentElement.appendChild(this.element);

    this.populate();
  }

  abstract populate(): void;
}

export default Component;
