class imageViewer {
  constructor(images, selector, onImageReady) {
    this._images = images;
    this._templateEl = document.querySelector(selector);
    this._onImageReady = onImageReady;
  }

  setEventListeners() {
    this._images.forEach((image) => {
      image.addEventListener("click", () => {
        const BigImage = this._buildView(image);
        this._onImageReady(BigImage);
      });
    });
  }

  _buildView(srcImg) {
    const clone = this._templateEl.content
      .querySelector(".modal__image-project")
      .cloneNode(true);
    clone.src = srcImg.src;
    clone.alt = srcImg.alt;
    return clone;
  }
}
export default imageViewer;
