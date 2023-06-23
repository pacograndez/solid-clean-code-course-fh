(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes extends HtmlElement {
    constructor(public value: string, public placeholder: string, id: string) {
      super(id, "input");
    }
  }

  class InputEvents extends InputAttributes {
    constructor(value: string, placeholder: string, id: string) {
      super(value, placeholder, id);
    }

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement

  const nameField = new InputEvents("Fernando", "Enter first name", "txtName");

  console.log({ nameField });
})();

// TODO: Tarea
// Aplicando Principio de responsabilidad unica

(() => {
  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  interface EventsProps {
    eventId: String;
    eventPlaceholder: String;
    eventValue: String;
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  class InputElement {
    public htmlElement: HtmlElement;
    public attributes: InputAttributes;
    public events: InputEvents;

    constructor(value: string, placeholder: string, id: string) {
      this.htmlElement = new HtmlElement(id, "input");
      this.attributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
    }
  }

  const nameField = new InputElement("Fernando", "Enter first name", "txtName");

  console.group("homework");
  console.log({
    nameField,
  });
  console.groupEnd();
})();
