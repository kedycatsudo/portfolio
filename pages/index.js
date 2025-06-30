import { projectImages } from "../utils/constants.js";
import Section from "../utils/Section.js";
import imageViewer from "../components/imageViewer.js";
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
const ImageView = new imageViewer(modalImagesList, "#modal-img-template");

ImageView.setEventListeners();

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
