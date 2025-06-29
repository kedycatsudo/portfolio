import { projectImages } from "../utils/constants.js";

const modalOverlay = document.querySelector(".modal-overlay");
const portfolioModal = document.querySelector("#project_modal");
const portfItems = document.querySelectorAll(".portfolio__list-item");
const modalCloseBtn = document.querySelector(".modal__close-btn");
const body = document.querySelector(".body");
const modalImageContainer = document.querySelector(".modal__image-container");
const imageListsContainers = document.querySelectorAll("modgallery__list-item");
const modalImagesList = document.querySelectorAll(".mod__gal-img");
const nav = document.querySelector(".nav");
const ImgTemplate = document.querySelector("#modal-img-template");
const imgCloseBtn = document.querySelector(".modimg__close-btn");
const modalImgEl = ImgTemplate.querySelector(".modal__image-project");
const ImgEl = ImgTemplate.content
  .querySelector(".modal__image-project")
  .cloneNode(true);
const openModal = (modal) => {
  modal.classList.add("modal__visible");
};
const navHidden = (nav) => {
  nav.classList.add("nav__hidden");
};
const navVisible = (nav) => {
  nav.classList.remove("nav__hidden");
};

const closeModal = (modal) => {
  modal.classList.remove("modal__visible");
};

portfItems.forEach((item) => {
  item.addEventListener("click", () => {
    openModal(portfolioModal);
    navHidden(nav);

    modalOverlay.classList.add("modal__darker");
    body.classList.add("body__hidden");
  });
});
modalImagesList.forEach((image) => {
  image.addEventListener("click", () => {
    openModal(modalImageContainer);

    if (image.id == "first_image") {
      ImgEl.src = projectImages[0].src;
      ImgEl.alt = projectImages[0].alt;
      modalImageContainer.append(ImgEl);
      // You may want to append ImgEl to the modal or perform other actions here
    } else if (image.id == "second_image") {
      ImgEl.src = projectImages[1].src;
      ImgEl.alt = projectImages[1].alt;
      modalImageContainer.append(ImgEl);
    } else if (image.id == "third_image") {
      ImgEl.src = projectImages[2].src;
      ImgEl.alt = projectImages[2].alt;
      modalImageContainer.append(ImgEl);
    } else if (image.id == "fourth_image") {
      ImgEl.src = projectImages[3].src;
      ImgEl.alt = projectImages[3].alt;
      modalImageContainer.append(ImgEl);
    } else if (image.id == "fifth_image") {
      ImgEl.src = projectImages[4].src;
      ImgEl.alt = projectImages[4].alt;
      modalImageContainer.append(ImgEl);
    } else if (image.id == "sixth_image") {
      ImgEl.src = projectImages[5].src;
      ImgEl.alt = projectImages[5].alt;
      modalImageContainer.append(ImgEl);
    } else if (image.id == "seventh_image") {
      ImgEl.src = projectImages[6].src;
      ImgEl.alt = projectImages[6].alt;
      modalImageContainer.append(ImgEl);
    }
  });
});
imgCloseBtn.addEventListener("click", () => {
  ImgEl.src = "";
  ImgEl.alt = "";
  closeModal(modalImageContainer);
});

modalCloseBtn.addEventListener("click", () => {
  closeModal(portfolioModal);
  navVisible(nav);
  modalOverlay.classList.remove("modal__darker");
  body.classList.remove("body__hidden");
});
