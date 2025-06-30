import { projectImages } from "../utils/constants.js";

class imageViewer {
  constructor(images, selector) {
    this._images = images;
    this._templateEl = document.querySelector(selector);
  }
  _checkId() {
    projectImages.forEach((image) => {
      if (this._clickedImageId === image.id) {
        this._getView();
      }
    });
  }

  setEventListeners() {
    this._images.forEach((image) => {
      image.addEventListener("click", () => {
        this._clickedImageId = image.id;
        this._image = image;
        this._checkId();
      });
    });
  }

  _getView() {
    this._imgEl = this._templateEl.content
      .querySelector(".modal__image-project")
      .cloneNode(true);
    this._imgEl.src = this._image.src;
    this._imgEl.alt = this._image.alt;
    console.log(this._imgEl);
    return this._imgEl;
  }
}
export default imageViewer;
/*we want when the images clicked,check the clicked image`s id and check with
the constants. Then add it to the dom.

we need pass the images and the button as parameters to the constructor.
then we can use the images and button in the methods.
For button, we need to add an event listener to the button
to see what image is clicked.
Then we can check the id of the image.

*/
