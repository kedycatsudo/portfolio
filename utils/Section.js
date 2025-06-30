class Section {
  constructor(selector, modal) {
    this._modal = modal;
    this._elementContainer = document.querySelector(selector);
  }
  addItem(ImageEl) {
    this._elementContainer.append(ImageEl);
    this._openModal();
  }
  _openModal() {
    this._modal.classList.add("modal__visible");
  }
}
export default Section;
// This class is used to create a section with an image element.
// It takes an image element and a selector as parameters.
// The image element is used to display the image in the section.
// The selector is used to select the section element in the DOM.
// The _addItem method is used to add the image element to the section.
